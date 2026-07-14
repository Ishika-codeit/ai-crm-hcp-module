function ChatBubble({ sender, message }) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-sm ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default ChatBubble;