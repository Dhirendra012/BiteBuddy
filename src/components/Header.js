import { LOGO_URL } from "../utilities/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utilities/useStatus";
import { useDispatch, useSelector } from "react-redux";
import { setGlowBtn } from "../utilities/featureSlice";

const Header = () => 
{
    const [ btnName , setbtnName ] = useState("Login");

    //Subscribing to th store using Selector
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.item);
    const glowBtn = useSelector((store) => store.feature.glowBtn);
    // console.log(cartItems);
    // console.log(glowBtn);
    return (
        <div className="flex justify-between bg-slate-300 py-5 align-middle items-center shadow-lg">
            <div className="logo-container">
                <img className="w-[50px] mx-10 my-1" src = { LOGO_URL } />    
            </div>
            <div className="font-bold text-black">
                <ul className="flex mx-16 gap-7" onClick={(e) => dispatch(setGlowBtn(e.target.innerText))}>
                    {/* <li className="hover:text-orange-500 cursor-pointer py-2">User Status : { useStatus ? "🟢" : "🔴" }</li> */}
                    <li className="hover:text-orange-500 cursor-pointer my-2"><Link to="/" className={(glowBtn == 'Home') ? "border-b-4 border-orange-500" : ""}>Home</Link></li>
                    <li className="hover:text-orange-500 cursor-pointer my-2"><Link to="/about" className={(glowBtn == 'About Us') ? "border-b-4 border-orange-500" : ""}>About Us</Link></li>
                    <li className="hover:text-orange-500 cursor-pointer my-2"><Link to="/contact" className={(glowBtn == 'Contact US') ? "border-b-4 border-orange-500" : ""}>Contact US</Link></li>
                    <li className="hover:text-orange-500 cursor-pointer my-2"><Link to="/cart" className={(glowBtn == '(' + cartItems.length + ')') ? "border-b-4 border-orange-500" : ""}><i class="fa-solid fa-cart-shopping"></i>({cartItems.length})</Link></li>
                    <li className="hover:text-orange-500 cursor-pointer my-2"><Link to="/login" className={(glowBtn == 'Sign In') ? "border-b-4 border-orange-500" : ""}>Sign In</Link></li>
                    {/* <button className="hover:text-orange-500 cursor-pointer hover:bg-slate-400 p-2 rounded-lg"
                        onClick = {() => { (btnName === "Login") ? setbtnName("Logout") : setbtnName("Login")}}
                    >{btnName}</button> */}
                </ul> 
            </div>
        </div>  
    )
}

export default Header;