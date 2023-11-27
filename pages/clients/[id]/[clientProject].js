import { useRouter } from "next/router";
import React from "react";

function SelectedClientProject() {
  const router = useRouter();
  console.log("ROUTER: ", router.query);
  return (
    <div>
      <h1>The Page for a Specific Project for a Selected Client</h1>
      <p>Router: {router.query.clientProject}</p>
    </div>
  );
}

export default SelectedClientProject;
