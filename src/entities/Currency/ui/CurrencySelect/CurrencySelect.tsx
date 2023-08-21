import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "entities/Currency/model/types/Currency";
import { memo, useCallback, useMemo } from "react";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly: boolean | undefined;
    onChange?: (value: Currency) => void;
}

export const CurrencySelect = memo(
    ({ className, value, readonly, onChange }: CurrencySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange]
        );

        const currencyOptions = useMemo(
            () =>
                Object.entries(Currency).map((val) => ({
                    value: val[0],
                    content: val[1],
                })),
            []
        );

        return (
            <Select
                className={classNames("", {}, [className])}
                label={t("Укажите валюту")}
                options={...currencyOptions}
                value={value}
                readonly={readonly}
                // @ts-ignore
                onChange={onChangeHandler}
            />
        );
    }
);
