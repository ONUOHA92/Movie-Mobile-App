import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import OneScreen from "./OneScreen";

function SplashScreen({ navigation }) {
    return (

        <View style={styles.container}>
            <StatusBar />
            <OneScreen navigation={navigation} />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        width: '100%'
    },
    mainContent: {
        marginTop: 20
    }
})

export default SplashScreen