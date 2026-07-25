import { Link } from "react-router";

const skills = ["React", "JavaScript", "HTML/CSS", "C", "Python"];

function HoverText({ text }) {
  return (
    <p className="flex">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="hovver:text-[#D9D9D9] transition delay-150 duration-200 ease-in-out hover:scale-150 hover:text-white cursor-default"
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </p>
  );
}

export default function Home() {
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
            I build responsive, modern, and user-friendly web applications. I
            enjoy solving real-world problems through code and continuously
            expanding my frontend skills.
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
        <div className="card relative mt-20 ml-auto mb-8 ">
          <div className="absolute -bottom-6 left-6 bg-white rounded-xl border border-yellow-400 shadow-md px-4 py-2">
            <p className="">Currently</p>
            <p className="text-sm">At work</p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
