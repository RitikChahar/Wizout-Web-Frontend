import {
  BookmarkIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const profile = [
  {
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  //   {
  //     img: "https://images.unsplash.com/photo-1550096141-7263640aa48c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1499540633125-484965b60031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   },
];

export default function Feed(params) {
  return (
    <>
      <div className="w-full col-span-6">
        <div className="flex flex-col gap-10">
          {profile.map((item, index) => (
            <div
              className="h-full w-full rounded-xl border border-gray-600 p-7"
              key={index}
            >
              <Image
                key={index}
                src={item.img}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="flex items-center justify-between mt-5">
                <HeartIcon className="w-6 h-6" />
                <ChatBubbleLeftIcon className="w-6 h-6" />
                <BookmarkIcon className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
