import React, { Component } from 'react';
import { StyleSheet, PixelRatio } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import TabIcon from '../components/TabIcon';

import { ClientsScreen, 
    HomeScreen, 
    JobsScreen, 
    ProfileScreen, 
    WalletScreen } from '../screens';

export default function RouterComponent(props) {
    
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="main" tabs={true} tabBarStyle={styles.tabBar} default="home">
                    <Scene
                        key="home" 
                        component={HomeScreen}
                        setCode={props.setCode} 
                        hideNavBar
                        iconName="home"
                        icon={TabIcon}
                    />
                    <Scene 
                        key="jobs" 
                        component={JobsScreen} 
                        hideNavBar
                        iconName="adjust"
                        icon={TabIcon}
                    />            
                    <Scene 
                        key="clients" 
                        component={ClientsScreen} 
                        hideNavBar
                        iconName="users"
                        icon={TabIcon}
                    />
                    <Scene 
                        key="wallet" 
                        component={WalletScreen} 
                        hideNavBar
                        iconName="money"
                        icon={TabIcon} 
                    />  
                    <Scene 
                        key="profile" 
                        component={ProfileScreen} 
                        hideNavBar
                        iconName="user"
                        icon={TabIcon}
                    />     
                                    
                </Scene>
            </Scene>
        </Router>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      borderTopColor: 'darkgrey',
      borderTopWidth: 1 / PixelRatio.get(),
      backgroundColor: 'ghostwhite',
      opacity: 0.98
    },
    navigationBarStyle: {
      backgroundColor: 'red',
    },
    navigationBarTitleStyle: {
      color:'white',
    },
  });