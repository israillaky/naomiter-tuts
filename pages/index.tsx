import Forms from "@/components/Form";
import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Forms placeholder="What's Happening?" />
      <PostFeed />
    </>
  );
}
