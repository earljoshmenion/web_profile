import { Link } from "react-router";
import { useState, useEffect } from "react";

const skills = ["React", "JavaScript", "HTML/CSS", "C", "Python"];

function HoverText({ text }) {
  return (
    <p className="flex">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="hover:text-[#D9D9D9] transition delay-150 duration-200 ease-in-out hover:scale-150  cursor-default"
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </p>
  );
}

const paragraphs = [
  "I build responsive, modern, and user-friendly web applications. I enjoy solving real-world problems through code and continuously expanding my frontend skills.",
];

function AnimatedImageLayer({
  offset,
  speedMultiplier,
  imageSrc,
  altText,
  className,
}) {
  return (
    <div
      className={`${className} card-layer transition-transform duration-300 ease-out`}
      style={{
        transform: `translate(${offset.x * speedMultiplier}px, ${offset.y * speedMultiplier}px) rotate(${offset.rotation * speedMultiplier}deg)`,
      }}
    >
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-contain object-[40%_center]"
      />
    </div>
  );
}

const cardLayers = [
  {
    id: "card4",
    speedMultiplier: 0.1,
    imageSrc: "/earl4knobg.png",
    altText: "Earl Josh Menion",
    className: "absolute top-3 left-3 z-0 bg-[#9b895f]",
  },
  {
    id: "card3",
    speedMultiplier: 0.2,
    imageSrc: "/earl4knobg.png",
    altText: "Earl Josh Menion",
    className: "absolute top-2 left-2 z-10 bg-[#b49b68]",
  },
  {
    id: "card2",
    speedMultiplier: 0.3,
    imageSrc: "/earl4knobg.png",
    altText: "Earl Josh Menion",
    className: "absolute top-1 left-1 z-20 bg-[#c2a878]",
  },
  {
    id: "card1",
    speedMultiplier: 0.4,
    imageSrc: "/earl4knobg.png",
    altText: "Earl Josh Menion",
    className: "absolute top-0 left-0 z-30 overflow-hidden bg-[#d9d9d9]",
  },
];
export default function Home() {
  const [offset, setOffset] = useState({ x: 0, y: 0, rotation: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const maxOffset = 10; // Maximum offset in pixels
      const maxRotation = 70; // Maximum rotation in degrees
      let x = (e.clientX - centerX) * 0.5;
      let y = (e.clientY - centerY) * 0.15;

      x = Math.max(-maxOffset, Math.min(maxOffset, x));
      y = Math.max(-maxOffset, Math.min(maxOffset, y));

      let rotation = (e.clientX - centerX) * 0.05;
      rotation = Math.max(-maxRotation, Math.min(maxRotation, rotation));

      setOffset({ x, y, rotation });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative mt-20 flex flex-col">
          <p className="text-lg font-bold text-left text-[#D9D9D9]">
            Aspiring Junior Dev Developer
          </p>
          <p className=" text-4xl sm:text-6xl md:text-[80px] text-left mb-4 text-[#6E633D]">
            HI, I’m Earl
          </p>
          <p className="text-left leading-relaxed max-w-xl text-[#D9D9D9]">
            {paragraphs[0]}
          </p>
          <div className="flex relative gap-4 mt-8">
            <Link
              to="/work"
              className="text-[#355834] bg-[#C2A878] rounded-lg px-4 py-1 font-bold transition delay-150 duration-300 ease-in-out hover:tranlslate-y-1 hover:scale-110   "
            >
              View My Work{" "}
            </Link>
            <Link
              to="/contact"
              className="bg-transparent rounded-lg border-2 text-[#D9D9D9] border-[#C2A878]  px-4 py-1 transition delay-150 duration-300 ease-in-out hover:tranlslate-y-1 hover:scale-110"
            >
              {" "}
              Contact Me
            </Link>
          </div>
          <div className=" flex relative gap-4 mt-8">
            <div className="text-[#c2a878] font-bold text-lg">
              <p>SKILLS</p>
            </div>
            <div className="flex absolute gap-4 mt-10 bg-[#355834] py-1 px-2 rounded-lg text-[#D9D9D9] font-bold">
              {skills.map((skill) => (
                <HoverText key={skill} text={skill} />
              ))}
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="profile-card-stack relative mx-auto mt-12 mb-20 sm:ml-auto sm:mr-0 sm:mt-20 overflow-visible pb-6">
          {cardLayers.map((layer) => (
            <AnimatedImageLayer
              key={layer.id}
              offset={offset}
              speedMultiplier={layer.speedMultiplier}
              imageSrc={layer.imageSrc}
              altText={layer.altText}
              className={layer.className}
            />
          ))}

          <div
            className="absolute -bottom-4 left-1 z-40 transition-transform duration-700 ease-out"
            style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          >
            <div className="bg-white rounded-xl border border-[#c2a878] shadow-md px-3 py-1 w-35">
              <p className="text-left text-[#c2a878] font-semibold">
                Currently
              </p>
              <p className="text-sm font-bold text-black">Open To work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
