import { Counter } from "./ui/Counter";
import { counterReducer } from "./model/slice/counterSlice";

import { getCounter } from "./model/selectors/getCounter/getCounter";
import { getCounterValue } from "./model/selectors/getCounterValue/getCounterValue";

import type CounterSchema from "./model/types/counterSchema";

export { Counter, counterReducer, getCounter, getCounterValue, CounterSchema };
