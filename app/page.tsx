"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  domain: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    console.log(data);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 flex-col">
        <label htmlFor="domain">Domain</label>
        <input
          id="domain"
          defaultValue=""
          className="rounded-md py-2 text-black px-2 focus-within:outline-indigo-500 focus-within:outline-dashed"
          {...register("domain", { required: true })}
        />

        {errors.domain && <span>This field is required</span>}

        <button
          disabled={loading}
          className="bg-indigo-500 text-white py-2 rounded-md cursor-pointer hover:bg-indigo-700 transition duration-150 disabled:cursor-wait disabled:bg-indigo-700/50 disabled:hover:bg-indigo-700/50"
          type="submit"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
