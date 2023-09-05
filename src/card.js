import React from "react";

const Card = (props) => {
  return (
    <div>
      <div
        style={{
          borderRadius: "15px",
          backgroundPosition: "center",
          background: `url(${props.img})`,
          backgroundSize: "cover",
          height: "350px",
          width: "350px",
        }}
      ></div>
      <div style={{ display: "flex", justifyContent: "space-between",alignItems:'center' }}>
        <h1>{props.title}</h1>
        <div style={{ display: "flex",alignItems:'center'}}>
        <i style={{margin:'0 15px',fontSize:'30px',color:'red'}} class="fa-solid fa-star"></i>
        <h1>{props.revue}</h1>
        </div>
      </div>
      <h1>{props.dice}</h1>
    </div>
  );
};

export default Card;
