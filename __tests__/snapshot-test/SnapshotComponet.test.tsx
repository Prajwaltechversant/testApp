import React from 'react';
import renderer from 'react-test-renderer';
import SnapshotComponet  from '../../src/testing-components/snapshot/index'
import {render}  from '@testing-library/react-native'
import ScreenContextProvider from '../../src/context/ScreenContextProvider';

test('renders correctly', () => {
    const tree = render(

    <ScreenContextProvider><SnapshotComponet  /></ScreenContextProvider>

  ).toJSON();
    expect(tree).toMatchSnapshot();
  });
