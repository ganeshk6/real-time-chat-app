
import {
    Search,
    Phone,
    Video,
    MoreVertical,
    Users,
    ChevronDown,
} from "lucide-react";

const ChatHeader = ({ chat }) => {
    if (!chat) return null;

    return (
        <header className="flex h-[76px] w-full items-center justify-between gap-2">

            {/* User Profile */}
            <div className="flex min-w-0 items-center gap-3">

                {/* Avatar */}
                <div className="relative shrink-0">
                    <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${chat.color} text-sm font-bold text-white sm:h-11 sm:w-11`}
                    >
                        {chat.avatar}
                    </div>

                    {chat.online && !chat.isGroup && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#101A2B] bg-emerald-400" />
                    )}
                </div>

                {/* Name and Status */}
                <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                        <h2 className="max-w-[150px] truncate text-sm font-semibold text-white sm:max-w-[220px] sm:text-[15px]">
                            {chat.name}
                        </h2>

                        {chat.isGroup && (
                            <Users
                                size={14}
                                className="shrink-0 text-slate-500"
                            />
                        )}
                    </div>

                    <p className="mt-1 truncate text-[11px] text-slate-400 sm:text-xs">
                        {chat.isGroup
                            ? "Group conversation"
                            : chat.online
                                ? "Online now"
                                : "Offline"}
                    </p>
                </div>
            </div>

            {/* Header Actions */}
            <div className="flex shrink-0 items-center gap-1 sm:gap-2">

                {/* Search */}
                <button
                    type="button"
                    title="Search messages"
                    className="hidden h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-white sm:flex"
                >
                    <Search size={18} />
                </button>

                {/* Voice Call */}
                <button
                    type="button"
                    title="Voice call"
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-white sm:h-10 sm:w-10"
                >
                    <Phone size={17} />
                </button>

                {/* Video Call */}
                <button
                    type="button"
                    title="Video call"
                    className="hidden h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-white sm:flex"
                >
                    <Video size={19} />
                </button>

                {/* More Options */}
                <button
                    type="button"
                    title="More options"
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                    <MoreVertical size={19} />
                </button>
            </div>
        </header>
    );
};

export default ChatHeader;
