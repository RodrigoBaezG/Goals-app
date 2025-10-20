function Modal({ children }) {
    return (
        <div className="fixed inset-0 bg-gray-500/75 flex items-start justify-center pt-10 pb-20 px-4 z-40 overflow-y-auto">
            <div className="w-full max-w-3xl max-h-full">{children}</div>
        </div>
    );
}

export default Modal;
