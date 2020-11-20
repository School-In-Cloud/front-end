import React from "react";

const VolunteersList = ({ person }) => {
  return (
    <div className="card">
      <h2>{person.username}</h2>
      <p>{person.country}</p>
      <p>{person.available}</p>
    </div>
  );
};

export default VolunteersList;
