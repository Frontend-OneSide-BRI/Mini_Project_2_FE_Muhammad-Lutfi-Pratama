import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";

function ImgCard({ key, imgUrl, title }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        key={key}
        className="group cursor-pointer relative w-full h-[300px] overflow-hidden rounded-lg md:h-[400px] lg:h-[500px] shadow-xl mb-6 hover:scale-105 transition-all"
      >
        <img
          src={imgUrl}
          alt={title}
          className="object-cover w-full h-full transition-all duration-500 group-hover:brightness-75 group-hover:bg-slate-200 filter group-hover:rotate-6 group-hover:scale-125"
          onClick={() => openModal()}
        />
        <p
          className="absolute w-3/4 px-8 py-2 text-xl font-semibold text-center text-white transition-all shadow-2xl opacity-0 bg-gray-600/50 rounded-xl left-14 sm:left-22 md:left-12 lg:left-12 xl:left-8 bottom-12 group-hover:opacity-100"
          onClick={() => openModal()}
        >
          {title}
        </p>
        <Link
          to={`/detail/${title}`}
          className="absolute right-0 flex justify-between px-8 py-2 transition-all top-2 opacity-40 hover:opacity-100 hover:scale-125"
        >
          <p className="mr-2">Detail</p>
          <BsArrowRightCircleFill className="" size={25} />
        </Link>
      </div>

      <Transition appear show={isOpen}>
        <Dialog className="relative z-10" onClose={closeModal}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
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
                <Dialog.Panel className="w-full max-w-3xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="pb-6 text-xl font-semibold leading-6 text-center text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <img
                    src={imgUrl}
                    alt={title}
                    className="object-cover w-full h-full transition-all "
                  />
                  <Link
                    to={`/detail/${title}`}
                    className="flex items-center float-right pt-4 transition-all top-2 opacity-40 hover:opacity-100 hover:scale-125"
                  >
                    <p className="mr-2 text-xl">Detail</p>
                    <BsArrowRightCircleFill className="" size={30} />
                  </Link>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ImgCard;
