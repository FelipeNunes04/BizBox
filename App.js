import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { MainRouterComponent } from './src/routers';
import * as AuthSession from "expo-auth-session";
import { AsyncStorage } from 'react-native';
import { Alert, Button, Platform, StyleSheet, View } from "react-native";

const auth0ClientId = "jJSuGrxdR1T8dtW6ryF1dck5GKpNLjbv";
const authorizationEndpoint = "https://dev-seub7e3v.us.auth0.com/authorize";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export default function App() {
  const [code, setCode] = React.useState(null);

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      responseType: AuthSession.ResponseType.Token,
      scopes: ["openid", "profile"],
      extraParams: {
        nonce: "nonce",
      },
    },
    { authorizationEndpoint }
  );

  timeout = null;

  React.useEffect(() => {
    getCodeFromStorage()
    try {
      SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.log(e);
    }
    timeout = setTimeout(hideSplashScreen, 1000);

    return function cleanup() {
      clearTimeout(timeout);
    };
  });

  const getCodeFromStorage = async () => {
    const code = await AsyncStorage.getItem('code');
    if (code) setCode(code);
  }

  React.useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          "Authentication error",
          result.params.error_description || "something went wrong"
        );
        return;
      }
      if (result.type === "success") {
        const { code } = result.params;
        AsyncStorage.setItem('code', code);
        setCode(code);
      }
    }
  }, [result]);

  const hideSplashScreen = async () => {
    await SplashScreen.hideAsync();
  }

  if (code) {
    return  <MainRouterComponent setCode={ setCode } />;
  }
  else {
    return (
      <View style={styles.container}>
        <Button
          disabled={!request}
          title="Log in with Auth0"
          onPress={() => promptAsync({ useProxy })}
        />
      </View>
        
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});