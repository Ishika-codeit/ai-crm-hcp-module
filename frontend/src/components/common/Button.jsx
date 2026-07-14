function Button({ title }) {
  return (
    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
      {title}
    </button>
  );
}

export default Button;