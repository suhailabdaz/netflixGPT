import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const langKey = useSelector((store) => store.config.lang);

  const handleGptSearch = async () => {
    const gptQuerry =
      "Act as a Movie Recommendation system and suggest some for the querry :" +
      searchText.current.value +
      ".only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: No Way UP, Jocker, Freelance, Doom, Ashique-2";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuerry }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResult);
  };

  return (
    <div className="bg-black pt-[10%] opacity-90">
      <form
        className="p-6 m-6 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 text-lg font-medium"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearch}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
