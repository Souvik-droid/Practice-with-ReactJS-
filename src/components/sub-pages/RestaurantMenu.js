import { Shimmer } from "../Shimmer"
import { useParams } from "react-router-dom"
//import MenuCard from "../../common/MenuCard"
import useRestaurantMenu from "../../utils/useRestaurantMenu"
import RestaurantCategory from "../RestaurantCategory"
import { useState } from "react"

const RestaurantMenu = () => {

    const { resId } = useParams();              //it stores restaurant id in it.
                                                //useParam is a hook provided by react router dom to get the parameters from
    const menuItems = useRestaurantMenu(resId);
    console.log('menu',menuItems);

    const [showIndex, setShowIndex] = useState(null);
    const [show, setShow] = useState();

    if (menuItems === null) return <Shimmer/>
    const {name, cuisines} = menuItems?.cards[2]?.card?.card?.info
    const {itemCards} = menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c=> c.card?.card?.['@type'] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ); 

    console.log("categories: " , categories);
    return (
   
        <div className="restaurant-menu bg-[url(https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] ">
            <h1 className=" text-4xl font-extrabold font-serif ml-48 pt-6">{name}</h1>
            <p className="text-2xl font-semibold ml-52 mb-10">{cuisines.join(", ")}</p>
            {/**categories accordian */}
            {categories.map((category, index) => (
                <RestaurantCategory 
                    key={category?.card?.card.title} 
                    data={category?.card?.card}
                    showItems = {index === showIndex ? true:false}                           // authority to command accordian to show its items or not
                    //setShow={showIndex}
                    setShowIndex = {() => setShowIndex(index)}                          //Controlled component => sending the useState to child omponent(Restaurant Category) so it can recieve the index of the accordian cliked to the parent component
                />
            ))}            
            
        </div>
    )
}

export default RestaurantMenu

// {<ul>
//     {menuItems.map((item, index)=>(
//         <li key={index}></li>
//     ))}
// </ul>}
//(<li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.defaultPrice/100 || item.card.info.price/100}/-</li>)

// {itemCards.map((item) => (
//     <MenuCard key = {item.card.info.id} menu = {item} />
//     ))
// }