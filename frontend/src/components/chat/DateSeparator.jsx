
const DateSeparator = ({ label }) => {
    return (
        <div className="flex items-center justify-center py-3">
            <span className="rounded-full border border-white/[0.06] bg-[#172235] px-4 py-1.5 text-[10px] font-medium tracking-wide text-slate-400 shadow-sm sm:text-[11px]">
                {label}
            </span>
        </div>
    );
};

export default DateSeparator;
