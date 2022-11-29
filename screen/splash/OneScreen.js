import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides, } from '../../constants/index'
import { WHITE } from '../../constants/color'
import ROUTES from '../../constants/routes';



export default class SPlash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showRealApp: false,
        }
    }
    _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <View style={{ backgroundColor: item.backgroundColor, flex: 1 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image source={item.image} style={{ resizeMode: 'cover', height: "50%", width: '100%' }} />
                    <Text style={styles.text}>{item.text}</Text>
                </View>

            </View>
        );
    }
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
        this.props.navigation.navigate(ROUTES.HOME);
    }

    render() {
        if (this.state.showRealApp) {
            return < SPlash />;
        } else {
            return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} />;
        }
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        marginTop: 20
    },
    title: {
        padding: 20,
        color: WHITE,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        padding: 20,
        color: WHITE,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})