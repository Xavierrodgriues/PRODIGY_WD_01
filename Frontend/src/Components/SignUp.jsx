import React from "react";
import { Link } from 'react-router-dom'
import Login from "./Login";
import { useForm } from "react-hook-form"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          <h3 className="font-bold text-lg">SignUp</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full max-w"
              {...register("name", { required: true })}
            />
            {errors.name && <span className='text-red-500 '>This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w"
              {...register("email", { required: true })}
            />
            {errors.email && <span className='text-red-500 '>This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full max-w"
              {...register("password", { required: true })}
            />
            {errors.password && <span className='text-red-500 '>This field is required</span>}
          </div>

          {/* Button */}
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              SignUp
            </button>
            <p className="text-xl">
              Have an account?{" "}
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={()=>document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
              <Login />
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
