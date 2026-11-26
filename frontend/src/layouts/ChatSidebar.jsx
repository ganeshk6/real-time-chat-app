
import { useState } from "react";
import {
    Search,
    Plus,
    MessageCircle,
    Users,
    Archive,
    Settings,
    MoreVertical,
    Sparkles,
} from "lucide-react";

import ChatList from "../components/chat/ChatList";

const ChatSidebar = ({ selectedChat, onSelectChat }) => {
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
        { id: "all", label: "All" },
        { id: "unread", label: "Unread" },
        { id: "groups", label: "Groups" },
    ];

    return (
        <div className="flex h-full w-full flex-col bg-[#0E1626] text-white">

            {/* Profile Header */}
            <header className="flex items-center justify-between border-b border-white/[0.06] px-4 py-4 sm:px-5">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-bold shadow-lg shadow-blue-500/20">
                        GK
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0E1626] bg-emerald-400" />
                    </div>

                    <div className="min-w-0">
                        <h2 className="truncate text-sm font-semibold text-white">
                            My Chats
                        </h2>
                        <p className="text-xs text-slate-400">
                            Stay connected
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        title="New chat"
                        className="rounded-xl p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                    >
                        <Plus size={19} />
                    </button>

                    <button
                        type="button"
                        title="More options"
                        className="rounded-xl p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                    >
                        <MoreVertical size={19} />
                    </button>
                </div>
            </header>

            {/* Search */}
            <div className="px-4 pt-5 sm:px-5">
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#182235] px-3.5 py-3 transition focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/10">
                    <Search size={18} className="shrink-0 text-slate-500" />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search conversations..."
                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                    />

                    {search && (
                        <button
                            type="button"
                            onClick={() => setSearch("")}
                            className="text-xs text-slate-400 hover:text-white"
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

            {/* Section Title */}
            <div className="flex items-center justify-between px-4 pb-3 pt-6 sm:px-5">
                <div>
                    <h3 className="text-sm font-semibold text-white">
                        Messages
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500">
                        Your recent conversations
                    </p>
                </div>

                <span className="rounded-lg bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400">
                    Active
                </span>
            </div>

            {/* Chat Filters */}
            <div className="flex gap-2 px-4 pb-4 sm:px-5">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
                            activeTab === tab.id
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                : "bg-white/[0.04] text-slate-400 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Chat List */}
            <div className="min-h-0 flex-1 overflow-hidden">
                <ChatList
                    search={search}
                    activeTab={activeTab}
                    selectedChat={selectedChat}
                    onSelectChat={onSelectChat}
                />
            </div>

            {/* Sidebar Footer */}
            <footer className="flex items-center justify-between border-t border-white/[0.06] px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Sparkles size={15} className="text-blue-400" />
                    <span>Powered by Orvexa</span>
                </div>

                <button
                    type="button"
                    title="Settings"
                    className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                    <Settings size={17} />
                </button>
            </footer>
        </div>
    );
};

export default ChatSidebar;
