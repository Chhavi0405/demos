"use client";
// import Link from "next/link";

 import { useRouter } from 'next/navigation'


export default function HomePage() {
  const router = useRouter(); 
  

  return (
    <>
      <div>
      <button
          type="button"
          onClick={() =>router.push(`/`)
          }
        >
         Comp
        </button>
         &nbsp;
      <button
          type="button"
          onClick={() =>router.push(`/about`)
          }
        >
     About
        </button>
        &nbsp;
      <button
          type="button"
          onClick={() =>router.push(`/footer`)
          }
        >
         Footer
        </button>
      </div>

      {/* <div> <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/footer'>Footer</Link></div> */}
    </>
  );
}
