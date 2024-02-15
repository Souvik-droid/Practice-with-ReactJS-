import React, { useEffect } from 'react'
import RestroCard from '../common/RestroCard'
//import resObj from '../utils/data'
import { useState } from 'react'
import { Shimmer} from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const  [filteredRestaurant, setFilteredRestaurant ] = useState(listOfRestaurants);

    const [search, setSearch] = useState("");

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    useEffect (() => {
        livedata();
    }, []);

    const livedata = async() => {
        const data = await fetch ("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D20.2960587%26lng%3D85.8245398%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
        const json = await data.json()

        console.log('data: ',json);
        setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }; 
    console.log("lor ",listOfRestaurants);
    console.log('filter', filteredRestaurant);
        
    
    
    return listOfRestaurants.length === 0 ? (
        <Shimmer />         
    )
    :   (
        <div className='body'>
            <div>
                <div className='searchFilter'>
                    <div className='search'>
                        <input 
                            className='search-box' 
                            type='text' 
                            placeholder='enter restaurant name' 
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }
                            
                        }
                        />
                        <button
                            className='search-button'
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
                            
                <button 
                    className='btn' 
                    onClick={() => {
                        //filter logic here
                        const filterList = listOfRestaurants.filter((res) => res.info.avgRating > 4 );
                        setFilteredRestaurant(filterList);
                    }}
                
                >Top rated button</button>
            </div>
                        
            <div className="hotel-container">
                {filteredRestaurant.map((restaurant) => (

                    <Link 
                        key={restaurant.info.id}
                        to={"/restaurantMenu/" + restaurant.info.id}
                        
                    >
                        <RestroCard resData={restaurant}/>
                    </Link>                   
                ))                    
                }
            </div>
        </div>
    )
}

export default Body
