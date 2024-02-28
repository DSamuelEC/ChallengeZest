import React, { useEffect, useState } from "react";
import { Text, FlatList, View, TouchableOpacity } from "react-native";
import { useSelector } from 'react-redux'
import Card from "./Card";
import SearchBar from "./SearchBar";
import FilterModal from "./FilterModal";
import { helper } from "../helper/helper";
import ButtonReset from './ButtonReset';

const Cards = () => {

    const {
        allBrewerys,
        city,
        // page
    } = useSelector(state => state);

    const [modalVisible, setModalVisible] = useState(false);

    const [allBreData, setAllBreData] = useState([...allBrewerys]);

    const handleSelectCity = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        const data = helper(allBrewerys, city);
        setAllBreData(data);
    }, [allBrewerys, city]);

    return (
        <View>
            <SearchBar />
            <View className='flex-row justify-around p-5'>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    className='items-center mr-5 border rounded-lg bg-gray-400 p-2'
                >
                    <Text className='text-white font-bold'>Filter By City</Text>
                </TouchableOpacity>
                <FilterModal
                    visible={modalVisible}
                    onSelectCity={handleSelectCity}
                    onClose={() => setModalVisible(false)}
                />
                <ButtonReset />
            </View>
            {
                allBreData[0]
                    ? <FlatList
                        data={allBreData}
                        ItemSeparatorComponent={() => <Text> </Text>}
                        renderItem={({ item }) => (
                            <Card {...item} />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                    />
                    :
                    <View className='flex-1 justify-center items-center'>
                        <Text className="text-sm text-red-600">No results</Text>
                    </View>
            }
        </View>
    )
};

export default Cards;



// PAGES:
// import { setPage } from "../redux/actions";
// import { useDispatch } from 'react-redux';
// const dispatch = useDispatch();
// const nextPage = () => {
    //     dispatch(setPage(page + 1));
    // }
    
// const preciousPage = () => {
//     dispatch(setPage(Math.max(page - 1, 0)));
// }

// const num = 10;
// const start = page * num;
// const end = start + num;
// const totalPages = Math.ceil(allBreData.length / num);
// initialNumToRender = { num }
// maxToRenderPerBatch = { num }
//     < View >
//                 <Button title="Anterior" onPress={preciousPage} disabled={page === 0} />
//                 <Button title="Siguiente" onPress={nextPage} disabled={page === totalPages - 1} />
//             </View >