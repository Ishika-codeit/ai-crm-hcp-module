function RadioGroup({ label }) {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="flex gap-6">

        <label className="flex items-center gap-2">
          <input type="radio" name="sentiment" />
          Positive
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="sentiment" />
          Neutral
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="sentiment" />
          Negative
        </label>

      </div>
    </div>
  );
}

export default RadioGroup;