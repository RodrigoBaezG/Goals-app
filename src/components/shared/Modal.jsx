function Modal({ children }) {
    return (
        <div className="flex items-center fixed inset-0 bg-gray-500/75 overflow-y-auto">
            <div className="mx-auto">{children}</div>
        </div>
    );
}

export default Modal;
