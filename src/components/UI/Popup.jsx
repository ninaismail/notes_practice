import Portal from '../../utils/Portal'

const Popup = ({ children, onClose }) => {

  return (
      <Portal>
        <div onClick={onClose}
          className="absolute inset-0 bg-[rgba(0,0,0,0.2)] z-[2] w-full h-full"
        ></div>
        <div className="bg-pink-100 z-20 absolute xl:top-1/3 xl:-translate-y-1/3 bottom-5 right-1/2 translate-x-1/2 2xl:w-6/12 lg:w-8/12 w-10/12 h-fit rounded-2xl border-2 border-white shadow-md">
          {children}
        </div>
      </Portal>
  );
};

export default Popup;
