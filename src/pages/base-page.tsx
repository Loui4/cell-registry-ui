import { FC } from "react";
import logo from "../logo.png";

const BasePage: FC = ({ children }) => {
  return (
    <div className="w-full h-screen bg-gray-100 px-20">
      <div className="w-full h-full bg-red-100 flex flex-row gap-2">
        <div className="w-2/12 h-full bg-green-200 flex flex-col items-center">
          <div className="bg-white w-full flex flex-col items-center py-6">
            <img src={logo} height={150} width={150} />
          </div>
        </div>
        <div className="w-10/12 h-full bg-purple-200 flex flex-col">
          <div className="w-full h-24 bg-orange-400">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BasePage;
