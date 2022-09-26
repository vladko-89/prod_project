import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProviders';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBounderies';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
