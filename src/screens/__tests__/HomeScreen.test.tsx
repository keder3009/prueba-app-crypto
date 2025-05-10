import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

describe('HomeScreen', () => {
  it('renders search input', () => {
    const { getByPlaceholderText } = render(
      <NavigationContainer>
        <HomeScreen navigation={{ navigate: jest.fn() }} />
      </NavigationContainer>
    );

    expect(getByPlaceholderText('Buscar crypto...')).toBeTruthy();
  });
});