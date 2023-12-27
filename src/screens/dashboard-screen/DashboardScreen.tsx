import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  SafeAreaView,
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
  const [page, setPage] = useState(10);
  
  useEffect(() => {
    userListAPi();
  }, []);

  const userListAPi = async () => {
    await fetch('https://fakestoreapi.com/products?page=1&perpage=10')
      .then(response => response.json())
      .then(responseJson => {
        setLoader(true);
        console.log('Response json', responseJson);
        setUserListArray(responseJson);
        console.log('Response json in array', userListArray);
        setLoader(false);
      })
      .catch(error => {
        Alert.alert('Error!', error);
      });
  };
  
  const handleLoadMore = () => {
    console.log("Hellooooo");
    
    let userUpdate: any = userListArray.slice(5,10)
    userListArray.length <= page && setPage(page + 10)
    userListArray.concat(userUpdate)
    console.log("userList array",userUpdate);
    
  };

  const renderUserList = ({item}: any) => {
    return (
      <View style={styles.listContainer}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productRating}>{item.rating.rate}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity>
          <Image source={all_icons.menu} style={styles.menu} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>App Delight</Text>
      </View>
      <View style={styles.footerContainer}>
        {loader ? (
          <ActivityIndicator size={'large'} color={COLORS.gray} />
        ) : (
          <FlatList
            data={userListArray.slice(0, 5)}
            keyExtractor={(item: any) => item.id}  
            renderItem={(item: any) => renderUserList(item)}
            initialNumToRender={10}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
