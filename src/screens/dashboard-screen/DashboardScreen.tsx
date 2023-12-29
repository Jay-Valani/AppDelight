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
import firestore, {firebase} from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DashboardScreen(props: any) {
  const [userListArray, setUserListArray] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isFavorite, setIsFavorite] = useState('');
  const [id, setId] = useState('');
  const [selectedFavoriteUser, setSelectedFavoriteUser] = useState([]);
  let selectedArray: any = [];

  useEffect(() => {
    userListAPi();
    getUserData();
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

  const getUserData = async () => {
    const loginUserToken: any = await AsyncStorage.getItem('USER');
    const uid: any = await AsyncStorage.getItem('SignupUID');
    const docid: any =
      uid > loginUserToken
        ? loginUserToken + '-' + uid
        : uid + '-' + loginUserToken;

    try {
      const querySanp = await firestore()
        .collection('Favorite')
        .doc(docid)
        .collection('FavoriteItem')
        .orderBy('isFavorite')
        .get();
      setSelectedFavoriteUser(querySanp?.docs);

      querySanp.docs.map(docSnap => {
        console.log('doc snap', docSnap?._data);
        userListArray.some(mainItem => mainItem?.id === docSnap?._data?.id);
      });
    } catch (error) {
      console.log('error', error);
      // Alert.alert('Error', error);
    }
  };

  const selectedUserListFirebase = async (item: any) => {
    console.log('itemsssss', item);
    const loginUserToken: any = await AsyncStorage.getItem('USER');
    const uid: any = await AsyncStorage.getItem('SignupUID');
    const docid: any =
      uid > loginUserToken
        ? loginUserToken + '-' + uid
        : uid + '-' + loginUserToken;

    try {
      const result = firestore()
        .collection('Favorite')
        .doc(docid)
        .collection('FavoriteItem')
        .add({
          id: item.id,
          image: item.image,
          title: item.title,
          description: item.description,
          isFavorite: true,
        })
        .catch(error => {
          console.log('error', error);
          Alert.alert('Error', error);
        });

      console.log(
        'resultt----->',
        await firestore()
          .collection('Favorite')
          .doc(docid)
          .collection('FavoriteItem'),
      );

      getUserData();
    } catch (error) {
      Alert.alert('Something went wrong!');
      console.log('error', error);
    }
  };

  const renderUserList = ({item}: any) => {
    let isFavorite = selectedFavoriteUser.some(obj => obj._data.id === item.id);
    console.log("result#########",isFavorite);
    

    return (
      <View style={styles.listContainer}>
        <View style={styles.imageComponent}>
          <Image source={{uri: item.image}} style={styles.productImage} />
          <TouchableOpacity
            onPress={() => {
              selectedUserListFirebase(item);
            }}>
            <Image
              source={isFavorite ? all_icons.favorite : all_icons.unfavorite}
              style={styles.favoriteIcon}
            />
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
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('favorite', {
                userData: selectedFavoriteUser,
              });
            }}>
            <Image source={all_icons.favorite} style={styles.menu} />
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
