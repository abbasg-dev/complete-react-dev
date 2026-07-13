import { Middleware, UnknownAction } from "redux";
import { RootState } from "../store";

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const typedAction = action as UnknownAction & {
      payload?: unknown;
    };

    console.log("type:", typedAction.type);
    console.log("payload:", typedAction.payload);
    console.log("current state:", store.getState());

    next(action);

    console.log("next state:", store.getState());
  };
