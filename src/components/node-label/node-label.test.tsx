import { render, screen } from "../../test-utils";
import NodeLabel from "./node-label";

describe("NodeLabel", () => {
  it("renders expected label", async () => {
    render(<NodeLabel label="some label" />);
    const nodeLabel = await screen.findByText("some label");
    expect(nodeLabel).toBeInTheDocument();
  });

  it("renders the excel NodeLabel", async () => {
    render(NodeLabel.excel);
    const nodeLabel = await screen.findByText("Excel");
    expect(nodeLabel).toBeInTheDocument();
  });
});
