import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import { DESKTOP } from "../utilities/contants";


const Body = () => {
    // -> Local state variable - Very Powerful
    const [resList, setreslist] = useState([]);

    const [filterList, setFilterList] = useState([]);

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => { fetchData(); }, []);

    // Fetching API
    const fetchData = async () => {
        const data = await fetch(DESKTOP);
        const json = await data.json();
        setFilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setreslist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return (resList.length === 0) ? <ShimmerUI /> : (
        <div className="">
            <div className="flex items-center justify-evenly font-bold">
                <div className="m-4 flex">
                    <input className="border w-[300px] border-black rounded-lg mx-4 px-3"
                        type="text" value={searchValue}
                        onChange={(e) => { setSearchValue(e.target.value); }}
                    />


                    {/*  --> Change at every single character
                    <input 
                    type="text" className="SearchValue" value={searchValue}
                    onChange={ (e)=>{ setSearchValue(e.target.value); 
                        setFilterList(resList.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase()))); }
                    }/> */}

                    <button className="bg-black rounded-lg text-white p-2 hover:text-gray-800 hover:bg-slate-300"
                        onClick={() => {
                            setFilterList(resList.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase())));
                        }}
                    > Search</button>
                </div>

                <div>
                    <button className="bg-black rounded-lg text-white p-2  hover:text-gray-800 hover:bg-slate-300"
                        onClick={() => {
                            // const res = resArr.filter((res) => res.info.avgRating > 4);
                            setFilterList(filterList.filter((res) => res.info.avgRating > 4.5));
                        }}
                    > Top Rated Restaurant </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center">
                {
                    filterList.map((restuarant) =>
                        <Link className="w-[250px] m-3" key={restuarant.info.id} to={"/restaurants/" + restuarant.info.id}>
                            {restuarant.info.isopen ? (<RestaurantCard resData={restuarant} />) : (<WithPromotedLabel resData={restuarant} />)}
                        </Link>)
                }
            </div>
        </div>
    );
}

export default Body;