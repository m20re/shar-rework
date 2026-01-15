import Wave from "react-wavify";

export default function WaveComponent() {
  return (
    <Wave
      fill="#f79902"
      paused={false}
      style={{ display: "flex" }}
      options={{
        height: 20,
        amplitude: 20,
        speed: 0.15,
        points: 3,
      }}
    />
  );
}
