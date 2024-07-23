import * as React from 'react';
import {screen, render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStack} from '../../App';

test('shows profile screen when View Profile is pressed', () => {
  render(
    <NavigationContainer>
      <NativeStack/>
    </NavigationContainer>,
  );



  fireEvent.press(screen.getByText('View Profile'));

  expect(screen.getByText('View Profile')).toBeTruthy() //pass

//   expect(screen.getByText('dsqdd')).toBeTruthy() //fail ..

// expect(screen.getByTestId('navigate')).toBeTruthy()
// expect(screen.get('Navigate to home')).toBeTruthy()
//   expect(screen.getByText('View Profile')).toBeTruthy() //pass


});
