const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-4 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        {/* Main Icon Container */}
        <div className="bg-black text-pinkAccent h-[100px] w-[100px] flex items-center justify-center rounded-full text-6xl border-4 border-orange shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-500">
          {imgSvg}
        </div>

        {/* Label */}
        <p className="text-white/90 font-bold transition-all duration-300">
          {text}
        </p>

        {/* Black Glow Behind */}
        <div className="w-[100px] h-[100px] rounded-full absolute top-[50px] -z-10 blur-xl bg-black/40"></div>
      </div>
    </div>
  );
};

export default SingleSkill;
