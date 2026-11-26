
import { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "../components/chat/ChatWindow";

const ChatLayout = () => {
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <main className="h-dvh w-full overflow-hidden bg-[#080D19] p-0">
            <div className="mx-auto flex h-full w-full max-w-[1800px] overflow-hidden rounded-none bg-[#0E1626] shadow-2xl">

                {/* Sidebar */}
                <aside
                    className={`
                        h-full w-full border-r border-white/10
                        md:w-[320px] lg:w-[360px] xl:w-[390px]
                        ${selectedChat ? "hidden md:flex" : "flex"}
                    `}
                >
                    <ChatSidebar
                        selectedChat={selectedChat}
                        onSelectChat={setSelectedChat}
                    />
                </aside>

                {/* Chat Window */}
                <section
                    className={`
                        h-full min-w-0 flex-1
                        ${selectedChat ? "flex" : "hidden md:flex"}
                    `}
                >
                    <ChatWindow
                        chat={selectedChat}
                        onBack={() => setSelectedChat(null)}
                    />
                </section>

            </div>
        </main>
    );
};

export default ChatLayout;