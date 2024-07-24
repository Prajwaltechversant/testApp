import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, Text, Button, StyleSheet, Vibration, Alert} from 'react-native';
import moment from 'moment';
import 'moment-timer';
import styles from './style';
import {useAppDispatch} from '../../hooks/redux/hook';
import {addTime, saveTimer} from '../../redux/reducers/timerReducer';
import notifee, {
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';

const Stopwatch: React.FC = ({navigation}: any) => {
  const [stopwatchTimer, setStopwatchTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [notificationShown, setNotificationShown] = useState(false);
  const timerRef = useRef<any>(null);

  const dispatch = useAppDispatch();

  async function onDisplayNotification() {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      sound: 'sample.mp3',
      importance: AndroidImportance.HIGH,
      visibility: AndroidVisibility.PUBLIC,
      vibration: false,
    });

    await notifee.displayNotification({
      title: 'Stopwatch',
      body: 'Limit reached',

      android: {
        channelId,
        importance: AndroidImportance.HIGH,
        badgeCount: 2,
        sound: 'sample',
        visibility: AndroidVisibility.PUBLIC,
        pressAction: {
          id: 'default',
        },
      },
      subtitle: 'oi3irh',
    });
  }

  useEffect(() => {
    if (isRunning) {
      const duration: any = moment.duration(1, 'second');
      timerRef.current = duration.timer({loop: true}, () => {
        setStopwatchTimer(prev => prev + 1);
        dispatch(addTime(formatTime(stopwatchTimer)));
        if (stopwatchTimer === 10) {
          dispatch(saveTimer('limit'));
          onDisplayNotification();
        }
      });
    } else if (timerRef.current) {
      timerRef.current.stop();
      timerRef.current = null;
      dispatch(saveTimer('completed'));
    }
    return () => {
      if (timerRef.current) {
        timerRef.current.stop();
      }
    };
  }, [isRunning, stopwatchTimer]);

  const handleStartStop = () => {
    setIsRunning(prev => !prev);
  };

  const handleReset = () => {
    Alert.alert('Resetting timer...');
    setStopwatchTimer(0);
    setNotificationShown(false);
    dispatch(saveTimer('idle'));

    if (isRunning) {
      setIsRunning(false);
    }
  };

  const formatTime = useCallback((seconds: number) => {
    const duration = moment.duration(seconds, 'seconds');
    const hours = duration.hours().toString().padStart(2, '0');
    const minutes = duration.minutes().toString().padStart(2, '0');
    const secs = duration.seconds().toString().padStart(2, '0');
    return `${hours} h: ${minutes} m: ${secs} s`;
  }, []);

  useEffect(() => {
    dispatch(saveTimer(isRunning ? 'running' : 'idle'));
  }, [isRunning]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(stopwatchTimer)}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title={isRunning ? 'Stop' : 'Start'}
          onPress={handleStartStop}
          testID="timerBtn"
        />
        <Button title="Reset" onPress={handleReset} />
      </View>

      <Button
        title="navigate to screen 2"
        onPress={() => navigation.navigate('screen2')}
      />
    </View>
  );
};

export default Stopwatch;
