import {
  UnknownAction, // A general Redux action. It has a type, but we do not know the exact action yet
} from "redux";

// Creates a new action creator type with extra features
type Matchable<AC extends () => UnknownAction> = AC & {
  type: ReturnType<AC>["type"]; // Saves the action type name
  match(action: UnknownAction): action is ReturnType<AC>; // Checks if an action has the same type
};

// Allows withMatcher to work with an action creator that has no parameters
export function withMatcher<AC extends () => UnknownAction & { type: string }>(
  actionCreator: AC,
): Matchable<AC>;

// Allows withMatcher to work with an action creator that receives parameters
export function withMatcher<
  AC extends (...args: any[]) => UnknownAction & { type: string },
>(actionCreator: AC): Matchable<AC>;

// The real function that runs and receives an action creator
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type; // Gets and saves the action type name

  return Object.assign(
    actionCreator, // Adds new features to the action creator
    {
      type, // Stores the action type name

      match(action: UnknownAction) {
        return action.type === type; // Returns true if both action types are the same
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
