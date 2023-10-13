import {
  FlatList,
  Image,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import Box from '../../theme/Box';

// interface IData {
//   id: string;
//   image: string;
// }
interface IProps {
  data: {
    id: string;
    image: string;
  }[];
}

const Carousal: FC<IProps> = ({data}) => {
  const {width} = useWindowDimensions();
  const flatlistRef = useRef<FlatList<any> | null>(null);
  const [activeIndicator, setActiveIndicator] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndicator === data.length - 1) {
        flatlistRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatlistRef.current?.scrollToIndex({
          index: activeIndicator + 1,
          animated: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (
    data: ArrayLike<any> | null | undefined,
    index: number,
  ) => ({
    length: width,
    offset: width * index,
    index: index,
  });

  /** --- indicator dots scrolling --- */
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPostion = event.nativeEvent.contentOffset.x;
    const index = scrollPostion / width;
    setActiveIndicator(index);
  };

  const RenderItem: ListRenderItem<any> | null | undefined = ({
    item,
    index,
  }) => {
    // console.log('--------->', item.image);
    return (
      <Box width={width} height={width / 2} bg="$primary">
        <Image source={{uri: item.image}} width={width} height={width / 2} />
      </Box>
    );
  };

  const DotIndicator = () => {
    return (
      <Box
        position="absolute"
        bottom={6}
        left={(width - 20) / 2}
        flexDirection="row"
        justifyContent="center"
        gap="sm">
        {data.map((item, index) => {
          if (index === activeIndicator) {
            return (
              <Box
                key={index}
                height={10}
                width={10}
                borderRadius="md"
                bg="black"
              />
            );
          }
          return (
            <Box
              key={index}
              height={10}
              width={10}
              borderRadius="lg"
              bg="gray"
            />
          );
        })}
      </Box>
    );
  };

  return (
    <Box>
      <FlatList
        ref={flatlistRef}
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        getItemLayout={getItemLayout}
      />
      <DotIndicator />
    </Box>
  );
};

export default Carousal;
