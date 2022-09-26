import { useEffect, useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';

interface ErrorButtonProps {
    className?: string
}

export const ErrorButton = ({ className }: ErrorButtonProps) => {
    const [error, setError] = useState(false);

    const throwError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <button
            onClick={throwError}
        >
            Trow Error
        </button>
    );
};
