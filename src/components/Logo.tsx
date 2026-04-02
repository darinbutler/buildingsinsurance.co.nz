import Link from 'next/link';

type LogoVariant = 'default' | 'compact' | 'white';

interface LogoProps {
  variant?: LogoVariant;
  href?: string;
}

export default function Logo({ variant = 'default', href = '/' }: LogoProps) {
  const isWhite = variant === 'white';
  const isCompact = variant === 'compact';

  const houseIcon = (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield overlay */}
      <path
        d="M12 2L4 5V11C4 17 12 22 12 22C12 22 20 17 20 11V5L12 2Z"
        fill="none"
        stroke={isWhite ? 'white' : '#10B981'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* House inside shield */}
      <path
        d="M12 7L8 10V16H16V10L12 7Z"
        fill="none"
        stroke={isWhite ? 'white' : '#10B981'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Roof peak */}
      <path
        d="M8 10L12 7L16 10"
        fill="none"
        stroke={isWhite ? 'white' : '#10B981'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (isCompact) {
    return (
      <Link href={href} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        {houseIcon}
        <span className={`font-bold text-lg ${isWhite ? 'text-white' : 'text-slate-900'}`}>
          BI
        </span>
      </Link>
    );
  }

  return (
    <Link href={href} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      {houseIcon}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className={`font-bold text-lg tracking-tight ${isWhite ? 'text-white' : 'text-slate-900'}`}>
            BuildingsInsurance
          </span>
          <span className={`font-bold text-lg ${isWhite ? 'text-white' : 'text-emerald-600'}`}>
            .co.nz
          </span>
        </div>
      </div>
    </Link>
  );
}
