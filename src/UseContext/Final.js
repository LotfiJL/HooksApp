import React from "react";
import { FirstDetail, SecondDetails } from "./contextUSE";

function Final() {
  const namee = React.useContext(FirstDetail);
  const color = React.useContext(SecondDetails);
  return (
    <div style={{ color: color }}>
      <ul>
        <li>Name: {namee.jelo}</li>
        <li>Nickname: {namee.other}</li>
      </ul>
    </div>

    //-----------------------------------Old way ----------- Boring
    // <div>
    //   <FirstDetail.Consumer>
    //     {(namee) => {
    //       return (
    //         <SecondDetails.Consumer>
    //           {(color) => {
    //            return (
    //               <div style={{ color: color }}>
    //                 <ul>
    //                   <li>Name: {namee.jelo}</li>
    //                   <li>Nickname: {namee.other}</li>
    //                </ul>
    //               </div>
    //            );
    //           }}
    //        </SecondDetails.Consumer>
    //      );
    //    }}
    //    </FirstDetail.Consumer>
    // </div>
  );
}

export default Final;
