import Link from "next/link"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default async function Posts() {
  const res = await fetch('https://dummyjson.com/posts?limit=10');
  const data = await res.json();
  console.log(data)

  return (
  <div className="flex items-center justify-center flex-col border border-slate-200 w-full h-full">
   <h2>Test</h2>

   <ul className="text-center">
    {data.posts.map((post: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; })=>(
      <li key={post.id} className="mb-5">
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </li>
      ))}
   </ul>
  </div>
  )
}
