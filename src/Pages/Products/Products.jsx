import React, { useState } from "react";
import { categories, cartItems, items } from "../../constant/route";
import "./Products.css";
import { getProducts } from "../../API";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlinePrinter } from "react-icons/ai";

const Products = () => {
  const [categorize, setCategorize] = useState(categories);
  const [active, setActive] = useState("");

  const handleChooseCategory = (c, t) => {
    setActive(t);
    const filtered = items.filter((item) => item.category === c);
    setCategorize(filtered);
  };
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCardIndex(index);
  };
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
    { id: 6, name: "Product 6", price: 60 },
  ]);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      price: 0,
    };
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (productId) => {
    // Logic to handle editing a product
    console.log(`Editing product with ID: ${productId}`);
  };

  const handleRemoveProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div class="flex xl:flex-row lg:flex-row flex-col w-full p-4 gap-5">
      <div class="flex-[2.8] flex-col">
        {/* search button */}
        <div className="border-[1px] rounded-md border-gray-300 w-[50%] flex items-center p-[1px] gap-2">
          <FaMagnifyingGlass className="ml-1 text-[#8d8b8b]" />
          <input
            className="w-full focus:outline-none border-none bg-transparent text-[#8d8b8b] placeholder:text-[#8d8b8b]"
            type="text"
            placeholder="Search Menu.."
          />
        </div>

        {/* categories */}
        <div className="flex w-full gap-3 mt-[15px]">
          {categories &&
            categories.map((category, index) => (
              <div
                onClick={() =>
                  handleChooseCategory(category.title, category.title)
                }
                key={index}
                className={`${
                  active === category.title
                    ? "text-[#539e5a] bg-[#f0faee]"
                    : "text-gray-600"
                } hover:bg-[#ebebeb] cursor-pointer border-[.5px] border-gray-100 bg-white shadow-md p-2 rounded-full flex gap-2 items-center`}
                // className="hover:bg-[#ebebeb] cursor-pointer border-[.5px] border-gray-100 bg-white shadow-md p-2 rounded-full flex gap-2 items-center"
              >
                <img src={category.img} alt="" className="w-[40px] h-[40px]" />
                <p className="hidden md:flex text-[12px]">{category.title}</p>
              </div>
            ))}
        </div>

        {/* menu items */}
        <div class="bg-white mt-[25px] flex flex-wrap justify-start gap-[15px]">
          {/* each card */}
          {categorize.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-2 hover:bg-[#f1f1f1] max-w-[170px] cursor-pointer border-gray-100 "
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(null)}
            >
              {hoveredCardIndex === index && (
                <div className="z-[2] absolute top-[30%] left-[37%] bg-transparent flex justify-center items-center">
                  <AiFillPlusCircle
                    className="text-5xl text-[#64cc50] shadow-xl"
                    title="Add to cart"
                  />
                </div>
              )}
              <img
                src={item.img}
                alt={item.img}
                className="group-hover:brightness-50 z-[1] w-full h-[170px] group-hover:scale-105 duration-150 ease-in-out"
              />
              <p className="mt-[10px] font-bold group-hover:text-[#539e5a]">
                {item.name}
              </p>
              <div className="flex justify-between mt-1">
                <p className="text-[12px] ">₱ {item.price}</p>
                <p className="text-[12px]">{item.quantity} items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* right section */}
      <div class="flex-[1.2] rounded-md bg-[#f1f1f1] shadow-md border-[1px] border-gray-100 relative h-[90%]">
        <div className="flex m-3 items-center gap-2">
          <BsCart3 />
          <h1>Fill your Cart now</h1>
        </div>
        <hr className="h-[1px] bg-gray-200 w-full"></hr>

        {/* cards */}
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="group flex justify-between m-4 rounded-lg"
          >
            {/* \left */}
            <img
              src={item.img}
              alt=""
              className="h-[60px] w-[60px] rounded-lg"
            />

            {/* right */}
            <div className="flex-col mt-2 justify-end">
              <p>{item.name}</p>
              <p>Quantity</p>
            </div>
            <div className="flex-col mt-2 justify-end">
              <p>{item.price}</p>
              <p className="text-center">{item.quantity}</p>
            </div>
          </div>
        ))}

        {/* <hr className="h-[1px] bg-gray-200 w-full"></hr> */}
        <div className="w-full">
          <table className="bg-gray-200 w-full">
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th> Price</th>
            </tr>
            <tr>
              <td className="text-center">Tosilog</td>
              <td className="text-center">2</td>
              <td className="text-center">$360.00</td>
            </tr>
            <tr>
              <td className="text-center">Tosilog</td>
              <td className="text-center">2</td>
              <td className="text-center">$170.00</td>
            </tr>
            <tr>
              <td className="text-center">Tosilog</td>
              <td className="text-center">2</td>
              <td className="text-center">$360.00</td>
            </tr>
            <tr></tr>
            <tr>
              <td className="text-center"></td>
              <td className="text-center font-bold">Total</td>
              <td className="text-center">$490.00</td>
            </tr>
            <tr>
              <td></td>
              <td className="flex items-center">
                <AiOutlinePrinter />
                Print Bill
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
