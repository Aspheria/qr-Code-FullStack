import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { requestCardData } from "../services/apiResquest";
import GitHubImage from "../assets/image/github-logo.png";
import LinkedinImage from "../assets/image/linkedin-logo.png";

const InfoCard = () => {
  const { pathname } = useLocation();
  const [info, setInfo] = useState({});
  const { name, description, linkedin, github } = info;
  useEffect(() => {
    async function recoverData() {
      const endpoint = `/card1${pathname}`;
      const data = await requestCardData(endpoint);
      setInfo(data);
    }
    recoverData();
  }, [pathname]);

  return (
    <>
      {!info ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-rose-200">
          <div className="flex flex-col items-center w-96 bg-white justify-center rounded-lg border-10 shadow-xl">
            <h1 className="text-zinc-700 text-xl pb-5 pt-3">Hi! I am {name}</h1>
            <h1 className="text-zinc-700 text-xl font-semibold">About me</h1>
            <p className="text-zinc-700 pb-5 text-center">{description}</p>
            <h1 className="text-zinc-700 text-xl font-semibold">Contact</h1>
            <div className="flex space-x-5 pb-6">
              <a className="mt-4" href={linkedin} target="_blank">
                <img src={LinkedinImage} alt="linkedin-logo"></img>
              </a>
              <a href={github} target="_blank">
                <img src={GitHubImage} alt="github-logo"></img>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoCard;
