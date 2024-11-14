import React from "react";


function StudentAttendance(props){
    const students = props.students;

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