import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react-native';
import AxiosComponent from '../../src/testing-components/mock/AxiosComponent';
import axios from 'axios';

// jest.mock('axios')

// test('Axios mock component', async () => {
//   const mockData = [{id: 1, title: 'Mock Photo'}];
//   (axios.get as jest.Mock).mockResolvedValue({data: mockData});

//   render(<AxiosComponent />);

//   fireEvent.press(screen.getByText('get'));

//   await waitFor(() => {
//     expect(screen.getByText(`.....${mockData.length}`)).toBeTruthy();
//   });
// });

test('AxiosComponent fetches and displays data correctly', async () => {
  expect(global.TextEncoder).toBeDefined();

  render(<AxiosComponent />);

  fireEvent.press(screen.getByText('get'));


  await waitFor(() => {
    expect(screen.getByText('get')).toBeTruthy();
    // expect(screen.getByText('Data Length:500'))
    expect(screen.getByText('Status:200')).toBeTruthy();
    expect(screen.getByText('Status Text:OK')).toBeTruthy();

  });
});
