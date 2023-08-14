import { FunctionComponent, useEffect } from "react";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { useDispatch, useStore } from "react-redux";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FunctionComponent<
    DynamicModuleLoaderProps
> = ({ children, reducers, removeAfterUnmount = true }) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            // Просто для отслеживания
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    ([name, reducer]) => {
                        store.reducerManager.remove(name as StateSchemaKey);
                        // Просто для отслеживания
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    }
                );
            }
        };
        // eslint-disable-next-line
    }, []);

    return <>{children}</>;
};
