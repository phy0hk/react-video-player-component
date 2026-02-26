const SvgToIcon = ({
    svgString,
    className,
}: {
    svgString: string;
    className?: string;
}) => {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: svgString }}
            className={`size-5 items-center justify-center flex ${className}`}
        ></div>
    );
};
export default SvgToIcon;
