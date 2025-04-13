import dots from "../../../assets/svg/dots-group.svg";
import rectangle from "../../../assets/svg/rectangle.svg";

import useMediaQuery from "../../../shared/useMediaQuery";

import "./style.scss";


const Aboute = () => {
    const matches = useMediaQuery("(max-width: 425px)");

    return (
        <section className="aboute" id = "aboute">
            <div className="aboute-content">
                <h1 className="aboute-header"><span className="hesteg" /> Обо мне</h1>
                
                <div className="aboute-content">
                    <p>Здравствуйте, я Александр!</p>
                    <p>Я Fullstack разработчик из Донецка. Я умею разрабатывать сайты с нуля. Вот немного информации обо мне:</p>
                    <p>Имею опыт как вёртски, так и написания сайтов. Я сертифицированный разработчик с опытом работы с React, Next.js, Spring и Django. Владею базами данных PostgreSQL, MySQL, SQLite. Так же владею Linux и Docker.</p>
                    <p>В компаниях MayBe и vseTUT я получал много отзывов, что может стать подтверждёнными кейсами, которые я могу предоставить по вашему запросу.</p>
                </div>
            </div>


            {
                !matches && (
                    <div className="aboute-background">
                        <img src={dots} className="dots" />
                        <img src={rectangle} className="rectangle" />
                    </div>
                )
            }
        </section>
    )
}


export default Aboute;