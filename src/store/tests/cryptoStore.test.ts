import { useCryptoStore } from '../cryptoStore';

beforeEach(() => {
  useCryptoStore.setState({
    cryptos: [],
    filteredCryptos: [],
    searchTerm: '',
  });
});

describe('CryptoStore', () => {
  it('should initialize with empty cryptos', () => {
    const store = useCryptoStore.getState();
    expect(store.cryptos).toEqual([]);
  });

  it('should filter cryptos by name or symbol', () => {
    const testData = [
      { id: '1', name: 'Bitcoin', symbol: 'BTC', price_usd: '30000' },
      { id: '2', name: 'Ethereum', symbol: 'ETH', price_usd: '2000' },
      { id: '3', name: 'Cardano', symbol: 'ADA', price_usd: '0.4' },
    ];
    useCryptoStore.setState({
      cryptos: testData,
      filteredCryptos: testData,
      searchTerm: '',
    });
    let store = useCryptoStore.getState();
    store.setFilter('eth');
    store = useCryptoStore.getState();
    expect(store.filteredCryptos.length).toBe(1);
    expect(store.filteredCryptos[0].name).toBe('Ethereum');
    store.setFilter('ada');
    store = useCryptoStore.getState();
    console.log('After ADA filter:', store.filteredCryptos);
    expect(store.filteredCryptos.length).toBe(1);
    expect(store.filteredCryptos[0].symbol).toBe('ADA');
  });
});