import { ChatBubbleOvalLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Chat() {
  return (
    <>
      <section className="fixed inset-y-0 w-3/12 right-0 mt-9 mb-24">
        <div className="w-full ring-0 ring-neutral-800 bg-neutral-900">
          <div className="flex items-center justify-between p-6">
            <h1>Messages</h1>
            <ChatBubbleOvalLeftIcon className="w-5 h-5" />
          </div>
          <div className="flex flex-col bg-[#0e0e0e] divide-y px-6">
            <div className="flex items-start justify-between py-5">
              <button className="flex items-center gap-3 rounded-lg transition duration-200 ease-in-out">
                <Image
                  className="inline-block h-8 w-8 rounded-full ring-0 ring-lime-200"
                  src="https://images.unsplash.com/photo-1523895665936-7bfe172b757d"
                  alt="profile pic"
                  width={50}
                  height={50}
                />
                <div className="text-start text-sm font-medium">
                  <h1 className="">Aman Singh</h1>
                  <p className="text-neutral-500">How is the ui design?</p>
                </div>
              </button>
              <div className="font-medium text-xs text-neutral-500">
                <h1 className="mb-2">9:45 pm</h1>
                <CheckIcon className="w-4 h-4 text-emerald-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
