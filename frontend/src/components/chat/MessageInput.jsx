
import { useState } from "react";
import {
    Paperclip,
    Smile,
    Send,
    Image,
    X,
} from "lucide-react";

const MessageInput = ({ onSend }) => {
    const [message, setMessage] = useState("");
    const [showAttachments, setShowAttachments] = useState(false);

    const handleSend = () => {
        const trimmedMessage = message.trim();

        if (!trimmedMessage) return;

        onSend?.(trimmedMessage);
        setMessage("");
        setShowAttachments(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="relative px-3 py-3 sm:px-5 sm:py-4">

            {/* Attachment Options */}
            {showAttachments && (
                <div className="absolute bottom-full left-4 z-20 mb-2 flex gap-2 rounded-xl border border-white/10 bg-[#1B293D] p-2 shadow-xl">
                    <button
                        type="button"
                        title="Attach image"
                        onClick={() => setShowAttachments(false)}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-slate-300 hover:bg-white/10"
                    >
                        <Image size={17} className="text-blue-400" />
                        Image
                    </button>

                    <button
                        type="button"
                        onClick={() => setShowAttachments(false)}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-slate-300 hover:bg-white/10"
                    >
                        <Paperclip size={17} className="text-violet-400" />
                        File
                    </button>
                </div>
            )}

            {/* Composer */}
            <div className="mx-auto flex max-w-4xl items-end gap-2 rounded-2xl border border-white/[0.08] bg-[#182438] p-2 transition focus-within:border-blue-500/40 focus-within:ring-2 focus-within:ring-blue-500/10 sm:gap-3 sm:p-3">

                {/* Attachment */}
                <button
                    type="button"
                    title="Attachments"
                    onClick={() => setShowAttachments(!showAttachments)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                    {showAttachments ? (
                        <X size={19} />
                    ) : (
                        <Paperclip size={19} />
                    )}
                </button>

                {/* Message Textarea */}
                <textarea
                    rows={1}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onInput={(e) => {
                        e.currentTarget.style.height = "auto";
                        e.currentTarget.style.height =
                            `${Math.min(e.currentTarget.scrollHeight, 120)}px`;
                    }}
                    placeholder="Type a message..."
                    className="max-h-[120px] min-h-[36px] flex-1 resize-none bg-transparent py-2 text-sm leading-5 text-white outline-none placeholder:text-slate-500"
                />

                {/* Emoji */}
                <button
                    type="button"
                    title="Emoji"
                    onClick={() => setMessage((prev) => prev + " 😊")}
                    className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-yellow-400 sm:flex"
                >
                    <Smile size={19} />
                </button>

                {/* Send */}
                <button
                    type="button"
                    onClick={handleSend}
                    disabled={!message.trim()}
                    title="Send message"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
                >
                    <Send size={17} />
                </button>
            </div>

            {/* Helper Text */}
            <p className="mt-2 hidden text-center text-[10px] text-slate-600 sm:block">
                Press Enter to send · Shift + Enter for a new line
            </p>
        </div>
    );
};

export default MessageInput;
