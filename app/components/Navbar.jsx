import Link from "next/link";
import {
  BriefcaseIcon,
  CalendarDaysIcon,
  ChatBubbleOvalLeftIcon,
  Cog6ToothIcon,
  HomeIcon,
  MoonIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Community", href: "/", icon: RectangleGroupIcon },
  { name: "Global Chat", href: "/", icon: ChatBubbleOvalLeftIcon },
  { name: "Jobs", href: "/", icon: BriefcaseIcon },
  { name: "Travel", href: "/", icon: CalendarDaysIcon },
  { name: "Settings", href: "/", icon: Cog6ToothIcon },
];

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 h-screen flex flex-col items-center justify-start gap-10 bg-neutral-800 px-5 py-9">
        <div className="mb-5">
          <Link href={"/"} className="text-3xl font-semibold text-indigo-600">
            W
          </Link>
        </div>
        {navigation.map((item, index) => (
          <div key={index}>
            <Link href={item.href}>
              <item.icon className="w-6 h-6 text-indigo-100" />
            </Link>
          </div>
        ))}
        <div className="grid h-screen items-end justify-end">
          <button>
            <MoonIcon className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </>
  );
}
