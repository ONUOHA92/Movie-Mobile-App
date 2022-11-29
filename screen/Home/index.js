import React, { useState, useEffect } from "react";
import { Box, AspectRatio, Stack, Heading, HStack } from 'native-base'
// import axios from "axios";
import { View, Text, Button, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { API_KEYS, API_URL, IMAGE_URL } from "../../constants";
import { LIGHT_BLUE, SECONDARY_COLOR } from "../../constants/color";



const Item = ({ title, backdrop_path, release_date, popularity }) => (
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

    const renderItem = ({ item }) => (
        <Item title={item.title}
            release_date={item.release_date}
            backdrop_path={`${IMAGE_URL}/original/${item.backdrop_path}`}
            poster_path={`${IMAGE_URL}/original/${item.poster_path}`}
            popularity={item.popularity}
        />
    );

    useEffect(() => {
        getRecipes()
    }, [])

    // &language=en-US&page=1
    const getRecipes = async () => {
        try {
            const response = await fetch(`${API_URL}movie/popular?api_key=${API_KEYS}`)
            const data = await response.json()
            setFetchmovie(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.content}>
                <View style={{ marginTop: 20, }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: LIGHT_BLUE }}>Movie Dashboard</Text>
                </View>

                <FlatList
                    style={styles.flatList}
                    data={fetchmovie}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
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
        // marginBottom: 4
    }

})

export default Home