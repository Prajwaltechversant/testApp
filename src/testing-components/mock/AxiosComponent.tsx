import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const AxiosComponent = () => {
  const [data, setData] = useState([]);
  const [statusDet, setStatusDet] = useState({
    status: 0,
    statusText: '',
  });
  const getData = async () => {
    const res = axios.get('https://jsonplaceholder.typicode.com/comments');
    setData((await res).data);
    setStatusDet({
      status: (await res).status,
      statusText: (await res).statusText,
    });
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('screen').height,
      }}>
      <View>
        <Button title="get" onPress={getData} />
        {/* <Text>{`pepep\nuowwhdiohd`}</Text> */}
        {data.length > 0 && (
          <>
            <Text>Data Length:{data.length}</Text>
            <Text>Status:{statusDet.status}</Text>
            <Text>Status Text:{statusDet.statusText}</Text>

          </>
        )}
      </View>
    </View>
  );
};

export default AxiosComponent;
