import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  TouchableOpacity,
  Modal,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './FavoreiteScreen.styles';
import {useRoute} from '@react-navigation/native';
import CustomHeader from '../../components/custom-header/CustomHeader';
import {all_icons} from '../../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {COLORS} from '../../libs/Colors';

export default function FavoriteScreen(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [storeId, setStoreID] = useState('');
  const [loader, setLoader] = useState(false);
  const [userFavoriteItem, setUserFavoriteItem] = useState([]);
  const route = useRoute();
  // const userFavoriteItem = route.params?.userData;
  const userListing: any = [];

  useEffect(() => {
    console.log('result$$$$$$$$$$');

    getData();
  }, []);

  const getData = async () => {
    setLoader(true);
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
        .get();
      console.log('result^^^^^^^^^^', (await result).docs);
      (await result).docs.map(res => {
        const userData: any = res.data();
        console.log('result###########', userData);

        userListing.push(userData);
        setUserFavoriteItem(userListing);
        console.log('result!!!!!!!', userData, userListing, userFavoriteItem);
        setLoader(false);
      });
    } catch (error) {
      Alert.alert('Something went wrong!');
      console.log('error', error);
    }
  };

  const removeFavoriteItem = async () => {
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
        .where('id', '==', storeId)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(function (doc) {
            doc.ref.delete();
          });
          setModalVisible(false);
          getData();
        });
    } catch (error) {
      Alert.alert('Something went wrong!');
      console.log('error', error);
    }
  };

  const moreOptionModal = () => {
    return (
      <View style={{paddingBottom: 10}}>
        <TouchableOpacity onPress={() => removeFavoriteItem()}>
          <Text style={styles.modalTxt}>Remove from favorite</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderFavoriteItem = ({item}: any) => {
    console.log('item^^^^^^^^', item);

    return (
      <View style={styles.productContainer}>
        <Image source={{uri: item?.image}} style={styles.productImage} />
        <View style={styles.txtContainer}>
          <Text style={styles.title}>
            {item?.title.length > 15
              ? item?.title.substring(0, 35) + '.....'
              : item?.title}
          </Text>
          <Text style={styles.desc}>
            {item?.description.length > 15
              ? item?.description.substring(0, 35) + '.....'
              : item?.description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setStoreID(item?.id);
          }}>
          <Image source={all_icons.more} style={styles.moreIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Favorite Screen"
        arrow_left={() => props.navigation.navigate('dashboard')}
      />
      <View style={styles.footerContainer}>
        {loader ? (
          <ActivityIndicator size={'large'} color={COLORS.gray} />
        ) : (
          <FlatList
            data={userFavoriteItem}
            keyExtractor={(item: any) => item.id}
            renderItem={(item: any) => renderFavoriteItem(item)}
            ListEmptyComponent={() => {
              return (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorMsg}>No data found</Text>
                </View>
              );
            }}
          />
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)'}}
        />
        <View style={styles.modalStyle}>
          <View style={styles.modalViewContainer}>{moreOptionModal()}</View>
        </View>
      </Modal>
    </View>
  );
}
