import React from 'react'
import { CDN_URL, STAR } from '../utils/constants'


const RestroCard = (props) => {
    // console.log(props)
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info;

    return(
        <div className="transition duration-150 hover:ease-in hover:bg-slate-300 hover:w-[218px] hover:h-[315px] m-2.5 p-1 w-56 h-80 rounded-lg  bg-slate-50 "> 

            <img className=' w-full max-h-36 rounded-2xl' src={ CDN_URL+cloudinaryImageId} />
            <h3 className=' mt-1 ml-2 font-serif text-xl/[18px] font-bold text-stone-700'>{name}</h3>

            <div className='pl-2.5 flex flex-col justify-between mt-1.5'>
                <h4 className='text-sm/[14px] font-semibold text-stone-500 mt-2.5 ml-1'>{cuisines.join(", ")}</h4>               
                <h4 className='text-sm/[14px] font-semibold text-stone-500 mt-2.5 ml-1'>{avgRating}</h4>
                <h4 className='text-sm/[14px] font-semibold text-stone-500 mt-2.5 ml-1'>{costForTwo}</h4>
                <h4 className='text-sm/[14px] font-semibold text-stone-500 mt-2.5 ml-1'>{resData.info.sla.deliveryTime} min</h4>
            </div>
        </div>
    )
}

export const withPromotedLabel = (RestroCard) => {
    return(props) => {
        return(
            <div>
                <RestroCard {...props}/>
            </div>
        )
    }
}

export default RestroCard
