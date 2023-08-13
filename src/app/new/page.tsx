import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

const AddNewToDoPage = () => {
  // server function
  const createToDo = async (data: FormData) => {
    "use server"; // adding this string is telling the compiler that this code is meant only to run on the server
    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
      console.log("Invalid title");
      return;
    }

    await prisma.todo.create({ data: { title, complete: false } });
    redirect("/");
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <header className="flex items-center">
        <h1 className="text-2xl">Add New To Do</h1>
      </header>
      <form
        action={createToDo}
        className="mt-6 gap-4 flex flex-col w-4/5 max-w-2xl"
      >
        <input
          type="text"
          name="title"
          className="rounded outline-none border border-white focus-within:border-gray-800 text-black py-1 px-2 flex items-center"
        />
        <div className="flex justify-end gap-2">
          <Link
            href="/"
            className="py-1 px-3 border border-white rounded-md bg-inherit focus-within:bg-slate-500 hover:bg-slate-500 outline-none"
          >
            Home
          </Link>
          <button
            type="submit"
            className="py-1 px-3 border border-white rounded-md bg-inherit focus-within:bg-slate-500 hover:bg-slate-500 outline-none"
          >
            Add To Do
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddNewToDoPage;
