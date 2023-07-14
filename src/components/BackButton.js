import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

function BackButton({ text, onClick }) {
  return (
    <div onClick={onClick} className="back-btn-wrapper">
      <ArrowLeftOnRectangleIcon width={48} />
      <p>{text}</p>
    </div>
  );
}

export default BackButton;
