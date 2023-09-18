import { SearchNodes } from ".";
import { render } from "../../test-utils";

describe("SearchNodes", () => {
  const { asFragment } = render(<SearchNodes />);

  it("should render successfully", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
