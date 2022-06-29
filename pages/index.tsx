import { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const [tweets, setTweet] = useState([]);

  return (
    <div className="grid grid-cols-3 p-4 gap-0">
      {/* PAIDI 1*/}
      <ul className="">
        <li>
          <img
            className="w-6 h-6 m-6"
            src="https://s2.svgbox.net/social.svg?ic=twitter"
            alt=""
          ></img>
        </li>
        <li className="flex content-center mt-6">
          <img src="https://s2.svgbox.net/octicons.svg?ic=home" alt="" />
          <a className="text-lg ml-4 font-bold ">Αρχική σελίδα</a>
        </li>
        <li className="flex center mt-6">
          <img
            className="w-6 h-6"
            src="https://s2.svgbox.net/hero-outline.svg?ic=hashtag"
            alt=""
          />
          <a className="text-lg ml-4 ">Εξερευνήστε</a>
        </li>
        <li className="flex items-center mt-6">
          <img
            className="w-6 h-6"
            src="https://s2.svgbox.net/hero-outline.svg?ic=bell"
            alt=""
          />
          <a className="text-lg ml-4 ">Ειδοποιήσεις</a>
        </li>
        <li className="flex mt-6">
          <img
            className="w-10 h-10"
            src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Message-Icon-by-Kanggraphic-1-580x386.jpg"
            alt=""
          />
          <a className="text-lg ml-4">Μηνύματα</a>
        </li>
        <li className="flex items-center mt-6">
          <img src="https://s2.svgbox.net/octicons.svg?ic=bookmark" alt="" />
          <a className="text-lg ml-4">Σελιδοδείκτες</a>
        </li>
        <li className="flex items-center mt-6">
          <img src="https://s2.svgbox.net/materialui.svg?ic=list_alt" alt="" />
          <a className="text-lg ml-4">Λίστες</a>
        </li>
        <li className="flex items-center mt-6 w-full">
          <img
            className="w-6 h-6"
            src="https://static.thenounproject.com/png/630729-200.png"
            alt=""
          />
          <a className="text-lg ml-4 ">Προφίλ</a>
        </li>
        <li className="flex items-center mt-6">
          <img
            src="https://s2.svgbox.net/materialui.svg?ic=more_horiz"
            alt=""
          />
          <a className="text-lg ml-4">Περισότερα</a>
        </li>
        <li className="mt-4">
          <button className="btn btn-wide rounded-full bg-sky-400">
            Tweet
          </button>
        </li>
      </ul>
      {/* PAIDI 2*/}

      <div className="px-4 border">
        <h1 className="font-bold  bg-white w-1/4 fixed py-4">Home</h1>
        <div className="flex mt-14">
          <img
            className="w-12 h-12 ml-4"
            src="data:image/png;base64,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"
            alt=""
          ></img>
          {/* STEP1 : Apothikeuoume to text se ena state gia na mporoume na to valoume stin lista me ta tweets */}
          <textarea
            value={text}
            onChange={(evt) => setText(evt.currentTarget.value)}
            className="text-xl p-4 ml-4 w-full border"
            placeholder="What is happening"
          />
        </div>
        <div className="p-4 flex mt-4">
          <img
            className="w-6 h-6 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"
            alt=""
          ></img>
          <img
            className="w-6 h-6"
            src="https://s2.svgbox.net/materialui.svg?ic=gif"
            alt=""
          ></img>
          <img
            className="w-6 h-6"
            src="https://o.dlf.pt/dfpng/smallpng/295-2957447_font-side-by-side-bar-chart-bar-chart.png"
            alt=""
          ></img>
          <img
            className="w-6 h-6"
            src="https://s2.svgbox.net/hero-outline.svg?ic=emoji-happy"
            alt=""
          ></img>
          <img
            className="w-6 h-6"
            src="https://c.neh.tw/thumb/f/720/m2i8K9i8G6G6K9G6.jpg"
            alt=""
          ></img>
          <img
            className="w-6 h-6"
            src="https://s2.svgbox.net/octicons.svg?ic=location"
            alt=""
          ></img>

          {/*STEP2: Apothikeuoume tin timi tou text area stin lista me ta tweets  */}
          <button
            onClick={function () {
              setTweet([...tweets, text]);
              setText("");
            }}
            className=" text-white flex  text-center font-bold px-4 py-2 rounded-full bg-sky-400  ml-auto  "
          >
            Tweet
          </button>
        </div>
        <div className="flex gap-2 p-6"></div>

        {/*
           STEP3: kanoume map tin lista me ta tweet pou einai lista apo string
         */}
        <div className=" px-12 py-6  text-black">
          <ul>
            {tweets.map((a, idx) => (
              <li key={idx} className="shadow my-2 px-4 py-2 ">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* PAIDI 3 */}

      <div className="px-8 w-96">
        <div className="flex px-4 py-2 rounded-full border w-full bg-slate-300 bg-opacity-20">
          <img
            className="w-6 h-6"
            src="https://s2.svgbox.net/hero-outline.svg?ic=search"
            alt=""
          ></img>
          <input
            type="text"
            placeholder="Search Twitter"
            className=" w-80 h-full  ml-4  bg-transparent border-none outline-none"
          />
        </div>

        <div className="w-full h-full border rounded-xl mt-4 bg-slate-300 bg-opacity-20  px-8 pt-4">
          <h1 className="font-bold text-xl">Trends for you</h1>
        </div>

        <div className="w-full h-full border rounded-xl mt-4 bg-slate-300 bg-opacity-20 px-8 pt-4">
          <h1 className="font-bold text-xl">Who to follow</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
