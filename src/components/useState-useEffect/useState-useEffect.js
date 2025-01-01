import React, { useEffect, useState } from "react";

export default function Demo() {
  const [text1, setText1] = useState("First");
  useEffect(() => {
    //code that runs when the component mounts
    document.title = `${text1.length}`;

    return () => {
      //code that runs when the component unmounts
    };
    
  },
    //dependency array
    //[text1], run whenever the value of text1 changes
    //[], only run once when the component mounts
    //leave it empty, run every time the component updates
    [text1]); 


    //hook can't be called conditionally, 
    //it should be called at the top level of the component
    //it only can be called in a function component.


  const [text2, setText2] = useState("Last");

  return (
    <div className="container">
      <h3>Simple State and Lifecycle Management</h3>

      <input onChange={(e) => setText1(e.target.value)} value={text1} />
      <hr />
      <input onChange={(e) => setText2(e.target.value)} value={text2} />
      <hr />
      <h2>
        <i>
          {text1} {text2}
        </i>
      </h2>
    </div>
  );
}
