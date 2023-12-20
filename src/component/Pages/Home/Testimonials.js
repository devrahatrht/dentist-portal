import React from "react";
import quote from "../../../assets/icons/quote.svg";
// import people1 from '../../../assets/images/people1.png'
// import people2 from '../../../assets/images/people2.png'
// import people3 from '../../../assets/images/people3.png'
import Review from "./Review";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
const Testimonials = () => {
  // const reviews = [
  //     {
  //         _id: 1,
  //         name: "Winson Herry",
  //         review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal ',
  //         country: 'California',
  //         img: people1
  //     },
  //     {
  //         _id: 2,
  //         name: "Winson Herry",
  //         review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal ',
  //         country: 'California',
  //         img: people2
  //     },
  //     {
  //         _id: 3,
  //         name: "Winson Herry",
  //         review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal ',
  //         country: 'California',
  //         img: people3
  //     }
  // ]
  const { data: doctors, isLoading } = useQuery("doctorName", () =>
    fetch(`https://doctor-portel.vercel.app/doctors`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="px-12 my-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl font-bold text-primary">Our Dentist</h4>
          <h2 className="text-3xl">Professional Dentist</h2>
        </div>
        <div>
          <img className="sm:w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {doctors?.map((doctor) => (
          <Review key={doctor?._id} doctor={doctor}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
