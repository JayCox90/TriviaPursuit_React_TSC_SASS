import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <h2>Thanks for Playing!</h2>
      <NavLink className="linkButton" to="/">
        Back to Start
      </NavLink>
    </div>
  );
};
