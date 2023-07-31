import {
    FunctionComponent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    autofocus?: boolean;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input: FunctionComponent<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        autofocus,
        type = "text",
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(styles.Input, {}, [className])}>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandle}
                {...otherProps}
            />
        </div>
    );
});
