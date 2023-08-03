import Score from "./Score.js";
import"./Student.css"

function Student(props){
    const {bio,name, scores} = props
    // console.log(scores)

    
    return(
        <div className="card">
            <div className="title">
                <h2>{name}</h2>
            </div>
            <div>
            <p>{bio}</p>
            </div>
           
           {scores.map((score, index) => {
            return(
            <Score date={score.date} score={score.score}/>
            )
           })}
        </div>
        
    )
}

export default Student;