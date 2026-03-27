import { useCallback, useState, useEffect } from "react";

import SkillCard from "../../cards/skillCard/SkillCard";
import useMediaQuery from "../../../shared/useMediaQuery";
import { fetchSkillsService } from "../../../service/service";

import group from "../../../assets/svg/group1.svg";

import "./style.scss";


const Experience = () => {
    const [skills, setSkills] = useState([]);
    const matches = useMediaQuery("(max-width: 625px)");


    const fetchSkills = useCallback(
        async () => {
            try {
                const data = await fetchSkillsService();

                setSkills(data);
            } catch (error) {
                console.log(error);
            }
        }, []
    )


    useEffect(
        () => {
            fetchSkills();
        }, []
    )


    return (
        <section className="skills" id = "skills">
            <div className="skills-content">
                {
                    matches ? (
                        <h1 className="skills-header"><span className="hesteg" /> Навыки</h1>
                    ) : (
                        <div className="skills-left">    
                            <h1 className="skills-header"><span className="hesteg" /> Навыки</h1>
                            
                            <img src={group} />
                        </div>
                    )
                }

                <div className="skills-cards">
                    {
                        skills.length ? (
                            skills.map(
                                (i, index) => <SkillCard key={index} name={i.category} list={i.experienceList} />
                            )
                        ) : ""
                    }
                </div>
            </div>
        </section>
    )
}


export default Experience;