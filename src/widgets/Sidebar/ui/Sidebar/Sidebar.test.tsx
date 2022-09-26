import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { withTranslation } from 'react-i18next';
import {
    renderWithTranslation,
} from 'shared/libs/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe(
    'Sidebar',
    () => {
        test('render Sidebar', () => {
            renderWithTranslation(<Sidebar />);
            expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        });
        test('test Toggle', () => {
            renderWithTranslation(<Sidebar />);
            const toggleButton = screen.getByTestId('sidebar-toggle');
            expect(screen.getByTestId('sidebar')).toBeInTheDocument();
            fireEvent.click(toggleButton);
            expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        });
    },
);
