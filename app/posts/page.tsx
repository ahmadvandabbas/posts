import type { Metadata } from "next";
import Style from "./posts.module.css";

import getAllPosts from "@/libs/getAllPosts";
import Link from "next/link";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "posts",
};

export default async function PostsPage() {
  const postsData: Promise<Post[]> = getAllPosts();
  const posts = await postsData;
  return (
    <Container>
      <h2>
        <Link href="/" style={{ color: "lightblue", fontSize: "20px" }}>
          back to Home
        </Link>
        <br />

        <Link href="/newPost" style={{ color: "yellow", fontSize: "18px" }}>
          for create new post click here...!
        </Link>
      </h2>
      <br />
      <br />

      {posts.map((post) => {
        return (
          <div key={post.id} className={Style.postsItem}>
            <Link href={`/posts/${post.id}`}>
              <h3 className={Style.postsTitle}>{post.title}</h3>
            </Link>
            <Link href={`/posts/${post.id}`}>
              <p className={Style.postsBody}>{post.body}</p>
            </Link>
          </div>
        );
      })}
    </Container>
  );
}
