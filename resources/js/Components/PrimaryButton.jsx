export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center shadow-xl rounded-xl bg-gray-50 px-4 py-2 text-xs font-light uppercase tracking-widest text-black transition duration-150 ease-in-out hover:bg-blue-100 hover:shadow-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
