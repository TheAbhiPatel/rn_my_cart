import React, {FC} from 'react';
import Box from '../../theme/Box';
import Text from '../../theme/Text';
import {Image} from 'react-native';
import {IProduct} from './type';

interface IProps {
  item: IProduct;
}

const ProductCard: FC<IProps> = ({item}) => {
  // console.log('-------->', item);

  return (
    <Box
      width={'90%'}
      maxHeight={300}
      m="sm"
      bg="white"
      alignItems="center"
      elevation={5}
      borderRadius="xs">
      <Image
        source={{
          uri: item.thumbnail ?? undefined,
        }}
        style={{width: '100%', height: '70%', resizeMode: 'cover'}}
      />
      <Box width={'100%'} p="sm">
        <Text>{item.title}</Text>
        <Text variant="caption" fontWeight="bold">
          Price : ₹{item.price}
        </Text>

        <Text variant="footnote">{item.description}</Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
