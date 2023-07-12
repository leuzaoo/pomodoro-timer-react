import { CogIcon } from "@heroicons/react/24/solid";

function ConfigButton({ text }) {
  return (
    <div className="config-btn-text">
      <CogIcon width={40} />
      {text}
    </div>
  );
}

export default ConfigButton;
