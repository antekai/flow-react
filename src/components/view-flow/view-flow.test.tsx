import { MemoryRouter } from "react-router-dom";
import { ViewFlow } from ".";
import { render } from "../../test-utils";

describe("ViewFlow", () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={['/?searchNodes=%5B"excel"%5D']}>
      <ViewFlow />
    </MemoryRouter>
  );

  it("should render successfully", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
