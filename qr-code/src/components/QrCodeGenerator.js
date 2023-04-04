import React, { useState } from "react";
import { navigate } from "@reach/router";
import { createCard } from "../services/apiResquest";

function QrCodeGenerator() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const onClick = async () => {
    await createCard("/card1", { name, description, linkedin, github });
    window.location.assign(`${name}/InterfaceQR`);
  };

  return (
    <div className="flex flex-col items-center bg-rose-200 p-20">
      <>
        <span className="text-zinc-500">
          Hi, complete the form below to get your bussiness card online!
        </span>
        <br />
        <label htmlFor="name" className="text-zinc-500">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-rose-50 rounded-lg p-2"
        />
        <br />
        <label htmlFor="description" className="text-zinc-500">
          About you:
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-rose-50 rounded-lg p-2"
        />
        <br />
        <label htmlFor="linkedin" className="text-zinc-500">
          Your LinkedIn:
        </label>
        <input
          type="text"
          id="linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          className="bg-rose-50 rounded-lg p-2"
        />
        <br />
        <label htmlFor="github" className="text-zinc-500">
          Your Github:
        </label>
        <input
          type="text"
          id="github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="bg-rose-50 rounded-lg p-2"
        />
        <br />
        <button
          onClick={() => onClick()}
          className="rounded transform transition duration-200 hover:scale-110 bg-rose-400 text-white rounded-lg px-10 py-2 mt-4"
        >
          Try a QR Code!
        </button>
        <br />
      </>
    </div>
  );
}

export default QrCodeGenerator;
