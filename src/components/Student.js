import Score from "./Score.js";

function Student(props){
    const {bio,name, scores} = props
    // console.log(scores)

    
    return(
        <div>
            <h2>{name}</h2>
           <p>{bio}</p>
           {scores.map((score, index) => {
            return(
            <Score date={score.date} score={score.score}/>
            )
           })}
        </div>
        
    )
}

export default Student;