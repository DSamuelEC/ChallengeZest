import React from "react";
import { Text, TouchableOpacity, Button } from "react-native";
import { buttonReset, getBrewerys } from "../redux/actions";
import { useDispatch } from "react-redux";

const ButtonReset = () => {

    const dispatch = useDispatch();


    const handleReset = () => {
        dispatch(buttonReset());
        dispatch(getBrewerys());
    };

    return (
        <TouchableOpacity
            className='items-center mr-5 border rounded-lg bg-gray-400 p-2'
            onPress={() => handleReset()}
        >
            <Text className='text-white font-bold'>Reset FIlters</Text>
        </TouchableOpacity>
    );
}

export default ButtonReset;