function Modal({ children }) {
    return (
        <div className="flex items-center fixed inset-0 bg-gray-500/75 overflow-y-auto">
            <div className="mx-auto w-4/5">{children}</div>
        </div>
    );
}

export default Modal;
