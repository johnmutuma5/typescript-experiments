
type MockEventListener =  (event: any) => void;
export type MockEvent = {
  target: string,
  clickTime: Date | null,
};

export class MockDocument {
  onClickListeners: MockEventListener[] = [];
  event: MockEvent = {
    target: 'mock document',
    clickTime: null,
  };

  addEventListener(eventType: string, listener: MockEventListener) {
    this.onClickListeners.push(listener);
  }

  removeEventListener(callbackFn: MockEventListener) {
    this.onClickListeners  = this.onClickListeners.filter((listener: MockEventListener) => {
      return listener !== callbackFn;
    });
  }

  click = () => {
    this.event.clickTime = new Date();
    this.onClickListeners.forEach((listener: MockEventListener) => listener(this.event))
  }
}
