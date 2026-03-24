"use client";
import WaveComponent from "./components/wavecomponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "./theme-toggle";
import AbtComponent from "./components/aboutcomponent";
import { useState } from "react";

// Store the component CLASS, not pre-rendered JSX (<AbtComponent />)
// Pre-rendered JSX is static — you can't pass props like onClose into it after the fact
// Storing the class lets us render it fresh each time with whatever props we need
const WINDOWS = {
  about: { title: "About", component: AbtComponent },
  links: {
    title: "Links",
    component: () => <div className="p-5">Links content here</div>,
  },
};

export default function Portfolio() {
  const buttonFormat = "inline-flex justify-center w-8 h-8";
  const name = "joe";

  const [openWindows, setOpenWindows] = useState([]);
  const [topZ, setTopZ] = useState(10);

  const OpenWindow = (id) => {
    // .find() walks the array and returns the first element where the condition is true
    // if nothing matches, it returns undefined (falsy) — so we bail out to prevent dupes
    if (openWindows.find((w) => w.id === id)) return;

    // spread [...prev] copies the existing array, then we tack on the new window object
    setOpenWindows((prev) => [...prev, { id, z: topZ }]);
    setTopZ((prev) => prev + 1);
  };

  const closeWindow = (id) => {
    // .filter() returns a NEW array keeping only elements where the condition is true
    // anything where w.id === id gets dropped — effectively removing that window
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const focusWindow = (id) => {
    setTopZ((prev) => prev + 1);
    // .map() returns a NEW array by transforming every element
    // we find the window that was clicked and update its z, leaving all others unchanged
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, z: topZ } : w))
    );
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white px-4 py-6 text-black transition-all duration-300 dark:bg-black dark:text-white">
      <nav className="flex gap-6">
        <ThemeToggle buttonFormat={buttonFormat} />
        <button className={buttonFormat}>
          <FontAwesomeIcon icon={faVolumeHigh} style={{ color: "#808080" }} />
        </button>
      </nav>

      <main className="flex grow flex-col items-center justify-center">
        <div>home</div>
        <div className="text-4xl font-normal">hi, my name is {name}</div>
        <div className="flex gap-6">
          {Object.keys(WINDOWS).map((id) => (
            <button key={id} onClick={() => OpenWindow(id)}>
              {WINDOWS[id].title}
            </button>
          ))}
        </div>
      </main>

      {openWindows.map(({ id, z }) => {
        // Pull the component class out of WINDOWS for this window id
        const Win = WINDOWS[id].component;
        return (
          <div
            key={id}
            style={{ zIndex: z }}
            className="fixed left-20 top-20"
            onMouseDown={() => focusWindow(id)}
          >
            {/* Now we can pass onClose as a prop since Win is a component, not frozen JSX */}
            <Win onClose={() => closeWindow(id)} />
          </div>
        );
      })}

      <footer className="flex items-center justify-center gap-4">
        <button className={buttonFormat}>Hello!</button>
        <button className={buttonFormat}>Hello!</button>
      </footer>

      <WaveComponent />
    </div>
  );
}
