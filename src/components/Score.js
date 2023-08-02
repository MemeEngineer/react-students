import "./Score.css"

function Score(props){
    const {score, date} = props
    // console.log(props)
    return(
        <div>
            <h4>Date: {date}</h4>
            <p> Score: {score}</p>
        </div>
    )
}

export default Score;