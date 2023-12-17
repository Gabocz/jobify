import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import main from "../assets/images/main.svg";

import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus neque similique consequuntur architecto, necessitatibus
            expedita voluptas ab quos possimus. Soluta deleniti perspiciatis
            iste dolorum at tempore, voluptates ut ratione tempora.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
