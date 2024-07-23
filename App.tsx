import {View, Text} from 'react-native';
import React from 'react';
import ScreenContextProvider from './src/context/ScreenContextProvider';
import SnapshotComponet from './src/testing-components/snapshot';
import VideoComponent from './src/testing-components/mock/VideoComponents';
import AxiosComponent from './src/testing-components/mock/AxiosComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sample1 from './src/screens/sample screen 2';
import Sample2 from './src/screens/sample screen1';

 const Stack = createNativeStackNavigator()

 export const NativeStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='screen1'  component={Sample1} />
      <Stack.Screen name='screen2'  component={Sample2} />

    </Stack.Navigator>
  )
}


const App: React.FC = () => {
  return (

   <NavigationContainer>
      <ScreenContextProvider>
        <View>
          {/* <SnapshotComponet /> */}
          {/* <VideoComponent /> */}
          {/* <AxiosComponent  /> */}
          <NativeStack  />
        </View>
      </ScreenContextProvider>
   </NavigationContainer>
  );
};

export default App;
