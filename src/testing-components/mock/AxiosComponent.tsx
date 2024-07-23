import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const AxiosComponent = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = axios.get('https://jsonplaceholder.typicode.com/photos');
    setData((await res).data);
  };



  return (
    <View style={{justifyContent: 'center', alignItems: 'center', height:Dimensions.get('screen').height}}>
      <View>
        <Button title="get" onPress={getData} />
        {data.length>0 && <Text>.....{data.length}</Text>}
      </View>
    </View>
  );
};

export default AxiosComponent;
