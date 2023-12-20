import React from "react";

const Review = ({ doctor }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          {doctor?.details && doctor?.details.length > 100
            ? `${doctor?.details.slice(0, 160)}...`
            : doctor?.details}
        </p>
      </div>
      <div className="flex items-center justify-around pb-5">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
            <img src={doctor?.img} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-xl">{doctor?.name}</h3>
          <p>{doctor?.specialty}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
