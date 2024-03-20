import type {
  BasicTransformEvent,
  TModificationEvents,
} from '../EventTypeDefs';

export const fireEvent = (
  eventName: TModificationEvents,
  options: BasicTransformEvent
) => {
  const {
    transform: { target },
  } = options;
  //@ts-ignore
  target.canvas?.fire(`object:${eventName}`, {
    ...options,
    target,
  });
  target.fire(eventName, options);
};
