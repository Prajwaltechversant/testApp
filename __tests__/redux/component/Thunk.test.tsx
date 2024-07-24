import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Sample2 from '../../../src/screens/sample screen1/index';
import apiReducer from '../../../src/redux/reducers/apiReducer';
import { dataAPIThunk } from '../../../src/redux/thunk/dataThunk';
import { NativeStack } from '../../../App';

describe('Sample2 Component', () => {
  it('should render correctly and show timer status', () => {
    const store = configureStore({
      reducer: {
        apiReducer,
        timerReducer: (state = { status: 'idle', time: '00 h: 00 m: 00 s' }, action) => state, // Mock timer reducer
      },
    });

    render(
      <Provider store={store}>
        <Sample2 />
      </Provider>
    );

    expect(screen.getByText('Timer Status : idle')).toBeTruthy();
    // expect(screen.getByText(/00 h: 00 m: 00 s/i)).toBeTruthy();
  });

  it('should display limit message and change background color', () => {
    const store = configureStore({
      reducer: {
        apiReducer,
        timerReducer: (state = { status: 'limit', time: '00 h: 00 m: 00 s' }, action) => state, 
      },
    });

    render(
      <Provider store={store}>
        <Sample2 />
        </Provider>
    );

    expect(screen.getByText(/limit..reached/i)).toBeTruthy();
    expect(screen.getByText(/Timer Status : limit/i)).toBeTruthy();
  });

  it('should dispatch dataAPIThunk and show data', async () => {
    const mockData = [{ id: 1, name: 'Test Comment' }];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;

    const store = configureStore({
      reducer: {
        apiReducer,
        timerReducer: (state = { status: 'idle', time: '00 h: 00 m: 00 s' }, action) => state,
      },
    });

    render(
      <Provider store={store}>
        <Sample2 />
      </Provider>
    );

    await store.dispatch(dataAPIThunk());

    await waitFor(() => {
      expect(screen.getByText(/Test Comment/i)).toBeTruthy();
    });
  });
});
