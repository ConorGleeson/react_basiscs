import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = (props) => {
  const list = props.modules.map((i, index) =>
  <tr key = {index}>
    <a href={i.url}> {i.name}</a> 
    <a href={i.url}>{i.noLectures}</a>
    <a href={i.url}>{i.noPracticals}</a> 
  </tr>
  ); 
  return (
    <>
    <h2>{props.course}</h2>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>No. Lectures</th>
          <th>No. Practicles</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          {list}
          </td>
        </tr>
      </tbody>
    </table>

    </>
  );
  
};

export default Demo;
