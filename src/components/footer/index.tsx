import { ArrowRight } from "lucide-react";

export const Footer = () => {
    return (
      <footer className=" text-white py-12">
        <div className="container mx-auto px-4 md:px-28">
          <div className="flex flex-col items-start  mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Subscribe to our newsletter
            </h2>
            <div className="w-full max-w-sm">
              <div className="flex items-center border-b border-white pb-2">
                <input
                  type="email"
                  placeholder="enter your email"
                  className="bg-transparent outline-none text-white w-full placeholder-white"
                />
                <button className="ml-4 text-white">
                 <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20  justify-between items-center text-sm">
            <div className="space-y-8">
              <p>Air X</p>
              <p>Lexo Z</p>
              <p>Gravity 9</p>
            </div>
            <div className="space-y-8">
              <p>Fleet</p>
              <p>Company</p>
              <p>Stories</p>
            </div>
            <div className="space-y-4 ">
              <p>Purchasing</p>
              <p>Charging</p>
              <p>Insurance</p>
              <p>Service</p>
            </div>
            <div className="space-y-4">
              <p>Spaces</p>
              <p>Investors</p>
              <p>Career</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  