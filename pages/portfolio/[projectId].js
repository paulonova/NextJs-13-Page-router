import { useRouter } from "next/router";
import React from "react";

function PortfolioProjectPage() {
  const router = useRouter();
  console.log("ROUTER: ", router.pathname);
  console.log("ROUTER2: ", router.query.projectId);

  return (
    <div>
      <h1>Portfolio Project Page: {router.query.projectId}</h1>
    </div>
  );
}

export default PortfolioProjectPage;
