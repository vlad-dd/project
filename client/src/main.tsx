import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import Root from './root';
import './index.css';
import { GlobalContextProvider } from './context/provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StyledEngineProvider injectFirst>
    <GlobalContextProvider>
      <Root />
    </GlobalContextProvider>
  </StyledEngineProvider>
);
