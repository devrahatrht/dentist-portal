import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { name, slots, _id, price } = treatment;
  const formattedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("https://doctor-portel.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // close the modal
        console.log(data);
        if (data.success) {
          toast(`Appointment is successfully, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already Have an Appointment on, ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-secondary">
            Booking For : {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-5 mt-2 justify-items-center"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="w-full max-w-xs input input-bordered"
            />
            <select
              name="slot"
              className="w-full max-w-xs select select-bordered"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              disabled
              value={user?.displayName}
              className="w-full max-w-xs input input-bordered"
            />
            <input
              name="email"
              type="email"
              disabled
              value={user?.email}
              className="w-full max-w-xs input input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="Submit"
              value="Appointment"
              className="w-full max-w-xs btn btn-secondary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
