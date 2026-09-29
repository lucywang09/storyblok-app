import { storyblokEditable } from "@storyblok/react/rsc";

export default function AnnouncementBanner({ blok }: { blok: any }) {
  if (!blok.is_visible) return null;

  return (
    <div
      {...storyblokEditable(blok)}
      className="border-b-2 border-fuchsia-400/40 bg-fuchsia-600/15 px-4 py-3 text-center font-pixel text-[10px] uppercase tracking-wider text-fuchsia-200 sm:text-xs"
    >
      {blok.message}
      {blok.link_text && (
        <a
          href="#waitlist"
          className="ml-3 text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
        >
          {blok.link_text}
        </a>
      )}
    </div>
  );
}