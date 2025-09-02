export default function CommunityHeader() {
  return (
    <header className="mb-8 md:mb-10 lg:mb-12">
      <h1 className="font-garetheavy text-primary text-3xl md:text-4xl leading-[44px]">
        TravlAbhi Community
      </h1>
      <p className="text-slate-600 text-sm md:text-base mt-2 max-w-3xl">
        Join our vibrant community of travel enthusiasts and explore the world
        together. Share your experiences, connect with fellow adventurers, and
        discover exciting new destinations.
      </p>
      <div className="mt-4 flex items-center gap-3">
        <button className="rounded-md bg-slate-900 text-white text-sm px-4 py-2">
          Join our WhatsApp group
        </button>
        <button className="rounded-md bg-white border border-slate-300 text-slate-800 text-sm px-4 py-2">
          Follow us on Instagram
        </button>
      </div>
    </header>
  );
}
