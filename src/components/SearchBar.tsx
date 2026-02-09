import { useStore } from "../zustand/store";

const SearchBar = () => {
  const setSearchQuery = useStore((store) => store.setSearchQuery);
  const searchQuery = useStore((store) => store.searchQuery);
  return (
    <div>
      <input
        type="text"
        value={searchQuery || ""}
        onChange={(event) => {
          const value = event.target.value;
          setSearchQuery(value);
        }}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
