export default function Header() {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-50 via-gray-200 to-blue-50">
        <nav className="container mx-auto flex justify-between items-center p-6 px-4">
          <div className="text-4xl font-bold text-[#5E2BFF]">
            Buy<span className="text-black">.</span><span className="text-[#E85F5C]">az</span>
          </div>
          <div className="flex space-x-4 font-semibold">
            <a className="text-black cursor-pointer">
              Home
            </a>
            <a className="text-black opacity-35 cursor-pointer">
              Search
            </a>
            <a className="text-black opacity-35 cursor-pointer">
              About
            </a>
            <a className="text-black opacity-35 cursor-pointer">
              Contacts
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
