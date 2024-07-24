/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (__DEV__) {
  require("./ReactotronConfig");
}


async function enableMocking() {
    // if (!__DEV__) {
    //   return
    // }
   
    await import('./msw.polyfills')
    const { server } = await import('./src/testing-components/mock/server')
    server.listen()
  }
   
  enableMocking().then(() => {
    console.log("mocking")
  })

  AppRegistry.registerComponent(appName, () => App)
