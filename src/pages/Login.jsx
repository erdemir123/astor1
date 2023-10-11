import React from "react";
import Logo from "../assets/logo/astor.png";
import { useFormik } from "formik";
import validation from "../utils/validation";
import { useLoginMutation } from "../store/services/mainApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../store/services/mainSlice";
import load from  "../assets/logo/load.gif"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [createUser, { data ,isLoading }] = useLoginMutation();
  // console.log(data)
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validation,
      onSubmit: async (values) => {
        console.log(values);
        await dispatch(setUser(values))
        navigate("/")
        // await createUser({ username: values.email, password: values.password });
      },
    });
  // if (data?.ret) {
  //   navigate("/");
  //   dispatch(setUser(data.ret.user));
  // }
  
  return (
    <div className="h-[100%] flex justify-center items-center ">
      <form
        className="min-w-[450px] w-[35%] h-[450px] bg-white  rounded-xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center my-6">
          <img alt="Logo" src={Logo} className="w-[280px] rounded-lg " />
        </div>
        <div className="mb-2 mx-5 md:mx-12 flex flex-col gap-4">
          <input
            type="text"
            placeholder="name@example.com"
            className="w-[100%] rounded-lg border border-gray mt-2 py-2 indent-3"
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <input
            type="password"
            placeholder="name@example.com"
            className="w-[100%] rounded-lg border border-gray mt-2 py-2 indent-3"
            onChange={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <div className="flex justify-end">
            <p className="text-red-500 text-sm">Forgot Password ? </p>
          </div>
          <button
            className="bg-red-500 py-2 rounded-lg text-white"
            type="submit"
          >
            Sing In
           {/* {isLoading ? <div className="flex justify-center items-center gap-2"><p>Giriş Yapılıyor</p><img src={load} alt="" className="w-5"/></div> :  "Sing In"} */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
