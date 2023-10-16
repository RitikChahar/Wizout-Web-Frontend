import Chat from "./Chat";
import Feed from "./Feed";
import Notification from "./Notification";

export default function Overview() {
  return (
    <>
      <main className="absolute inset-x-0 text-gray-300">
        <div className="grid grid-cols-12 items-start justify-between divide-x divide-y divide-neutral-800">
          <Notification />
          <Feed />
          <Chat />
        </div>
      </main>
    </>
  );
}
