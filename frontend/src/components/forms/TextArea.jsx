function TextArea({ label, placeholder }) {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>

      <textarea
        rows="4"
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default TextArea;