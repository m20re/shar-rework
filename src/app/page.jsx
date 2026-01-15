import WaveComponent from "./components/wavecomponent";

export default function Portfolio() {
  const buttonFormat = "inline-flex justify-center w-24 py-2 border-2 rounded";
  const name = "joe";

  return (
    <div className="flex min-h-screen w-full flex-col px-4 py-6">
      <nav className="flex gap-4">
        <button className={buttonFormat}>Dark Mode</button>
        <button className={buttonFormat}>Mute</button>
      </nav>

      <main className="flex grow flex-col items-center justify-center">
        <div>home</div>
        <div className="text-4xl font-normal">hi, my name is {name}</div>
        <div className="flex gap-4">
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
