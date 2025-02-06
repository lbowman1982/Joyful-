// import "./index.css"

import{ Routes, Route} from "react-router-dom"
import { Authorized } from "./views/Authorized"

import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { ApplicationViews } from "./views/ApplicationViews"


//  the Routes component. This component will wrap the routes for different parts of the app, like "tickets" and "customers."
// Each Route has a path (like /tickets or /customers) and an element (the component that should render when that path is visited).

// Ticket Route Example: For the tickets route, when the URL is /tickets, you can configure React Router to render the TicketList component.

// Navbar on All Pages: To make sure the NavBar appears on all pages (not just /tickets), modify the routing structure

// Instead of defining the NavBar only in one route (like /tickets) make it part of a parent route, so the NavBar will always render, regardless of the child route.

// Using Outlet: Use the Outlet component to tell React Router where the child route content should be displayed within the parent route. The NavBar is always visible, and the child route content (like TicketList or CustomerList) is rendered inside the Outlet.

// he NavBar is at the top because of how the JSX structure is organized in the parent route. In your code, the NavBar is placed before the Outlet in the JSX:


// <>
//   <NavBar />
//   <Outlet />
// </>

// This structure means that the NavBar will render first, followed by the content from the Outlet. Since the Outlet is where the child route content is rendered, the child components (like TicketList) appear below the NavBar.

// the index route is the default child route for the parent route "/", it will render into the parent Outlet, at the parents URL

// when at home, it will render the index route

export const App = () => {
  return (
  <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      <Route path="*" element={
        <Authorized>
          <ApplicationViews />
        </Authorized>
      } />

        
    
    </Routes>
  )
}