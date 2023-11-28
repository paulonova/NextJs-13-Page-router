import React from "react";
import Link from "next/link";

function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <ul>
        <li>
          <Link href="/portfolio/list">List</Link>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
