
import { Check, CheckCheck } from "lucide-react";

const MessageBubble = ({ message, isOwn }) => {
    const getStatusIcon = () => {
        if (message.status === "read") {
            return <CheckCheck size={15} className="text-sky-300" />;
        }

        if (message.status === "delivered") {
            return <CheckCheck size={15} className="text-slate-400" />;
        }

        return <Check size={15} className="text-slate-400" />;
    };

    return (
        <div
            className={`flex w-full ${
                isOwn ? "justify-end" : "justify-start"
            }`}
        >
            <div
                className={`group relative flex max-w-[85%] flex-col gap-1 rounded-2xl px-3.5 py-2.5 shadow-sm sm:max-w-[75%] sm:px-4 ${
                    isOwn
                        ? "rounded-br-sm bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                        : "rounded-bl-sm border border-white/[0.05] bg-[#1B293D] text-slate-100"
                }`}
            >
                {/* Message Text */}
                <p className="whitespace-pre-wrap break-words text-[13px] leading-relaxed sm:text-sm">
                    {message.text}
                </p>

                {/* Timestamp and Status */}
                <div
                    className={`flex items-center justify-end gap-1.5 ${
                        isOwn ? "text-blue-100/70" : "text-slate-500"
                    }`}
                >
                    <span className="text-[10px]">
                        {message.time}
                    </span>

                    {isOwn && getStatusIcon()}
                </div>
            </div>
        </div>
    );
};

export default MessageBubble;
