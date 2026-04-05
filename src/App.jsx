import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressProvider } from "./context/ProgressContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LessonList from "./pages/LessonList";
import LessonView from "./pages/LessonView";
import Quiz from "./pages/Quiz";
import Roadmap from "./pages/Roadmap";
import "./App.css";

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<LessonList />} />
            <Route path="/lesson/:id" element={<LessonView />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}
