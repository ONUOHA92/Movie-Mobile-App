import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import Colors from '../constants/color';


export default function TabBarIcon(props) {
    return (
        <Ionicons
            name={props.name}
            size={24}
            style={styles.margin}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}

export function TabBarIconMd(props) {
    return (
        <MaterialCommunityIcons
            name={props.name}
            size={24}
            style={styles.margin}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}

const styles = StyleSheet.create({
    margin: {
        marginBottom: 1,
    },
});
