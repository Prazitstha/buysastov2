import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import analytics from '@react-native-firebase/analytics';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

import {
  savepoints,
  updateArray,
  updateWishList,
} from '../Authentication/actions';
import {SliderBox} from 'react-native-image-slider-box';
import {Header, LoadingScreen} from '../../Commons';
import Icons from 'react-native-vector-icons/Ionicons';
import styles from './styles/styles';
import {Api, HelperFunction, Colors} from '../../Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Wishlist} from '../Wishlist';

const Dashboard = (): JSX.Element => {
  const dispatch = useDispatch();
  const {WISHLIST, points, user} = useSelector(state => state.user);
  const navigation = useNavigation();

  const [sliderimage, setSliderImage] = useState([]);
  const [data, setData] = useState([]);
  const [wishlist, setWishList] = useState([]);
  const [mobileData, setMobileData] = useState([]);
  const [laptopData, setLaptopData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productLoadingStates, setProductLoadingStates] = useState(false);
  const [productCategory, setProductCategory] = useState([]);

  console.log('points', points);

  useFocusEffect(
    useCallback(() => {
      const fetchFullData = async () => {
        await fetchData();
        await fetchDataImage();
      };
      fetchFullData();
    }, []),
  );
  useFocusEffect(
    useCallback(() => {
      const fetchFullBookmarkData = async () => {
        if (WISHLIST.length === 0) {
          await fetchedBookmarkData();
        }
      };
      fetchFullBookmarkData();
    }, []),
  );
  useEffect(() => {
    if (points === null) {
      const pointsData = async () => {
        await fetchPoints();
      };
      pointsData();
    }
  }, []);

  const fetchPoints = async () => {
    console.log('z');

    setIsLoading(true);
    try {
      console.log('y');

      const response = await Api.getUserPointsData(user._id);
      dispatch(savepoints(response.points));
      console.log('x');

      // setProductLoadingStates(false);
    } catch (error) {}
  };

  const fetchedBookmarkData = async () => {
    // setIsLoading(true);
    setProductLoadingStates(true);
    try {
      const params = {
        id: null,
        wishList: wishlist,
      };
      // const res = await Api.fetchWishList();
      // console.log('res', res);

      await dispatch(updateWishList(params));

      // setProductLoadingStates(false);
    } catch (error) {
      console.error('Error fetching Search data:', error);

      setWishList([]);
      // setIsLoading(false);
      // setProductLoadingStates(false);
    }
    // setIsLoading(false);
    setProductLoadingStates(false);
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const productCategroy = await Api.getProductCategory();
      const response = await Api.getfetchData();
      // const filteredLaptopData = response.filter(
      //   (item: {categoryLabel: string}) =>
      //     item.categoryLabel === 'laptop',
      // );
      // const filteredWashingmachineData = response.filter(
      //   (item: {category: string}) =>
      //     item.category === '6519211c0c8ac661edcd5536',
      // );
      setData(response);
      // setMobileData(filteredData);
      setProductCategory(productCategroy);

      // setLaptopData(filteredLaptopData);
      // setProductLoadingStates(false);
    } catch (error) {
      setData([]);
    }
  };
  console.log('fetchdata', data);

  // fetched bannner image
  const fetchDataImage = async () => {
    try {
      const response = await Api.getfetchDataImage();
      const formattedImageUrls = response.map(
        (item: {slider_Image: any}) =>
          `${HelperFunction.BASE_URL}${item.slider_Image}`,
      );
      setSliderImage(formattedImageUrls);
    } catch (error) {
      setSliderImage([]);
    }
    setIsLoading(false);
  };

  console.log('formattedurls', sliderimage);
  // Handle "Load More" onPress action
  const onPressMore = async (productcategory: string) => {
    console.log('buttonid', productcategory);
    // analytics().logSelectContent({
    //   content_type: 'Press More Button Clicked',
    //   item_id: 'button6',
    // });
    const products = data.filter( product => product.categoryLabel === productcategory,)
    navigation.navigate('Mobile', {datas: products, productcategory});
  };
  //productId for product details
  const onPressProduct = async (
    name: any,
    price: any,
    image: any,
    description: any,
    _id: any,
    brand: any,
    views: any,
    logo: any,
  ) => {
    // analytics().logSelectContent({
    //   content_type: 'Product clicked',
    //   item_id: 'button7',
    // });
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

  //  const onPressMore = () => {
  //   // dispatch(performLogout());

  //   navigationRef.current?.navigate('TokenExpiry');
  //  }

  // bookmark
  const handlePress = async id => {
    // Show the loading indicator for the specific product
    setProductLoadingStates(prevState => ({
      ...prevState,
      [id]: true,
    }));

    try {
      // Log an event using Firebase Analytics
      // await analytics().logSelectContent({
      //   content_type: 'Bookmark Button Clicked',
      //   item_id: 'button1',
      // });

      const params = {
        id: id,
        wishList: WISHLIST,
      };

      // Perform the dispatch operation
      await dispatch(updateWishList(params));
      await fetchedBookmarkData();
    } catch (error) {
      // Handle errors if the operation fails
      console.error('Error:', error);
    } finally {
      // Hide the loading indicator for the specific product
      setProductLoadingStates(prevState => ({
        ...prevState,
        [id]: false,
      }));
    }
  };

  const renderItem = ({item, index}) => (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() =>
          onPressProduct(
            item.title,
            item.range.max,
            item.specs.medias,
            item.description,
            item._id,
            item.brand.name,
            item.views,
            item.brand.logo,
          )
        }
        style={styles.single}>
        <View style={styles.bookmarkrow}>
          <View style={styles.bookmarkContainer}>
            <TouchableOpacity onPress={() => handlePress(item._id)}>
              {productLoadingStates[item._id] ? (
                // Render the ActivityIndicator when updating the specific product's bookmark
                <ActivityIndicator size="small" color="#D7141A" />
              ) : (
                // Render the bookmark icon based on the wishlist status
                <Ionicons
                  name={
                    WISHLIST.some(
                      wishlists => wishlists.product._id === item._id,
                    )
                      ? 'bookmark'
                      : 'bookmark-outline'
                  }
                  size={32}
                  color={
                    WISHLIST.some(
                      wishlists => wishlists.product._id === item._id,
                    )
                      ? '#D7141A'
                      : '#fffff'
                  }
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={styles.image}
          key={index}
          source={{
            uri: `${HelperFunction.BASE_URL}/media/products/medias/${item.specs.medias[0]}`,
          }}
        />

        <Text style={styles.brand}>{item.title}</Text>
        {item.logo ? (
          <Image
            style={styles.brandLogo}
            source={{
              uri: `${HelperFunction.BASE_URL}/media/products/brands/logo/${item.logo}`,
            }}
          />
        ) : (
          <Text style={styles.title}>{item.brand.name}</Text>
        )}
        <View
          style={{
            flexDirection: 'row',
            marginBottom: HelperFunction.VerticalScale(10),
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          {/* <Icons name="ios-pricetag-sharp" size={25} color="#D7141A" /> */}

          <Text style={styles.price}>
            NPR {item.range.max.toLocaleString()}.00
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <Header navigation={navigation} title="Dashboard" back={undefined} />
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View>
            <SliderBox
              images={sliderimage}
              dotColor="white"
              inactiveDotColor="#db7093"
            />
          </View>

          {productCategory.map((category, index) => (
            <>
              <View key={index} style={styles.titleLoadmore}>
                <Text style={styles.mainTitle}>{category.category}</Text>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => onPressMore(category.category)}>
                  <Text style={styles.btnTxt}> Load More {'>'} </Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                directionalLockEnabled={true}
                alwaysBounceVertical={false}>
                <FlatList
                  // data={data.filter.slice(0, 2)}
                  data={data
                    .filter(
                      product => product.categoryLabel === category.category,
                    )
                    .slice(0, 2)}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                />
              </ScrollView>
            </>
          ))}

          {/* <View style={styles.titleLoadmore}>
            <Text style={styles.mainTitle}>Laptops</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => onPressMore('laptopButtonId')}>
              <Text style={styles.btnTxt}>   Load More {'>'}  </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={laptopData.slice(0, 2)}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          /> */}
        </SafeAreaView>
        {isLoading && <LoadingScreen />}
      </ScrollView>
    </>
  );
};

export default Dashboard;
