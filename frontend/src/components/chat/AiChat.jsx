import { Bot } from "lucide-react";
import ChatBubble from "./ChatBubble";
import QuickAction from "./QuickAction";

function AiChat() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">

      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Bot className="text-white" size={20} />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            AI Assistant
          </h2>

          <p className="text-gray-500 text-sm">
            Powered by LangGraph + Groq
          </p>
        </div>
      </div>

      <div className="flex-1 border rounded-xl bg-slate-50 p-4 overflow-y-auto">

        <ChatBubble
          sender="bot"
          message="👋 Hello! I can help you log HCP interactions, summarize meetings and generate follow-up actions."
        />

      </div>

      <div className="grid grid-cols-2 gap-3 my-5">

        <QuickAction title="📝 Log Interaction" />

        <QuickAction title="✏ Edit Interaction" />

        <QuickAction title="📄 Summarize Notes" />

        <QuickAction title="📅 Generate Follow-up" />

        <QuickAction title="👨‍⚕ Search HCP" />

      </div>

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Ask AI anything..."
          className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700">
          Send
        </button>

      </div>

    </div>
  );
}

export default AiChat;