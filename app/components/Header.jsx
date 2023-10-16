import {
  BellAlertIcon,
  FaceSmileIcon,
  GifIcon,
  MagnifyingGlassIcon,
  PhotoIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

export default function Header(params) {
  return (
    <>
      <div className="fixed bottom-0 backdrop-blur-xl backdrop-brightness-50 w-screen ps-28 pe-10 py-6 grid grid-flow-col items-center justify-items-stretch">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl">
            <img
              className="inline-block h-9 w-9 rounded-xl ring-2 ring-indigo-600"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </button>
          <div>
            <h1 className="leading-3">Aman Singh</h1>
            <p className="text-sm text-gray-500">@westernfrog</p>
          </div>
        </div>
        <div className="col-span-2 text-center font-thin flex items-center justify-center gap-6">
          <div className="w-full flex items-center gap-2 rounded-full bg-black/10 ring-1 ring-gray-600 px-3">
            <PlusCircleIcon className="w-7 h-7 text-gray-400" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Type Message"
              className="w-full py-3 px-3 text-sm bg-transparent"
            />
            <PhotoIcon className="w-7 h-7 text-gray-400" />
            <GifIcon className="w-7 h-7 text-gray-400" />
            <FaceSmileIcon className="w-7 h-7 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-2 justify-self-end">
          <button className="w-10 h-10 flex items-center justify-center">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl">
            <BellAlertIcon className="w-6 h-6 text-rose-400" />
          </button>
        </div>
      </div>
    </>
  );
}
