import { MemoryRouter } from "react-router-dom";
import { SearchNodes } from ".";
import { render } from "../../test-utils";

describe("SearchNodes", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <SearchNodes />
    </MemoryRouter>
  );

  it("should render successfully", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
