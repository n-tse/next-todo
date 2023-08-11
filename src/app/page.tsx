// like the root of our application

import { prisma } from "@/db";
import Link from "next/link";

const getTodos = () => {
  return prisma.todo.findMany();
}

export default async function Home() {
  // const todos = [
  //   {id: 1, title: "todo1"},
  //   {id: 2, title: "todo2"},
  //   {id: 3, title: "todo3"},
  //   {id: 4, title: "todo4"},
  // ]

  // await prisma.todo.create({ data: { title: "new test", complete: false }}); 
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="text-2xl">To Do List</h1>
        <Link
          href="/new"
          className="p-1 border border-white rounded-md bg-inherit focus-within:bg-slate-500 hover:bg-slate-500 outline-none"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </>
  );
}
