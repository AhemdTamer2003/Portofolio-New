const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-pinkAccent">{number}</p>
      <p className="font-bold text-xl text-white uppercase -mt-4">{text}</p>
    </div>
  );
};

export default ExperienceInfo;
