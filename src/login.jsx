import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    setLoginData(formDataObj);
  };
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit(formHandler)}>
          <div className="formcontainer">
            <div className="title">
              <h3>login Form</h3>
            </div>
            <div className="formbody">
              <div className="email">
                <input
                  type="email"
                  placeholder=""
                  {...register("email", { required: true })}
                />
                <span>Email</span>
                {errors.email?.type == "required" && <p>Email Id required</p>}
              </div>

              <div className="phoneNo">
                <input
                  type="password"
                  placeholder=""
                  {...register("password", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                  })}
                />
                <span>password</span>
                {errors.phoneNo?.type == "required" && <p>Enter Phone_No </p>}
                {errors.phoneNo?.type == "minLength" && (
                  <p>password too less </p>
                )}
                {errors.phoneNo?.type == "maxLength" && (
                  <p>password too much </p>
                )}
              </div>

              <div className="submit">
                <button className="submitbtn" type="submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
