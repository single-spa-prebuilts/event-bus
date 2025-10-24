import { useEffect, useState } from "react";
import { eventBus } from "../event-bus.js";

export function useEventBus<Data = any>(name: string): Data | undefined {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const listener = (event: CustomEvent) => {
      setData(event.detail);
    };

    eventBus.addEventListener(name, listener);

    return () => {
      eventBus.removeEventListener(name, listener);
    };
  });

  return data;
}
