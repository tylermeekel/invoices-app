//File that contains445e global state.

import { createGlobalState } from "react-hooks-global-state";
import { exampleData } from "./exampleData";

export const { useGlobalState } = createGlobalState({
    data: exampleData
})