import { useLocalStorage } from "../hook/useStorage";
import instance from "./config";

// Tạo tài khoản mới
export const addUser = async (newUser) => {
    try {
        const { data }  = await instance.post(`/register`,newUser);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// Đăng nhập 
export const loginUser = async (newUser) => {
    const [user,setUser] = useLocalStorage("user", {})
    try {
        const { data }  = await instance.post(`/signin`,newUser);
        console.log(data);
        setUser(data);
    } catch (error) {
        console.log(error);
    }
}