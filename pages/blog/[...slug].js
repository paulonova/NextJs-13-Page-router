import { useRouter } from "next/router";
import React from "react";

function BlogPostPage() {
  const router = useRouter();
  console.log("ROUTER: ", router.query);
  return (
    <div>
      <h1>Blog Post Page</h1>
    </div>
  );
}

export default BlogPostPage;
