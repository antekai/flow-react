import { SearchNodes } from "../../components/search-nodes";
import { ViewFlow } from "../../components/view-flow";
import { StyledWorkflow } from "./workflow.styles";

const Workflow = () => {
  return (
    <StyledWorkflow>
      <SearchNodes />

      <ViewFlow />
    </StyledWorkflow>
  );
};

export default Workflow;
