import "./App.css";
import HeaderBar from "./component/HeaderBar";
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

import Page3 from "./pages/Page3";
import Page3_1 from "./pages/Page3_1";
import Page3_2 from "./pages/Page3_2";
import Page3_3 from "./pages/Page3_3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";

function App() {
  return (
    <div style={{ height: "100%", padding: "46px 25px" }}>
      <Routes>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
        <Route path="/page3_1" element={<Page3_1 />}></Route>
        <Route path="/page3_2" element={<Page3_2 />}></Route>
        <Route path="/page3_3" element={<Page3_3 />}></Route>
        <Route path="/page4" element={<Page4 />}></Route>
        <Route path="/page5" element={<Page5 />}></Route>
        <Route path="/page6" element={<Page6 />}></Route>
        <Route path="/page7" element={<Page7 />}></Route>
        <Route path="/page8" element={<Page8 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
