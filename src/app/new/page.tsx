import Link from "next/link";

const Page = () => {
  return (
    <header className="flex justify-between items-center">
      <h1>New Page</h1>
      <Link href="/" className="p-1 border border-white rounded-md bg-inherit focus-within:bg-slate-500 hover:bg-slate-500 outline-none">Home</Link>
    </header>
  );
};

export default Page;
