import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './DashboardScreen.styles';
import {all_icons} from '../../assets/images';
import {COLORS} from '../../libs/Colors';

export default function DashboardScreen(props: any) {
  const [userListArray, setUserListArray] = useState([]);
  const [loader, setLoader] = useState(false);
  const [favorite, setFavorite] = useState('');
  const [selectedFavoriteUser, setSelectedFavoriteUser] = useState([])

  useEffect(() => {
    userListAPi();
  }, []);

  const userListAPi = async () => {
    await fetch('https://fakestoreapi.com/products?page=1&perpage=10')
      .then(response => response.json())
      .then(responseJson => {
        setLoader(true);
        setUserListArray(responseJson);
        setLoader(false);
      })
      .catch(error => {
        Alert.alert('Error!', error);
      });
  };

  const selectedUserList = (item: any) => {
    setSelectedFavoriteUser(item)
  }

  const renderUserList = ({item}: any) => {
    return (
      <View style={styles.listContainer}>
        <View style={styles.imageComponent}>
          <Image source={{uri: item.image}} style={styles.productImage} />
          <TouchableOpacity
            onPress={() => {
              selectedUserList(item)
            }}>
            <Image source={item.id === favorite ? all_icons.favorite : all_icons.unfavorite} style={styles.favoriteIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.productTitle}>{item.title}</Text>
        <View style={styles.productComponents}>
          <Text style={styles.productPrice}>Price:- {item.price}</Text>
          <Text style={styles.productRating}>rating:- {item.rating.rate}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity>
            <Image source={all_icons.menu} style={styles.menu} />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>App Delight</Text>
          <TouchableOpacity onPress={() => {props.navigation.navigate('favorite', {userData: selectedFavoriteUser})}}>
            <Image source={all_icons.unfavorite} style={styles.menu} />
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          {loader ? (
            <ActivityIndicator size={'large'} color={COLORS.gray} />
          ) : (
            <FlatList
              data={userListArray}
              keyExtractor={(item: any) => item.id}
              renderItem={(item: any) => renderUserList(item)}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}
