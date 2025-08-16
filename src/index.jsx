import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react"
import './index.css';
import App from './app.jsx';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <SpeedInsights />
  </StrictMode>
);