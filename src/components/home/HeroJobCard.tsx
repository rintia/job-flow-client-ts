type HeroJobCardProps = {
    title: string;
    salary: string;
    location: string;
    skills: string[];
    className?: string;
  };
  
  export default function HeroJobCard({
    title,
    salary,
    location,
    skills,
    className = "",
  }: HeroJobCardProps) {
    return (
      <div
        className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-xl ${className}`}
      >
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          Featured
        </span>
  
        <h3 className="mt-4 text-xl font-bold text-slate-900">
          {title}
        </h3>
  
        <div className="mt-3 space-y-2 text-sm text-slate-600">
          <p>💰 {salary}</p>
          <p>📍 {location}</p>
        </div>
  
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
  
        <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          Apply Now
        </button>
      </div>
    );
  }