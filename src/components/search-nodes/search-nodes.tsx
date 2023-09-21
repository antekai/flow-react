import { useSearchParams } from "react-router-dom";
import { StyledSelect } from "./search-nodes.styles";
import { MultiValue } from "react-select";
import nodeData from "../../mocks/node-data";

interface Option {
  value: string;
  label: string;
}

const SearchNodes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchNodes = searchParams.get("searchNodes");
  const nodeOptions: Option[] = Object.entries(nodeData).map(([key, value]) => {
    return { value: key, label: value.label };
  });
  const value = nodeOptions.filter(({ value }) => searchNodes?.includes(value));

  const handleChange = (selectedOptions: MultiValue<Option>): void => {
    const optionValue = JSON.stringify(
      selectedOptions?.map((option: Option) => option.value)
    );
    setSearchParams({ searchNodes: optionValue });
  };

  return (
    <StyledSelect
      name="search-nodes"
      options={nodeOptions}
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
