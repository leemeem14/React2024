import React from "react";
import './AttendanceCard.css'
import img1 from './imgs/성윤모.jpg'
const students = [
    {id:1,name:"가나다",grade:3,major:"컴공",avatar:"https://randomuser.me/api/portraits/women/88.jpg"},
    {id:2,name:"라마바",grade:2,major:"경영학",avatar:"https://randomuser.me/api/portraits/men/1.jpg"},
    {id:3,name:"사아자",grade:4,major:"물리학",avatar:"https://randomuser.me/api/portraits/women/27.jpg"},
    {id:4,name:"차카타",grade:1,major:"화학",avatar:"https://randomuser.me/api/portraits/women/81.jpg"},
    {id:5,name:"파하",grade:3,major:"국문학",avatar:"https://randomuser.me/api/portraits/men/25.jpg"},
    {id:6,name:"ABC",grade:2,major:"AISW",avatar:"https://randomuser.me/api/portraits/men/90.jpg"},
    {id:7,name:"DEF",grade:1,major:"컴공",avatar:"https://randomuser.me/api/portraits/men/23.jpg"},
    {id:8,name:"GHI",grade:1,major:"체육학",avatar:"https://randomuser.me/api/portraits/women/92.jpg"},
    {id:9,name:"xyz",grade:3,major:"컴공",avatar:"https://randomuser.me/api/portraits/lego/5.jpg"},
    {id:10,name:"성윤모",grade:1,major:"짬찌",avatar:img1}
]

function AttendanceCard() {
    return(
      <div className="attendance-container">
          <h2 className="attendance-title">학생 출석부</h2>
          <div className="card-container">
              {
                  students.map((student)=>(
                      <div className="student-card">
                          <img src={student.avatar} alt={student.name}className="student-avatar"/>
                          <div className="student-info">
                              <h3>{student.name}</h3>
                              <p>{student.grade}학년 | {student.major}</p>
                          </div>
                      </div>
                  ))
              }
          </div>
      </div>
    );
}

export default AttendanceCard