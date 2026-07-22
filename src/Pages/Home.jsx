export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative mt-20 flex flex-col">
          <p className="text-lg font-bold text-left">
            Aspiring Junior Dev Developer
          </p>
          <p className="text-gray-600 text-4xl sm:text-6xl md:text-[80px] text-left mb-4">
            Hi, I’m Earl
          </p>
          <p className="text-left leading-relaxed max-w-xl">
            I build responsive, modern, and user-friendly web applications. I
            enjoy solving real-world problems through code and continuously
            expanding my frontend skills.
          </p>
            <div className="flex relative gap-4 mt-8">
            <div className="bg-white rounded-lg px-4 py-1">View My Work  </div>
            <div className="bg-white rounded-lg  px-4 py-1"> Contact Me</div>
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
