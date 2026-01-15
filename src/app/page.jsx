import WaveComponent from "./components/wavecomponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const buttonFormat = "inline-flex justify-center w-8 y-8";
  const name = "joe";

  return (
    <div className="flex min-h-screen w-full flex-col px-4 py-6">
      <nav className="flex gap-6">
        <button className={buttonFormat}>
          <FontAwesomeIcon icon={faSun} style={{ color: "#808080" }} />
        </button>
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
