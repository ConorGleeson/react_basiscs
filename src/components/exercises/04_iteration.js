import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = (props) => {
  const list = props.modules.map((i, index) =>
  <tr key = {index}>
    <td>{i.name}</td>
    <td>{i.noLectures}</td>
    <td>{i.noPracticals}</td>
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
        
          
          {list}

        
      </tbody>
    </table>

    </>
  );
  
};

export default Demo;
