import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Result from "./pages/Result";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [progress, setProgress] = useState(-1);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-cyan-300 to-white h-screen w-screen gap-2">
      {progress != 100 && progress != -1 ? (
        <div className="flex flex-col h-[30px] w-[75%] max-w-[400px] min-w-[300px]">
          <div className="w-full flex items-center justify-end text-sm">
            {progress}%
          </div>
          <div className="w-full bg-white rounded-full">
            <div
              className="bg-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      ) : null}
      <Routes>
        <Route path="/" element={<Home setProgress={setProgress}/>}></Route>
        <Route
          path="step/1"
          element={<Step1 setProgress={setProgress}/>}
        ></Route>
        <Route
          path="step/2"
          element={<Step2 setProgress={setProgress} />}
        ></Route>
        <Route
          path="step/3"
          element={<Step3 setProgress={setProgress} />}
        ></Route>
        <Route path="result" element={<Result setProgress={setProgress}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
