import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("ur cumslut");
  const [author, setAuthor] = useState("sanchita");

  const fetch = async () => {
    const response = await axios.get("https://type.fit/api/quotes");
    const data = response.data;
    const randomIndex = Math.floor(Math.random() * data.length);
    setQuote(data[randomIndex].text);
    setAuthor(data[randomIndex].author);
  };

  useEffect(() => {
    fetch();
  }, []);

  function temp() {
    setQuote("mommy");
    setAuthor("sanchita");
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-tl flex flex-col justify-center items-center">
      <div className="w-full min-h-[8rem] flex flex-col justify-center items-center bg-rose-300">
        <div className="">"{quote}" </div>
        <div className="">" {author}" </div>
      </div>

      <div className="mt-8  border-spacing-3 border-2 border bg-red-600">
        <button onClick={fetch}> CHANGE QUOTE</button>
      </div>
    </div>
  );
};

export default Quotes;
