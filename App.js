import { Provider } from 'react-redux';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './src/Router';
import rootReducer from './src/reducers';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {

  state = {
    appIsReady: false,
  };

  timeout = null;

  async componentDidMount() {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.log(e);
    }
    this.timeout = setTimeout(this.hideSplashScreen, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  hideSplashScreen = async () => {
    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  }


  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
  
}