import React from 'react';
import { View, TouchableOpacity, Button, Modal, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getByCity } from '../redux/actions';

const FilterModal = ({ onSelectCity, visible, onClose }) => {

    const allBrewerys = useSelector(state => state.allBrewerys);

    const dispatch = useDispatch();

    const handleCityChange = (city) => {
        dispatch(getByCity(city));
        onSelectCity();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>Select one city:</Text>
                    <Text> </Text>
                    <TouchableOpacity
                        className='items-center mr-5 border rounded-lg bg-gray-400 p-2'
                        onPress={onClose}
                    >
                        <Text className='text-white font-bold'>Close</Text>
                    </TouchableOpacity>
                    <Text> </Text>
                    <ScrollView style={{ maxHeight: 600 }}>
                        {allBrewerys
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((bre) => {
                                return (
                                    <View>
                                        <TouchableOpacity
                                            className='items-center mr-5 border rounded-lg bg-gray-400 p-2'
                                            key={bre.id}
                                            onPress={() => handleCityChange(`${bre.city}`)}>
                                            <Text className='text-white font-bold'>{bre.city}</Text>
                                        </TouchableOpacity>
                                        <Text> </Text>
                                    </View>
                                )
                            })}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        maxHeight: '80%',
        flex: 1,
    },
});


export default FilterModal;