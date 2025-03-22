import { cn } from "../../lib/utils.js";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main className="">
      <div
        className={cn(
          "transition-bg relative flex h-full w-full flex-col items-center justify-center bg-[#1C1C1C] text-white",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            "--aurora":
              "repeating-linear-gradient(100deg,#800020_10%,#D7B29D_30%,#FFD700_50%,#800020_70%)",

            "--dark-gradient":
              "repeating-linear-gradient(100deg,#1C1C1C_0%,#1C1C1C_7%,transparent_10%,transparent_12%,#1C1C1C_16%)",

            "--white-gradient":
              "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

            "--dark-burgundy": "#800020",
            "--nude-beige": "#D7B29D",
            "--gold": "#FFD700",
            "--charcoal-black": "#1C1C1C",
            "--white": "#fff",
            "--transparent": "transparent",
          }}
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--dark-burgundy)_10%,var(--nude-beige)_30%,var(--gold)_50%,var(--dark-burgundy)_70%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--charcoal-black)_0%,var(--charcoal-black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--charcoal-black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
