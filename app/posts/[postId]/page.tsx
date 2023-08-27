import type { Metadata } from "next";
import getPost from "@/libs/getPost";
import Container from "@mui/material/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "singlePost",
};

export default async function PostPage({
  params: { postId },
}: {
  params: {
    postId: string;
  };
}) {
  const post = await getPost(postId);
  return (
    <Container>
      <h1>{post.title}</h1>
      <br />

      <p>Post ID: {postId}</p>
      <p>{post.body}</p>
      <br />
      <br />
      <Link href="/posts" style={{ color: "yellow" }}>
        <p>Back To List Posts</p>
      </Link>
    </Container>
  );
}
