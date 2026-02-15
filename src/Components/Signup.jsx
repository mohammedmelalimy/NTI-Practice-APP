import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Signup = () => {
  const signupSchema = z
    .object({
      name: z.string().min(2, "Name is required"),
      email: z.string().email("Invalid email"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string().min(6, "Confirm Password is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-secondary-medium p-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10 border border-default-medium">
        <h1 className="text-3xl font-extrabold text-heading text-center mb-10 tracking-tight">
          Create an Account
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-heading">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Mohammed"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-2 focus:ring-brand px-4 py-3 w-full"
              {...register("name")}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-heading">
              Email Address
            </label>
            <input
              type="email"
              placeholder="mohammed@mail.com"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-2 focus:ring-brand px-4 py-3 w-full"
              {...register("email")}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-heading">
              Password
            </label>
            <input
              type="password"
              placeholder="•••••••••"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-2 focus:ring-brand px-4 py-3 w-full"
              {...register("password")}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-heading">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="•••••••••"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-2 focus:ring-brand px-4 py-3 w-full"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-lg text-sm px-5 py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
