import React from "react";

export default function Header() {
  return (
    <div className="bg-dark">
      <div className="container p-1">
        <div className="d-flex flex-row mb-3 justify-content-center me-5">
          <div className="p2">
            <h1 className="text-light pt-5 px-4 ">PodCast</h1>
          </div>
          <div className="p2">
            <img
              src="https://media4.giphy.com/media/HK7H4rCNJXsrMP5u8W/giphy.gif?cid=ecf05e47wzrakgqqr8g5m3t4sbvjnixjf5868wbkkzd8dqa6&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt="mic"
              className=" img-thumbnail mt-3 "
              width="120"
              height="120"
            />
          </div>
          <div className="p2">
            <h1 className="text-light pt-5 px-4">.Chill</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
