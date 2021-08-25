import { Link } from "react-router-dom";

const Attribution = () => {
    return (
      <div className="attribution">
        <p>
          Challenge by{" "}
          <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
            Frontend Mentor
          </Link>
          . Coded by <Link to="https://github.com/arrizkyhp">Arrizky Hasya Pratama</Link>.
        </p>
      </div>
    );
}

export default Attribution;