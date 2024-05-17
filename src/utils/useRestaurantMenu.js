import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    //fetching data
    const [menuItems, setMenuItems] = useState(null);
    useEffect (() => {
        liveMenu();
    }, []);
    const liveMenu = async() => {
        const data = await fetch( MENU_API + resId);
        const json = await  data.json();
        
        console.log("Json: ", json);
        setMenuItems(json.data)
    }
    return menuItems;
}

export default useRestaurantMenu