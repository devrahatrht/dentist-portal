import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://doctor-portel.vercel.app/service").then((res) => res.json())
  );

  const imageStorageKey = "4c8d6ff46a25522b68b347a2284bbf1f";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            details: data.details,
            img: img,
          };
          // send to my database
          fetch("https://doctor-portel.vercel.app/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor Added Successfully");
                reset();
              } else {
                toast.error("Failed to add the Doctor");
              }
            });
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="">
            <h2 className="text-2xl">Add A New Doctor</h2>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}

            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full max-w-xs input input-bordered"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            {/* Email Field */}

            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full max-w-xs input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Provide a Valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            {/* select options */}

            <div className="w-full max-w-xs pb-5 form-control">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>
              <select
                {...register("specialty")}
                class="select select-bordered w-full max-w-xs"
              >
                {services.map((service) => (
                  <option key={service._id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            {/* details */}

            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea
                type="text"
                placeholder="Details"
                className="w-full max-w-xs input input-bordered"
                {...register("details", {
                  required: {
                    value: true,
                    message: "details is Required",
                  },
                  
                })}
              />
              <label className="label">
                {errors.details?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.details.message}
                  </span>
                )}
                
              </label>
            </div>

            {/* Image Upload Field */}

            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                className="w-full max-w-xs input input-bordered"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image Is Required",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>

            <input className="w-full max-w-xs btn" type="submit" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
