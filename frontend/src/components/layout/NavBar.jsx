import { Bot } from "lucide-react";

function NavBar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Bot className="text-white" size={22}/>
          </div>

          <div>
            <h1 className="font-bold text-xl">
              AI CRM
            </h1>

            <p className="text-gray-500 text-sm">
              HCP Interaction Module
            </p>
          </div>
        </div>

        <div className="text-gray-500">
          LangGraph + Groq
        </div>

      </div>
    </nav>
  );
}

export default NavBar;