import Link from "next/link";

export default function MessageBox(params) {
  return (
    <>
      <div className="border border-gray-600 rounded-2xl w-full col-span-4 p-6">
        <div>
          {/* <h1 className="text-lg">Stories</h1> */}
          {/* <div className="text-center font-thin flex flex-wrap items-center justify-between gap-6 my-3 pb-5 border-b border-gray-600">
            <button className="w-10 h-10 flex items-center justify-center">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-600"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>{" "}
            <button className="w-10 h-10 flex items-center justify-center">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-600"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>{" "}
            <button className="w-10 h-10 flex items-center justify-center">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-600"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
            <button className="w-10 h-10 flex items-center justify-center">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-600"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>{" "}
            <button className="w-10 h-10 flex items-center justify-center">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-600"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>{" "}
            <button className="w-10 h-10 flex items-center justify-center">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-600"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          </div> */}
          <div>
            <h1 className="text-lg">Messages</h1>
            <div className="my-3 flex items-start justify-between bg-black/10 p-5 rounded-2xl">
              <div className="flex items-center gap-3">
                <Link
                  href={"/"}
                  className="w-10 h-10 flex items-center justify-center"
                >
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-600"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Link>
                <div>
                  <h1 className="leading-4">Aman Singh</h1>
                  <p className="text-gray-600">Lorem ipsum, dolor sit amet</p>
                </div>
              </div>
              <div>
                <p className="mb-0 text-sm text-gray-600">9:42 PM</p>
              </div>
            </div>
            <div className="my-3 flex items-start justify-between bg-black/10 p-5 rounded-2xl">
              <div className="flex items-center gap-3">
                <Link
                  href={"/"}
                  className="w-10 h-10 flex items-center justify-center"
                >
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-600"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Link>
                <div>
                  <h1 className="leading-4">Aman Singh</h1>
                  <p className="text-gray-600">Lorem ipsum, dolor sit amet</p>
                </div>
              </div>
              <div>
                <p className="mb-0 text-sm text-gray-600">9:42 PM</p>
              </div>
            </div>
            <div className="my-3 flex items-start justify-between bg-black/10 p-5 rounded-2xl">
              <div className="flex items-center gap-3">
                <Link
                  href={"/"}
                  className="w-10 h-10 flex items-center justify-center"
                >
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-600"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Link>
                <div>
                  <h1 className="leading-4">Aman Singh</h1>
                  <p className="text-gray-600">Lorem ipsum, dolor sit amet</p>
                </div>
              </div>
              <div>
                <p className="mb-0 text-sm text-gray-600">9:42 PM</p>
              </div>
            </div>
            <div className="my-3 flex items-start justify-between bg-black/10 p-5 rounded-2xl">
              <div className="flex items-center gap-3">
                <Link
                  href={"/"}
                  className="w-10 h-10 flex items-center justify-center"
                >
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-600"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Link>
                <div>
                  <h1 className="leading-4">Aman Singh</h1>
                  <p className="text-gray-600">Lorem ipsum, dolor sit amet</p>
                </div>
              </div>
              <div>
                <p className="mb-0 text-sm text-gray-600">9:42 PM</p>
              </div>
            </div>
            <div className="my-3 flex items-start justify-between bg-black/10 p-5 rounded-2xl">
              <div className="flex items-center gap-3">
                <Link
                  href={"/"}
                  className="w-10 h-10 flex items-center justify-center"
                >
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-600"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Link>
                <div>
                  <h1 className="leading-4">Aman Singh</h1>
                  <p className="text-gray-600">Lorem ipsum, dolor sit amet</p>
                </div>
              </div>
              <div>
                <p className="mb-0 text-sm text-gray-600">9:42 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
