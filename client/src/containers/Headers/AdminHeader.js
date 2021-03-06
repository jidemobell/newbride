import React from "react";
import { useDispatch } from 'react-redux'

import brand from "../../images/big_m.png";
import {logout} from '../../redux/actions/auth'

export default function Header({user}) {
	const disptach = useDispatch()
  const logOut = () => {
		disptach(logout())
	}

  return (
    <header className="flex-row">
      <div>
        <img src={brand} id="brand" alt="brand" />
      </div>
      <div className="flex-row header-list">
	      <span>{ user}</span>
				<span
				onClick={logOut}
				style={{cursor: 'pointer'}}
				>
					Logout
				</span>
      </div>
    </header>
  );
}
