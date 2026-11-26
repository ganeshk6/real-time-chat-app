
import ChatListItem from "./ChatListItem";

const conversations = [
    {
        id: 1,
        name: "Rahul Sharma",
        message: "Hey! How is your project going?",
        time: "2:45 PM",
        avatar: "RS",
        color: "from-blue-500 to-indigo-600",
        online: true,
        unread: 2,
        isGroup: false,
        lastMessageMine: false,
    },
    {
        id: 2,
        name: "Development Team",
        message: "You: API integration is completed.",
        time: "1:30 PM",
        avatar: "DT",
        color: "from-violet-500 to-purple-600",
        online: false,
        unread: 5,
        isGroup: true,
        lastMessageMine: true,
    },
    {
        id: 3,
        name: "Priya Singh",
        message: "Thank you so much! 😊",
        time: "12:15 PM",
        avatar: "PS",
        color: "from-pink-500 to-rose-600",
        online: true,
        unread: 0,
        isGroup: false,
        lastMessageMine: false,
    },
    {
        id: 4,
        name: "Amit Kumar",
        message: "Let's connect tomorrow.",
        time: "Yesterday",
        avatar: "AK",
        color: "from-emerald-500 to-teal-600",
        online: false,
        unread: 0,
        isGroup: false,
        lastMessageMine: false,
    },
    {
        id: 5,
        name: "Project Discussion",
        message: "Ankit: Shared the new design.",
        time: "Yesterday",
        avatar: "PD",
        color: "from-orange-500 to-amber-600",
        online: false,
        unread: 3,
        isGroup: true,
        lastMessageMine: false,
    },
    {
        id: 6,
        name: "Neha Verma",
        message: "Are you available right now?",
        time: "Monday",
        avatar: "NV",
        color: "from-cyan-500 to-blue-600",
        online: false,
        unread: 0,
        isGroup: false,
        lastMessageMine: false,
    },
    {
        id: 7,
        name: "Vikas Singh",
        message: "See you soon!",
        time: "Sunday",
        avatar: "VS",
        color: "from-fuchsia-500 to-purple-600",
        online: false,
        unread: 0,
        isGroup: false,
        lastMessageMine: true,
    },
];

const ChatList = ({
    search = "",
    activeTab = "all",
    selectedChat,
    onSelectChat,
}) => {
    const filteredChats = conversations.filter((chat) => {
        const matchesSearch =
            chat.name.toLowerCase().includes(search.toLowerCase()) ||
            chat.message.toLowerCase().includes(search.toLowerCase());

        const matchesTab =
            activeTab === "all" ||
            (activeTab === "unread" && chat.unread > 0) ||
            (activeTab === "groups" && chat.isGroup);

        return matchesSearch && matchesTab;
    });

    return (
        <div className="flex h-full flex-col">

            {/* List Header */}
            <div className="flex items-center justify-between px-4 pb-3 sm:px-5">
                <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-slate-500">
                    Recent conversations
                </span>

                <span className="text-xs text-slate-500">
                    {filteredChats.length} chats
                </span>
            </div>

            {/* Conversations */}
            <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 sm:px-3">
                {filteredChats.length > 0 ? (
                    <div className="space-y-1">
                        {filteredChats.map((chat) => (
                            <ChatListItem
                                key={chat.id}
                                chat={chat}
                                isSelected={selectedChat?.id === chat.id}
                                onClick={() => onSelectChat(chat)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center px-5 text-center">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04]">
                            <span className="text-2xl">💬</span>
                        </div>

                        <h3 className="text-sm font-semibold text-white">
                            No conversations found
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                            Try searching with a different name or message.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatList;
