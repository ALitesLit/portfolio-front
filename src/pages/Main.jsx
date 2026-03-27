import { Fade } from "react-reveal";
import { useRef, useState } from "react";

import Header from "../components/header/Header";
import Aboute from "../components/main-page/aboute/Aboute";
import Experience from "../components/main-page/expirience/Experience";
import MainSection from "../components/main-page/main/MainSection";
import Projects from "../components/main-page/projects/Projects";
import Sertefies from "../components/main-page/sertefies/Sertefiese";
import Social from "../components/socail/Social";
import useMediaQuery from "../shared/useMediaQuery";

import "./style.scss";


const Main = () => {
    const abouteRef = useRef(null);

    const matches = useMediaQuery("(max-width: 760px)");


    return (
        <>
            <header>
                <Header />
            </header>

            {
                !matches && (
                    <>
                        <Social />
                    </>
                )
            }
            
            <main>
                <Fade>
                    <MainSection abouteRef={abouteRef} />
                </Fade>

                <Fade>
                    <Aboute abouteRef={abouteRef} />
                </Fade>

                <Fade>
                    <Experience />
                </Fade>

                <Fade>
                    <Projects />
                </Fade>

                <Fade>
                    <Sertefies />
                </Fade>
            </main>

        </>
    )
}


export default Main;