import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import DateSeparator from "./DateSeparator";

export const initialMessages = [
  { id: 1, type: "date", label: "Yesterday" },
  {
    id: 2,
    sender: "other",
    text: "Hey! How are you doing?",
    time: "8:30 PM",
    status: "read",
  },
  {
    id: 3,
    sender: "me",
    text: "I'm doing great! What about you?",
    time: "8:32 PM",
    status: "read",
  },
  {
    id: 4,
    sender: "other",
    text: "I'm good too. How is your new project going?",
    time: "8:35 PM",
    status: "read",
  },
  {
    id: 5,
    sender: "me",
    text: "It's going really well. I'm currently working on the chat interface.",
    time: "8:37 PM",
    status: "read",
  },
  { id: 6, type: "date", label: "Today" },
  {
    id: 7,
    sender: "other",
    text: "That's great! Are you using React?",
    time: "10:15 AM",
    status: "read",
  },
  {
    id: 8,
    sender: "me",
    text: "Yes, React with Tailwind CSS and Redux Toolkit.",
    time: "10:17 AM",
    status: "read",
  },
  {
    id: 9,
    sender: "other",
    text: "Nice! The UI is looking good. Keep going! 🚀",
    time: "10:19 AM",
    status: "read",
  },
  {
    id: 10,
    sender: "me",
    text: "Thank you! I'll share the completed version soon.",
    time: "10:20 AM",
    status: "delivered",
  },
];

const MessageContainer = ({ chat, messages = [] }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [chat?.id, messages.length]);

  return (
    <div className="h-full overflow-y-auto px-3 py-5 sm:px-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3">
        {messages.map((message) =>
          message.type === "date" ? (
            <DateSeparator key={message.id} label={message.label} />
          ) : (
            <MessageBubble
              key={message.id}
              message={message}
              isOwn={message.sender === "me"}
            />
          )
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageContainer;