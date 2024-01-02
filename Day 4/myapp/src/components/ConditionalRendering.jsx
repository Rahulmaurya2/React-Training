import React from "react";
import "./conditionalRendering.css";

const ConditionalRendering = ({ studentName, pass, clsName }) => {
  return (
    <div className="main-students">
      <div className="student-details">
        <h1>Passed Students class list in {" " + clsName} </h1>
        {pass ? (
          // <h1>{` Roll No. : ${studentName.rollNo},  Name : ${studentName.name}, Marks : ${studentName.marks}`}</h1>
          <h1>
            {studentName.map((student) => {
              return (
                // <div>{`Rollno : ${student.rollNo}, Name : ${student.name} , Marks : ${student.marks}`}</div>
                <div>
                  <ul>
                    <span>{student.rollNo + " "}</span>
                    <span>{student.name + " "}</span>

                    <span>{student.marks}</span>
                  </ul>
                </div>
              );
            })}
          </h1>
        ) : (
          "no student pass"
        )}
      </div>
      <div></div>
    </div>
  );
};

export default ConditionalRendering;
