import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../../screen/splash';
import HomeScreen from '../../screen/Home';
import ROUTES from '../../constants/routes';



const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName={ROUTES.SPLASH}
            headerMode={Platform.select({ ios: 'float', android: 'screen' })}
            screenOptions={() => ({
                headerTitle: '',
                headerBackTitleVisible: false,
                headerShown: false,
            })}>
            <Stack.Screen name={ROUTES.SPLASH} component={SplashScreen} />
             <Stack.Screen name={ROUTES.HOME} component={HomeScreen} /> 

        </Stack.Navigator>
    );
}
