import React from "react";
import brand from "../../images/big_m.png";

export default function Header({user}) {
  return (
    <header className="flex-row">
      <div>
        <img src={brand} id="brand" alt="brand" />
      </div>
      <div>
        <span>{user}</span>
      </div>
    </header>
  );
}
