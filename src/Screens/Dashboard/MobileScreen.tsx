import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';

import {Header, LoadingScreen} from '../../Commons';
import {useSelector, useDispatch} from 'react-redux';
import {updateWishList} from '../Authentication/actions';
import {Api, HelperFunction} from '../../Constants';

import Icons from 'react-native-vector-icons/Ionicons';
import styles from './styles/MobileScreenStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MobileScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const WISHLIST = useSelector(state => state.user.WISHLIST);
  // console.log('wishlist', wishlist);
  const route = useRoute();
  const {title, datas,productcategory} = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [wishlist, setWishList] = useState([]);
  const [productLoadingStates, setProductLoadingStates] = useState(false);

  console.log('datas', datas);

  // useFocusEffect(
  //   useCallback(() => {
  //     const fetchFullData = async () => {
  //       await fetchedBookmarkData();
  //     };

  //     fetchFullData();
  //   }, [fetchedBookmarkData]),
  // );
  // const fetchedBookmarkData = async () => {
  //   // setIsLoading(true);
  //   setProductLoadingStates(true);

  //   try {
  //     const res = await Api.fetchWishList();
  //     console.log('res', res);

  //     setWishList(res.bookmarks); // Set the data from bookmarks array
  //   } catch (error) {
  //     console.error('Error fetching Search data:', error);
  //     setWishList([]);
  //     // setIsLoading(false);
  //   setProductLoadingStates(true);

  //   }
  //   // setIsLoading(false);
  //   setProductLoadingStates(false);

  // };
  const filteredMobileData = datas.filter(
    (item: {category: string}) => item.category === '63e36d436d79b564aa9e65bb',
  );
  // console.log('filterMobiledata', filteredMobileData);
  const filteredLaptopData = datas.filter(
    (item: {category: string}) => item.category === '63e9c94daaa9507a3588f397',
  );
  // console.log('filterlaptopdata', filteredLaptopData);

  const onPressProduct = async (
    name,
    price,
    image,
    description,
    _id,
    brand,
    views,
    logo,
  ) => {
    navigation.navigate('ProductDetails', {
      price,
      image,
      name,
      description,
      _id,
      brand,
      views,
      logo,
    });
  };
//bookmarks
  const handlePress = async id => {
    // Show the loading screen when you start the operation
    // setIsLoading(true);
     // Show the loading indicator for the specific product
  setProductLoadingStates((prevState) => ({
    ...prevState,
    [id]: true,
  }));

    try {
      const params = {
        id: id,
        wishList: WISHLIST,
      };
      await dispatch(updateWishList(params));
      await fetchedBookmarkData();
      // Hide the loading screen when the operation is complete//////////////////
      setProductLoadingStates(false);

    } catch (error) {
      // Handle errors if the operation fails
      console.error('Error:', error);
      setProductLoadingStates(false);
// Make sure to hide the loading screen in case of an error
    }
  };
  const renderItem = ({item, index}) => (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() =>
          onPressProduct(
            item.title,
            item.range.max,
            item.specs.medias[0],
            item.description,
            item._id,
            item.brand.name,
            item.views,
            item.brand.logo,
          )
        }
        style={styles.single}>
        <View style={styles.bookmarkrow}>
        <TouchableOpacity onPress={() => handlePress(item._id)}>
            {productLoadingStates[item._id] ? (
              // Render the ActivityIndicator when updating the specific product's bookmark
              <ActivityIndicator size="small" color="#D7141A" />
            ) : (
              // Render the bookmark icon based on the wishlist status
              <Ionicons
                name={
                  WISHLIST.some(
                    (wishlists) => wishlists.product._id === item._id
                  )
                    ? 'bookmark'
                    : 'bookmark-outline'
                }
                size={32}
                color={
                  WISHLIST.some(
                    (wishlists) => wishlists.product._id === item._id
                  )
                    ? '#D7141A'
                    : '#fffff'
                }
              />
            )}
          </TouchableOpacity>
        </View>
        <Image
          style={styles.image}
          key={index}
          source={{
            uri: `${HelperFunction.BASE_URL}/media/products/medias/${item.specs.medias[0]}`,
          }}
        />

        <Text style={styles.brand}>{item.title}</Text>
        <Text style={styles.title}>{item.brand.name}</Text>
        <View
          style={{
            // backgroundColor: Colors.borderColor,
            flexDirection: 'row',
            margin: 10,
            alignItems: 'center',
          }}>
          {/* <Icons name="ios-pricetag-sharp" size={25} color="#D7141A" /> */}
        <Text style={styles.price}>NPR {item.range.max.toLocaleString()}.00</Text>

        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <Header
        navigation={navigation}
        title={title}
        back
      />
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={false}
            alwaysBounceVertical={false}>
            <View>
              <Text style={styles.header}>
                {productcategory
               }
                {/* {' '} */}
                {/* {buttonId === 'mobileButtonId' ? 'Mobile' : 'Laptop'} */}
              </Text>
            </View>
            <FlatList
              data={datas
              }
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
            {isLoading && <LoadingScreen />}
          </ScrollView>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default MobileScreen;
