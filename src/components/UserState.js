import { useEffect, useState } from "react";

const UserState = () => 
{
    const [ UserInfo , setUserInfo ] = useState("");

    useEffect(() => { fetchUser(); } , []);
    const fetchUser = async () =>
    {
        const data = await fetch("https://api.github.com/users/Dhirendra012");
        const json = await data.json();
        setUserInfo(json);
    }

    const { name , location , avatar_url } = UserInfo;

    return (
        <div className="w-[800px] mx-auto my-4 border border-blue-300 rounded-lg flex flex-col justify-center items-center">
            <img className="m-4 w-[400px] h-[400px]" src={avatar_url}></img>
            <p className="font-bold">Name : {name}</p>
            <p>Location : {location}</p>
            <p>Contact : @sliet.ac.in</p>
        </div>
    )
};

export default UserState;

