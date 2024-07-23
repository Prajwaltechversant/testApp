import {View, Text} from 'react-native';
import React from 'react';
import {useScreenContext} from '../../context/ScreenContextProvider';
import styles from './style';
import { StyleProps } from '../../types/styleProps';

const SnapshotComponet:React.FC = () => {
  const screenContext = useScreenContext();


  const screenStyles = styles({
    screenContext,
    width: screenContext?.windowIsPortrait ? screenContext.windowWidth : screenContext.windowHeight,
    height: screenContext.windowIsPortrait ? screenContext.windowHeight : screenContext.windowWidth,
  });
  return (
    <View style={screenStyles.container}>
      <Text style={{color:'red',fontSize:30}}>{'truefalse'}</Text>
    </View>
  );
};

export default SnapshotComponet;
