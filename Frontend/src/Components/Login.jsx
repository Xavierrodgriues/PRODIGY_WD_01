import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w"
                {...register("email", { required: true })}
              />
                    {errors.email && <span className='text-red-500 '>This field is required</span>}

            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w"
                {...register("password", { required: true })}
              />
                    {errors.password && <span className='text-red-500 '>This field is required</span>}

            </div>
            <div className='flex justify-around mt-4'>
              <button
                type="submit"
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
              >
                Login
              </button>
              <p>Not registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>SignUp</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
