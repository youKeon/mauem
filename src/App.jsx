import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main.jsx";
import InputReceiverPage from "./pages/InputReceiverPage.jsx";
import SelectMessageTypePage from "./pages/SelectMessageTypePage.jsx";
import SelectCelebratePage from "./pages/SelectCelebratePage";
import SelectBadPage from "./pages/SelectBadPage";
import InputEtcPage from "./pages/InputEtcPage";
import SelectMessageLenPage from "./pages/SelectMessageLenPage.jsx";
import SelectIntimacyPage from "./pages/SelectIntimacyPage.jsx";
import SelectSpeechPage from "./pages/SelectSpeechPage.jsx";
import LoadingPage from "./pages/LoadingPage.jsx";
import ShowResultPage from "./pages/ShowResultPage.jsx";

function App() {
  return (
    <div style={{ height: "100%", padding: "46px 25px" }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/inputreceiver" element={<InputReceiverPage />} />
        <Route path="/select/message" element={<SelectMessageTypePage />} />
        <Route path="/select1_1" element={<SelectCelebratePage />} />
        <Route path="/select1_2" element={<SelectBadPage />} />
        <Route path="/select1_3" element={<InputEtcPage />} />
        <Route path="/select/messageLen" element={<SelectMessageLenPage />} />
        <Route path="/select/intimacy" element={<SelectIntimacyPage />} />
        <Route path="/select/speech" element={<SelectSpeechPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/show/result" element={<ShowResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
