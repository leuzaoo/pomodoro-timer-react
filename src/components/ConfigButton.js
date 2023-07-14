import { CogIcon } from "@heroicons/react/24/solid";

function ConfigButton({ text, onClick }) {
  return (
    <div onClick={onClick} className="config-btn-text">
      <CogIcon width={40} />
      {text}
    </div>
  );
}

export default ConfigButton;
