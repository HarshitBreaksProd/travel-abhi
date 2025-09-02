"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { WallPost } from "./types";

export default function CommunityWall({ posts }: { posts: WallPost[] }) {
  const [allPosts, setAllPosts] = useState<WallPost[]>(posts);
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    undefined
  );

  const canPost = useMemo(
    () => message.trim().length > 0 || !!imagePreview,
    [message, imagePreview]
  );

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setImagePreview(undefined);
      return;
    }
    const url = URL.createObjectURL(file);
    setImagePreview(url);
  };

  const onPost = () => {
    if (!canPost) return;
    const newPost: WallPost = {
      id: `local-${Date.now()}`,
      author: "You",
      avatarUrl: "/images/trip-discovery/profile-pic.png",
      daysAgo: 0,
      content: message.trim(),
      imageUrl: imagePreview,
    };
    setAllPosts([newPost, ...allPosts]);
    setMessage("");
    setImagePreview(undefined);
  };

  return (
    <section className="mt-8 md:mt-10 lg:mt-12">
      <h2 className="text-slate-900 font-semibold mb-3">Community Wall</h2>

      <div className="bg-white border border-slate-200 rounded-lg">
        <div className="p-3 flex items-start gap-3">
          <Image
            src="/images/trip-discovery/profile-pic.png"
            alt="You"
            width={24}
            height={24}
            className="rounded-full mt-1"
          />
          <div className="flex-1">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share something with the community..."
              className="w-full text-sm px-3 py-2 rounded-md border border-slate-200 min-h-[44px] resize-y"
            />

            {imagePreview && (
              <div className="relative mt-2 rounded-md overflow-hidden aspect-[16/9] bg-slate-100">
                {/* Using regular img for blob preview */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imagePreview}
                  alt="Selected"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <label className="inline-flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={onImageChange}
                    className="hidden"
                  />
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-slate-300">
                    {/* image icon */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M8 13L11 10L16 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="9" cy="8" r="1.5" fill="currentColor" />
                    </svg>
                  </span>
                  Add image
                </label>
              </div>

              <button
                onClick={onPost}
                disabled={!canPost}
                className={`text-xs px-3 py-2 rounded-md ${
                  canPost
                    ? "bg-primary text-white"
                    : "bg-slate-200 text-slate-500 cursor-not-allowed"
                }`}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {allPosts.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-slate-200 rounded-lg p-3"
          >
            <div className="flex items-start gap-3">
              <Image
                src={p.avatarUrl}
                alt={p.author}
                width={28}
                height={28}
                className="rounded-full"
              />
              <div className="text-sm flex-1">
                <div className="font-medium text-slate-900">
                  {p.author}{" "}
                  <span className="text-xs text-slate-500">
                    {p.daysAgo}d ago
                  </span>
                </div>
                <div className="text-slate-700 whitespace-pre-wrap">
                  {p.content}
                </div>
                {p.imageUrl && (
                  <div className="relative mt-2 rounded-md overflow-hidden aspect-[16/9] bg-slate-100">
                    <Image
                      src={p.imageUrl}
                      alt="Post image"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
