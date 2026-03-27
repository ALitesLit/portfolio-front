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
                    <p>Я имею коммерческий опыт работы с Next.js, React, Redux и препроцессором Sass. Помимо этого я владею такими языками программирования как JavaScript, TypeScript, Python и Java. Имею навыки резиновой и адаптивной вёрстки.</p>
                    <p>Я владею такими back-end технологиями как: фреймворки Spring и Django, языками программирования Java и Python, а так же Docker, Nginx и Linux.</p>
                    <p>Я ответственный человек, который справится со всеми проблемами и задачами, которые передо мной будут поставлены. Я не боюсь высказывать свои предложения по улучшению проекта и меня неоднократно использовали для поиска ошибок в чужих проектах и для их решения.</p>
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