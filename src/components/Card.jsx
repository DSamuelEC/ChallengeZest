import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Card = ({ id, name, address_1, country, city }) => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Detail', { id });
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View className='w-full bg-white rounded-3xl p-5 '>
                <View className="bg-gray-50 rounded-3xl">
                    <Image source={require('../../assets/BeerLogo.png')} className="w-full h-72 " style={{ resizeMode: "contain" }} />
                </View>
                <View className="mt-5 items-center">
                    <Text className="text-lg font-semibold">{name}</Text>
                    <Text className="text-sm text-black/60">{city}, {country}</Text>
                    {
                        address_1
                            ? <Text className="text-sm text-black/60">{address_1}</Text>
                            : <Text className="text-sm text-red-400/75">Doesn't have a direction</Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Card;

//className='w-48 h-48'

//className='w-full h-72 ' style={{resizeMode:"contain"}}