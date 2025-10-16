import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.js";

// persist 스토어 적용
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* Persist Gate 적용 */}
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
