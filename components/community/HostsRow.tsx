import Image from "next/image";
import { Host } from "./types";

export default function HostsRow({ hosts }: { hosts: Host[] }) {
  return (
    <section className="mt-8 md:mt-10 lg:mt-12">
      <h2 className="text-slate-900 font-semibold mb-3">
        Meet Your Local Hosts
      </h2>
      <div className="flex flex-wrap gap-8">
        {hosts.map((h) => (
          <div key={h.id} className="flex flex-col items-center">
            <Image
              src={h.avatarUrl}
              alt={h.name}
              width={72}
              height={72}
              className="rounded-full"
            />
            <div className="mt-2 text-sm font-medium">{h.name}</div>
            <div className="text-xs text-slate-500">
              {h.rating.toFixed(1)} · {h.tripsCount} trips
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
