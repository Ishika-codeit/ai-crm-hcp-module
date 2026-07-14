import Navbar from "../components/layout/Navbar";
import InteractionForm from "../components/forms/InteractionForm";
import AIChat from "../components/chat/AIChat";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid lg:grid-cols-2 gap-8">

          <InteractionForm />

          <AIChat />

        </div>

      </div>
    </div>
  );
}

export default Dashboard;