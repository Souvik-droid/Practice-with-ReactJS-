import { useState, useEffect } from "react";

const useListOfRestaurant = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(null);

    useEffect (() => {
        livedata();
    }, []);

    const livedata = async() => {
        const data = await fetch ("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D20.2960587%26lng%3D85.8245398%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
        const json = await data.json()

        console.log('data: ',json);
        setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };   

  return listOfRestaurants
}

export default useListOfRestaurant
