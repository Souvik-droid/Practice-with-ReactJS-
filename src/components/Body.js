import React, { useEffect } from 'react'
import RestroCard from '../common/RestroCard'
//import resObj from '../utils/data'
import { useState } from 'react'

const Body = () => {

    useEffect (() => {
        livedata();
    }, [])

    const livedata = async() => {
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()

        console.log(json)
        setListOfRestaurants(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } 
    

    // let topRated = [
    //     {
    //         "info": {
    //           "id": "408185",
    //           "name": "Pizza Hut",
    //           "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
             
    //           "costForTwo": "₹300 for two",
    //           "cuisines": [
    //             "Pizzas"
    //           ],
    //           "avgRating": 4.1,
    //           "sla": {
    //             "deliveryTime": 20,
    //           },
    //         }
            
    //     },
    //     {
    //         "info": {
    //             "id": "548185",
    //             "name": "Biryani Badshah",
    //             "cloudinaryImageId": "meimzh3k9qvfdo2fe3vk",
    //             "costForTwo": "₹300 for two",
    //             "cuisines": [
    //                 "Pizzas"
    //             ],
    //             "avgRating": 3.9,
    //             "sla": {
    //                 "deliveryTime": 20,
    //             },
    //         }
    //     },
    //     {
    //         "info": {
    //           "id": "688306",
    //           "name": "Pizza Box",
    //           "cloudinaryImageId": "eff8cf705f9d8da14961091d88998168",
    //           "locality": "Chandrasekharpur",
    //           "areaName": "Patia",
    //           "costForTwo": "₹200 for two",
    //           "cuisines": [
    //             "Pizzas"
    //           ],
    //           "avgRating": 4,
    //           "feeDetails": {
    //             "restaurantId": "688306",
    //             "fees": [
    //               {
    //                 "name": "BASE_TIME"
    //               },
    //               {
    //                 "name": "BASE_DISTANC",
    //                 "fee": 7200
    //               },
    //               {
    //                 "name": "ANCILLARY_SURGE_FEE"
    //               }
    //             ],
    //             "totalFee": 7200
    //           },
    //           "parentId": "3045",
    //           "avgRatingString": "4.0",
    //           "totalRatingsString": "100+",
    //           "sla": {
    //             "deliveryTime": 47,
    //             "lastMileTravel": 5,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "47 mins",
    //             "lastMileTravelString": "5.0 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //           },
    //           "availability": {
    //             "nextCloseTime": "2023-11-05 03:00:00",
    //             "opened": true
    //           },
    //           "badges": {
                
    //           },
    //           "isOpen": true,
    //           "type": "F",
    //           "badgesV2": {
    //             "entityBadges": {
    //               "imageBased": {
                    
    //               },
    //               "textBased": {
                    
    //               },
    //               "textExtendedBadges": {
                    
    //               }
    //             }
    //           },
    //           "aggregatedDiscountInfoV3": {
    //             "header": "₹125 OFF",
    //             "subHeader": "ABOVE ₹199",
    //             "discountTag": "FLAT DEAL"
    //           },
    //           "orderabilityCommunication": {
    //             "title": {
                  
    //             },
    //             "subTitle": {
                  
    //             },
    //             "message": {
                  
    //             },
    //             "customIcon": {
                  
    //             }
    //           },
    //           "differentiatedUi": {
    //             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             "differentiatedUiMediaDetails": {
    //               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //               "lottie": {
                    
    //               },
    //               "video": {
                    
    //               }
    //             }
    //           },
    //           "reviewsSummary": {
                
    //           },
    //           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //           "restaurantOfferPresentationInfo": {
                
    //           }
    //         },
    //         "analytics": {
    //           "context": "seo-data-d6fa9e34-211d-4bd6-8197-305752bcf169"
    //         },
    //         "cta": {
    //           "link": "https://www.swiggy.com/restaurants/pizza-box-chandrasekharpur-patia-bhubaneswar-688306",
    //           "text": "RESTAURANT_MENU",
    //           "type": "WEBLINK"
    //         },
    //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    //       }
    // ]
    // console.log("pre data",topRated);

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    if(listOfRestaurants.length === 0){
        return (<div>Loading...</div>)
    }
    return(
        <div className='body'>
            <div>
                <button 
                    className='btn' 
                    onClick={() => {
                        //filter logic here
                        const filterList = resObj.filter((res) => res.info.avgRating > 4 );
                        console.log("post data",filterList);
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
