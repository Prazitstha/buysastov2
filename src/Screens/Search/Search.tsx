import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './styles/styles';
import {Header, LoadingScreen} from '../../Commons';
import {Colors, HelperFunction, Api} from '../../Constants';

const Search = () => {
  const navigation = useNavigation();
  const [selectedType, setSelectedType] = useState('member');
  const [keyword, setKeyword] = useState('');
  const [organisation, setOrganisation] = useState('');

  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //productId for product details
  const onPressProduct = async (name, price, image, description, _id,brand,
    views,logo) => {
    // console.log("Product ID:", productId);
    console.log('Price:', price);
    console.log('Image:', image);
    console.log('Name:', name);
    console.log('Description:', description);
    console.log('id:', _id);

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

  const SearchData = async () => {
    setIsLoading(true);
    try {
      const res = await Api.getSearchData(keyword);
      console.log('res', res);

      setData(res);
    } catch (error) {
      console.error('Error fetching Search data:', error);
      setData([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!keyword) setData([]);
  }, [keyword]);

  // bookmark

  const handlePress = id => {
    if (bookmarkedIds.includes(id)) {
      // Remove the ID from the bookmarked IDs array if it's already bookmarked
      setBookmarkedIds(bookmarkedIds.filter(bookmarkId => bookmarkId !== id));
    } else {
      // Add the ID to the bookmarked IDs array if it's not already bookmarked
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const renderItem = ({item, index}) => (
    <View style={styles.main}>
      {console.log('item:', item)}
      {console.log('item:', item.specs.medias[0])}

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
          <Text style={styles.price}>Rs. {item.range.max.toLocaleString()}</Text>

        </View>
      </TouchableOpacity>
    </View>
  );

  // Render "Search" screen
  return (
    <>
      <Header navigation={navigation} title="Search" back />

      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            value={keyword}
            onChangeText={text => setKeyword(text)}
            style={styles.searchInput}
            placeholder="Search by product name"
          />

          <TouchableOpacity
            style={styles.searchButton}
            disabled={isSearching}
            onPress={SearchData}>
            <Ionicons
              name="ios-search-outline"
              size={HelperFunction.ModerateScale(20)}
              color={Colors.background_color}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchResult}>
          <View style={styles.textcontainer}>
            {!keyword ? (
              <Text style={styles.text}>Please type to search</Text>
            ) : (
              <ScrollView
                showsHorizontalScrollIndicator={false}
                directionalLockEnabled={true}
                alwaysBounceVertical={false}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={() => (
                    <Text style={styles.empty}>No Products available</Text>
                  )}
                />
              </ScrollView>
            )}
          </View>
        </View>
        {isLoading && <LoadingScreen />}
      </View>
    </>
  );
};

export default Search;
