import Image from "next/image";
import { Memory } from "./types";

export default function TripMemories({ memories }: { memories: Memory[] }) {
  return (
    <section className="mt-8 md:mt-10 lg:mt-12">
      <h2 className="text-slate-900 font-semibold mb-3">Trip Memories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {memories.map((m) => (
          <div
            key={m.id}
            className="bg-white border border-slate-200 rounded-lg overflow-hidden"
          >
            <div className="relative aspect-[16/9] sm:aspect-[4/3]">
              <Image
                src={m.imageUrl}
                alt={m.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 text-sm text-slate-700">{m.title}</div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <button className="text-sm rounded-md border border-slate-300 px-4 py-2 bg-white">
          Upload your memories
        </button>
      </div>
    </section>
  );
}
