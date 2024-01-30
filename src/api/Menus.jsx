import instance from "./config";

export const getMenu = async () => {
    try {
        const { data } = await instance.get('/menus');
        return data;
    } catch (error) {
        return error;
    }
}