import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Sample2: React.FC = ({navigation}: any) => {
  // const navigation = useNavigation()
  return (
    <View>
      <Text>Sample 2</Text>

      <Button
        title="Navigate to home"
        testID="navigate"
        //   onPress={()=>navigation.navigate('screen1')}
        onPress={() => navigation.navigate('screen1')}
      />
    </View>
  );
};

export default Sample2;
