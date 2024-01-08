import React, {useState, useEffect,useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useFocusEffect} from '@react-navigation/native';


import {
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import {
  savepoints,
  saveusername,
  updateWishList,
} from '../../Screens/Authentication/actions';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Api} from '../../Constants';
import Icon from 'react-native-vector-icons/Ionicons';


import {Header, LoadingScreen} from '../../Commons';
import {Images, Fonts, HelperFunction, Colors, Icons} from '../../Constants';
import styles from '../Dashboard/styles/ProductDetailsStyles';

const WishlistDetails = ({navigation}): JSX.Element => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {WISHLIST} = useSelector(state => state.user);
  const {user} = useSelector(state => state.user);
  const userid = user._id;
  const {name, price, image, description, _id,logo, brand, views} = route.params;
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [wishlist, setWishList] = useState([]);
  const [loadingbookmark,setLoadingBookmark] = useState(false);

  // console.log('brandname',brand);
  // console.log('logo',logo);


  useFocusEffect(
    useCallback(() => {
      const fetchFullData = async () => {
        await compareData();
      };
      fetchFullData();
    }, [compareData]),
  );

  const compareData = async () => {
    setIsLoading(true);
    setError({});
    try {
      const res = await Api.getCompareData(_id);
      const filteredData = res.filter(item => item.price > 10000);
      setData(filteredData);
      await UserPointsData();
    } catch (error) {
      setData([]);
      setError(error.message);
    }
    setIsLoading(false);
  };
   //bookmark
   const handlePress = async id => {

    // Show the loading indicator when you start the operation
    setLoadingBookmark(true);
   // Show the loading screen when you start the operation
   // setIsLoading(true);

   try {
     const params = {
       id: id,
       wishList: WISHLIST,
     };
     await dispatch(updateWishList(params));
     // Hide the loading screen when the operation is complete
     setLoadingBookmark(false);
     // setIsLoading(false);
   } catch (error) {
     // Handle errors if the operation fails
     console.error('Error:', error);
     setLoadingBookmark(false);
     // setIsLoading(false); // Make sure to hide the loading screen in case of an error
   }
 };

  
    ///to pass links

    const onPressProduct = async link => {
      console.log('link', link);
      navigation.navigate('ProductWebView', {
        link,
      });
    };
    const UserPointsData = async () => {
      try {
        const res = await Api.getUserPointsData(userid);
        console.log('points', res);
        dispatch(savepoints(res.points));
  
        // setPointsData(res);
      } catch (error) {
        console.error('Error fetching points:', error);
        // setPointsData({});
      }
    };

    const renderItem = ({item, index}) => (
      <>
        <View style={styles.compareViewContainer}>
        <TouchableOpacity
         onPress={() =>
          onPressProduct(
            item.link
          
          )
        }>
  
          <View style={styles.boxViewContainer}>
            <View style={styles.innerboxViewContainer}>
            {item.storeId === '63e3702b6d79b564aa9e6675' ? (
            <Image source={Icons.darazlogo} style={styles.darazimage} />
          ) : (
            <Image source={Icons.sastologo} style={styles.sastoimage} />
          )}
  
          {/* <Text style={styles.productTitle}>{item.title}</Text> */}
          <Ionicons name="ios-earth" size={20} color="black" />
            <Text style={styles.type}> {item.type}</Text>
            <Text style={styles.priceTitle}>Starts at</Text>
          {/* <Text */}
            {/* // numberOfLines={1}
            // adjustsFontSizeToFit
            // minimumFontScale={0.6}
            // style={styles.price}>
            // {item.price} */}
          {/* // </Text> */}
  
          <Text style={styles.price}>NPR {item.price.toLocaleString()}.00</Text>
  
  
  
          </View>
          </View>
          </TouchableOpacity>
        </View>
      </>
    );
   
    return (
      <>
        <Header navigation={navigation} title="ProductDetails" back />
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.secondaryContainer}>
              <View style={styles.childOneViewContainer}>
                
                <View style={styles.bookmarkView}>
                <View style={styles.viewEyeContainer}>
                  <Icon 
                    name = 'eye'
                    style={styles.eyeIcons}/>
                  <Text style={styles.productView}>
                    
                    {views}</Text>
                    </View>
                <TouchableOpacity onPress={() => handlePress(_id)}>
            {loadingbookmark ? (
              // Render the ActivityIndicator when updating bookmarks
              <ActivityIndicator size="small" color="#D7141A" />
            ) : (
              // Render the bookmark icon based on the wishlist status
              <Ionicons
                name={
                  WISHLIST.some((wishlists) => wishlists.product._id === _id)
                    ? 'bookmark'
                    : 'bookmark-outline'
                }
                size={32}
                color={
                  WISHLIST.some((wishlists) => wishlists.product._id === _id)
                    ? '#D7141A'
                    : '#fffff'
                }
              />
            )}
          </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.cardImage}
                    source={{
                      uri: `${HelperFunction.BASE_URL}/media/products/medias/${image}`,
                    }}
                  />
                </View>
                <View style={styles.midDescriptionContainer}>
                  <Text style={styles.productName}>{name}</Text>
                  {/* <Text style={styles.productPrice}>Starting Price Rs. {price.toLocaleString()}</Text> */}
          <Text style={styles.startsAt}>Starts at</Text>
          <Text style={styles.productPrice}>NPR {price.toLocaleString()}.00</Text>
  
                  {logo ? (
      <Image
        style={styles.brandLogo}
        source={{
          uri: `${HelperFunction.BASE_URL}/media/products/brands/logo/${logo}`,
        }}
      />
    ) : (
      <Text style={styles.brandText}>{brand}</Text>
    )}
                </View>
                <View style= {styles.descriptionContainer}>
                  <Text style= {styles.descriptionText}>{description}</Text>
                </View>
              </View>
              <View style={styles.childtwoViewContainer}>
                <View style={styles.BestDeals}>
            <Image source={Images.bestdeals} style={styles.BestDealsimage} />
            <View style={styles.scrollViewContainer}>
              <Text style= {styles.scrollText}>Scroll to compare</Text>
            <Image source={Images.scroll} style={styles.scrollimage} />
            </View>
                  
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    ListEmptyComponent={() => (
                      <Text style={styles.empty}>No Vendors available</Text>
                    )}
                  />
  
                <View>
  
                </View>
              </View>
            </View>
          {isLoading && <LoadingScreen />}
  
          </ScrollView>
        </View>
      </>
    );
  };

export default WishlistDetails;
