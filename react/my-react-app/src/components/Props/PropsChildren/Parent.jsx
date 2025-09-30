import React from "react";
import Child from "./Child";

export default function Parent() {
  return (
    <div>
      <Child>
        <div>
          <h1>나는 길동</h1>
          <h2>I'm 20살</h2>
        </div>
      </Child>
      <Child>
        <div>
          <p>나는 철수</p>
          <p>떡잎마을방범대</p>
        </div>
      </Child>
      <Child>
        <div>
          <p>나는 짱구</p>
          <h1>짱구는 못말려</h1>
        </div>
      </Child>
    </div>
  );
}
