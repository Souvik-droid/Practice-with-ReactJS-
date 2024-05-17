import React from 'react'
import { CDN_URL } from '../utils/constants';
import { NON_VEG, VEG } from '../utils/icons';

const MenuCard = (prop) => {
    console.log(prop);
    const { menu } = prop;
    const {id, name, imageId, avgRating, costForTwo, defaultPrice, price, description, isVeg} = menu?.card?.info;
  return (
    <div className='flex justify-center m-0'>
        <div className='flex border-t border-gray-300 mt-1 justify-between items-center p-3 w-8/12 h-auto leading-relaxed'>
            <div className='menu-content'>
                <div className='h-4 w-4'>{isVeg ===1 ? <img src={VEG} alt="Veg"/> :
                   <img src={NON_VEG} alt="Non Veg"/>}
                </div>

                <div className='text-2xl  font-bold font-momo '>{name}</div>
                <div className='text-base'> ₹{defaultPrice/100 || price/100}/-</div>
                <div className='text-gray-500 text-sm mt-2.5 '>{description}</div>
            </div>
        
            <img className='h-24 w-24 rounded ml-2' src={ CDN_URL+imageId} />
        </div>
    </div>
    
  )
}

export default MenuCard

//(<li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.defaultPrice/100 || item.card.info.price/100}/-</li>)
