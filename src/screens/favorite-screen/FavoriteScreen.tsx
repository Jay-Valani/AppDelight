import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './FavoreiteScreen.styles';
import {useRoute} from '@react-navigation/native';
import CustomHeader from '../../components/custom-header/CustomHeader';
import {all_icons} from '../../assets/images';

export default function FavoriteScreen(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const userFavoriteItem = route.params?.userData;

  const moreOptionModal = () => {
    return (
      <View style={{paddingBottom: 10}}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.modalTxt}>Remove from favorite</Text>
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
          <View style={styles.productContainer}>
            <Image
              source={{uri: userFavoriteItem.image}}
              style={styles.productImage}
            />
            <View style={styles.txtContainer}>
              <Text style={styles.title}>
                {userFavoriteItem.title.length > 15
                  ? userFavoriteItem.title.substring(0, 35) + '.....'
                  : userFavoriteItem.title}
              </Text>
              <Text style={styles.desc}>
                {userFavoriteItem.description.length > 15
                  ? userFavoriteItem.description.substring(0, 35) + '.....'
                  : userFavoriteItem.description}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <Image source={all_icons.more} style={styles.moreIcon} />
            </TouchableOpacity>
          </View>
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
