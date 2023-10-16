import Image from "next/image";
import {
  MicrophoneIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

import {
  PlusIcon,
  PhotoIcon,
  GifIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <>
      <footer className="fixed inset-x-0 z-10 bottom-0 px-6 py-6 text-indigo-100 text-sm backdrop-blur-lg border-t border-neutral-800">
        <div className="grid grid-cols-12 items-center justify-center gap-8 h-full">
          <div className="col-span-3 self-center justify-self-start"></div>
          <div className="col-span-6 self-center justify-self-center w-full">
            <div className="flex items-center gap-2 ring-1 ring-gray-600 bg-neutral-900 rounded-full px-2 py-1">
              <button className="bg-lime-200 hover:bg-lime-300 transition duration-200 ease-in-out rounded-full p-1">
                <PlusIcon className="w-5 h-5 text-gray-900" strokeWidth={2} />
              </button>
              <input
                type="text"
                placeholder="Type message..."
                className="bg-transparent h-10 w-full px-2 text-sm ring-0 border-0 focus:ring-0"
              />
              <button className="group p-1">
                <PhotoIcon className="w-6 h-6 text-lime-200 group-hover:opacity-50 transition duration-200 ease-in-out" />
              </button>
              <button className="group p-1">
                <GifIcon className="w-6 h-6 text-lime-200 group-hover:opacity-50 transition duration-200 ease-in-out" />
              </button>
              <button className="group p-1">
                <FaceSmileIcon className="w-6 h-6 text-lime-200 group-hover:opacity-50 transition duration-200 ease-in-out" />
              </button>
            </div>
          </div>
          <div className="col-span-3 self-center justify-self-start w-full">
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-3 p-1 rounded-lg transition duration-200 ease-in-out">
                <Image
                  className="inline-block h-8 w-8 rounded-full ring-0 ring-lime-200"
                  src="https://images.unsplash.com/photo-1523895665936-7bfe172b757d"
                  alt="dp"
                  width={50}
                  height={50}
                />
                <h1 className="font-medium">Aman Singh</h1>
              </button>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 hover:bg-neutral-900 ring-0 hover:ring-1 ring-gray-600 p-1 rounded-lg transition duration-200 ease-in-out">
                  <span className="inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-indigo-100 ring-1 ring-inset ring-gray-500/10">
                    Off
                  </span>
                  <button>
                    <MicrophoneIcon className="w-5 h-5" />
                  </button>
                </div>
                <button className="hover:bg-neutral-900 ring-0 hover:ring-1 ring-gray-600 p-1 rounded-full transition duration-200 ease-in-out">
                  <GlobeAltIcon className="w-6 h-6" strokeWidth={1} />
                </button>
                <button className="hover:bg-neutral-900 ring-0 hover:ring-1 ring-gray-600 p-1 rounded-full transition duration-200 ease-in-out">
                  <Cog6ToothIcon className="w-6 h-6" strokeWidth={1} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
