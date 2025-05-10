import { create } from 'zustand';
import { api } from "../apiService";

interface Crypto {
    id: string;
    name: string;
    symbol: string;
    price_usd: string;
}

interface CryptoStore {
    cryptos: Crypto[];
    fetchCryptos: () => Promise<void>;
    setFilter: (term: string) => void;
    filteredCryptos: Crypto[];
    searchTerm: string;
}

export const useCryptoStore = create<CryptoStore>((set, get) => ({
    cryptos: [],
    filteredCryptos: [],
    searchTerm: '',
    fetchCryptos: async () => {
        try {
            const response = await api.crypto.get('/tickers/');
            set({
                cryptos: response.data.data,
                filteredCryptos: response.data.data
            });
        } catch (error) {
            console.error('Error fetching cryptos:', error);
        }
    },
    setFilter: (term) => {
        const allCryptos = get().cryptos;
        const filtered = allCryptos.filter(c =>
            c.name.toLowerCase().includes(term.toLowerCase()) ||
            c.symbol.toLowerCase().includes(term.toLowerCase())
        );
        set({ filteredCryptos: filtered, searchTerm: term });
    }
}));
