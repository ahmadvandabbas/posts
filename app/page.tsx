import { Container } from "@mui/material";
import "./page.module.css";
import Link from "next/link";
import Style from "./page.module.css";

export default function Home() {
  return (
    <Container>
      <main className={Style.main}>
        <h1 className={Style.title}>welcome my friends</h1>
        <p className={Style.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          commodi magnam dignissimos perspiciatis recusandae, dolore accusantium
          placeat nobis cum fuga molestiae porro dicta architecto. Nulla rem
          nisi quis accusamus laboriosam?
        </p>
        <p className={Style.linkPosts}>
          <Link href="/posts" style={{ color: "yellow" }}>
            for watch posts click here...!
          </Link>
        </p>
      </main>
    </Container>
  );
}
