
import {
    MessageCircle,
    ShieldCheck,
    Zap,
    Users,
    Sparkles,
} from "lucide-react";

const EmptyChat = () => {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#0B1220] px-5 py-10 text-center">

            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.07] blur-[120px]" />

                <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-violet-600/[0.05] blur-[100px]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex max-w-lg flex-col items-center">

                {/* Logo Icon */}
                <div className="relative mb-8">
                    <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-violet-600/20 shadow-2xl shadow-blue-500/10 sm:h-28 sm:w-28">
                        <MessageCircle
                            size={48}
                            strokeWidth={1.5}
                            className="text-blue-400 sm:h-14 sm:w-14"
                        />
                    </div>

                    <div className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#172235] shadow-lg">
                        <Sparkles
                            size={17}
                            className="text-violet-400"
                        />
                    </div>
                </div>

                {/* Heading */}
                <span className="mb-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[2px] text-blue-400">
                    Welcome to Orvexa
                </span>

                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    Your conversations,
                    <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                        all in one place.
                    </span>
                </h1>

                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                    Select a conversation from your sidebar and start
                    connecting with people. Your next conversation
                    starts here.
                </p>

                {/* Features */}
                <div className="mt-9 grid w-full max-w-md grid-cols-3 gap-3">

                    <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-2 py-4">
                        <MessageCircle
                            size={20}
                            className="text-blue-400"
                        />
                        <span className="text-[10px] font-medium text-slate-400 sm:text-xs">
                            Messaging
                        </span>
                    </div>

                    <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-2 py-4">
                        <Zap
                            size={20}
                            className="text-amber-400"
                        />
                        <span className="text-[10px] font-medium text-slate-400 sm:text-xs">
                            Fast & Easy
                        </span>
                    </div>

                    <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-2 py-4">
                        <ShieldCheck
                            size={20}
                            className="text-emerald-400"
                        />
                        <span className="text-[10px] font-medium text-slate-400 sm:text-xs">
                            Secure Chat
                        </span>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-10 flex items-center gap-2 text-xs text-slate-600">
                    <Users size={14} />
                    <span>Stay connected, anytime, anywhere.</span>
                </div>
            </div>
        </div>
    );
};

export default EmptyChat;
