import { ViewFlow } from ".";
import { render } from "../../test-utils";

describe("ViewFlow", () => {
  const { asFragment } = render(<ViewFlow />);

  it("should render successfully", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
