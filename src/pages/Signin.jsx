import React from 'react'
import { useForm } from 'react-hook-form'
import { addUser, loginUser } from '../api/users';
import { data } from 'autoprefixer';
import instance from '../api/config';
import { useLocalStorage } from '../hook/useStorage';



const Signin = () => {
    const {register,handleSubmit} = useForm();
    const [user,setUser] = useLocalStorage("user", {})

    const onSubmitClick = async (userForm) => {
        try {
            const { data }  = await instance.post(`/signin`,userForm);
            console.log(data);
            setUser(data);
        } catch (error) {
            console.log(error);
        }
    }

  return (

    <div>
        {/* {JSON.stringify(user)} */}
        <h2 className='tw-mb-8'>Đăng nhập</h2>
        <form onSubmit={handleSubmit(onSubmitClick)}>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" {...register("email")} className="form-control"  placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input type="password" {...register("password")} className="form-control"  placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Đăng nhập</button>
            
        </form>
    </div>
  )
}

export default Signin