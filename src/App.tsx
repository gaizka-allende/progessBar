import "./App.css";
import { ProgressBar } from "./ProgressBar";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ProgressBar apiURL="localhost:5173/" initialProgress={0} />
    </div>
  );
}

export default App;
