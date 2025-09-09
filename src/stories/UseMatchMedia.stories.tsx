import type { Meta, StoryObj } from "@storybook/react-vite";
import { useMatchMedia } from "@wojtekmaj/react-hooks";
import { useEffect, useState } from "react";

const Example = () => <></>;

const meta = {
  component: Example,
  args: {},
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

// Alternative implementation that works correctly:
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean>();

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 600px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop("matches" in e ? e.matches : (e as MediaQueryList).matches);
    };
    onChange(mql);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
}

// Does not respond to viewport size changes:
export const UseMatchMedia: Story = {
  render: () => {
    const isNarrow = useMatchMedia("(max-width: 600px)");
    return <div>{isNarrow ? "Narrow" : "Wide"}</div>;
  },
};

// Responds to viewport size changes:
export const UseIsDesktop: Story = {
  render: () => {
    const isDesktop = useIsDesktop();
    return <div>{isDesktop ? "Wide" : "Narrow"}</div>;
  },
};
