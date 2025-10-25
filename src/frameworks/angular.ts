import { OnDestroy } from "@angular/core";
import { eventBus } from "../event-bus.js";

export class EventBus implements OnDestroy {
  private cleanupFunctions: (() => void)[];

  constructor() {
    this.cleanupFunctions = [];
  }

  listenToEvent(name: string, listener: EventListener) {
    eventBus.addEventListener(name, listener);
    this.cleanupFunctions.push(() => {
      eventBus.removeEventListener(name, listener);
    });
  }

  ngOnDestroy() {
    this.cleanupFunctions.forEach((fn) => fn());
  }
}
