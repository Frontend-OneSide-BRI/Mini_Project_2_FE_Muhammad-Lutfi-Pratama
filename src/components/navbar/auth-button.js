import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function AuthButton({ textButton, buttonType }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const buttonStyle = () => {
    switch (buttonType) {
      case "signup":
        return "px-4 py-1 border-2 rounded-lg sm:py-2 border-yellow-950 hover:scale-105";
      case "signin":
        return "px-4 py-1 text-white transition-all bg-yellow-800 rounded-lg sm:py-2 hover:bg-yellow-900 hover:scale-105";
      default:
        return "px-4 py-1 border-2 rounded-lg sm:py-2 border-yellow-950 hover:scale-105";
    }
  };

  return (
    <>
      <button
        className={buttonStyle()}
        type="button"
        onClick={() => openModal()}
      >
        {textButton}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    {textButton}
                  </Dialog.Title>

                  <form className="my-4">
                    {buttonType === "signup" && (
                      <div class="mb-4">
                        <label
                          class="block text-grey-darker text-sm mb-1"
                          for="email"
                        >
                          Email
                        </label>
                        <input
                          class="shadow w-full appearance-none  rounded-full border py-2 px-3 text-grey-darker"
                          id="email"
                          type="email"
                          placeholder="myemail@gmail.com"
                        />
                      </div>
                    )}
                    <div class="mb-4">
                      <label
                        class="block text-grey-darker text-sm mb-1"
                        for="username"
                      >
                        Username
                      </label>
                      <input
                        class="shadow w-full appearance-none  rounded-full border py-2 px-3 text-grey-darker"
                        id="username"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        class="block text-grey-darker text-sm mb-1"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        class="shadow w-full appearance-none  rounded-full border py-2 px-3 text-grey-darker"
                        id="password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                  </form>

                  <div className="float-right mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black transition-all border border-transparent rounded-lg bg-yellow-800/20 hover:bg-yellow-800/40 focus:outline-none focus-visible:ring-2 focus-visible:bg-yellow-800/40 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      {textButton}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
