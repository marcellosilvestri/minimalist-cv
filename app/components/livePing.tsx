interface LivePingProps {
  status?: "busy" | "idle" | "active";
}

function LivePing({ status = "active" }: LivePingProps) {
  const colorClasses = {
    busy: "bg-red-400 bg-red-500",
    idle: "bg-yellow-400 bg-yellow-500",
    active: "bg-green-400 bg-green-500",
  };

  const [pingColor, solidColor] = colorClasses[status].split(" ");

  return (
    <span className="relative flex h-3 w-3">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingColor} opacity-75`}></span>
      <span className={`relative inline-flex rounded-full h-3 w-3 ${solidColor}`}></span>
    </span>
  );
}

export { LivePing };
