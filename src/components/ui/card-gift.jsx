import { cn } from "../../lib/utils";
import images from "../../assets/paralax_hero/paralax_1_1.jpg";
import images_2 from "../../assets/paralax_hero/paralax_2_5.jpg";
import images_3 from "../../assets/paralax_hero/paralax_3_2.jpg";
import { useState } from "react";
export const CardGift = () => {
  const [isHovered_1, setIsHovered_1] = useState(false);
  const [isHovered_2, setIsHovered_2] = useState(false);
  const [isHovered_3, setIsHovered_3] = useState(false);

  return (
    <div className="flex items-center justify-evenly flex-wrap gap-y-5">
      <div className="max-w-xs sm:max-w-xs w-full min-h-28">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card  rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 ",
            // Preload hover image by setting it in a pseudo-element

            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}
          onMouseEnter={() => setIsHovered_1(true)}
          onMouseLeave={() => setIsHovered_1(false)}
          style={{
            backgroundImage: !isHovered_1
              ? "url('https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')"
              : `url(${images})`,
            backgroundSize: "cover",
            height: "250px",
          }}
        >
          <div className="text relative z-50">
            <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
              Eternal Serenity
            </h1>
            <p className="font-normal text-base text-gray-50 relative my-4">
              "If I had a flower for every time I thought of you, I could walk
              in my garden forever." – Alfred Lord Tennyson
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-xs w-full min-h-28">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card  rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 ",
            // Preload hover image by setting it in a pseudo-element

            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}
          onMouseEnter={() => setIsHovered_2(true)}
          onMouseLeave={() => setIsHovered_2(false)}
          style={{
            backgroundImage: !isHovered_2
              ? "url('https://images.unsplash.com/photo-1611738740585-3598e06e0f8c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
              : `url(${images_2})`,
            backgroundSize: "cover",
            height: "250px",
          }}
        >
          <div className="text relative z-50">
            <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
              A Wish for You
            </h1>
            <p className="font-normal text-base text-gray-50 relative my-4">
              "Somewhere between dreams and reality, I found you." – Anonim
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-xs w-full min-h-28">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 ",
            // Preload hover image by setting it in a pseudo-element

            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 ",
            "transition-all duration-500"
          )}
          onMouseEnter={() => setIsHovered_3(true)}
          onMouseLeave={() => setIsHovered_3(false)}
          style={{
            backgroundImage: !isHovered_3
              ? "url('https://images.unsplash.com/photo-1578736496934-3c44d6ddc58e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
              : `url(${images_3})`,
            backgroundSize: "cover",
            height: "250px",
          }}
        >
          <div className="text relative z-50">
            <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
              Endless Love
            </h1>
            <p className="font-normal text-base text-gray-50 relative my-4">
              "You are my heart, my life, my one and only thought." – Arthur
              Conan Doyle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardGift;
