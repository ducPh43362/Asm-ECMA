import instance from "./config";

// Tạo tài khoản mới
export const addUser = async (newUser) => {
    try {
        const { data }  = await instance.post(`/register`,newUser);
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}