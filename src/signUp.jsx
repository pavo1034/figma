import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [formData, setFormData] = useState({});
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
    setFormData(formDataObj);
  };
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit(formHandler)}>
          <div className="formcontainer">
            <div className="title">
              <h3>SignUp form</h3>
            </div>
            <div className="formbody">
              <div className="name">
                <input
                  type=" text"
                  placeholder=""
                  {...register("name", { required: true, minLength: 5 })}
                />
                <span>Name</span>
                {errors.name?.type == "required" && <p>Name is required</p>}
                {errors.name?.type == "minLength" && (
                  <p>Minimun 5 character is required</p>
                )}
              </div>
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
                  type="text"
                  placeholder=""
                  {...register("phoneNo", {
                    required: true,
                    minLength: 10,
                    maxLength: 11,
                  })}
                />
                <span>Phone_no</span>
                {errors.phoneNo?.type == "required" && <p>Enter Phone_No </p>}
                {errors.phoneNo?.type == "minLength" && (
                  <p>Enter valid phone no </p>
                )}
                {errors.phoneNo?.type == "maxLength" && (
                  <p>Enter valid phone no </p>
                )}
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
                {errors.phoneNo?.type == "required" && <p>create password </p>}
                {errors.phoneNo?.type == "minLength" && (
                  <p>password length too less</p>
                )}
                {errors.phoneNo?.type == "maxLength" && (
                  <p>Enter length too much </p>
                )}
              </div>
         
              <div className="submit">
                <button className="submitbtn" type="submit">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
