import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, setShow, isActive}) => {
  //const [showItems, setShowItems] = useState(false)
  const handleClick = () => {
    //setShowItems(!showItems)
    setShowIndex();
    //setShow(!isActive);
  }

  //console.log(data);  
  return (
    <div>
        <div className="w-1/2 m-auto bg-gray-100 rounded-lg my-4 drop-shadow-lg p-4">
            {/*Header*/}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span> {showItems === false?'🔽' : '🔼'} </span>
            </div>
            <div className="flex justify-center">
                { showItems && <ItemList items={data.itemCards} /> }
            </div>
            
        </div>

      {/*content*/}
      
    </div>
  )
}

export default RestaurantCategory
