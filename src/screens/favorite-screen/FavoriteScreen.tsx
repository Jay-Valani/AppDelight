import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './FavoreiteScreen.styles';
import {useRoute} from '@react-navigation/native';
import CustomHeader from '../../components/custom-header/CustomHeader';
import {all_icons} from '../../assets/images';

export default function FavoriteScreen(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [storeId, setStoreID] = useState('')
  const route = useRoute();
  const userFavoriteItem = route.params?.userData;

  useEffect(() => {
    console.log('$$$$$$$$$$$', userFavoriteItem);
  }, []);

  const removeFavoriteItem = () => {
    console.log("GGGGGGGGGGG",storeId.id);
    
    userFavoriteItem.map((obj:any) => {
      console.log("objjjj",obj.id === storeId.id);
      if(obj.id === storeId.id) {
        userFavoriteItem.pop(storeId)
        setStoreID('')
        setModalVisible(false)
      }
    })
    
  }

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
    console.log("item^^^^^^^^",item);
    
    return (
      <View style={styles.productContainer}>
        <Image
          source={{uri: item.image}}
          style={styles.productImage}
        />
        <View style={styles.txtContainer}>
          <Text style={styles.title}>
            {item.title.length > 15
              ? item.title.substring(0, 35) + '.....'
              : item.title}
          </Text>
          <Text style={styles.desc}>
            {item.description.length > 15
              ? item.description.substring(0, 35) + '.....'
              : item.description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setStoreID(item)
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
        arrow_left={() => props.navigation.goBack()}
      />
      {userFavoriteItem.length === 0 ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMsg}>No data found</Text>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <FlatList
            data={userFavoriteItem}
            keyExtractor={(item: any) => item.id}
            renderItem={(item: any) => renderFavoriteItem(item)}
          />
        </View>
      )}
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
