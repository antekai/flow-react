import { useSearchParams } from "react-router-dom";
import { StyledSelect } from "./search-nodes.styles";
import { MultiValue } from "react-select";

interface Option {
  value: string;
  label: string;
}

const SearchNodes = () => {
  const options = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const searchNodes = searchParams.get("searchNodes");
  const value = options.filter(({ value }) => searchNodes?.includes(value));

  const handleChange = (selectedOptions: MultiValue<Option>): void => {
    const optionValue = JSON.stringify(
      selectedOptions?.map((option: Option) => option.value)
    );
    setSearchParams({ searchNodes: optionValue });
  };

  return (
    <StyledSelect
      name="search-nodes"
      options={options}
      isClearable
      isMulti
      isSearchable
      placeholder="Search and add nodes"
      onChange={handleChange}
      value={value}
    />
  );
};

export default SearchNodes;
