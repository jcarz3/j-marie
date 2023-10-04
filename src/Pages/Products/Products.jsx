import React, { useEffect, useState } from "react";
import { categories, cartItems, items } from "../../constant/route";
import "./Products.css";
import { Button, Flex } from "@fluentui/react-northstar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Input } from "@fluentui/react-northstar";

import { FaMagnifyingGlass } from "react-icons/fa6";

import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";

const Products = () => {
  const [categorize, setCategorize] = useState(categories);
  const [active, setActive] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const filtered = items.filter((item) => item.category === "Silog Meals");
    setCategorize(filtered);
  }, [items]);

  const handleChooseCategory = (c, t) => {
    setActive(t);
    const filtered = items.filter((item) => item.category === c);
    setCategorize(filtered);
  };
  //add dialog
  const [openAdd, setOpenAdd] = useState(false);
  const handleClickAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  //edit dialog
  const [openEdit, setOpenEdit] = useState(false);
  const [editItems, setEditItems] = useState([]);
  const handleClickEdit = (item) => {
    setEditItems(item);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  //delete dialog
  const [openDelete, setOpenDelete] = useState(false);
  const [removeId, setRemoveId] = useState(0);
  const handleClickDelete = (itemId) => {
    setRemoveId(itemId);
    setOpenDelete(true);
  };

  const handleRemoveProduct = () => {
    console.log("categorize", categorize);
    setCategorize(categorize.filter((c) => c.id !== removeId));
    setOpenDelete(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  // card when hover
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

  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.name === item.name) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            price: cartItem.price + item.price,
          };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

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

  return (
    <div class="flex xl:flex-row lg:flex-row flex-col w-full p-4 gap-5 min-h-screen scroll-hidden">
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
                    ? "text-[#539e5a] bg-[#f1eded]"
                    : "text-gray-600 "
                } hover:bg-[#ebebeb] cursor-pointer border-[.5px] border-gray-100 bg-white shadow-md p-2 rounded-full flex gap-2 items-center`}
                // className="hover:bg-[#ebebeb] cursor-pointer border-[.5px] border-gray-100 bg-white shadow-md p-2 rounded-full flex gap-2 items-center"
              >
                <img src={category.img} alt="" className="w-[40px] h-[40px]" />
                <p className="hidden md:flex text-[12px]">{category.title}</p>
              </div>
            ))}
        </div>

        {/* menu items */}
        <div class="bg-white mt-[25px] flex flex-wrap justify-start gap-[20px]">
          {/* each card */}
          {categorize.map((item, index) => (
            <div
              key={index}
              className="group shadow-md overflow-hidden relative flex flex-col p-2 hover:bg-[#f1f1f1] max-w-[190px] cursor-pointer border-gray-100 "
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <img
                src={item.img}
                alt={item.img}
                className="group-hover:brightness-50 z-[1] w-full h-[170px] group-hover:scale-105 transition-transform duration-300"
              />
              {hoveredCardIndex === index && (
                <div className="z-[2] absolute top-[4px] right-[0] bg-[#ebebeb] opacity-90 rounded-md flex justify-center items-center h-[30px] w-[60px] gap-[10px]">
                  <AiOutlineEdit
                    title="edit"
                    className="text-[20px] hover:text-green-900"
                    onClick={() => handleClickEdit(item)}
                  />
                  <RiDeleteBin6Line
                    title="delete"
                    className="text-[20px] hover:text-green-900"
                    onClick={() => handleClickDelete(item.id)}
                  />
                </div>
              )}
              <p className="mt-[10px] font-bold group-hover:text-[#539e5a]">
                {item.name}
              </p>
              <div className="flex justify-between mt-1">
                <p className="text-[12px] ">₱ {item.price}</p>
                <p className="text-[12px]">{item.quantity} items</p>
              </div>
            </div>
          ))}
          <div
            onClick={handleClickAdd}
            className="group h-[250px] shadow-md group hover:shadow-inner relative flex flex-col p-2 hover:bg-[#f1f1f1] w-[190px] cursor-pointer border-gray-100 bg-white"
          >
            <BsPlusLg
              title="Add Bayanihan"
              className="group-hover:bg-[#ffffff] group-hover:shadow-xl rounded-full text-4xl text-[#3a772e] bg-transparent  absolute left-[40%] top-[40%]"
            />
          </div>
        </div>
        {/*Add  dialog */}
        <Dialog open={openAdd} onClose={handleCloseAdd} maxWidth="sm">
          <DialogTitle>Add Menu</DialogTitle>
          <DialogContent className=" p-[20px] mb-2">
            <div className="flex p-[20px] gap-3 ">
              <div className="flex flex-col gap-[10px]">
                <label>Name</label>
                <label>Category</label>
                <label>Price</label>
                <label>Quantity</label>
                <label>Image</label>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="name"
                  className="border border-[#818181] rounded-sm outline-none px-1"
                />
                <select
                  name="category"
                  id=""
                  className="border border-[#818181] rounded-sm outline-none "
                >
                  <option value="Silog Meals">Silog Meals</option>
                  <option value="Lugaw & Mami">Lugaw & Mami</option>
                  <option value="Sinabaw & Others">Sinabaw & Others</option>
                  <option value="AdOns & Beverages">AdOns & Beverages</option>
                  <option value="Bialo & Bilao">Bilao & Bilao Combo</option>
                </select>
                <input
                  type="number"
                  className="border border-[#818181] rounded-sm outline-none px-1"
                />
                <input
                  type="number"
                  className="border border-[#818181] rounded-sm outline-none px-1"
                />
                <input type="file" />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4 mx-[20px]">
              <button
                onClick={handleCloseAdd}
                className="px-2 border hover:scale-105 duration-200 shadow-sm rounded-md bg-[#f1f1f1]"
              >
                Cancel
              </button>
              <button className="px-2 border shadow-md hover:scale-105 duration-200 rounded-md bg-[#436cc5] text-white">
                Save
              </button>
            </div>
          </DialogContent>
        </Dialog>

        {/*edit  dialog */}
        <Dialog open={openEdit} onClose={handleCloseEdit} maxWidth="sm">
          <DialogTitle>Edit Menu</DialogTitle>
          <DialogContent className=" p-[20px] mb-2">
            <div className="flex p-[20px] gap-3 ">
              <div className="flex flex-col gap-[10px]">
                <label>Name</label>
                <label>Category</label>
                <label>Price</label>
                <label>Quantity</label>
                <label>Image</label>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="name"
                  defaultValue={editItems.name}
                  className="border border-[#818181] rounded-sm outline-none px-1"
                />
                <select
                  name="category"
                  id=""
                  defaultValue={editItems.category}
                  className="border border-[#818181] rounded-sm outline-none "
                >
                  <option value="Silog Meals">Silog Meals</option>
                  <option value="Lugaw & Mami">Lugaw & Mami</option>
                  <option value="Sinabaw & Others">Sinabaw & Others</option>
                  <option value="AdOns & Beverages">AdOns & Beverages</option>
                  <option value="Bialo & Bilao">Bilao & Bilao Combo</option>
                </select>
                <input
                  type="number"
                  defaultValue={editItems.price}
                  className="border border-[#818181] rounded-sm outline-none px-1"
                />
                <input
                  type="number"
                  defaultValue={editItems.quantity}
                  className="border border-[#818181] rounded-sm outline-none px-1"
                />
                <input type="file" />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4 mx-[20px]">
              <button
                onClick={handleCloseEdit}
                className="px-2 border hover:scale-105 duration-200 shadow-sm rounded-md bg-[#f1f1f1]"
              >
                Cancel
              </button>
              <button className="px-2 border shadow-md hover:scale-105 duration-200 rounded-md bg-[#436cc5] text-white">
                Save
              </button>
            </div>
          </DialogContent>
        </Dialog>

        {/*delete  dialog */}
        <Dialog open={openDelete} onClose={handleCloseDelete} maxWidth="sm">
          <DialogTitle>Delete Menu</DialogTitle>
          <DialogContent className=" p-[20px] mb-2">
            <div>
              <h1>Are you sure you want to Delete this item</h1>
            </div>
            <div className="flex justify-end gap-2 mt-4 mx-[20px]">
              <button
                onClick={handleCloseDelete}
                className="px-2 border hover:scale-105 duration-200 shadow-sm rounded-md bg-[#f1f1f1]"
              >
                Cancel
              </button>
              <button
                onClick={handleRemoveProduct}
                className="px-2 border shadow-md hover:scale-105 duration-200 rounded-md bg-[#436cc5] text-white"
              >
                Confirm
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Products;
