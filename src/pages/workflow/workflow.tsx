import { ViewFlow } from "../../components/view-flow";
import { StyledPanel, StyledWorkflow } from "./workflow.styles";

const Workflow = () => {
  return (
    <StyledWorkflow>
      <StyledPanel>panel</StyledPanel>

      <ViewFlow />
    </StyledWorkflow>
  );
};

export default Workflow;
