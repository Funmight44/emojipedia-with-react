import "./index.css"




const Emoji = (props) => {
    return ( 
        <div className="emojiCards">
            <div className="emoji">
                <h1>{props.emoji}</h1>
                <h2>{props.name}</h2>
                <p>{props.meaning}</p>
            </div>
        </div>
        

        
     );
}
 
export default Emoji;