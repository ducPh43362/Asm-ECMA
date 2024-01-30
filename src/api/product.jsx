import axios from "axios";
import instance from "./config";

// Lấy ra toàn bộ danh sách sản phẩm
export const getProduct = async () => {
    try {
        const { data } = await instance.get('/product');
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Lấy ra sản phẩm theo id
export const getProductById = async (id) => {
    try {
        const { data } = await instance.get(`/product/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Thêm sản phẩm
export const AddProduct = async (newProduct) => {
    try {
        const { data } = await instance.post(`/product`,newProduct);
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Sửa sản phẩm
export const UpdateProductById = async (product) => {
    try {
        const { data } = await instance.put(`/product/${product.id}`,product);
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Xóa sản phẩm theo id
export const RemoveProductById = async (id) => {
    try {
        const { data } = await instance.delete(`/product/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}
