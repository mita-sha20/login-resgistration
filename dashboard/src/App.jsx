
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route, RouterProvider
} from "react-router-dom";
import Registration from '../pages/Registration';
import Otpveri from '../pages/Otpveri';
import Login from "../pages/Login";
import Emailverified from "../pages/Emailverified";
import Forgotpass from "../pages/Forgotpass";
import Resetemail from "../pages/Resetemail";
import Newpassword from "../pages/Newpassword";
import Newemail from "../pages/Newemail";
import Homepage from "../pages/Home/Homepage";
import Selectproduct from "../pages/Selectproduct";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route
          path="/"
          element={<Registration />}
        />
         <Route
          path="/login"
          element={<Login />}
        />
          <Route
          path="/emailverification/:token"
          element={<Emailverified />}
        />
          <Route
          path="/resetemail/"
          element={<Resetemail />}
        />
         <Route
          path="/newresetemail/:token"
          element={<Newemail />}
        />
       <Route
          path="/otpVerification/:email"
          element={<Otpveri />}
        />
          <Route
          path="/forgotpass/"
          element={<Forgotpass />}
        />
         <Route
          path="/newpassword/:token"
          element={<Newpassword />}
        />
         <Route
          path="/homepage/"
          element={<Homepage />}
        />
         <Route
          path="/selectproduct/"
          element={<Selectproduct />}
        />
    </Route>
  ))

function App() {

  return (
    <>
     <RouterProvider
    router={router}
    
  />
    </>
  )
}

export default App;
