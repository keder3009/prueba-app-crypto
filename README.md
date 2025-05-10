# React Native Crypto App

A React Native application that displays and filters cryptocurrency data.

## Requirements

- Node.js v18.20.4
- React Native CLI
- Android Studio or Xcode (for iOS)

## Key Dependencies

- React Native v0.79.1
- React Navigation v7
- Axios v1.9.0
- Zustand v5.0.4
- TypeScript v5.0.4

## Quick Start

### Install dependencies

```sh
yarn install
```

### Start Metro server

```sh
yarn start
```

### Run on Android

```sh
yarn android
```

### Run on iOS

Install CocoaPods dependencies first:

```sh
bundle install
bundle exec pod install
```

Then run:

```sh
yarn ios
```

## Testing

Run tests with:

```sh
yarn test
```

## Project Structure

- `/src`: Source code
  - `/store`: Zustand state management
  - `/components`: Reusable UI components
  - `/screens`: App screens

## Documentation

### API

The application uses a cryptocurrency data API to fetch real-time information:

- Endpoint: `https://api.coinlore.net/api/tickers/` - Returns list of cryptocurrencies with pricing data
- Response format includes: `id`, `name`, `symbol`, and `price_usd`

### State Management

Zustand is used for state management with the following stores:

#### CryptoStore

```typescript
interface CryptoStore {
    cryptos: Crypto[];             // All cryptocurrencies
    filteredCryptos: Crypto[];     // Filtered results
    searchTerm: string;            // Current search term
    fetchCryptos: () => Promise<void>;  // Fetches data from API
    setFilter: (term: string) => void;  // Filters cryptos by name/symbol
}
```

Usage example:
```typescript
const { cryptos, filteredCryptos, setFilter } = useCryptoStore();
```

### Components

The app includes several reusable components:

- `CryptoList`: Displays a scrollable list of cryptocurrencies
- `CryptoItem`: Individual cryptocurrency list item
- `SearchBar`: Allows filtering cryptos by name or symbol

### Navigation

The app uses React Navigation v7 with a native stack navigator:

- Home Screen: Displays the list of cryptocurrencies with search functionality
- Detail Screen: Shows detailed information about a selected cryptocurrency