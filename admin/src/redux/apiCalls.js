import { publicRequest, userRequest } from "../requestMethods";
import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";

import {
  getUserFailure,
  getUserSuccess,
  getUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  updateUserFailure,
  updateUserSuccess,
  updateUserStart,
  addUserFailure,
  addUserSuccess,
  addUserStart,
} from "./usersRedux";
//login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
//product
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    //const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    //const res = await userRequest.delete(`/products/${id}`);
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

//user
export const getUsers = async (dispatch) => {
  console.log("pd");
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get("/users");
    dispatch(getUserSuccess(res.data));
    console.log({ res });
  } catch (err) {
    console.log({ err });
    dispatch(getUserFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    //const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};
export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    //const res = await userRequest.delete(`/users/${id}`);
    dispatch(updateUserSuccess({ id, user }));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
export const addUser = async (user, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await userRequest.post(`/users`, user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};
