import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AuthStack from './stack/AuthStack';
import ROUTES from '../constants/routes';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={ROUTES.SPLASH}
            headerMode={Platform.select({ ios: 'float', android: 'screen' })}
            screenOptions={() => ({
                headerShown: false,
            })}>
            <Stack.Screen name={ROUTES.SPLASH} component={AuthStack} />

        </Stack.Navigator>
    );
}
