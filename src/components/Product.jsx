import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {add,remove} from '../redux/Slices/CartSlice'
 

const Product = ({post}) => {

  const{cart} = useSelector((state)=> state);
  const dispatch  = useDispatch();

  const AddToCart = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  } 

  const RemoveFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  } 

  return (
    <div className="flex flex-col items-center justify-between border gap-3 p-4 mt-10 ml-5 rounded-xl hover:scale-110 transition-300 duration-300 ease-in hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div >
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title.split(" ").slice(0,3).join(" ")+ "..."}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
      </div>
      <div className="flex flex-row">
        <img src={post.image} className="h-[180px]" />
      </div> 
      <div className="flex flex-row justify-between gap-11 items-center w-full mt-5 ">
      <div>
        <p className="text-green-600 font-semibold ">${post.price}</p>
      </div>

      {
        cart.some((p) => p.id === post.id) ?  (<button className="text-gray-700 border-2 border-gray-700 rounded-full px-2 p-1 hover:bg-gray-700 hover:text-white transition-300 duration-300 ease-in font-semibold uppercase text-[12px] " onClick={RemoveFromCart}>Remove Item</button>) : (<button className="text-gray-700 border-2 border-gray-700 rounded-full px-2 p-1 hover:bg-gray-700 hover:text-white transition-300 duration-300 ease-in font-semibold uppercase text-[12px] " onClick={AddToCart}>Add to Cart</button>)
      }
     
    </div>

      </div>
      
  );
};

export default Product;
