import { MutableRefObject, ReactNode, memo, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfinityScroll } from "shared/lib/hooks/useInfinityScroll";
import styles from "./Page.module.scss";

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfinityScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(styles.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
