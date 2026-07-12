import { UnknownAction } from "redux";

// This creates a new kind of action creator
type Matchable<AC extends () => UnknownAction> = AC & {
  type: ReturnType<AC>["type"]; // remembers the action's name
  match(action: UnknownAction): action is ReturnType<AC>; //checks if another action has the same name
};

// withMatcher can work with an action creator that has no params
export function withMatcher<AC extends () => UnknownAction & { type: string }>(
  actionCreator: AC,
): Matchable<AC>;

// withMatcher can also work with an action creator that takes params
export function withMatcher<
  AC extends (...args: any[]) => UnknownAction & { type: string },
>(actionCreator: AC): Matchable<AC>;

// This is the function that actually runs, it receives an action creator
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type; // This creates an action and saves its type
  return Object.assign(
    // adds new features to the action creator
    actionCreator,
    {
      type, // This stores the action's type
      match(action: UnknownAction) {
        return action.type === type; // This checks whether the action has the same type
      },
    },
  );
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P,
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void,
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
