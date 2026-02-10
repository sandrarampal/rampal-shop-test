import { useStore } from "../zustand/store";

const SearchBar = () => {
  const setSearchQuery = useStore((store) => store.setSearchQuery);
  const searchQuery = useStore((store) => store.searchQuery);
  return (
    <div className="flex gap-3 ">
      <input
        type="text"
        value={searchQuery || ""}
        placeholder="Search an item..."
        onChange={(event) => {
          const value = event.target.value;
          setSearchQuery(value);
        }}
        className="border border-gray-300 rounded px-2 py-2 w-64 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  );
};

export default SearchBar;
