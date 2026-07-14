function SelectField({ label, options }) {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>

      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">

        <option>Select</option>

        {options.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}

      </select>
    </div>
  );
}

export default SelectField;