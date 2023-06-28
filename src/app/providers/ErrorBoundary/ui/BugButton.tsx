import { useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";

/**
 * Это только для теста. Кнопка иммитирует выброс ошибки.
 * Кнопка для тестирования
 */

export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={onThrow}>throw error</Button>;
};
