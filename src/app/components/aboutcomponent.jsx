import { Rnd } from "react-rnd";

export default function AbtComponent({ onClose }) {
  return (
    <Rnd
      dragHandleClassName="draggable"
      className="overflow-hidden rounded-lg border border-black/20 shadow-lg"
      default={{ x: 0, y: 0, width: 320, height: 200 }}
    >
      <nav className="draggable flex cursor-grab select-none items-center gap-2 border-b border-black/40 bg-gray-200 px-3 py-1 active:cursor-grabbing">
        <span className="ml-[18px] flex-1 text-center text-sm">About</span>
        {/* onClick fires closeWindow(id) via the onClose prop passed from page.jsx */}
        <div
          onClick={onClose}
          className="group relative flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-[#FF5F57]"
        >
          <span className="hidden text-[9px] font-bold leading-none text-red-900 group-hover:block">
            ✕
          </span>
        </div>
      </nav>
      <main className="h-full bg-white p-5">hello</main>
    </Rnd>
  );
}
