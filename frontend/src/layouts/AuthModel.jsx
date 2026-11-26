import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setModalChange,clearAuthError} from "../features/auth/authSlice";
import {registerUser,loginUser} from "../features/auth/authThunks";

import {
  MessageCircle,
  Mail,
  LockKeyhole,
  UserRound,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Phone,
} from "lucide-react";

const AuthModal = () => {
    const dispatch = useDispatch();

    const { modalType, isAuthenticated, isLoading, error } = useSelector(
        (state) => state.auth
    );

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const isSignup = modalType === "signup";

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSwitch = (type) => {
        dispatch(clearAuthError());

        setFormData({
            name: "",
            email: "",
            phone: "",
            password: "",
        });

        setShowPassword(false);
        dispatch(setModalChange(type));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(clearAuthError());

        if (isSignup) {
            const result = await dispatch(registerUser(formData));

            if (registerUser.fulfilled.match(result)) {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                });
            }
        } else {
            const result = await dispatch(
                loginUser({
                    email: formData.email,
                    password: formData.password,
                })
            );

            if (loginUser.fulfilled.match(result)) {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                });
            }
        }
    };

    if (isAuthenticated) return null;

    return (
        <div className="fixed inset-0 z-[9999] overflow-y-auto bg-[#050816]">
            <div className="relative flex min-h-[100dvh] w-full items-center justify-center p-3 sm:p-6">
                <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden bg-[#050816]">
                    <div className="absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[130px]" />
                    <div className="absolute -bottom-32 -right-32 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[130px]" />
                    <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
                </div>

                <div className="relative z-10 my-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0c1224]/95 shadow-[0_30px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl md:grid-cols-2">
                    <div className="flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
                        <div className="mb-9 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/20">
                                <MessageCircle size={25} className="text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold tracking-wide text-white">ChatFlow</h2>
                                <p className="text-xs text-slate-500">
                                    Connect. Communicate. Collaborate.
                                </p>
                            </div>
                        </div>
                        <div className="mb-7">
                            <p className="mb-2 text-sm font-medium text-indigo-400">
                                {isSignup ? "JOIN OUR COMMUNITY" : "WELCOME BACK"}
                            </p>

                            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                {isSignup ? "Create account" : "Let's get started"}
                            </h1>

                            <p className="mt-3 text-sm leading-6 text-slate-400">
                            {isSignup
                                ? "Create your account and start connecting with people."
                                : "Sign in to continue your conversations and stay connected."}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {isSignup && (
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Full Name
                                    </label>

                                    <div className="relative">
                                    <UserRound
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    />

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                        autoComplete="name"
                                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:bg-indigo-500/[0.05] focus:ring-4 focus:ring-indigo-500/10"
                                    />
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Email Address
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                        autoComplete="email"
                                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:bg-indigo-500/[0.05] focus:ring-4 focus:ring-indigo-500/10"
                                    />
                                </div>
                            </div>
                            {isSignup && (
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        Phone Number
                                    </label>

                                    <div className="relative">
                                        <Phone
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                        />

                                        <input
                                            type="number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="123-456-7890"
                                            required
                                            autoComplete="phone"
                                            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:bg-indigo-500/[0.05] focus:ring-4 focus:ring-indigo-500/10"
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Password
                                </label>

                                <div className="relative">
                                    <LockKeyhole
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        required
                                        minLength={6}
                                        autoComplete={isSignup ? "new-password" : "current-password"}
                                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:bg-indigo-500/[0.05] focus:ring-4 focus:ring-indigo-500/10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                            {error && (
                                <p
                                    role="alert"
                                    className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm text-red-400"
                                >
                                    {error}
                                </p>
                            )}
                            {!isSignup && (
                                <div className="flex items-center justify-between gap-2 text-xs">
                                    <label className="flex cursor-pointer items-center gap-2 text-slate-400">
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 accent-indigo-500"
                                        />
                                        Remember me
                                    </label>

                                    <button
                                        type="button"
                                        className="font-medium text-indigo-400 transition hover:text-indigo-300"
                                        onClick={() => {
                                            // TODO: Implement forgot password flow
                                        }}
                                    >
                                        Forgot password?
                                    </button>
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                            {isLoading
                                ? "Please wait..."
                                : isSignup
                                ? "Create Account"
                                : "Sign In"}

                            {!isLoading && (
                                <ArrowRight
                                    size={18}
                                    className="transition group-hover:translate-x-1"
                                />
                            )}
                            </button>
                        </form>
                        <div className="mt-7 text-center text-sm text-slate-400">
                            {isSignup ? "Already have an account?" : "Don't have an account?"}

                            <button
                                type="button"
                                onClick={() => handleSwitch(isSignup ? "signin" : "signup")}
                                className="ml-2 font-semibold text-indigo-400 transition hover:text-indigo-300"
                            >
                                {isSignup ? "Sign In" : "Create Account"}
                            </button>
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-600">
                            <ShieldCheck size={15} />
                            Your conversations are private and secure.
                        </div>
                    </div>
                    <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-indigo-600 via-[#3730a3] to-[#0e7490] p-10 md:flex lg:p-14">
                    
                        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
                        <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
                        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-2xl" />

                        <div className="relative z-10">
                            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-lg">
                                <Zap size={14} className="text-yellow-300" />
                                Real-time communication
                            </div>

                            <h2 className="max-w-sm text-4xl font-bold leading-tight text-white lg:text-5xl">
                                Conversations that bring people closer.
                            </h2>

                            <p className="mt-6 max-w-sm text-sm leading-7 text-indigo-100/80">
                                Experience seamless messaging, share moments, and stay connected
                                with your people from anywhere.
                            </p>
                        </div>
                        <div className="relative z-10 space-y-5">
                            {[
                            "Instant real-time messaging",
                            "Private and secure conversations",
                            "Share files, photos and moments",
                            ].map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-3 text-sm text-white/90"
                                >
                                    <CheckCircle2 size={19} className="shrink-0 text-cyan-300" />
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <div className="relative z-10 mt-10 border-t border-white/20 pt-6 text-xs text-indigo-100/60">
                            © {new Date().getFullYear()} ChatFlow. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
