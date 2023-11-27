import React from "react";
import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  console.log("ROUTER ID: ", router.query);
  function loadProjectHandler() {
    //router.push("/clients/max/projecta");  OR
    router.push({
      pathname: "/clients/[id]/[clientProject]",
      query: { id: "max", clientProject: "projecta" },
    });
  }
  return (
    <div>
      <h1>Project of a Given Client</h1>
      <p>Router ID: {router.query.id}</p>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
