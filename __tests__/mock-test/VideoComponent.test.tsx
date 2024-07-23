import React from 'react';
import { render } from '@testing-library/react-native';
import VideoComponent from '../../src/testing-components/mock/VideoComponents';

// jest.mock('react-native-video', ()=>'Video'); // auto
jest.mock('react-native-video');  // manually created mock component inside __mocks__



test('renders VideoComponent correctly', () => {
  const { getByTestId } = render(<VideoComponent />);
  const videoElement = getByTestId('video-player');

  expect(videoElement).toBeTruthy();

//   expect(videoElement).resolves
});