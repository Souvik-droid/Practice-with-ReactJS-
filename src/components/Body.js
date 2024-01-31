import React, { useEffect } from 'react'
import RestroCard from '../common/RestroCard'
//import resObj from '../utils/data'
import { useState } from 'react'
import { Shimmer} from './Shimmer'

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [search, setSearch] = useState("");

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    useEffect (() => {
        livedata();
    }, []);

    const livedata = async() => {
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()

        console.log('data: ',json);
        setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("lor ",listOfRestaurants);
        
    }; 
    const temperaryList = listOfRestaurants;
    
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
                                const searchFilterList = temperaryList.filter((res) =>
                                    res.info.name.toLowerCase().includes(search) 
                                );
                                
                                setListOfRestaurants(searchFilterList);
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
                        setListOfRestaurants(filterList);
                    }}
                
                >Top rated button</button>
            </div>
                        
            <div className="hotel-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestroCard key={restaurant.info.id} resData={restaurant}/>                    
                    ))                    
                }
            </div>
        </div>
    )
}

export default Body
