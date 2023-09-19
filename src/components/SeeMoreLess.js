import React, { useState } from "react";

function SeeMoreLess() {
  const [isSeeMore, setIsSeeMore] = useState(false);

  const toggleSeeMoreLess = () => {
    setIsSeeMore(!isSeeMore);
  };

  return (
    <div>


      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint numquam
        quia delectus quo vero quod iusto corrupti illum accusamus odit hic ut
        ab minus eveniet, corporis ullam tempora debitis iure. Repellat,
        molestias
      </p>
      {isSeeMore && (
        <p>
          sapiente exercitationem odio quia, animi eos distinctio tempora, ipsum
          hic vitae modi eum nostrum id perspiciatis impedit dolores.This is my first project.
        </p>
      )}

      <button className="text-primary bg-light border-0" onClick={toggleSeeMoreLess}>
        {isSeeMore ? "See Less ->" : "See More ->"}
      </button>
    </div>
  );
}

export default SeeMoreLess;