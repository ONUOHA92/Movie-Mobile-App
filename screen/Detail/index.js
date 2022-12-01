import react, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box, AspectRatio, Stack, Heading, HStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { LIGHT_BLUE } from "../../constants/color";
import { IMAGE_URL } from "../../constants";
import ROUTES from "../../constants/routes";



function DetailScreen({ navigation, route }) {
    const [data, setData] = useState([])
    useEffect(() => {
        getData()

    }, []);





    const navigateToFavoourite = data => {
        navigation.navigate(ROUTES.FAVOURITE, data);
    };

    const storeData = async () => {
        try {
            const value = JSON.stringify(route);
            AsyncStorage.setItem('@movie', value)
        } catch (error) {
            console.log(error)
        }
    }

    const getData = async () => {
        try {

            const info = await AsyncStorage.getItem('@movie')
            setData(JSON.parse(info))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={{ marginTop: hp('2%'), }}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: LIGHT_BLUE }}>Overview</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME)}>
                <AntDesign name="arrowleft" size={24} color="black" style={{ left: wp('5%') }} />
            </TouchableOpacity>


            <View style={{ marginTop: hp('3%') }}>
                <Box>
                    <Box max="80"
                        rounded={'lg'}
                        padding={3}
                        overflow="hidden"
                        borderColor="coolGray.200"
                        borderWidth={'1'}>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{ uri: `${IMAGE_URL}/original/${route.params.poster_path}` }} />
                        </AspectRatio>
                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Heading size="md" ml="-3">
                                    {route.params.title}
                                </Heading>

                            </Stack>
                        </Stack>
                        <Text style={{ color: LIGHT_BLUE }}> Overview:</Text>
                        <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    {route.params.overview}
                                </Text>
                            </HStack>
                        </HStack>



                        <View style={styles.Favorite}>
                            <TouchableOpacity onPress={storeData}>
                                <AntDesign name="save" size={24} color="green" />
                                <Text>Favorite</Text>
                            </TouchableOpacity>

                            <View>
                                <AntDesign name="delete" size={24} color="red" />
                                <Text>Delete</Text>
                            </View>

                        </View>

                        <TouchableOpacity style={styles.center} onPress={() => navigateToFavoourite(data)}>
                            <Text>Favorite</Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    Favorite: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: hp('1%')
    },
    center: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: hp('2%'),
        width: wp('90%'),
        height: 45,
        backgroundColor: 'red'
    }
})

export default DetailScreen;