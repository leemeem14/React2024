import React from "react";
import StudentAttendance from "./StudentAttendance";

const students = [
    {id:1,name:"ABC",grade:2,major:"AISW"},
    {id:2,name:"DEF",grade:3,major:"전기"},
    {id:3,name:"GHI",grade:3,major:"그린에너지"},
    {id:4,name:"JKL",grade:4,major:"시각디자인"},
    {id:5,name:"MOP",grade:1,major:"AISW"}
];
const students2 = [
    {id:1,name:"ABC",grade:2,major:"AISW"},
    {id:2,name:"DEF",grade:3,major:"전기"},
    {id:3,name:"GHI",grade:3,major:"그린에너지"},
    {id:4,name:"JKL",grade:4,major:"시각디자인"},
    {id:5,name:"MOP",grade:1,major:"AISW"}
];
function AppStudentAttendance(){
    return(
        <div>
            <StudentAttendance students={students}/>
            <hr/>
            <StudentAttendance students={students2}/>
        </div>
    )
}
export default AppStudentAttendance