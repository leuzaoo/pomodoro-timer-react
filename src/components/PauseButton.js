import { PauseIcon } from "@heroicons/react/24/solid";

function PauseButton({ props, onClick }) {
  return (
    <div onClick={onClick} className="pause-button">
      <button {...props}>
        <PauseIcon width={80} />
      </button>
    </div>
  );
}

export default PauseButton;
