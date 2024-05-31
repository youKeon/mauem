import "./App.css";
import HeaderBar from "./component/HeaderBar";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

import { Routes, Route } from "react-router-dom";
import Page3 from "./pages/Page3";

function App() {
  return (
    <div style={{ height: "100%", padding: "46px 25px" }}>
      <Routes>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
