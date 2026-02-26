export interface RangeProps {
    progressPercent: number;
    className: string;
    onChange: (val: number) => void;
}
const Range = ({ progressPercent, className, onChange }: RangeProps) => {
    return (
        <div
            className={`flex items-center justify-center group px-2 ${className}`}
        >
            <div
                className={`border border-zinc-300 rounded-full w-full h-1/4 relative flex flex-row items-center`}
            >
                <div
                    className="h-full bg-blue-500 transition-all delay-0 duration-100 ease-in-out rounded-full"
                    style={{ width: `${progressPercent}%` }}
                />
                <div
                    className="h-[300%] aspect-square bg-black rounded-full hidden group-hover:flex absolute -translate-x-1/2 transition-full duration-50"
                    style={{ left: `${progressPercent}%` }}
                ></div>
            </div>
        </div>
    );
};
export default Range;
