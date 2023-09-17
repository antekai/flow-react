import { RenderHookResult, render, renderHook } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "./app/theme";

interface ProvidersForTestsProps {
  children: JSX.Element;
}

export const ProvidersForTests = ({ children }: ProvidersForTestsProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: JSX.Element, options?: Record<string, unknown>) =>
  render(ui, {
    wrapper: ({ children }) => (
      <ProvidersForTests {...options}>{children}</ProvidersForTests>
    ),
  });

export const customRenderHook = <P, R>(
  hook: (props: P) => R,
  options?: Record<string, unknown>
): RenderHookResult<any, any> =>
  renderHook(hook, {
    wrapper: ({ children }) => (
      <ProvidersForTests {...options}>{children}</ProvidersForTests>
    ),
  });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
export { customRenderHook as renderHook };
