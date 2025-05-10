import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation';

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

interface Props {
  route: DetailRouteProp;
}

const DetailScreen: React.FC<Props> = ({route}) => {
  const {crypto} = route.params;
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        {crypto.name} ({crypto.symbol})
      </Text>
      <Text>Price: ${parseFloat(crypto.price_usd).toFixed(2)} USD</Text>
      <Text>ID: {crypto.id}</Text>
    </View>
  );
};

export default DetailScreen;
const styles = StyleSheet.create({
  content: {flex: 1, padding: 16},
  text: {fontSize: 24},
});
