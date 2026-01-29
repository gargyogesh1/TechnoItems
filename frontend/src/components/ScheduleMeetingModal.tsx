import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ScheduleMeetingModal = ({ open, onClose }: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="relative w-full max-w-6xl h-[85vh] bg-black rounded-xl overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white bg-black/70 rounded-full w-9 h-9 flex items-center justify-center hover:bg-black"
        >
          <X size={18} />
        </button>

        {/* Cal iframe */}
        <iframe
          src="https://cal.com/technoitems-k25a0r"
          className="w-full h-full border-0"
          scrolling="no"
          allow="camera; microphone; fullscreen"
        />
      </div>
    </div>
  );
};

export default ScheduleMeetingModal;
