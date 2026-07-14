function QuickAction({ title }) {
  return (
    <button
      className="w-full text-left px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300"
    >
      {title}
    </button>
  );
}

export default QuickAction;