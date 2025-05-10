import React, {useEffect, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useCryptoStore} from '../store/cryptoStore';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {fetchCryptos, filteredCryptos, setFilter, searchTerm} =
    useCryptoStore();

  const loadCryptos = useCallback(() => {
    fetchCryptos();
  }, [fetchCryptos]);

  useEffect(() => {
    loadCryptos();
  }, [loadCryptos]);

  return (
    <View style={styles.content}>
      <TextInput
        placeholder="Buscar crypto..."
        value={searchTerm}
        onChangeText={setFilter}
        style={styles.input}
      />
      <FlatList
        data={filteredCryptos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {crypto: item})}>
            <View style={styles.body}>
              <Text>
                {item.name} ({item.symbol})
              </Text>
              <Text>USD ${parseFloat(item.price_usd).toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  content: {flex: 1, padding: 16},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
    borderRadius: 8,
  },
  body: {padding: 12, borderBottomWidth: 1, borderColor: '#eee'},
});
