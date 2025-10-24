import { ref, onMounted, onUnmounted, type Ref } from "vue";
import { eventBus } from "../event-bus.js";

export function useEventBus<Data = any>(name: string): Ref<Data> {
  const data = ref<Data>();

  const listener = (event: CustomEvent) => {
    data.value = event.detail;
  };

  onMounted(() => eventBus.addEventListener(name, listener));
  onUnmounted(() => eventBus.removeEventListener(name, listener));

  return data;
}
