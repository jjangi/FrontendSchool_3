import { Link } from "react-router-dom";
import LoginIcon from "../../../assets/icon-login.svg";
import RegisterIcon from "../../../assets/icon-register.svg";

export default function Logout() {
  return (
    <>
      <li>
        <Link href="#" class="button gray">
          <img src={LoginIcon} alt="" />
          <span>Login</span>
        </Link>
      </li>
      <li class="only-pc">
        <Link href="#" class="button gray">
          <img src={RegisterIcon} alt="" />
          <span>Register</span>
        </Link>
      </li>
    </>
  );
}
