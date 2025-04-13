import "./style.scss";


const ProjectCard = ({ card }) => {
    return (
        <div className="project__card">
            <div className="project__card-header">
                <h1>{card?.name}</h1>
            </div>
            
            <div className="project__card-content">
                <p>{card?.deskription}</p>

            </div>
            
            {
                card?.site && (
                    <div className="project__card-bottom">
                        <a href={card?.site}>
                            <button className="project__card-open">Перейти {">"}</button>
                        </a>
                    </div>
                )
            }
        </div>
    )
}


export default ProjectCard;