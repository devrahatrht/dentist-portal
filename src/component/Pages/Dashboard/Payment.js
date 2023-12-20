import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51OPXjTBcuGF6L3twl2qbmUlfHZZy4uBwXdg6YWk74BpaboLqrLb0qbMQewAwXVNYKxX2RpWnodNnwHrO2pAMOnR000cEIWpKAg"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://doctor-portel.vercel.app/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="card w-50  max-w-md bg-base-100 shadow-xl my-12 mx-auto">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
          <p>
            Your Appointment{" "}
            <span className="text-orange-600">{appointment.date}</span> at{" "}
            {appointment.slot}
          </p>
          <p>Please Pay: ${appointment.price}</p>
        </div>
      </div>
      <div class="card mx-auto flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
