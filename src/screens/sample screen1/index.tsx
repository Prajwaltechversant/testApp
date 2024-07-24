import {View, Text, Button, StatusBar} from 'react-native';
import React, { useEffect } from 'react';
import styles from './style';
import {useAppDispatch, useAppSelector} from '../../hooks/redux/hook';
import { dataAPIThunk } from '../../redux/thunk/dataThunk';


const Sample2: React.FC = ({navigation}: any) => {
  // const navigation = useNavigation()

  const timer = useAppSelector(state => state.timerReducer.status);
  const timeStatus = useAppSelector(state => state.timerReducer.time);


  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(dataAPIThunk())
  })

  const data = useAppSelector(state=>state.apiReducer.data)




  return (
    <View
      style={[
        styles.container,
        {backgroundColor: timer === 'limit' ? 'orange' : 'white'},
      ]}>
      {timer === 'limit' && (
        <>
          <StatusBar animated hidden showHideTransition={'slide'} />
          <Text style={{color: 'red', fontSize: 30, fontWeight: '800'}}>
            limit..reached{' '}
          </Text>
        </>
      )}

      <Text>Timer Status : ${timer}</Text>

      <Text>Test Comment : {data[0]}</Text>



      <Text style={{color: 'black', fontSize: 30}}>{timeStatus}</Text>
      <Text style={{color: 'black', fontSize: 30}}>Timer Status : {timer}</Text>
    </View>
  );
};

export default React.memo(Sample2);
