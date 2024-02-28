import React from "react";
import { useDispatch } from "react-redux";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useEffect } from "react";
import { getBrewerys } from "../redux/actions";
import Cards from "../components/Cards";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrewerys());
  }, [])

  return (
      <View className='flex-1 items-center justify-center bg-gray-200 w-full'>
        <Cards />
        <StatusBar style="auto" />
      </View>
  );
}

export default Home;
