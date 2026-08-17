import { useState } from "react";
import "./App.css";
import image from "./assets/image.png";
import { products } from "./data/products";

function App() {
  let [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setPrice(prev => prev + product.price);
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quant: item.quant + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quant: 1
        }
      ]);
    }
  }

  function quantityFnctn(str, product) {
    if (str === 'minus') {
      if (product.quant > 1) {
        setCart(
          cart.map(item => {
            if (item.id === product.id) {
              setPrice(prev => prev - product.price)
              return {
                ...item,
                quant: item.quant - 1
              };
            }
            return item;
          })
        )
      }
      else {
        setPrice(prev => prev - product.price)
        setCart(cart.filter(item => item.id !== product.id));
      }
    }
    else {
      setPrice(prev => prev + product.price)
      setCart(
        cart.map(item => {
          if (item.id === product.id) {
            return {
              ...item,
              quant: item.quant + 1
            };
          }
          return item;
        })
      )
    }
  }

  function card(product) {
    return (
      <>
        <div className='card w-72 transition delay-25 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 my-4 mx-10 px-1 py-1'>
          <ImageBox src={product.image} alt='Shoe 1' />
          <div className='description text-center h-40 px-2 py-2 gap-y-4 rounded-t-none rounded-b-xl  bg-[#d9c199]'>
            <p className='info'>
              <b>{product.name}</b>
            </p>
            <p>${product.price}</p>
            <button
              onClick={() => {
                addToCart(product)
              }}
              className='cursor-pointer hover:bg-[#937450] rounded-xl px-2 py-1 my-1 mx-1 border-2 border-black'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </>
    );
  }

  function ImageBox({ src, alt }) {
    return (
      <div className='w-70 h-72 overflow-hidden  rounded-t-xl rounded-b-none'>
        <img src={src} alt={alt} className='w-full h-full object-cover' />
      </div>
    );
  }

  return (
    <>
      <div className='header w-full h-20 gap-x-6 bg-[#f6f6f6] p-2 mx-0 justify-items-start flex-row flex'>
        <img src={image} width={"6%"}></img>
        <button className='cursor-pointer'>Home</button>
        <button className='cursor-pointer'>Categories</button>
        <button className='cursor-pointer'>About Us</button>
      </div>

      {/* Main */}
      <div className='grid md:grid-cols-6 h-screen w-full main'>
        {/* left */}
        <div className='bg-blue-500 md:col-span-4 gap-4 grid-cols-2 grid overflow-y-auto scrollbar-thumb-sky-700 scrollbar-track-sky-100 scroll-smooth h-screen left'>
          {products.map((element) => (
            <div key={element.id}>
              {card(element)}
            </div>
          ))}
        </div>
        <div className=' md:col-span-2 overflow-y-auto scroll-smooth h-screen right'>
          <div className='cart-box border-2 border-black rounded-xl p-4 my-5 gap-y-4  mx-5 bg-[#f6f6f6]'>
            <h3>
              <b>Cart</b>
            </h3>
            <div className='cart-list'>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border-2 m-2 p-3 flex items-center justify-between"
                >
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />

                    <div className="flex flex-col">
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="font-bold text-gray-700">${item.price}</p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center p-1 gap-2">
                    <button onClick={() => {
                      quantityFnctn('minus', item)
                    }} className="cursor-pointer  bg-[#d9c199] rounded-xl w-8 h-8 ">-</button>

                    <span className="w-6 text-center font-semibold">
                      {item.quant}
                    </span>

                    <button onClick={() => {
                      quantityFnctn('add', item)
                    }} className="w-8 h-8 cursor-pointer bg-[#d9c199] rounded-xl ">+</button>
                  </div>
                </div>
              ))}
            </div>

            <div className='flex justify-self-center amt my-2'>
              <h3 className="font-medium">
                <b>Total : ${price}</b>
              </h3>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
