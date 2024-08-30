import React, { useEffect } from 'react'
import RestroCard, { withPromotedLabel } from '../common/RestroCard'
import UserOnlineStatus from '../utils/UserOnlineStatus'
import { useState } from 'react'
import { Shimmer} from './Shimmer'
import { Link } from 'react-router-dom'
import { OFF_LOGO } from '../utils/constants'

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const  [filteredRestaurant, setFilteredRestaurant ] = useState(listOfRestaurants);

    const promotedCard = withPromotedLabel(RestroCard);

    const [search, setSearch] = useState("");

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    useEffect (() => {
        livedata();
    }, []);

    const livedata = async() => {
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()

        //console.log('data: ',json);
        setListOfRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }; 
    //console.log("lor ",listOfRestaurants);
    //console.log('filter', filteredRestaurant);
        
    const onlineStatus = UserOnlineStatus()
    if(onlineStatus === false)
        return (
            <div className="offline flex justify-center flex-col mt-4">
                <h1 className='font-extrabold text-6xl '>OOPS!!</h1>
                <img className='h-28 w-28 mix-blend-multiply ' src={OFF_LOGO} alt='offline' />
            </div>)
    
    
    return listOfRestaurants.length === 0 ? (

        <div className='shimmers'>

            <div className='searchFilter'>
                <div className='flex justify-center p-2.5 m-4'>                     
                    <input 
                        className='border p-4 pl-4 h-12.5 w-1/3 rounded-3xl drop-shadow-xl ring-orange-600' 
                        type='text' 
                        placeholder='enter restaurant name' 
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }
                        
                    }
                    />
                    <button
                        className='rounded-full h-12.5 w-24 ml-1 bg-gradient-to-r from-yellow-400 to-yellow-200 ring-offset-2 ring-2 ring-orange-200 drop-shadow-xl text-pink-50 font-bold text-xl/[16px]'
                        onClick={() => {      
                            
                            console.log(search)      
                            //filter out the searched list and update UI            
                            const searchFilterList = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(search) 
                            );
                            
                            setFilteredRestaurant(searchFilterList);
                        }}
                    >Search
                    </button>
                </div>
            </div>

            <div className='shimmer-container flex justify-evenly'>
                <Shimmer/> 
                <Shimmer/>  
                <Shimmer/>  
                <Shimmer/>  
                <Shimmer/>   
            </div> 
        </div>
        
    )
    :   (
        <div className='bg-[url(https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] row-span-4 flex flex-col justify-center'>
            
            <div className='searchFilter'>
                <div className='flex justify-center p-2.5 pt-4 mb-4'>                     
                    <input 
                        className='border-2 border-b-0 border-neutral-300 p-4 pl-4 h-12.5 w-1/3 rounded-3xl drop-shadow-xl ring-orange-600  mr-[2px]' 
                        type='text' 
                        placeholder='enter restaurant name' 
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }
                        
                    }
                    />
                    <button
                        className='rounded-full h-12.5 w-24 ml-1 bg-gradient-to-r from-yellow-400 to-yellow-200 ring-offset-2 ring-2 ring-orange-200 drop-shadow-xl text-pink-50 font-bold text-xl/[16px]'
                        onClick={() => {      
                            
                            console.log(search)      
                            //filter out the searched list and update UI            
                            const searchFilterList = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(search) 
                            );
                            
                            setFilteredRestaurant(searchFilterList);
                        }}
                    >Search
                    </button>
                </div>
            </div>

            <div className='flex flex-col items-center mt-12'>
                <h2 className='font-extrabold font-sans text-3xl -ml-96'>Top restaurants chain in Bhubaneswar</h2>
                
                <div className='flex self-start ml-36'>
                    <button 
                        className='Top rated   ml-8 hover:bg-transparent h-12 w-28 rounded-xl my-8 bg-yellow-500 text-zinc-100 ring-amber-700 ring-offset-2 ring-2 drop-shadow-lg backdrop-blur-sm' 
                        onClick={() => {
                            //filter logic here
                            const filterList = listOfRestaurants.filter((res) => res.info.avgRating > 4 );
                            setFilteredRestaurant(filterList);
                        }}
                    
                    >Top rated button</button>

                    <button 
                        className='PURE VEG    ml-8 hover:bg-transparent h-12 w-28 rounded-xl my-8 bg-yellow-500 text-zinc-100 ring-amber-700 ring-offset-2 ring-2 drop-shadow-lg backdrop-blur-sm' 
                        onClick={() => {
                            //filter logic here
                            const filterList = listOfRestaurants.filter((res) => res.info.sla.deliveryTime < 30 );
                            setFilteredRestaurant(filterList);
                        }}
                    
                    >Fast Delivery</button>
                </div>
                    
                

                <div className=" flex justify-center grid lg:grid-cols-4 sm:grid-cols-2 justify-items-center w-3/4 mx-44 p-2 rounded-lg">    

                    {filteredRestaurant.map((restaurant) => (

                        <Link className='flex flex-wrap ' 
                            key={restaurant.info.id}
                            to={"/restaurantMenu/" + restaurant.info.id}    
                        >
                            {
                                restaurant.info.isPromoted === true? <promotedCard resData={restaurant}/>: <RestroCard resData={restaurant}/> 
                            }
                            
                        </Link>                   
                    ))                    
                    }
                </div>
            </div>
                                    
            
        </div>
    )
}

export default Body
