import React from "react";
import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  console.log("ROUTER ID: ", router.query);
  return (
    <div>
      <h1>Project of a Given Client</h1>
      <p>Router ID: {router.query.id}</p>
    </div>
  );
}

export default ClientProjectPage;
