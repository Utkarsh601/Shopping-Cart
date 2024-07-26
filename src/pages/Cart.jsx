import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState , useEffect } from "react";

const Cart = () => { 
  const {cart} = useSelector((state) => state)
  const[totalAmount , setTotalAmount] = useState(0);

  useEffect(()=> {
    setTotalAmount(cart.reduce((acc,curr) => acc+curr.price,0));
  } , [cart])
  return (<div className="p-4">
    {
      cart.length > 0 ? (
        <div className="space-y-4">
          <div className="space-y-4">
            {
              cart.map((item, index) => {
                return (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                )
              })
            }
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <div className="text-xl font-bold mb-2">Your Cart</div>
            <div className="text-lg font-semibold">Summary</div>
            <p className="mt-2">
              <span className="font-medium">Total Items: {cart.length}</span>
            </p>
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <p className="text-lg font-semibold">Total Amount: ${totalAmount}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700">
              Check Out
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Cart is Empty</h2>
          <NavLink to="/">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Shop Now
            </button>
          </NavLink>
        </div>
      )
    }
  </div>);

  
};

export default Cart;
