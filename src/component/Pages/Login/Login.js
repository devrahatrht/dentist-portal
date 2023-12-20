import React, { useEffect } from 'react';
import auth from '../../../firebase.init'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';
const Login = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = useToken(user || googleUser);
    useEffect(() => {
        if (token) {
            navigate(from, {replace: true});
        }
    }, [token, navigate, from])




    if (loading || googleLoading) {
       return <Loading></Loading>
    }

    if (error || googleError) {
        signInError = <p className='text-red-500'><small>{error?.message || googleError?.message}</small></p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
        toast.success('Login SuccessFully');
        <Navigate to='/'></Navigate>
    }


    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="shadow-xl card w-96 bg-base-100">
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bole">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="w-full max-w-xs form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                className="w-full max-w-xs input input-bordered"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                                
                            </label>
                        </div>
                        {/* password */}
                        <div className="w-full max-w-xs form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Password"
                                className="w-full max-w-xs input input-bordered"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                                
                            </label>
                        </div>
                        {signInError}
                        <input className='w-full max-w-xs btn' type="submit" value="Log In" />
                    </form>
                    <p className='text-center'><small>New to Doctors Portal <Link className='text-primary' to='/signup'>Create a New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={
                        () => signInWithGoogle()
                        } className="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;