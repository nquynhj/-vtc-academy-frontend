import ListSinger from "./Component/listSinger";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-[1250px]">
        <div className="min-h-screen  p-4">
          {/* Tiêu đề */}
          <div className=" text-black p-4 rounded-t-lg shadow-md">
            <h1 className="text-2xl font-bold">Music Player Components</h1>
          </div>

          {/* Danh sách bài hát */}
          <div className="bg-white p-4 rounded-b-lg shadow-md">
            <div className="flex items-center justify-between pt-3 pb-8">
              <h2 className="text-lg font-semibold">Popular Songs</h2>
              <a href="#" className="text-black hover:underline">
                See All
              </a>
            </div>
            <ListSinger />
            <div className="mt-4 text-right">
              <button className=" bg-customBlue text-white px-5 py-2 rounded hover:opacity-80">
                Add New Singer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
