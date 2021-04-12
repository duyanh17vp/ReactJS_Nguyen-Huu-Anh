import { watch } from 'node:fs';
import React, { useRef } from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";


type FormData = {
  userName: string;
  password: string;
};

export default function LoginForm() {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <h1>Login Form</h1>
      <label>UserName</label>
      <input {...register("userName", { required: true, maxLength: 20 })}  placeholder="username or email" />
      
      <label htmlFor="password">Password</label>
        <input
          id="password"
          {...register("password", {
            required: "required",
            minLength: {
              value: 6,
              message: "min length is 6"
            }
          })}
          type="password"
          placeholder="password"
        />

      <input type="submit" value="Login" />
    </form>
  );
}