import { StyledSelect } from "./search-nodes.styles";

const SearchNodes = () => {
  const options = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
  ];
  return (
    <div className="search-nodes">
      <StyledSelect
        name="search-nodes"
        options={options}
        isClearable
        isMulti
        isSearchable
        placeholder="Search and add nodes"
      />
    </div>
  );
};

export default SearchNodes;
