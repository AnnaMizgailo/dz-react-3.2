import News from "./news";

const NewsList = ({data}) => {
    return(
        <>
            {data.map((index, news) => {<News key={`${index}`} {...news}/>})}        
        </>
    )
}

export default NewsList;