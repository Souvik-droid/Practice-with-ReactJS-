import { useState, useEffect } from "react"
import { Shimmer } from "../Shimmer"
import { MENU_API } from "../../utils/constants"
import { useParams } from "react-router-dom"

const RestaurantMenu = () => {
    const [menuItems, setMenuItems] = useState(null)
    const { resId } = useParams();              //it stores restaurant id in it.
                                                //useParam is a hook provided by react router dom to get the parameters from
    
    useEffect (() => {
        liveMenu();
    }, []);

    const liveMenu = async() => {
        const data = await fetch( MENU_API + resId);
        const json = await  data.json();
        
        console.log("Json: ", json);
        setMenuItems(json.data)
    }
    console.log('menu',menuItems);

    if (menuItems === null) return <Shimmer/>
    const {name, cuisines} = menuItems?.cards[0]?.card?.card?.info
    const {itemCards} = menuItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return (
   
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            
            <ul>
                {itemCards.map((item) => (<li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.defaultPrice/100 || item.card.info.price/100}/-</li>))}
            </ul>
            
        </div>
    )
}

export default RestaurantMenu

// {<ul>
//     {menuItems.map((item, index)=>(
//         <li key={index}></li>
//     ))}
// </ul>}
