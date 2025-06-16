
const Moviecard = ({ image, title, year }) => {
  return (
    <>
      <div className="h-auto  hover:scale-95 transition-all 300 1s ease-in-out  w-60  flex flex-col cursor-pointer shadow-xl rounded-t-lg rounded-b-lg bg-gradient-to-r from-blue-800 to-violet-800">
        <div className="h-full w-full">
          <img
            className="object-cover h-full w-full rounded-t-lg"
            src={image}
            alt="movie"
          />
        </div>
        <div className="flex flex-col gap-3 p-1">
          <div className="w-full flex justify-between">
          <span className="text-white text-md font-bold truncate ">{title}</span>
            <p className="text-white truncate">{year}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moviecard;
