import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const { signInUser } = useAuth();

  const navigate = useNavigate()

  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        console.log("Logged in:", result.user);
        navigate("/")
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-12">
      <div className="card bg-base-100 w-full max-w-lg shadow-2xl border border-base-200/50 rounded-2xl overflow-hidden">
        <div className="card-body p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-base-content">Sign In</h2>
            <p className="text-base-content/60 mt-2">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base-content">
                  Email address
                </span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className={`input input-bordered w-full focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30 transition-all duration-200 ${
                  errors.email ? "input-error" : ""
                }`}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <div className="label">
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                </div>
              )}
            </div>

            {/* Password Field with Toggle */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base-content">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  className={`input input-bordered w-full pr-12 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30 transition-all duration-200 ${
                    errors.password ? "input-error" : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/70 hover:text-base-content focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    // Eye-slash (hide)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    // Eye (show)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {errors.password && (
                <div className="label">
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                </div>
              )}

              <label className="label mt-2">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary text-black w-full text-lg font-semibold mt-4"
            >
              Sign In
            </button>
          </form>

          

          <p className="text-center text-base-content/70">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="link link-hover text-primary font-medium"
            >
              Create account
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
