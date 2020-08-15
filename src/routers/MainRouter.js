import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from '../screens';
import HomeScreen from '../screens';
import JobsScreen from '../screens';
import ClientsScreen from '../screens';
import WalletScreen from '../screens';
import ProfileScreen from '../screens';
import { logout } from './actions';


export default class RouterComponent extends Component {
    
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene key="login" component={LoginScreen} title="Login" initial />
                    </Scene>
                    <Scene key="main">
                        <Scene
                            leftTitle="Logout"
                            onLeft={() => logout()}
                            key="home" component={HomeScreen} title="Home"
                            initial
                        />
                        <Scene 
                            key="home" 
                            component={JobsScreen} 
                            title="Jobs" 
                        />            
                        <Scene 
                            key="clients" 
                            component={ClientsScreen} 
                            title="Clients" 
                        />
                        <Scene 
                            key="wallet" 
                            component={WalletScreen} 
                            title="Wallet" 
                        />  
                        <Scene 
                            key="profile" 
                            component={ProfileScreen} 
                            title="Profile" 
                        />     
                                        
                    </Scene>
                </Scene>
            </Router>
        );
    };
};
