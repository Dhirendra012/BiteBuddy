import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./RestaurantMenuInfo";
import { clearCart } from "../utilities/cartSlice";

const Cart = () => 
{
    const cartItems = useSelector((store) => store.cart.item);
    const dispatch = useDispatch();

    const handleClick = () => 
    { dispatch( clearCart() )}

    return (
        <div className="w-6/12 m-auto py-10">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-2xl">Cart</h1>
                <button className="w-[200px] font-bold text-xl bg-black text-white align-middle p-2 rounded-lg" onClick={handleClick}>ClearCart</button>
            </div>
            <ItemList items={cartItems}/>
        </div>
    );
}

export default Cart;