import { Routes, Route } from "react-router-dom";
import StoryIntro from "./components/StoryIntro";
import StoryScreen from "./components/StoryScreen";
import Query from "./components/Query";
import SQLEditor from "./components/SQLEditor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StoryScreen />} />
      <Route path="/story" element={<StoryIntro />} />
      <Route path="/query" element={<Query />} />
      <Route path="/SQLEditor" element={<SQLEditor />} />
    </Routes>
  );
}

export default App;
