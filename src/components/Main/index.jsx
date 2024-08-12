export default function Main() {
    return (
      <div className="bg-gradient-to-r from-red-50 via-gray-200 to-blue-50">
        <div className='container mx-auto flex items-center justify-center flex-col px-4 py-16'>
        <div className="max-w-[1040px] text-center gap-2">
          <h1 className='font-bold text-8xl '>
            Find anything that you want, in one <span className="text-[#5E2BFF]">website!</span>
          </h1>
          <div className="pt-10 flex justify-center gap-4">
            <button className="py-3 px-6 px-10 rounded-full bg-[#5E2BFF] text-white hover:bg-[#5E2A9B] transition-colors">
              Get Started!
            </button>
            <button className="py-3 px-6 px-10 rounded-full bg-[#E85F5C] text-white hover:bg-[#C86D6D] transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }