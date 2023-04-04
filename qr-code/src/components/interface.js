import { useLocation } from "react-router-dom";
import QRCode from "qrcode.react";

const InterfaceQR = () => {
  const { pathname } = useLocation();
  const name = pathname.substring(1, pathname.indexOf("/", 2));
  const decodedName = decodeURIComponent(name);

  return (
    <div className="px-4 mx-auto flex flex-col items-center bg-rose-200">
      <h1 className="text-zinc-500 pt-20 pb-16 text-xl font-extrabold">
        {" "}
        Here is your card, {decodedName.replace(/%20/g, " ")}:
      </h1>
      <h4 className="text-zinc-500 text-xl">Scan me</h4>
      <div className=" text-white py-2 px-4 rounded m-10">
        <QRCode value={`${window.location.host}/${name}`} />
      </div>
    </div>
  );
};

export default InterfaceQR;
