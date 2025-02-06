import {createRoot} from "react-dom/client"
import { App } from "./App.jsx"
// import "./index.css"
import {BrowserRouter} from "react-router-dom"

//  React Router to handle navigation between different parts of the app.
// Wrap the App Component with BrowserRouter: 
// wrap entire application with BrowserRouter, which synchronizes the UI with the URL in the browser. This enables routing and ensures that different components can be displayed when the URL changes.
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<BrowserRouter>
    <App />
</BrowserRouter>
)
