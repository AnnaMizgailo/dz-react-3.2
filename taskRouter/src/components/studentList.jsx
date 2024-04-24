import Student from "./students";

const StudentList = ({data}) => {
    return(
        <>
        {data.map((index, student) => {<Student key={`${index}`} {...student}/>})}
        </>
        
    )
    
}

export default StudentList;