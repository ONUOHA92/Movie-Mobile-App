import React, { useState, useEffect } from "react";
import { Box, AspectRatio, Stack, Heading, HStack } from 'native-base';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    View, Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Image,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { API_KEYS, API_URL, IMAGE_URL } from "../../constants";
import { LIGHT_BLUE } from "../../constants/color";
import ROUTES from "../../constants/routes";


const Item = ({ title, backdrop_path, release_date, popularity, }) => (
    <View style={styles.title}>
        <Box >
            <Box max="80" rounded={'lg'} overflow="hidden" borderColor="coolGray.200" borderWidth={'1'}>
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{ uri: backdrop_path }} />
                </AspectRatio>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            {title}
                        </Heading>
                        <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    popopularity: {popularity}
                                </Text>
                            </HStack>
                        </HStack>
                        <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400" >
                                    Release Date: {release_date}
                                </Text>
                            </HStack>
                        </HStack>
                    </Stack>
                </Stack>
            </Box>
        </Box>

    </View>

);



function Home({ navigation }) {
    const [fetchmovie, setFetchmovie] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // console.log(fetchmovie)

    const navigateToDetails = item => {
        navigation.navigate(ROUTES.DETAIL, item);
    };
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigateToDetails(item)}>
            <Item title={item.title}
                release_date={item.release_date}
                backdrop_path={`${IMAGE_URL}/original/${item.backdrop_path}`}
                poster_path={`${IMAGE_URL}/original/${item.poster_path}`}
                popularity={item.popularity}

            />
        </TouchableOpacity>
    );

    useEffect(() => {
        getMovies()
    }, [])


    const getMovies = async () => {
        try {
            const response = await fetch(`${API_URL}movie/popular?api_key=${API_KEYS}`)
            const data = await response.json()
            setFetchmovie(data.results)
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.content}>
                <View style={{ marginTop: 20, }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: LIGHT_BLUE }}>Home</Text>
                </View>

                {isLoading ?
                    <View style={styles.indicator}>
                        <ActivityIndicator color="#8E24AA" size="large" />
                    </View>
                    : <FlatList
                        style={styles.flatList}
                        data={fetchmovie}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />}
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 12,
    },
    content: {
        marginTop: 15
    },
    flatList: {
        marginTop: 2,
        paddingHorizontal: 10,
    },
    indicator: {
        flex: 1,
        marginVertical: '70%',
        alignItems: "center",
        justifyContent: "center",
        zIndex: 20
    }

})

export default Home