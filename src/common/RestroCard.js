import React from 'react'
import { CDN_URL, STAR, star } from '../utils/constants'


const RestroCard = (props) => {
    // console.log(props)
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info;

    return(
        <div className="bg-white transition duration-150 hover:ease-in hover:bg-slate-300 hover:scale-104 hover:-translate-y-1 m-4 p-1 w-56 h-[295px] rounded-2xl "> 

            <img className=' w-full max-h-36 rounded-2xl ' src={ CDN_URL+cloudinaryImageId} />
            <h3 className=' mt-1 ml-2 font-serif text-xl/[18px] font-bold text-stone-700'>{name}</h3>

            <div className='pl-2.5 flex flex-col justify-between mt-1.5'>
                <div className='flex'>
                    <img className='h-5 w-5 mix-blend-darken' src={star} />
                    <h4 className='text-lg/[12px] font-bold text-stone-700 mt-1 ml-1'>{avgRating}</h4>
                    <h4 className='text-lg/[14px] font-bold text-stone-700 mt-1 ml-3'>{resData.info.sla.deliveryTime}min</h4>
                </div>
                <h4 className='text-sm/[14px] font-semibold text-stone-500 mt-2.5 ml-1'>{cuisines.join(", ")}</h4>               
                <h4 className='text-sm/[14px] font-semibold text-stone-500 mt-2.5 ml-1'>{costForTwo}</h4>
                
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
