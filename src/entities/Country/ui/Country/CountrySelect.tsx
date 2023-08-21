import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { Country } from "entities/Country/model/types/Country";
import { memo, useCallback, useMemo } from "react";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly: boolean | undefined;
    onChange?: (value: Country) => void;
}

export const CountrySelect = memo(
    ({ className, value, readonly, onChange }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange]
        );

        const countryOptions = useMemo(
            () =>
                Object.entries(Country).map((val) => ({
                    value: val[0],
                    content: val[1],
                })),
            []
        );

        return (
            <Select
                className={classNames("", {}, [className])}
                label={t("Укажите страну")}
                options={...countryOptions}
                value={value}
                readonly={readonly}
                // @ts-ignore
                onChange={onChangeHandler}
            />
        );
    }
);
