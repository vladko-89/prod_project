import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { ThemeProvider } from './contexts/ThemeProvider';


render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)