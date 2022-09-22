import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";



const modules = [
  {
    name: "Dev Ops",
    noLectures: 2,
    noPracticles: 3,
  },
  {
    name: "Enterprise Web Dev",
    noLectures: 2,
    noPracticles: 2,

  }
]
const Demo = () => {
  return (
    <table className="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>No lectures</th>
        <th>No practicals</th>
      </tr>
    </thead>
    <tbody >
      <tr>
        <td>{modules[0].name}</td>
        <td>{modules[0].noLectures}</td>
        <td>{modules[0].noPracticles}</td>
      </tr>
      <tr>
        <td>{modules[1].name}</td>
        <td>{modules[1].noLectures}</td>
        <td>{modules[1].noPracticles}</td>
      </tr>
    </tbody >
  </table>
  );
};

export default Demo;
