import { CDN_URL } from "../utilities/contants";

const RestaurantCard = (props) =>
{
    const { resData } = props;
    const { name , cuisines , avgRating ,sla } = resData?.info;

    return (
        <div className="border m-4 p-4 bg-blue-200 border-spacing-2 rounded-lg">
            <img className="w-[200px] h-[150px] rounded-lg my-1" src={ CDN_URL + resData.info.cloudinaryImageId} />
            <h3 className="truncate font-bold">{name}</h3>
            <h4 className="truncate">{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
}

export const WithPromotedLabel = (props) =>
{
    const { resData } = props;

    return (
        <div className="">
            <label className="p-2 my-8 mx-10 text-sm absolute bg-black text-white rounded-lg"> Open </label>
            <RestaurantCard resData={resData} />
        </div>
    );
}


// Higher Order Component takes a component and Enhances it and return it
// I dont know why its not working this time 
// Thats why I am using other simple component 
// export const WithPromotedLabel = (RestaurantCard) =>
// {
//     return (props) => {
//         return (
//             <div>
//                 <label className="m-2 p-2 absolute bg-black text-white rounded-lg"> Open </label>
//                 <RestaurantCard {...props} />
//             </div>
//         )
//     }
// }

export default RestaurantCard;