export default function UpperCard() {
  return (
    <>
      <div className="w-full sm:w-6/12 lg:w-3/12 px-2">
        <div className="relative flex flex-col min-w-0 break-words bg-red-500 rounded-md mb-6 lg:mb-0 shadow-lg">
          
          <div className="flex-auto p-2">
            <div className="flex flex-wrap">
              <div className="relative w-full p-1 max-w-full flex-grow flex-1">
                <h5 className="text-white uppercase font-bold text-xs">
                  Total Apps
                </h5>
                <span className="font-bold text-2xl text-white">30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
