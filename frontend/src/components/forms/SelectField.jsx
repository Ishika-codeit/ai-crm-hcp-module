function SelectField({ label, options }) {
  return (
    <div className="mb-4">

      <label className="block mb-2 text-sm font-medium">
        {label}
      </label>

      <select className="w-full border rounded-lg px-4 py-2">

        {options.map((option)=>(
          <option key={option}>
            {option}
          </option>
        ))}

      </select>

    </div>
  );
}

export default SelectField;