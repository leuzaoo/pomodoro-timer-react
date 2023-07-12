import { PlayIcon } from "@heroicons/react/24/solid";

function PlayButton(props) {
  return (
    <div className="play-button">
      <button {...props}>
        <PlayIcon width={80} />
      </button>
    </div>
  );
}

export default PlayButton;
