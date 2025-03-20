import React from "react";
import AppComponent from "../component/AppComponent";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
function App() {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
}

export default App;
