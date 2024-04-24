const names = ["Аарон", "Аббас", "Абд аль-Узза", "Абдуллах", "Абид", "Ава", "Августа", "Аврелия", "Аврора", "Агата"];
const surnames = ["Абулафия", "Адырхаевы", "Арменинов", "Кабо", "Левин"];
const email = ["fhhfhfhf", "djqojodo", "wueifhiehf", "tytyifki", "gurywresi", "oi7r6tifyol8"];
const name = ["Статья", "Артикль", "Эссе"];



function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1) +min);
}
function getRandomElem(array){
    return array[getRandomInt(0, array.length - 1)];
}
function generateStudents(length){
    let students = [];
    for(let i = 0; i < length; i++){
        let student = {
            fio: getRandomElem(names) + getRandomElem(surnames),
            pic: 'https://static.wikia.nocookie.net/samosbors8878/images/b/b3/Anonymous.svg.png/revision/latest?cb=20220925153204&path-prefix=ru',
            crystals: getRandomInt(0, 500),
            coins: getRandomInt(0, 500),
            badges: getRandomInt(0, 20),
            reviews: getRandomInt(0, 20),
            avgGrade: getRandomInt(0, 100)/10,
            visit: getRandomInt(0, 100),
            age: getRandomInt(0, 99),
            email: getRandomElem(email) + "@gmail.com",
            phone: "+37529" +  getRandomInt(1000000, 9999999),
            nic: getRandomElem(names),
            lastSeen: getRandomInt(1, 29) + "/" + getRandomInt(1, 12) + "/" + getRandomInt(2000, 2024)

        }
        students.push(student);
    }
    return students;
}

function generateNews(length){
    let newsList = [];
    for(let i = 0; i < length; i++){
        let news = {
            author: getRandomElem(names) + getRandomElem(surnames),
            name: getRandomElem(name),
            date: getRandomInt(1, 29) + "/" + getRandomInt(1, 12) + "/" + getRandomInt(2000, 2024),
            time: getRandomInt(10, 23) + ":" + getRandomInt(10, 59) 

        }
        newsList.push(news);
    }
    return newsList;
}
export {generateNews, generateStudents, getRandomInt};