import Login from "../Login";
import Signup from "../signup";
export const routeConfig = [
  {
    path: "login",
    name: "user login",
    Component: Login,
  },
  {
    path: "signup",
    name: "user signup",
    Component: Signup,
  },
];
