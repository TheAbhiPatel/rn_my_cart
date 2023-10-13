import React, {useCallback, useEffect, useState} from 'react';
import Box from '../../theme/Box';
import Text from '../../theme/Text';
import ProductCard from './ProductCard';
import {ActivityIndicator, FlatList} from 'react-native';
import {IProduct} from './type';
import {palette} from '../../theme/light';
import Carousal from './Carousal';
import {carousalData} from '../../utils/carousalData';

const Home = () => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [pageNo, setPageNo] = useState<number>(0);
  console.log('----> product', pageNo);

  useEffect(() => {
    fetchProduct(pageNo);
  }, [pageNo]);

  const fetchProduct = async (page: number) => {
    const skip = 10 * page;
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${skip}`,
      );
      const data = await res.json();
      // setProduct(data.products);
      setProduct(prev => {
        return [...prev, ...data.products];
      });
    } catch (error) {
      console.log('----- Error while fetching product ----->', error);
    }
  };

  const handlePagination = useCallback(() => {
    if (product) {
      setPageNo(prev => prev + 1);
    }
  }, [pageNo]);

  /** --- Loader --- */
  if (product.length === 0) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size={'large'} color={palette.green} />
      </Box>
    );
  }

  return (
    <Box flex={1}>
      <FlatList
        style={{flex: 1}}
        data={product}
        ListHeaderComponent={<Carousal data={carousalData} />}
        onEndReached={handlePagination}
        onEndReachedThreshold={0.1}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <ProductCard key={item.id} item={item} />}
        ListFooterComponent={() => (
          <Box width={'100%'} alignItems="center" py="sm">
            <ActivityIndicator size={'large'} color={palette.blue} />
          </Box>
        )}
      />
    </Box>
  );
};

export default Home;

/** --- dummy data --- */
// {
// "id": 1,
// "title": "iPhone 9",
// "description": "An apple mobile which is nothing like apple",
// "price": 549,
// "discountPercentage": 12.96,
// "rating": 4.69,
// "stock": 94,
// "brand": "Apple",
// "category": "smartphones",
// "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
// "images": [
// "https://i.dummyjson.com/data/products/1/1.jpg",
// "https://i.dummyjson.com/data/products/1/2.jpg",
// "https://i.dummyjson.com/data/products/1/3.jpg",
// "https://i.dummyjson.com/data/products/1/4.jpg",
// "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
// ]
// }
