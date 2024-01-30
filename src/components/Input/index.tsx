import SearchIcon from "../../icons/SearchIcon";

const Component = () => {
  return (
    <div className="relative flex">
      <input
        type="text"
        className="bg-gallery text-shark my-12 w-full rounded-xl p-4 font-bold outline-none"
        placeholder="Search a word..."
      />

      <SearchIcon />
    </div>
  );
};

export default Component;
