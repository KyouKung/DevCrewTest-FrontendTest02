import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[550px] h-[600px] border border-slate-600 flex justify-center items-center rounded-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[550px] h-[600px] flex flex-col justify-center items-center space-y-6"
        >
          <div>
            <label className="">Firstname</label>
            <div>
              <input
                className="w-[300px] h-[30px] border border-slate-600 rounded-lg relative"
                type="text"
                placeholder=" Firstname"
                {...register("firstname", {
                  required: "Firstname is required",
                })}
              />
            </div>
            {errors.firstname && (
              <p className="text-red-500 absolute">
                {errors.firstname.message}
              </p>
            )}
          </div>
          <div>
            <label className="">Lastname</label>
            <div>
              <input
                className="w-[300px] h-[30px] border border-slate-600 rounded-lg relative"
                type="text"
                placeholder=" Lastname"
                {...register("lastname", { required: "Lastname is required" })}
              />
            </div>
            {errors.lastname && (
              <p className="text-red-500 absolute">{errors.lastname.message}</p>
            )}
          </div>
          <div>
            <label className="">Email</label>
            <div>
              <input
                className="w-[300px] h-[30px] border border-slate-600 rounded-lg relative"
                type="text"
                placeholder=" Email"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 absolute">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="">Username</label>
            <div>
              <input
                className="w-[300px] h-[30px] border border-slate-600 rounded-lg relative"
                type="text"
                placeholder=" Username"
                {...register("username", { required: "Username is required" })}
              />
            </div>
            {errors.username && (
              <p className="text-red-500 absolute">{errors.username.message}</p>
            )}
          </div>
          <div>
            <label className="">Password</label>
            <div>
              <input
                className="w-[300px] h-[30px] border border-slate-600 rounded-lg relative"
                type="text"
                placeholder=" Password"
                {...register("password", { required: "Password is required" })}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 absolute">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="">หัวข้อความสนใจ</div>
            <div className="space-x-2 relative">
              <label>
                <input
                  type="checkbox"
                  {...register("interests", {
                    required: "Select at least one interest",
                  })}
                  value="React"
                />
                React
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("interests", {
                    required: "Select at least one interest",
                  })}
                  value="Next.js"
                />
                Next.js
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("interests", {
                    required: "Select at least one interest",
                  })}
                  value="Laravel"
                />
                Laravel
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("interests", {
                    required: "Select at least one interest",
                  })}
                  value="GraphQL"
                />
                GraphQL
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("interests", {
                    required: "Select at least one interest",
                  })}
                  value="Nest.js"
                />
                Nest.js
              </label>
            </div>
            {errors.interests && (
              <p className="text-red-500 absolute bottom-[255px]">
                {errors.interests.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-[100px] h-[50px] border border-slate-600 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
