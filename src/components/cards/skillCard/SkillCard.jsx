import "./style.scss";


const SkillCard = ({ name, list }) => {
    return (
        <div className="skill-card">
            <h1>{name}</h1>

            <ul>
                {
                    list.map(
                        i => (
                            <li key={i.id}>{i.name}</li>
                        )
                    )
                }
            </ul>
        </div>
    )
}


export default SkillCard;