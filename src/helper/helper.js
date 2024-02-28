export const helper = (allBrewerys, city) => {
    let data = [...allBrewerys];

    if (city !== '') data = data.filter(ci => ci.city.toLowerCase() === city.toLowerCase());
    return data;
};