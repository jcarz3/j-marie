import category1 from "../img/category1.png";
import category2 from "../img/category2.png";
import category3 from "../img/category3.png";
import category4 from "../img/category4.png";
import category5 from "../img/category5.png";
import silog1 from "../img/silog1.png";
import silog2 from "../img/silog2.png";
import silog3 from "../img/silog3.png";
import silog4 from "../img/silog4.png";
import champorado from "../img/champorado.png";
import mami from "../img/mami.png";
import lugaw from "../img/lugaw.png";
export const routes = {
  HOME: "/home",
  CUSTOMERS: "/customers",
};

export const categories = [
  {
    title: "Silog Meals",
    img: category1,
  },
  {
    title: "Lugaw & Mami",
    img: category2,
  },
  {
    title: "Sinabaw & Others",
    img: category3,
  },
  {
    title: "AddOns & Beverages",
    img: category4,
  },
  {
    title: "Bilao & Bilao Combo",
    img: category5,
  },
];

export const cartItems = [
  {
    name: "Bilao",
    quantity: 2,
    price: 180.0,
    img: silog1,
  },
  {
    name: "Pancit",
    quantity: 1,
    price: 90.0,
    img: silog2,
  },
  {
    name: "Lumpia",
    quantity: 2,
    price: 20.0,
    img: silog3,
  },
  {
    name: "Bam-i",
    quantity: 2,
    price: 50.0,
    img: silog4,
  },
];

export const items = [
  {
    name: "Tosilog",
    price: 2.0,
    quantity: 20,
    category: "Silog Meals",
    img: silog1,
  },
  {
    name: "Pork Tapsilog",
    price: 22.0,
    quantity: 20,
    category: "Silog Meals",
    img: silog2,
  },
  {
    name: "Bangsilog",
    price: 25.0,
    quantity: 10,
    category: "Silog Meals",
    img: silog3,
  },
  {
    name: "Longsilog",
    price: 12.0,
    quantity: 20,
    category: "Silog Meals",
    img: silog4,
  },
  {
    name: "Hotsilog",
    price: 10.0,
    quantity: 10,
    category: "Silog Meals",
    img: silog4,
  },
  {
    name: "Champorado",
    price: 10.0,
    quantity: 10,
    category: "Lugaw & Mami",
    img: champorado,
  },
  {
    name: "Mami",
    price: 30.0,
    quantity: 10,
    category: "Lugaw & Mami",
    img: mami,
  },
  {
    name: "Lugaw ni Jesmarie",
    price: 50.0,
    quantity: 10,
    category: "Lugaw & Mami",
    img: lugaw,
  },
];
