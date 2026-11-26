
import {
    Check,
    CheckCheck,
    Users,
    Pin,
    VolumeX,
} from "lucide-react";

const ChatListItem = ({ chat, isSelected, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                isSelected
                    ? "border border-blue-500/20 bg-blue-500/10"
                    : "border border-transparent hover:bg-white/[0.04]"
            }`}
        >
            {/* Avatar */}
            <div className="relative shrink-0">
                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${chat.color} text-sm font-bold text-white shadow-lg sm:h-[50px] sm:w-[50px]`}
                >
                    {chat.avatar}
                </div>

                {chat.online && !chat.isGroup && (
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-[2.5px] border-[#0E1626] bg-emerald-400" />
                )}

                {chat.isGroup && (
                    <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0E1626] bg-[#263449] text-slate-300">
                        <Users size={10} />
                    </span>
                )}
            </div>

            {/* Chat Details */}
            <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between gap-2">
                    <h3
                        className={`truncate text-[13px] font-semibold sm:text-sm ${
                            isSelected ? "text-blue-300" : "text-slate-100"
                        }`}
                    >
                        {chat.name}
                    </h3>

                    <span
                        className={`shrink-0 text-[10px] ${
                            chat.unread > 0
                                ? "font-medium text-blue-400"
                                : "text-slate-500"
                        }`}
                    >
                        {chat.time}
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-1.5">
                        {chat.lastMessageMine && (
                            <CheckCheck
                                size={14}
                                className="shrink-0 text-blue-400"
                            />
                        )}

                        <p
                            className={`truncate text-xs ${
                                chat.unread > 0
                                    ? "font-medium text-slate-200"
                                    : "text-slate-500"
                            }`}
                        >
                            {chat.message}
                        </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-1.5">
                        {chat.isPinned && (
                            <Pin
                                size={12}
                                className="text-slate-500"
                            />
                        )}

                        {chat.isMuted && (
                            <VolumeX
                                size={13}
                                className="text-slate-500"
                            />
                        )}

                        {chat.unread > 0 && (
                            <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-semibold text-white">
                                {chat.unread > 99 ? "99+" : chat.unread}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </button>
    );
};

export default ChatListItem;
