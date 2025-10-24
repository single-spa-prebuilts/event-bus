import { useEffect, useState } from "react";
import { eventBus } from "../event-bus.js";

export function useEventBus<Data = any>(name: string): Data {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const listener = (event) => {
      setData(event.detail);
    };

    eventBus.addEventListener(name, listener);

    return () => {
      eventBus.removeEventListener(name, listener);
    };
  });

  return data;
}
