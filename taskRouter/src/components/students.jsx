import "./student.css"

const Student = ({pic, fio, group, crystals, coins, badges, reviews, avgGrade, visit, age, email, phone, nic, lastSeen}) => {
    return(
        <>
            <img src={pic}></img>
            <h3>{fio}</h3>
            <h6>Group: {group}</h6>
            <div class="stats">
                <h6>{crystals}</h6>
                <h6>{coins}</h6>
                <h6>{badges}</h6>
                <h6>{reviews}</h6>
            </div>
            <div class="stats">
                <h4>{avgGrade}</h4>
                <h4>{visit}</h4>
            </div>
            <div>
                <h6>Age: {age}</h6>
                <h6>{email}</h6>
                <h6>{phone}</h6>
                <h6>{nic}</h6>
            </div>
            <h5>{lastSeen}</h5>
        </>
    )
}

export default Student;