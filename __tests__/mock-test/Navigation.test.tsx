import * as React from 'react';
import {screen, render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStack} from '../../App';
import {Provider} from 'react-redux';
import {store} from '../../src/redux/store/store';

test('shows profile screen when View Profile is pressed', () => {
 const snapshot = render(
    <NavigationContainer>
      <Provider store={store}>
        <NativeStack />
      </Provider>
    </NavigationContainer>,
  ).toJSON()
  expect(snapshot).toMatchSnapshot();


  // fireEvent.press(screen.getByText('View Profile'));

  // expect(screen.getByText('View Profile')).toBeTruthy() //pass

  //   expect(screen.getByText('dsqdd')).toBeTruthy() //fail ..

  
  expect(screen.getByText('navigate to screen 2')).toBeTruthy();
});
