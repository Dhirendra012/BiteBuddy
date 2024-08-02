import { useState } from "react";
import { CDN_URL } from "../utilities/contants";
import { addItem } from "../utilities/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenuInfo = ({data , show , setShowInfo}) =>
{ 
    const handleClick = () =>
    {  setShowInfo(); }

    return (
        <div>
            <div className="w-9/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
                <div className="cursor-pointer flex justify-between"
                    onClick={handleClick}
                >
                    <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                    <span>{show ? "⬆️" : "⬇️"}</span>
                </div>
                {show && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    );
}

export const ItemList = ({items}) =>
{
    const dispatch = useDispatch();

    const Add = (item) =>
    {
        dispatch(addItem(item));
    }

    return (
       <div>
        { items.map((item) => 
            <div 
                key={items?.card?.info?.id}
                className="p-2 m-2 border-gray-400 border-b-2 flex justify-between"
            >
                <div className="w-9/12 flex flex-col m-2 p-2">
                    <span className="m-1 text-left">{item.card.info.name}</span>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 m-2 p-4 h-[150px]">
                    <button 
                        onClick={() => { Add(item)}}
                        className="absolute text-bold bg-black text-white rounded-lg px-2 my-3 hover:bg-white hover:text-blue-600"
                    >Add</button>
                    <img className="h-full w-full border border-emerald-400" src={CDN_URL + item.card.info.imageId}></img>
                </div>
            </div>)
        }
       </div>
    );
};

export default RestaurantMenuInfo;

