import { dummyDB } from "@/dummyDB";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <title>Blog App</title>
      </header>
      <main className={'max-w-4xl mx-auto pt-16'}>
        <h1 className={'text-2xl font-bold text-center'}>Blog Posts</h1>
        {dummyDB.map((post, index) => (
          <Link key={index} href={`./blog/${post.slug}`} passHref legacyBehavior>
          <a key={index} className={'block my-8 border border-black p-4 rounded-lg hover:bg-black hover:text-white'}>
            <h2 className={'text-xl font-bold'}>{post.title}</h2>
            <p className={'my-2'}>{post.content.substring(0, 32)}...</p>
          </a>
          </Link>
        ))}
      </main>
    </div>
  )
}
