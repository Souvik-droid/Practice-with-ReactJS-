import { CDN_URL } from "../utils/constants.js";
import { VEG, NON_VEG } from "../utils/icons.js";

const ItemList = ({items}) => {
  console.log("itemList items",items);
  return (
    <div>
      
        {items.map((item) => (
            
            <div key={item.card.info.id} className='border-gray-300  border-b-2 flex justify-between m-2  p-1 items-center py-3 w-11/12 '>
                
                <div className=' w-[400px] h-auto leading-relaxed ml-1'>
                    <div className='h-4 w-4'>{item.card.info.isVeg ===1 ? <img src={VEG} alt="Veg"/> :
                        <img src={NON_VEG} alt="Non Veg"/>}
                    </div>
                    
                    <span className="'text-2xl font-bold font-momo">{item.card.info.name}</span>
                    <span className='text-base'> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                    <p className='text-gray-500 text-sm mt-2.5 mr-1'>{item.card.info.description}</p>
                </div>
                <div className="">
                <div className="absolute "><button className=" mx-12 p-0.5 my-20 bg-black text-white rounded-lg font-mono font-semibold">Add+</button></div>
                    <img className='h-auto w-24 rounded-lg mt-1 ml-5' src={ CDN_URL+item.card.info.imageId} />
                    
                </div>
                
            </div>
      ))}
      
    </div>
  );
};

export default ItemList

// <div className='flex justify-center m-0'>
//         <div className='flex border-t border-gray-300 mt-1 justify-between items-center p-3 w-8/12 h-auto leading-relaxed'>
//             <div className='menu-content'>
//                 <div className='h-4 w-4'>{isVeg ===1 ? <img src={VEG} alt="Veg"/> :
//                    <img src={NON_VEG} alt="Non Veg"/>}
//                 </div>

//                 <div className='text-2xl  font-bold font-momo '>{name}</div>
//                 <div className='text-base'> ₹{defaultPrice/100 || price/100}/-</div>
//                 <div className='text-gray-500 text-sm mt-2.5 '>{description}</div>
//             </div>
        
//             <img className='h-24 w-24 rounded ml-2' src={ CDN_URL+imageId} />
//         </div>
//     </div>
