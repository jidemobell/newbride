import React,{useState} from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
 
export default function PlaceHolder() {
  const [loading, setLoading] = useState(true)
    return (
      <div className="sweet-loading">
        <BarLoader
          // css={override}
          size={150}
          color={"#123abc"}
          loading={loading}
        />
      </div>
    );
}