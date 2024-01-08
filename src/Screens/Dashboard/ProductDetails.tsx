import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
  Modal,
} from 'react-native';
import {useRoute, useFocusEffect} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import { ActivityIndicator } from 'react-native';
import {ProductVendorModal} from '../../Commons';
import {SliderBox} from 'react-native-image-slider-box';




import {
  savepoints,
  saveusername,
  updateWishList,
} from '../../Screens/Authentication/actions';

import {Header, LoadingScreen} from '../../Commons';
import {Fonts, Api, HelperFunction, Colors, Icons,Images} from '../../Constants';
import styles from './styles/ProductDetailsStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductDetails = ({navigation}): JSX.Element => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {WISHLIST} = useSelector(state => state.user);
  const {user} = useSelector(state => state.user);
  const userid = user._id;
  const {name, price, image, description, _id, brand, views,logo} = route.params;
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [wishlist, setWishList] = useState([]);
  const [loadingbookmark,setLoadingBookmark] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [sliderimage, setSliderImage] = useState([]);




  const ProductImage = async () => {
    try {
      const formattedImageUrls = image.map((imageName: any) => `${HelperFunction.BASE_URL}/media/products/medias/${imageName}`);
      console.log('formateedurls',formattedImageUrls);
      setSliderImage(formattedImageUrls);
    } catch (error) {
      setSliderImage([]);
    }
    setIsLoading(false);
  };
  

console.log('logo',logo);
console.log('brand',brand);
console.log('image',image);
console.log('formatted urls',sliderimage);

  

  useFocusEffect(
    useCallback(() => {
      const fetchFullData = async () => {
        await compareData();
        await ProductImage();
      };
      fetchFullData();
    }, [compareData]),
  );

  const compareData = async () => {
    setError({});
    setIsLoading(true);
    try {
      const res = await Api.getCompareData(_id);
      const filteredData = res.filter((item: { price: number; }) => item.price > 10000);
      setData(filteredData);

      await UserPointsData();
    } catch (error) {
      setData([]);
      setError(error.message);
    }
    setIsLoading(false);
  };
  //bookmark
  const handlePress = async (id: any) => {

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
  const onPressProducts = async (link: string) => {
    setSelectedLink(link); // Store the selected link in state
    setConfirmModal(true); // Open the modal
  };

  // const onPressProduct = async (link: string) => {
  //   const formattedLink = link.startsWith('http://') || link.startsWith('https://') ? link : `http://${link}`;
  //   console.log('formattedLink', formattedLink);
  //   try {
  //     const supported = await Linking.canOpenURL(formattedLink);
  //     console.log('supported',supported);
  //     if (supported) {
  //       await Linking.openURL(formattedLink);
  //     } else {
  //       console.error("Don't know how to open URI: " + formattedLink);
  //     }
  //   } catch (error) {
  //     console.error('Error opening URL:', error);
  //   } finally {
  //     // Navigate back or perform any other actions
  //     navigation.back(); // This will navigate back to the previous screen
  //   }
  // };

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
        onPressProducts(
          item.link
        
        )}>
      {/* // onPress={() => setConfirmModal(true)}> */}


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
                WISHLIST.some((wishlists: { product: { _id: any; }; }) => wishlists.product._id === _id)
                  ? 'bookmark'
                  : 'bookmark-outline'
              }
              size={32}
              color={
                WISHLIST.some((wishlists: { product: { _id: any; }; }) => wishlists.product._id === _id)
                  ? '#D7141A'
                  : '#fffff'
              }
            />
          )}
        </TouchableOpacity>
              </View>
              <View style={styles.imageContainer}>
                {/* <Image
                  style={styles.cardImage}
                  source={{
                    uri: `${HelperFunction.BASE_URL}/media/products/medias/${image[0]}`,
                  }}
                /> */}
                <View>
                {sliderimage.length > 0 && (
  <View>
    <SliderBox
      images={sliderimage}
      dotColor="white"
      inactiveDotColor="white"
      style={styles.cardImage}
    />
  </View>
)}

          </View>
              </View>
              <View style={styles.midDescriptionContainer}>
                <Text style={styles.productName}>{name}</Text>
                {/* <Text style={styles.productPrice}>Starting Price Rs. {price.toLocaleString()}</Text> */}
        <Text style={{fontSize:15, fontFamily:Fonts.OpenSans}}>Starts at</Text>
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
                    <Text style={styles.empty}>You are out of points !</Text>
                  )}
                />

              <View>

              </View>
            </View>
          </View>
        {isLoading && <LoadingScreen />}

        </ScrollView>
        <Modal
  animationType="fade"
  transparent={true}
  visible={confirmModal}
  onRequestClose={() => setConfirmModal(false)}>
  <ProductVendorModal
    pressCancel={() => setConfirmModal(false)}
    link={selectedLink} // Pass the selected link to the modal
  />
</Modal>

      </View>
    </>
  );
};

export default ProductDetails;
