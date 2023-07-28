import { Counter } from "./ui/Counter";
import { counterReducer } from "./modal/slice/counterSlice";

import { getCounter } from "./modal/selectors/getCounter/getCounter";
import { getCounterValue } from "./modal/selectors/getCounterValue/getCounterValue";

import type CounterSchema from "./modal/types/counterSchema";

export { Counter, counterReducer, getCounter, getCounterValue, CounterSchema };
