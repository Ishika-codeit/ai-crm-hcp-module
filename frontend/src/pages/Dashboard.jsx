import NavBar from "../components/layout/NavBar";
import InteractionForm from "../components/forms/InteractionForm";
import AiChat from "../components/chat/AiChat";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <NavBar />

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid lg:grid-cols-2 gap-8">

          <InteractionForm />

          <AiChat />

        </div>

      </div>
    </div>
  );
}

export default Dashboard;