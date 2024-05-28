

export default async function page() {
  const res = await fetch('https://api.quotable.io/random');
  const data = await res.json();
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-[4rem]">
     <h2>Quote Page</h2>

     <button>Generate</button>
     <p id='displayQuote'>`{data.content} - {data.author}`</p>
    </div>

  )
 
}
