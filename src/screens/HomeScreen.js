import React from 'react';
import { AsyncStorage, SafeAreaView, StyleSheet, Text, Button } from 'react-native';

export default function HomeScreen() {

  const logout = () => {
    AsyncStorage.clear()
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={{marginBottom: 10}}>Hello World</Text>
        <Button
        title="Logout"
        onPress={logout}
      />
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center'
  }
});