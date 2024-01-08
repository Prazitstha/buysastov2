import React, {useEffect, useState, useCallback} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './styles/WishlistStyle';
import {Header, LoadingScreen} from '../../Commons';
import {HelperFunction, Api} from '../../Constants';

const Wishlist = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    FetchedBookmarkData();
  }, []);

  const FetchedBookmarkData = async () => {
    setIsLoading(true);
    try {
      const res = await Api.fetchWishList();
      console.log('res', res);

      setData(res.bookmarks); // Set the data from bookmarks array
    } catch (error) {
      console.error('Error fetching Search data:', error);
      setData([]);
      setIsLoading(false);
    }
    setIsLoading(false);
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    FetchedBookmarkData();

    setRefreshing(false);
  }, [FetchedBookmarkData]);

  const onPressProduct = async (name, price, image, description, _id,logo,brand, views,) => {

    navigation.navigate('WishlistDetails', {
      name,
      price,
      image,
      description,
      _id,
      logo,
      brand,
      views,
    });
  };


  const renderItem = ({item}) => {
    const product = item.product;
    console.log('product', product);


    return (
      <View style={styles.main}>
        <TouchableOpacity
          onPress={() =>
            onPressProduct(
              product.title,
              product.range.max,
              product.specs.medias[0],
              product.description,
              product._id,
              product.brand.logo,
              product.brand.name,
              product.views
            )
          }
          style={styles.single}>
          <Image
            style={styles.image}
            source={{
              uri: `${HelperFunction.BASE_URL}/media/products/medias/${product.specs.medias[0]}`,
            }}
          />
          <Text style={styles.brand}>{product.title}</Text>
          <Text style={styles.title}>{product.brand.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              margin: 10,
              alignItems: 'center',
            }}>
            {/* <Text style={styles.price}>{product.range.max}</Text> */}
        <Text style={styles.price}>NPR {product.range.max.toLocaleString()}.00</Text>

          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <Header navigation={navigation} title="Bookmarked Products" back />

      <View style={styles.container}>
        <View style={styles.wishlistContainer}>
        <Text style={styles.screentitle}> My WishLists</Text>

        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={() => (
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                textAlign: 'center',
                paddingTop: HelperFunction.VerticalScale(10),
              }}>
              No WishList available
            </Text>
          )}
        />
        {isLoading && <LoadingScreen />}
      </View>
    </>
  );
};

export default Wishlist;
