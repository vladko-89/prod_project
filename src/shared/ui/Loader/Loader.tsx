import { classNames } from 'shared/libs/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <span className={classNames('loader', {}, [className])} />
);
