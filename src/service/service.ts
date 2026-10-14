import $api from "./api";

import skills from "@/mock/skills.json";
import social from "@/mock/social_network.json";
import projects from "@/mock/projects.json";
import category from "@/mock/get_category.json";
import sertefies from "@/mock/sertefies.json";
import { BackendMode } from "@/interfaces/Enums";


const backendMode: BackendMode = process.env.NEXT_PUBLIC_BACKEND_MODE;


const getProjects = ( selectCategory ) => {
    const projects_list = projects.sort(
        (a, b) => a.importance > b.importance
    )
    

    if ( selectCategory == 0 ) {
        return projects_list
    } else {
        return projects_list.filter(
            (i) => i?.category?.filter((i) => i.id == selectCategory).length
        );
    }
}


export const fetchSocialService = async () => {
    if (backendMode == "mock") {
        return social;
    } else {
        try {
            const { data } = await $api.get("social_network");

            return data;
        } catch (error) {
            console.warn(`Мне не получилось получить социальные сети с сервера. Я использовал замоканный вариант. Ошибка: ${error}`);

            return social;
        }
    }
}


export const fetchSkillsService = async () => {
    if (backendMode === "mock") {
        return skills.map((item) => ({
            ...item,
            experienceList: [...item.experienceList].sort(
                (a, b) => a.importance - b.importance
            ),
        }));
    } else {
        try {
            const { data } = await $api.get("skills");
            return data;
        } catch (error) {
            console.warn(`Мне не получилось получить навыки с сервера. Я использовал замоканный вариант. Ошибка: ${error}`);

            return skills.map((item) => ({
                ...item,
                experienceList: [...item.experienceList].sort(
                    (a, b) => a.importance - b.importance
                ),
            }));
        }
    }
};


export const fetchСategoryService = async () => {
    if (backendMode == "mock") {
        return category;
    } else {
        try {
            const { data } = await $api.get("get_category");

            return data;
        } catch (error) {
            console.warn(`Мне не получилось получить категории с сервера. Я использовал замоканный вариант. Ошибка: ${error}`);

            return category;
        }
    }
}


export const fetchProjectsService = async ( loadMore: boolean, selectCategory ) => {
    if ( backendMode == "mock" ) {
        const projects_list = getProjects(selectCategory).sort((a, b) => a.importance - b.importance);

        return loadMore ? projects_list : projects_list.slice(0, 3);
    } else {
        try {
            const url = loadMore ? `get_category/${selectCategory}` : `get_project/top_project?idCategory=${selectCategory}`;

            const { data } = await $api.get(url);

            return data;
        } catch (error) {
            console.warn(`Мне не получилось получить проекты с сервера. Я использовал замоканный вариант. Ошибка: ${error}`);

            const projects_list = getProjects(selectCategory).sort((a, b) => a.importance - b.importance);

            return loadMore ? projects_list : projects_list.slice(0, 3);
        }
    }
}


export const fetchCertefiesService = async () => {
    if (backendMode == "mock") {
        return sertefies.sort((a, b) => b.id - a.id);
    } else {
        try {
            const { data } = await $api.get("sertefies");

            return data;
        } catch (error) {
            console.warn(`Мне не получилось получить сертификаты с сервера. Я использовал замоканный вариант. Ошибка: ${error}`);

            return sertefies.sort((a, b) => b.id - a.id);
        }
    }
}
