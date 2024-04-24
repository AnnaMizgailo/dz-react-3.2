import { useState } from 'react'
import './App.css'
import StudentList from './components/studentList'
import NewsList from './components/newsList';
import Main from './components/main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {generateNews, generateStudents, getRandomInt} from "./generators/generate";


function App() {
  const students = generateStudents(getRandomInt(1, 10));
  let news = generateNews(getRandomInt(1, 10));
  return (
    <>
     <Router>
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/students" element={<StudentList data={students}/>} />
          <Route exact path="/news" element={<NewsList data={news}/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App
