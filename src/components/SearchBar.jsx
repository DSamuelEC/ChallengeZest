import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { getByName } from "../redux/actions";
import { useDispatch } from "react-redux";

const SearchBar = () => {

    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const onSearch = () => {
        dispatch(getByName(search))
        setSearch('')
    };

    return (
        <View className='flex-row items-center pt-10'>
            <TextInput
                className='flex-1 mr-5 border border-gray-500 rounded-lg p-1'
                placeholder="Search..."
                value={search}
                onChangeText={setSearch}
            />
            <TouchableOpacity
                className='items-center mr-5 border rounded-lg bg-gray-400 p-2'
                onPress={onSearch}
            >
                <Text className='text-white font-bold'>Search</Text>
            </TouchableOpacity>

        </View>
    );
};

export default SearchBar;