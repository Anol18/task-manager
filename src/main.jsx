import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { theme } from "./styles/theme.js";
import { ConfigProvider } from "antd";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ConfigProvider theme={theme}>
          <App />
        </ConfigProvider>
      </Provider>
    </HashRouter>
  </StrictMode>
);
