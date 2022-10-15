import {Routes, Route} from "react-router-dom"
import './App.css'
import ReactProps from "./pages/ReactProps"
import ReactComponent from "./pages/RectComponent"
import ReactState from "./pages/ReactState"

function App() {

  return (
    <Routes>
      <Route path="/" element={<ReactComponent />} />
      <Route path="/props" element={<ReactProps />} />
      <Route path="/state" element={<ReactState />} />
      <Route path="/cond-rendering" element={<h1>React Cond Rendering</h1>} />
      <Route path="/lifecycle" element={<h1>React lifecycle</h1>} />
      <Route path="/route" element={<h1>React Roter DOM </h1>} />
      <Route path="/outlet" element={<h1>React Roter DOM Outlet</h1>} />
      <Route path="/protected-routes" element={<h1>PRotected route</h1>} />
    </Routes>
  )
}

export default App
