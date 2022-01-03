import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Loading from '../components/Loading';

const deviceWidth = Dimensions.get('window').width;

const renderEmpty = () => {
  return (
    <View style={styles.productBox}>
      <Text style={{color: '#000000', fontSize: 25}}>No Data Found...</Text>
    </View>
  );
};

const ProductList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    await axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setIsLoading(false);
        setData(response.data);
        console.log('response --> ', response.data);
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  };

  useEffect(() => {
    let unsub = true;
    getData();
    return () => {
      unsub = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>

      {isLoading ? (
        <Loading />
      ) : data ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.productBox}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
          )}
        />
      ) : (
        renderEmpty()
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CBD3',
  },
  heading: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  productBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
    margin: 20,
    height: 400,
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
  },
  productTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    margin: 12,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    margin: 12,
  },
});
