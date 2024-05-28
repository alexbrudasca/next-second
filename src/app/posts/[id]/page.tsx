export default async function Page() {
    const res = await fetch('https://dummyjson.com/posts/1');
    const data = await res.json();
  return (
    <main className="flex justify-center items-center flex-col mt-4">
      <h1 className="mb-2">{data.title}</h1>
      <p className="max-w-screen-md text-center">{data.body}</p>
    </main>
  );
}
