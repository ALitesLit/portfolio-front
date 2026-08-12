import { transformPyrusProjects } from "../../helpers/transformPyrusProjects";
// import pyrusClient from "./pyrusClient";

const projectForm = process.env.NEXT_PUBLIC_PYRUS_MODE;


export const fetchPyrusProject = async () => {
    try {
        const responce = await pyrusClient.get(`/forms/${projectForm}/register`);

        const transformProject = await transformPyrusProjects(responce.data)

        return transformProject;
    } catch (error) {
        throw new Error(error);
    }
}


export const fetchPyrusCategoryById = async (id: number) => {
    try {
        const responce = await pyrusClient.get(`/forms/${id}/register`);

        console.log(responce)

        return responce.data
    } catch (error) {
        throw new Error(error);
    }
}