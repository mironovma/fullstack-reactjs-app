import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Select.module.scss";
import { ChangeEvent, ChangeEventHandler, memo, useMemo } from "react";

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    readonly: boolean | undefined;
    // onChange?: (value: string) => void;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export const Select = memo(
    ({ className, label, options, value, readonly, onChange }: SelectProps) => {
        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            // @ts-ignore
            onChange?.(e.target.value);
        };

        const optionList = useMemo(() => {
            return options?.map((opt) => (
                <option
                    className={styles.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            ));
        }, [options]);

        return (
            <div className={classNames(styles.Wrapper, {}, [className])}>
                {label && <span className={styles.label}>{label}</span>}
                <select
                    value={value}
                    disabled={readonly}
                    onChange={onChangeHandler}
                    className={styles.select}
                >
                    {optionList}
                </select>
            </div>
        );
    }
);
