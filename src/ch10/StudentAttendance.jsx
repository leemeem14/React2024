import React from "react";

const students = [
    {id:1,name:"엄준식",grade:2, major:"AISW"},
    {id:2,name:"엄복동",grade:3, major:"전기"},
    {id:3,name:"오뚜기",grade:3, major:"그린에너지"},
    {id:4,name:"진짬뽕",grade:4, major:"시간디자인"},
    {id:5,name:"이 집 짬뽕 잘한다",grade:1, major:"AISW"},
];
function StudentAttendance(){
    return(
      <div>
          <h1>학생 출석부</h1>
          <ul>
              {
                  students.map((student)=>(
                      <li key={student}>
                          <b>{student.name}</b> - {student.grade}학년 - {student.major}과
                      </li>
                  ))
              }
          </ul>
      </div>
    );
}
export default StudentAttendance