import { useState, useCallback, useEffect } from "react";

import ProjectCard from "../../cards/projectCard/ProjectCard";
import { fetchProjectsService, fetchСategoryService } from "../../../service/service";

import dots from "../../../assets/svg/dots-group.svg";

import "./style.scss";


const Projects = () => {
    const [mode, setMode] = useState("все");
    const [loadMore, setLoadMore] = useState(false);
    const [category, setCategory] = useState([]);
    const [projects, setProjests] = useState([]);
    const [selectCategory, setSelectCategory] = useState(0);


    const fetchCategory = useCallback(
        async () => {
            try {
                const data = await fetchСategoryService();

                setCategory(data);
            } catch (error) {
                console.log(error);
            }
        }, []
    )


    useEffect(
        () => {
            fetchCategory();
        }, []
    )


    const fetchProjects = useCallback(
        async () => {
            try {
                const data = await fetchProjectsService(loadMore, selectCategory);

                setProjests(data);
            } catch (error) {
                console.log(error);
            }
        }, [ loadMore, selectCategory ]
    )


    useEffect(
        () => {
            fetchProjects();
        }, [ selectCategory, loadMore ]
    )


    return (
        <section className="projects" id="project">
            <div className="projects-content">
                <h1 className="projects-header"><span className="hesteg" /> Мои проекты</h1>
                
                <div className="projects-content">
                    <div className="button-group">
                        <button className={mode === "все" ? "active" : ""} onClick={
                            () => {
                                setMode("все");
                                setSelectCategory(0);
                            }
                        }>все</button>

                        {
                            category.length && (
                                category.map(
                                    i => (
                                        <button key={i.id} className={mode === `${i?.name.toString()}` ? "active" : ""} onClick={
                                            () => {
                                                setMode(`${i.name}`);
                                                setSelectCategory(i.id);
                                            }
                                        }>{i.name.toLowerCase()}</button>
                                    )
                                )
                            )
                        }
                    </div>
                </div>


                <div className="project-list">
                        {
                            projects.length ? (
                                projects.map(
                                    i => <ProjectCard key={i.id} card={i} />
                                )
                            ) : ""
                        }
                </div>

                
                {
                    !loadMore && <p className="load__new" onClick={() => setLoadMore(true)}>∨ загрузить ещё ∨</p>
                }
            </div>


            <div className="projects_back">
                <img src={dots} className="projects_back-dots" />
                <img src={dots} className="projects_back-dots2" />
            </div>
        </section>
    )
}


export default Projects;