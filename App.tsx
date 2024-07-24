import {View, Text} from 'react-native';
import React from 'react';
import ScreenContextProvider from './src/context/ScreenContextProvider';
import SnapshotComponet from './src/testing-components/snapshot';
import VideoComponent from './src/testing-components/mock/VideoComponents';
import AxiosComponent from './src/testing-components/mock/AxiosComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sample2 from './src/screens/sample screen1';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import Stopwatch from './src/screens/sample screen 2';

 const Stack = createNativeStackNavigator()

 export const NativeStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='screen1'  component={Stopwatch} />
      <Stack.Screen name='screen2'  component={Sample2} />

    </Stack.Navigator>
  )
}


const App: React.FC = () => {
  return (

   <Provider  store={store}>
     <NavigationContainer>
        <ScreenContextProvider>
            {/* <SnapshotComponet /> */}
            {/* <VideoComponent /> */}
            {/* <AxiosComponent  /> */}
            <NativeStack  />
        </ScreenContextProvider>
     </NavigationContainer>
   </Provider>
  );
};

export default App;
