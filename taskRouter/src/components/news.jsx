import "./news.css";
const News = ({name, author, time, date}) =>{
    return (
        <>
            <h1>{name}</h1>
            <div>
                <h4>{author}</h4>
                <h6>{time}</h6>
                <h6>{date}</h6>
            </div>
            
        </>
    )
}

export default News;