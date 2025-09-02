import Image from "next/image";
import Link from "next/link";
import { SidebarNavItem, UserSummary } from "./types";

export default function MyTripsSidebar({
  user,
  items,
}: {
  user: UserSummary;
  items: SidebarNavItem[];
}) {
  return (
    <aside>
      <div className="bg-primary text-white rounded-lg p-4 md:p-5">
        <div className="flex items-center gap-3">
          <Image
            src={user.avatarUrl}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="font-semibold">{user.name}</div>
            <div className="text-white/90 text-xs">
              Member since {user.memberSinceYear}
            </div>
          </div>
        </div>

        <nav className="mt-4 space-y-2">
          {items.map((it) => (
            <Link
              key={it.id}
              href={it.href}
              className={
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors " +
                (it.active ? "bg-white text-slate-900" : "hover:bg-white/10")
              }
              aria-current={it.active ? "page" : undefined}
            >
              <span>{it.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
