import { App } from ".";
import { render } from "../test-utils";

describe("App", () => {
  const { asFragment } = render(<App />);

  it("should render successfully", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
