import { useEffect, useState } from "react";

import photo from "../../../assets/my-photo.jpg";

import "./style.scss";


const MainSection = () => {
    const [title, setTitle] = useState("");


    useEffect(
        () => {
            const interval = setInterval(
                () => {
                    const final = "Fullstack-разработчик";
                    
                    if (final != title) {
                        setTitle(`${title}${final[title.length]}`);
                    }
                },
                500
            );

            return () => clearInterval(interval);
        }, [title]
    )


    return (
        <section className="main" id="main">
            <div className="main-elem">
                <h1 className="main-title">{title} <span className="enter"></span></h1>
                <p className="main-text">Доброго времени суток! Добро пожаловать на мой сайт, где вы сможете ознакомится с моими навыками и проектами</p>
            
                <a href="#aboute"><button className="main-go">Давайте начнём?</button></a>
            </div>

            <div className="main-photo">
                <img src={photo} />
            </div>
        </section>
    )
}


export default MainSection;