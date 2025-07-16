import * as Icons from "lucide-react";
import CountUp from "react-countup";

const StatCard = ({ statNumber, statLabel, className = "", duration = 2 }) => {
  return (
    <div
      className={`text-text-dark bg-tertiary md:bg-accent py-5 px-5 md:px-0 flex flex-row items-center justify-center gap-4 ${className}`}
    >
      <h2 className="h2">
        <CountUp end={statNumber} duration={duration} />
      </h2>
      <p className="body-small font-bold w-24 uppercase text-start text-effect">
        {statLabel}
      </p>
    </div>
  );
};

export default StatCard;
