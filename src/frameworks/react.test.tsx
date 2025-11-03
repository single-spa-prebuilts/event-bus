import { act } from "react";
import { expect, test } from "@jest/globals";
import { useEventBus } from "./react.js";
import { createRoot } from "react-dom/client";
import { eventBus } from "../event-bus.js";

test("useEventBus returns undefined as initial value", async () => {
  function Component() {
    const data = useEventBus("name");
    return <div>{data}</div>;
  }

  const container = document.createElement("div");
  document.body.appendChild(container);

  await act(() => {
    createRoot(container).render(<Component />);
  });

  expect(container.textContent).toEqual("");
});

test("useEventBus returns updated data after an event is fired", async () => {
  function Component() {
    const data = useEventBus("name");
    return <div>{data}</div>;
  }

  const container = document.createElement("div");
  document.body.appendChild(container);

  await act(() => {
    createRoot(container).render(<Component />);
  });

  expect(container.textContent).toEqual("");

  await act(() => {
    eventBus.dispatchEvent(new CustomEvent("name", { detail: "data1" }));
  });

  expect(container.textContent).toEqual("data1");
});
