import { PlayIcon } from "@heroicons/react/24/solid";

function PlayButton({ props, onClick }) {
  return (
    <div className="play-button">
      <button onClick={onClick} {...props}>
        <PlayIcon width={80} />
      </button>
    </div>
  );
}

export default PlayButton;
