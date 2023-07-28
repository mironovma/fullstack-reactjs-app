import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { counterActions } from "../modal/slice/counterSlice";
import { getCounterValue } from "../modal/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const inc = () => {
        dispatch(counterActions.increment());
    };

    const dec = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid="Counter">
            <h1 data-testid="value-title">value = {counterValue}</h1>
            <Button
                onClick={inc}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="inc-btn"
            >
                INC
            </Button>
            <Button
                onClick={dec}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="dec-btn"
            >
                DEC
            </Button>
        </div>
    );
};
