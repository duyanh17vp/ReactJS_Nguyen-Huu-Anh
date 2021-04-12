import * as React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other"
}

interface IFormInput {
  firstName: String;
  lastName: string;
  gender: GenderEnum;
}

export default function RegisterForm() {
  const { register,formState: { errors }, handleSubmit} = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register Form</h1>
      <label>First Name</label>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && <p>"First name is required"</p>}
      <label>Last Name</label>
      <input {...register("lastName", { required: true })} />
      {errors.lastName &&  <p>"Last name is required"</p>}
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}

  