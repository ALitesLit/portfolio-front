import { useState, useEffect } from "react";

const ScrollsPy = () => {
    const [activeId, setActiveId] = useState('main');

    const handleScroll = (e, id) => {
        e.preventDefault();
        setActiveId(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleWindowScroll = () => {
            const sections = ['main', 'aboute', 'skills', 'project', 'sertefies'];
            
            for (const id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveId(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleWindowScroll);
        return () => window.removeEventListener('scroll', handleWindowScroll);
    }, []);

    return (
        <ul id="scrollsPy">
            <li><a href="#main" onClick={(e) => handleScroll(e, 'main')} className={activeId === 'main' ? 'active' : ''}>Главная</a></li>
            <li><a href="#aboute" onClick={(e) => handleScroll(e, 'aboute')} className={activeId === 'aboute' ? 'active' : ''}>Обо мне</a></li>
            <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className={activeId === 'skills' ? 'active' : ''}>Мои навыки</a></li>
            <li><a href="#project" onClick={(e) => handleScroll(e, 'project')} className={activeId === 'project' ? 'active' : ''}>Проекты</a></li>
            <li><a href="#sertefies" onClick={(e) => handleScroll(e, 'sertefies')} className={activeId === 'sertefies' ? 'active' : ''}>Сертефикаты</a></li>
        </ul>
    )
}


export default ScrollsPy;