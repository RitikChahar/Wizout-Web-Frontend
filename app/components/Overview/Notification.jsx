import { BellIcon } from "@heroicons/react/24/outline";

export default function Notification() {
  return (
    <>
      <section className="fixed inset-y-0 w-3/12 mt-9 mb-24 ps-20">
        <div className="w-full ring-0 ring-neutral-800 bg-neutral-900 p-6">
          <div className="flex items-center justify-between">
            <h1>Notifications</h1>
            <BellIcon className="w-5 h-5" />
          </div>
        </div>
      </section>
    </>
  );
}
