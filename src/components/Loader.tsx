function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100px] w-full">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-2" />
      <p className="text-gray-500 text-sm">Loading...</p>
    </div>
  );
}

export default Loader;
