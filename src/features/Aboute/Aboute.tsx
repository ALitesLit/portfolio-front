"use client"
import useMediaQuery from "@/shared/useMediaQuery";

import styles from "./style.module.scss";


const Aboute = () => {
    const matches = useMediaQuery("(max-width: 425px)");

    return (
        <section className={`${styles.aboute} relative flex justify-center items-center`} id = "aboute">
            <div className={`${styles.aboute_content} z-3`}>
                <h1 className={`${styles.aboute_header} text-left`}><span className="hesteg" /> Обо мне</h1>
                
                <div className={`${styles.aboute_content} z-2`}>
                    <p>Здравствуйте, я Александр!</p>
                    <p>Я занимаюсь web-разработкой и Android-разработкой.</p>
                    <p>Имею коммерческий опыт работы как с frontend, так и с backend. Во frontend-разработке использую Next.js, React, Redux и Sass. Владею JavaScript, TypeScript, Python и Java, умею создавать адаптивные интерфейсы и выполнять резиновую вёрстку.</p>
                    <p>В backend-разработке работаю с Express.js, Spring, Django и Golang. Имею опыт разработки REST API, интеграции внешних сервисов, работы с базами данных, Kafka, Grafana, Docker, Nginx и Linux.</p>
                    <p>Участвовал в CTF-соревнованиях и хакатонах, имею базовое понимание информационной безопасности и умею находить и исправлять уязвимости в приложениях.</p>
                    <p>Умею разбираться в чужом коде, находить и устранять ошибки, проводить рефакторинг и предлагать улучшения для проектов.</p>
                </div>
            </div>


            {
                !matches && (
                    <div className={`${styles.aboute_background} absolute w-screen h-screen`}>
                        <img src="/svg/dots-group.svg" className={`${styles.dots}`} alt="" />
                        <img src="/svg/rectangle.svg" className={`${styles.rectangle}`} alt="" />
                    </div>
                )
            }
        </section>
    )
}


export default Aboute;