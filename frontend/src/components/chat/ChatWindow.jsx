import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import ChatHeader from "./ChatHeader";
import MessageContainer, { initialMessages } from "./MessageContainer";
import MessageInput from "./MessageInput";
import EmptyChat from "../common/EmptyChat";

const ChatWindow = ({ chat, onBack }) => {
    const [messages, setMessages] = useState(initialMessages);

    const handleSendMessage = (text) => {
        const now = new Date();

        const newMessage = {
            id: Date.now(),
            sender: "me",
            text,
            time: now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
            status: "sent",
        };

        setMessages((prev) => [...prev, newMessage]);
    };

    if (!chat) return <EmptyChat />;

    return (
        <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden bg-[#0B1220]">
            <div className="flex shrink-0 items-center gap-2 border-b border-white/[0.06] bg-[#101A2B] px-3 sm:px-5">
                <button
                    onClick={onBack}
                    className="flex h-9 w-9 shrink-0 items-center justify-center text-slate-400 hover:bg-white/10 md:hidden"
                    aria-label="Back to conversations"
                >
                    <ArrowLeft size={20} />
                </button>

                <div className="min-w-0 flex-1">
                    <ChatHeader chat={chat} />
                </div>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden">
                <MessageContainer
                    chat={chat}
                    messages={messages}
                />
            </div>

            <div className="shrink-0 border-t border-white/[0.06] bg-[#101A2B]">
                <MessageInput onSend={handleSendMessage} />
            </div>
        </div>
    );
};

export default ChatWindow;