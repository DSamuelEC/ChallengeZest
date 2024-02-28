import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { cleanDetail, getById } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

const Detail = ({ route }) => {

    const { id } = route.params;

    const dispatch = useDispatch();

    const brewery = useSelector(state => state.brewery);

    const handleRedirect = async () => {
        const url = brewery.website_url;
        const response = await Linking.canOpenURL(url);

        response ? await Linking.openURL(url) : console.error("No se puede abrir el enlace.")
    };

    useEffect(() => {
        dispatch(getById(id));
        return () => dispatch(cleanDetail());
    }, [])

    return (
        <View className='w-full bg-white rounded-3xl p-5 '>
            <View className="bg-gray-50 rounded-3xl">
                <Image source={require('../../assets/BeerLogo.png')} className="w-full h-72 " style={{ resizeMode: "contain" }} />
            </View>
            <View className="mt-5 items-center">
                <Text className="text-lg font-semibold">{brewery.name}</Text>
                <Text className="text-sm text-black/60">Type: {brewery.brewery_type}</Text>
                <Text className="text-sm text-black/60">{brewery.city}, {brewery.state}, {brewery.country}</Text>

                {
                    brewery.address_1
                        ? <Text className="text-sm text-black/60">{brewery.address_1}</Text>
                        : <Text className="text-sm text-red-400/75">Doesn't have a direction</Text>
                }
                {
                    brewery.address_2 && <Text className="text-sm text-black/60">{brewery.address_1}</Text>
                }
                {
                    brewery.address_3 && <Text className="text-sm text-black/60">{brewery.address_1}</Text>
                }

                {
                    brewery.phone
                        ? <Text className="text-sm text-black/60">Phone: {brewery.phone}</Text>
                        : <Text className="text-sm text-red-400/75">Doesn't have a phone</Text>
                }

                {
                    brewery.website_url
                        ? <TouchableOpacity onPress={handleRedirect} className='flex-row'>
                            <Text className="text-sm text-black/60">Website: </Text>
                            <Text className="text-sm text-blue-600">{brewery.website_url}</Text>
                        </TouchableOpacity>
                        : <Text className="text-sm text-red-400/75">Doesn't have a website</Text>
                }

            </View>
        </View>
    );
};

export default Detail;