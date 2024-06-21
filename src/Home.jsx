/** @format */

import React, { useReducer, useContext, useEffect } from "react";
import { DarkModeContext } from "./DarkModeContext";

const initialState = {
  textStr: "",
  wordCnt: 0,
  charCnt: 0,
  readTime: 0,
  ansStr: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        textStr: action.payload,
        wordCnt: action.payload.split(" ").filter(Boolean).length,
        charCnt: action.payload.length,
        readTime: action.payload.split(" ").filter(Boolean).length / 4,
        ansStr: action.payload,
      };
    case "SET_ANS_STR":
      return { ...state, ansStr: action.payload };
    case "CLEAR_TEXT":
      return initialState;
    case "REMOVE_SPACES":
      const trimmedText = state.textStr.split(" ").filter(Boolean).join(" ");
      return { ...state, ansStr: trimmedText };
    default:
      return state;
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { state: darkModeState } = useContext(DarkModeContext);

  useEffect(() => {
    const container = document.querySelector(".container");
    if (darkModeState.colorMode) {
      container.classList.remove("dark-mode");
      container.classList.add("light-mode");
    } else {
      container.classList.remove("light-mode");
      container.classList.add("dark-mode");
    }
  }, [darkModeState.colorMode]);

  return (
    <div
      className={`container min-h-dvh pb-24 ${
        darkModeState.colorMode ? "light-mode" : "dark-mode"
      }`}
    >
      <h1
        className={`text-4xl py-6 px-2 w-fit mx-auto mt-3 border-2 border-gray-600 rounded-lg  ${
          darkModeState.colorMode ? "bg-white" : "bg-gray-900"
        }`}
      >
        <span className='text-fuchsia-700'>
          Text <span className='text-amber-600'>World -</span>
        </span>
        <span className='text-indigo-500'>Counts words,</span>
        <span className='text-lime-500'> Counts characters,</span>
        <span className='text-rose-600'> Removes extra spaces</span>
      </h1>
      <div className='flex flex-col '>
        <div className='flex flex-col items-center justify-start py-8'>
          <label
            htmlFor='textin'
            className={`text-2xl px-2 w-fit mx-auto mt-3 border-2 border-gray-600 rounded-lg ${
              darkModeState.colorMode
                ? "bg-white text-fuchsia-700"
                : "bg-gray-500 text-fuchsia-100"
            }`}
          >
            Enter Your Text Here:
          </label>
          <textarea
            placeholder='Enter you text here....'
            className={`border-2 border-amber-500 rounded w-3/4 h-56 p-6 text-xl ${
              darkModeState.colorMode ? "bg-white" : "bg-gray-500"
            }`}
            name='textin'
            id='textin'
            value={state.textStr}
            onChange={(e) =>
              dispatch({ type: "SET_TEXT", payload: e.currentTarget.value })
            }
          ></textarea>
        </div>
        <div
          className={`flex items-center justify-center gap-4 px-6 py-6 px-2 w-fit mx-auto mt-3 border-2 border-green-600 rounded-lg ${
            darkModeState.colorMode ? "bg-white" : "bg-gray-500"
          }`}
        >
          <button
            className='button-28'
            onClick={() =>
              dispatch({
                type: "SET_ANS_STR",
                payload: state.textStr.toUpperCase(),
              })
            }
          >
            Convert To Uppercase
          </button>
          <button
            className='button-28'
            onClick={() =>
              dispatch({
                type: "SET_ANS_STR",
                payload: state.textStr.toLowerCase(),
              })
            }
          >
            Convert To Lowercase
          </button>
          <button
            className='button-24'
            onClick={() => dispatch({ type: "CLEAR_TEXT" })}
          >
            Clear Text
          </button>
          <button
            className='border-2 rounded p-2 border-green-400 hover:bg-green-400 hover:text-white'
            onClick={() => navigator.clipboard.writeText(state.ansStr)}
          >
            Copy To Clipboard
          </button>
          <button
            className='button-24'
            onClick={() => dispatch({ type: "REMOVE_SPACES" })}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className={`text-orange-400 text-2xl w-3/4 mx-auto my-6 border-2 rounded border-black p-4 flex flex-col gap-4  ${
          darkModeState.colorMode ? "bg-gray-200" : "bg-blue-900"
        }`}
      >
        <h1
          className={`text-3xl ${
            darkModeState.colorMode ? "text-gray-700" : "text-gray-200"
          }`}
        >
          Summary Of Your Text-
        </h1>
        <h3>
          Number of words:{" "}
          <span className='ml-2 text-lime-600'>{state.wordCnt}</span>
        </h3>
        <h3>
          Number of Characters:{" "}
          <span className='ml-2 text-lime-600'>{state.charCnt}</span>
        </h3>
        <h3>
          Reading Time:{" "}
          <span className='ml-2 text-lime-600'>{state.readTime} Sec</span>
        </h3>
      </div>
      <div
        className={` w-3/4 mx-auto my-6 min-h-44 border-2 border-fuchsia-500 rounded-lg p-4 ${
          darkModeState.colorMode ? "bg-white" : "bg-blue-900"
        }`}
      >
        <h3
          className={`text-2xl  ${
            darkModeState.colorMode ? "text-lime-600" : "text-lime-300"
          }`}
        >
          Preview Document-
        </h3>
        <div
          className={` text-lg py-2 ${
            darkModeState.colorMode ? "text-indigo-800" : "text-green-200"
          }`}
        >
          {state.ansStr === "" ? (
            <p>Nothing To See Yet...</p>
          ) : (
            <p>{state.ansStr}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
