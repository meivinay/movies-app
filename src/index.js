import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import { Routes, Route, BrowserRouter} from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

