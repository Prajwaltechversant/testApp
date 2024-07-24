import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Stopwatch from '../../../src/screens/sample screen 2';
import {Provider} from 'react-redux';
// import {configureStore} from 'redux';
import {combineReducers} from 'redux';
import timerReducer from '../../../src/redux/reducers/timerReducer';
import {configureStore} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import notifee, {
  AndroidImportance,
  AuthorizationStatus,
} from '@notifee/react-native';

jest.mock('@notifee/react-native');

jest.spyOn(Alert, 'alert');

const rootReducer = combineReducers({
  timer: timerReducer,
});
const mockStore = configureStore({reducer: rootReducer});

test('should render stopwatch component and dispatch actions', async () => {
  const store = mockStore;
  const dispatchSpy = jest.spyOn(store, 'dispatch');
  const selecterSpy = jest.spyOn(store, 'getState');

  render(
    <Provider store={store}>
      <Stopwatch />
    </Provider>,
  );

  fireEvent.press(screen.getByTestId('timerBtn'));
  expect(dispatchSpy).toHaveBeenCalledWith({
    type: 'timer/saveTimer',
    payload: 'running',
  });

  fireEvent.press(screen.getByTestId('timerBtn'));
  expect(dispatchSpy).toHaveBeenCalledWith({
    type: 'timer/saveTimer',
    payload: 'idle',
  });
  expect(dispatchSpy).toHaveBeenCalledWith({
    type: 'timer/saveTimer',
    payload: 'completed',
  });

  fireEvent.press(screen.getByText('Reset'));
  expect(Alert.alert).toHaveBeenCalledWith('Resetting timer...');
  //   expect(selecterSpy).toHaveBeenCalledWith(
  //     {
  // payload:'00 h: 00 m: 00 s'
  //   }
  // );

  expect(dispatchSpy).toHaveBeenCalledWith({
    type: 'timer/saveTimer',
    payload: 'idle',
  });
});
