import pyrusClient from "./pyrusClient"

const projectForm = process.env.NEXT_PUBLIC_PYRUS_MODE;

export const fetchPyrusProject = async () => {
    try {
        const responce = await pyrusClient.get(`/forms/${projectForm}/register`);

        console.log(responce)

        return responce.data
    } catch (error) {
        throw new Error(error);
    }
}