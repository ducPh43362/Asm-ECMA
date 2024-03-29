import React from 'react'
import { useForm } from 'react-hook-form'
import { addUser } from '../api/users';
import { Link } from 'react-router-dom';


const Signup = () => {
    const {register,handleSubmit} = useForm();

    const onSubmitClick = async (data) => {
        addUser(data)
    }

  return (
    <div>
        <h2 className='tw-mb-8'>Đăng kí tài khoản</h2>
        <form onSubmit={handleSubmit(onSubmitClick)}>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" {...register("email")} className="form-control"  placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input type="password" {...register("password")} className="form-control"  placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Đăng kí</button>
            <Link to="/signin" className='tw-ml-6 ' >Đăng nhập</Link>
        </form>
    </div>
  )
}

export default Signup