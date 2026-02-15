import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);

    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-secondary-medium p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 border border-default-medium">
        <h1 className="text-3xl font-extrabold text-heading text-center mb-10 tracking-tight">
          Log In
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-heading">
              Email Address
            </label>
            <input
              type="email"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-2 focus:ring-brand block w-full px-4 py-3 shadow-xs placeholder:text-body transition"
              placeholder="your@email.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-heading">
              Password
            </label>
            <input
              type="password"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-2 focus:ring-brand block w-full px-4 py-3 shadow-xs placeholder:text-body transition"
              placeholder="•••••••••"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full text-white bg-blue-500 hover:bg-blue-600 cursor-pointer bg-brand hover:bg-brand-strong transition-all duration-300 border border-transparent shadow-md font-semibold rounded-lg text-sm px-5 py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
