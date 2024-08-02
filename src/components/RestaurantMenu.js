import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import RestaurantMenuInfo from "./RestaurantMenuInfo";
import { useState } from "react";

const RestaurantMenu = () =>
{
    const { resId } = useParams();

    const [ showItem , setShowInfo ] = useState(null);

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null){ return <ShimmerUI/>; }

    

    const { name , cuisines } = resInfo?.cards[2]?.card?.card?.info;

    const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(category);

    return (
        <div className="text-center ">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="text-bold text-lg">{cuisines.join(", ")}</p>

            {   category.map((menu ,index) =>  <RestaurantMenuInfo key={menu?.card?.info?.id} 
                data={menu?.card?.card} 
                show={index === showItem ? true : false} 
                setShowInfo={() => setShowInfo(index === showItem ? null : index)}/> )
            }
        </div>
    )
}

export default RestaurantMenu;