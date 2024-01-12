import { createBreakpoints } from "@solid-primitives/media";
import { children, For, mergeProps } from "solid-js";

import type { JSX, ParentComponent } from "solid-js";

interface ColumnsProps extends JSX.HTMLAttributes<HTMLDivElement> {
  columns?: number | Record<number, string>;
}

export const Columns: ParentComponent<ColumnsProps> = (_props) => {
  const props = mergeProps({ columns: 3 }, _props);

  const columnAmount = () =>
    typeof props.columns === "object"
      ? Object.entries(createBreakpoints(props.columns)).reduce((acc, [key, value]) => (value ? Number(key) : acc), 1)
      : props.columns;

  const resolved = children(() => props.children).toArray;

  const createColumns = () =>
    resolved().reduce(
      // eslint-disable-next-line solid/reactivity
      (acc: JSX.Element[][], child, index) => (acc[index % columnAmount()]?.push(child), acc),
      Array.from({ length: columnAmount() }, () => []),
    );

  return (
    <div {...props}>
      <For each={createColumns()}>{(column) => <div>{column}</div>}</For>
    </div>
  );
};
