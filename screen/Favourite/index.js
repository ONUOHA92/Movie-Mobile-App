import react, { useContext } from 'react';
import { View, Text, StatusBar, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Box, AspectRatio, Stack, Heading, HStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { IMAGE_URL } from "../../constants";
import { LIGHT_BLUE } from "../../constants/color";

import ROUTES from "../../constants/routes";
import { FavouriteContext } from '../../context/ContextFavourite'

function FavouritScreen({ navigation }) {
    const { data } = useContext(FavouriteContext);
    console.log(data.params, 'favorite screen')

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={{ marginTop: hp('2%'), }}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: LIGHT_BLUE }}>Favorite</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME)}>
                <AntDesign name="arrowleft" size={24} color="black" style={{ left: wp('5%') }} />
            </TouchableOpacity>

            <View style={{ marginTop: hp('5%') }}>
                <Box>
                    <Box max="80"
                        rounded={'lg'}
                        padding={3}
                        overflow="hidden"
                        borderColor="coolGray.200"
                        borderWidth={'1'}>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{ uri: `${IMAGE_URL}/original/${data.params.poster_path}` }} />
                        </AspectRatio>
                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Heading size="md" ml="-3">
                                    {data.params.title}
                                </Heading>

                            </Stack>
                        </Stack>
                        <Text style={{ color: LIGHT_BLUE }}> Overview:</Text> {""}
                        <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    {data.params.overview}
                                </Text>
                            </HStack>
                        </HStack>
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
    }
})

export default FavouritScreen;