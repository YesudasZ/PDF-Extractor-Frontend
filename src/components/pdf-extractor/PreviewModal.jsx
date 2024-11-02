import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "lucide-react";

const PreviewModal = ({ previewModal, setPreviewModal }) => {
  const closePreviewModal = () => {
    setPreviewModal({
      isOpen: false,
      pageIndex: null,
      imageUrl: null,
    });
  };

  return (
    <Transition appear show={previewModal.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closePreviewModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-lg bg-white p-4 shadow-xl transition-all">
                <button
                  onClick={closePreviewModal}
                  className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
                >
                  <XIcon className="w-6 h-6" />
                </button>
                <img
                  src={previewModal.imageUrl}
                  alt={`Page ${previewModal.pageIndex + 1}`}
                  className="w-full h-auto"
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PreviewModal;