export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};
export const deleteOrder = (orderId) => {
  return fetch(`https://dummyjson.com/carts/${orderId}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const updateOrder = (orderId, updatedOrderData) => {
  return fetch(`https://dummyjson.com/carts/${orderId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedOrderData),
  }).then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};
export const getProducts = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};
// export default deleteOrder; getComments, getCustomers, getInventory,
//   getOrders, getRevenue, updateOrder;
