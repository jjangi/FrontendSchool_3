import { Link } from "react-router-dom";
import WriteIcon from "../../../assets/icon-modify-white.svg";
import LogoutIcon from "../../../assets/icon-logout.svg";

export default function Login() {
  return (
    <>
      {/* 로그인 */}
      <li className="profile-img">
        <Link to="/">
          <img src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true" alt="My Page" />
        </Link>
      </li>
      <li>
        <Link to="/" className="button">
          <img src={WriteIcon} alt="" />
          <span>Write</span>
        </Link>
      </li>
      <li>
        <button className="button white">
          <img src={LogoutIcon} alt="" />
          <span>Logout</span>
        </button>
      </li>
      {/* //로그인 */}
    </>
  );
}
