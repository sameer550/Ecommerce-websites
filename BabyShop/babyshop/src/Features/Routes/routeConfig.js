import Login from "../Login";
import Signup from "../signup";
import Clothes from "../../components/Clothes";
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
  {
    path: "clothes",
    name: "kid clothes",
    Component: Clothes,
  },
];
