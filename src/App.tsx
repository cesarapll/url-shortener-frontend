import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className='flex justify-center'>
      <AppRoutes />
    </div>
  );
}

export default App;