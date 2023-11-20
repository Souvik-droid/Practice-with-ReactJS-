import React from 'react'
import { CDN_URL } from '../utils/constants'


const RestroCard = (props) => {
    // console.log(props)
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info;

    return(
        <div className="card">
            <img className='cardImg' src={ CDN_URL+cloudinaryImageId} />
            <div className='cardContent'>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>               
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{resData.info.sla.deliveryTime} min</h4>
            </div>
        </div>
    )
}

export default RestroCard
