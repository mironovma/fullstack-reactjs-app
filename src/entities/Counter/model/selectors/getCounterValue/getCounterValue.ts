import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter";

/**
 * Про реселекторы (createSelector) тут:
 * https://redux-toolkit.js.org/api/createSelector
 * В getCounter получили весь стейт counter'а, а тут реселектом
 * получаем конкретное значение - value.
 * Реселект создан не только для переиспользования селекторов, но они еще и
 * мемоизируют результат.
 */

export const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value
    // (state) => state.value
);
