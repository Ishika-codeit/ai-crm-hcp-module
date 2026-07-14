function AiChat() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full">

      <h2 className="text-2xl font-bold mb-4">
         AI Assistant
      </h2>

      <div className="h-112.5 border rounded-lg p-4 bg-gray-50 overflow-y-auto">
        <p className="text-gray-500">
          Hello! I can help you log HCP interactions, summarize meetings, edit previous records, and suggest follow-ups.
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Ask AI..."
          className="flex-1 border rounded-lg px-4 py-3 outline-none"
        />

        <button className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700">
          Send
        </button>
      </div>

    </div>
  );
}

export default AiChat;