import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Button, ThemeButton } from './Button';

describe(
    'button',
    () => {
        test('render button', () => {
            render(<Button>TEST</Button>);
            expect(screen.getByText('TEST')).toBeInTheDocument();
        });
        test('test clear css-class', () => {
            render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
            expect(screen.getByText('TEST')).toHaveClass('clear');
            screen.debug();
        });
    },
);
