"use client";
import WaveComponent from "./components/wavecomponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "./theme-toggle";

export default function Portfolio() {
  const buttonFormat = "inline-flex justify-center w-8 h-8";
  const name = "joe";

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
          <button>about</button>
          <button>links</button>
          <button>work</button>
          <button>faq</button>
          <button>contact</button>
        </div>
      </main>

      <footer className="flex items-center justify-center gap-4">
        <button className={buttonFormat}>Hello!</button>
        <button className={buttonFormat}>Hello!</button>
      </footer>

      <WaveComponent />
    </div>
  );
}
