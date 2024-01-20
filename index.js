var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Outlet,
  Meta,
  Links,
  ScrollRestoration,
  Scripts,
  useRouteError,
  useLocation,
  isRouteErrorResponse
} from "@remix-run/react";
import * as React from "react";

// app/styles/global.css
var global_default = "/build/_assets/global-467E5OBI.css";

// app/root.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "manifest", href: "/manifest.json" }
], meta = () => [
  { title: "Arknights Wordle" },
  {
    property: "og:title",
    content: "Arknights Wordle"
  },
  {
    name: "description",
    content: "Arknights Wordle project by Three6ty1"
  }
];
function App() {
  return /* @__PURE__ */ jsx2(Document, { children: /* @__PURE__ */ jsx2(Layout, { children: /* @__PURE__ */ jsx2(Outlet, {}) }) });
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2(
        "meta",
        {
          charSet: "utf-8",
          name: "viewport",
          content: "width=device-width,initial-scale=1,initial-scale=1, maximum-scale=1, user-scalable=0"
        }
      ),
      title ? /* @__PURE__ */ jsx2("title", { children: title }) : null,
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "no-scrollbar", children: [
      children,
      /* @__PURE__ */ jsx2(RouteChangeAnnouncement, {}),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      !1
    ] })
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsx2("div", { className: "remix-app", children });
}
function CatchBoundary() {
  let caught = useRouteError(), message;
  if (isRouteErrorResponse(caught)) {
    switch (caught.status) {
      case 401:
        message = /* @__PURE__ */ jsx2("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." });
        break;
      case 404:
        message = /* @__PURE__ */ jsx2("p", { children: "Oops! Looks like you tried to visit a page that does not exist." });
        break;
      default:
        throw new Error(caught.data || caught.statusText);
    }
    return /* @__PURE__ */ jsx2(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ jsxs(Layout, { children: [
      /* @__PURE__ */ jsxs("h1", { children: [
        caught.status,
        ": ",
        caught.statusText
      ] }),
      message
    ] }) });
  }
  return /* @__PURE__ */ jsx2(Document, { title: "Unknown Error has occured", children: /* @__PURE__ */ jsx2(Layout, { children: "Unknown error has occured" }) });
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ jsx2(Document, { title: "Error!", children: /* @__PURE__ */ jsx2(Layout, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx2("h1", { children: "There was an error" }),
    /* @__PURE__ */ jsx2("p", { children: error.message }),
    /* @__PURE__ */ jsx2("hr", {}),
    /* @__PURE__ */ jsx2("p", { children: "Hey, developer, you should replace this with what you want your users to see." })
  ] }) }) });
}
var RouteChangeAnnouncement = React.memo(() => {
  let [hydrated, setHydrated] = React.useState(!1), [innerHtml, setInnerHtml] = React.useState(""), location = useLocation();
  React.useEffect(() => {
    setHydrated(!0);
  }, []);
  let firstRenderRef = React.useRef(!0);
  return React.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = !1;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]), hydrated ? /* @__PURE__ */ jsx2(
    "div",
    {
      "aria-live": "assertive",
      "aria-atomic": !0,
      id: "route-change-region",
      style: {
        border: "0",
        clipPath: "inset(100%)",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      },
      children: innerHtml
    }
  ) : null;
});

// app/routes/arknights-wordle.tsx
var arknights_wordle_exports = {};
__export(arknights_wordle_exports, {
  action: () => action,
  default: () => ArknightsWordle,
  loader: () => loader
});

// app/wordle.server.ts
import { PrismaClient } from "@prisma/client";

// app/helper/helper.ts
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var ICON_DIR = "https://raw.githubusercontent.com/Three6ty1/ak-wordle-icons/main/avatars/", PROFESSION_ICON_DIR = "https://raw.githubusercontent.com/Three6ty1/ak-wordle-icons/main/classes/black/";
var wordleColors = {
  incorrect: "#919090",
  higher: "#08aadd",
  lower: "#c80000",
  half: "#FFAC1C",
  correct: "#6BBF59"
};
function getOperatorIconUrl(charId, rarity) {
  let url;
  return rarity > 3 ? url = ICON_DIR + charId + "_2.png" : url = ICON_DIR + charId + ".png", url;
}
function getProfessionIconUrl(profession) {
  return PROFESSION_ICON_DIR + "icon_profession_" + profession.toLowerCase() + "_large.png";
}
var raceToolTips = {
  \u00C6gir: "Seaborn and Aquatic animals",
  Anasa: "Asuras, Rakshasas and Yakshas (Hindu-Buddhist mythology)",
  Anaty: "Otters, Weasels, Raccoons and Wolverines",
  Anura: "Frogs",
  Archosauria: "Crocodilians",
  Aslan: "Lions",
  Caprinae: "Goats and Sheeps",
  Cautus: "Rabbits and Hares",
  Cerato: "Rhinoceroses",
  Chimera: "Hybrid race",
  Draco: "European dragons",
  Durin: "Dwarves",
  Elafia: "Deers",
  Feline: "Cats, Big cats and Mongooses (Exc. Aslan: Lions)",
  Forte: "Bovines and camelids",
  Itra: "Musk Deer",
  Kuranta: "Horses and Zebras",
  Kylin: "Qilin (Chinese mythology)",
  Liberi: "Birds and Bird-like mythological creatures",
  Lung: "Chinese dragons",
  Lupo: "Wolves",
  Manticore: "Manticore (one) (Persian mythology)",
  Oni: "Oni (Japanese mythology)",
  Perro: "Dogs",
  Petram: "Turtles and Tortoises",
  Pilosa: "Sloths",
  Pythia: "Serpents",
  Rebbah: "Hyenas",
  Robot: "Beep Boop",
  Sankta: "Angels (Abrahamic religions)",
  Sarkaz: "Demons (Abrahamic religions)",
  Savra: "Lizards and Salamanders",
  Ursus: "Bears",
  Vouivre: `Wyverns, Wyrms, Hydras, Amphipteres (Winged Serpents)
and Drakes`,
  Vulpo: "Foxes",
  Zalak: "Rodents, Opposums and Moles",
  "Credits to": "Arknights Fandom wiki"
}, guessCategoryToolTips = {
  Operator: null,
  Gender: "Male/Female",
  Race: null,
  Allegiance: "The Group/Team > Nation the operator represents.",
  Infected: "Yes/No/Undisclosed",
  Profession: null,
  Rarity: "1/2/3/4/5/6 star",
  "Cost (E2)": "Cost is compared at E2 Pot0."
}, costToolTips = {
  Higher: `The E2 cost of the correct operator is HIGHER
than this operators E2 cost.`,
  Lower: `The E2 cost of the correct operator is LOWER
than this operators E2 cost.`
};

// app/wordle.server.ts
var prisma = new PrismaClient(), chooseNewOperator = async () => {
  let prev = await prisma.chosenOperators.findFirst({
    where: { date: (/* @__PURE__ */ new Date()).toDateString() }
  }), operators = await prisma.operator.findMany();
  for (; ; ) {
    let toChoose = operators[randomInteger(0, operators.length)], chosen = await prisma.operator.findFirst({
      where: {
        charId: toChoose.charId
      },
      include: {
        chosen: !0
      }
    });
    if (chosen && (!prev || chosen.chosen.length <= Math.floor(prev.gameId / Math.floor(operators.length / 2))))
      return chosen;
  }
}, handleNewDay = async (date) => {
  let chosen = await chooseNewOperator(), res = await prisma.chosenOperators.create({
    data: {
      date,
      operatorId: chosen.charId,
      timesGuessed: 0
    }
  });
  return console.log(`New Operator chosen ${chosen.name}`), res;
}, getTodayOperator = async () => {
  let date = (/* @__PURE__ */ new Date()).toDateString(), res = await prisma.chosenOperators.findFirst({
    where: { date }
  });
  return res || (res = await handleNewDay(date)), res;
}, getOperatorStats = async () => await getTodayOperator(), compareGuessLogic = (answer, guess) => {
  let allegiance_res;
  answer.group && guess.group ? answer.group == guess.group ? allegiance_res = "Correct" /* Correct */ : allegiance_res = answer.nation == guess.nation ? "Half" /* Half */ : "Wrong" /* Wrong */ : !answer.group && !guess.group ? allegiance_res = answer.nation == guess.nation ? "Correct" /* Correct */ : "Wrong" /* Wrong */ : allegiance_res = answer.nation == guess.nation ? "Half" /* Half */ : "Wrong" /* Wrong */;
  let res = {
    gender: { guess: guess.gender, result: answer.gender === guess.gender },
    race: { guess: guess.race, result: answer.race === guess.race },
    allegiance: { guess: guess.group ? guess.group : guess.nation, result: allegiance_res },
    infected: { guess: guess.infected, result: answer.infected === guess.infected },
    profession: { guess: guess.profession, result: answer.profession === guess.profession },
    rarity: { guess: guess.rarity, result: answer.rarity < guess.rarity ? "Lower" /* Lower */ : answer.rarity > guess.rarity ? "Higher" /* Higher */ : "Correct" /* Correct */ },
    cost: { guess: [guess.costE0, guess.costE2], result: answer.costE2 < guess.costE2 ? "Lower" /* Lower */ : answer.costE2 > guess.costE2 ? "Higher" /* Higher */ : "Correct" /* Correct */ }
  };
  return {
    charId: guess.charId,
    name: guess.name,
    ...res,
    correct: res.gender.result && res.race.result && res.allegiance.result == "Correct" /* Correct */ && res.profession.result && res.rarity.result == "Correct" /* Correct */ && res.cost.result == "Correct" /* Correct */ && res.infected.result
  };
}, compareGuess = async (guess) => {
  let compareOp = await prisma.operator.findFirstOrThrow({ where: { charId: (await getTodayOperator()).operatorId } }), guessOp = await prisma.operator.findFirst({
    where: { name: guess }
  });
  return guessOp ? { result: compareGuessLogic(compareOp, guessOp) } : { error: `Not a valid operator name: ${guess}` };
}, getAllOperatorNames = async () => (await prisma.operator.findMany({
  orderBy: {
    name: "asc"
  }
})).map((op) => [op.name, op.charId, op.profession, op.archetype, op.rarity]), updateWins = async () => {
  let date = (/* @__PURE__ */ new Date()).toDateString();
  await prisma.$transaction(async (tx) => {
    let chosenOperator = await tx.chosenOperators.findFirst({
      where: { date }
    });
    await tx.chosenOperators.update({
      where: { gameId: chosenOperator?.gameId },
      data: { timesGuessed: {
        increment: 1
      } }
    });
  });
};

// app/routes/arknights-wordle.tsx
import { useLoaderData as useLoaderData3, useActionData as useActionData3 } from "@remix-run/react";
import React8 from "react";

// app/components/arknights-wordle/results/answerBox.tsx
import { useActionData } from "@remix-run/react";
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var animationDelay = 225;
function AnswerBox({ category, guess, result, boxIndex, rowIndex }) {
  let showResult = result == "Higher" /* Higher */ || result == "Lower" /* Lower */, actionData = useActionData(), divStyle = "flex flex-col mx-2 my-1 h-20 w-20 p-1 leading-2 break-all justify-center text-white", isGuesses = localStorage.getItem("guesses"), op = (isGuesses ? JSON.parse(isGuesses) : [])[rowIndex], url = getOperatorIconUrl(op.charId, op.rarity.guess);
  !actionData?.error && rowIndex === 0 && (op.correct ? divStyle += " opacity-0 animate-win " : divStyle += " opacity-0 animate-flip ");
  let bg = wordleColors.correct;
  return typeof result == "boolean" && !result ? bg = wordleColors.incorrect : result === "Lower" /* Lower */ ? bg = wordleColors.lower : result === "Higher" /* Higher */ ? bg = wordleColors.higher : result === "Half" /* Half */ ? bg = wordleColors.half : result === "Wrong" /* Wrong */ && (bg = wordleColors.incorrect), /* @__PURE__ */ jsx3(Fragment, { children: category === "name" ? /* @__PURE__ */ jsx3("div", { className: `${divStyle} tooltip-answer-row bg-base-200`, "data-tip": guess, style: { animationDelay: "200ms" }, children: /* @__PURE__ */ jsx3("img", { src: url }) }) : category === "race" ? /* @__PURE__ */ jsx3(
    "div",
    {
      className: `${divStyle} tooltip-answer-row`,
      "data-tip": raceToolTips[guess],
      style: { backgroundColor: bg, animationDelay: `${boxIndex * animationDelay}ms` },
      children: /* @__PURE__ */ jsx3("span", { children: guess })
    }
  ) : category === "cost" ? /* @__PURE__ */ jsxs2(
    "div",
    {
      className: `${divStyle} tooltip-answer-row`,
      "data-tip": costToolTips[result],
      style: { backgroundColor: bg, animationDelay: `${boxIndex * animationDelay}ms` },
      children: [
        /* @__PURE__ */ jsx3("span", { children: `E0: ${guess[0]}` }),
        /* @__PURE__ */ jsx3("span", { children: `E2: ${guess[1]}` }),
        /* @__PURE__ */ jsx3("span", { className: "font-bold", children: result })
      ]
    }
  ) : /* @__PURE__ */ jsxs2("div", { className: `${divStyle}`, style: { backgroundColor: bg, animationDelay: `${boxIndex * animationDelay}ms` }, children: [
    /* @__PURE__ */ jsx3("span", { children: guess }),
    showResult && /* @__PURE__ */ jsx3("span", { className: "font-bold", children: result })
  ] }) });
}

// app/components/arknights-wordle/results/answerRow.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function AnswerRow({ guess, index }) {
  return /* @__PURE__ */ jsx4("div", { className: "flex flex-row justify-center w-auto", children: Object.keys(guess).map((key, boxIndex) => key != "charId" && key != "correct" ? key == "name" ? /* @__PURE__ */ jsx4(
    AnswerBox,
    {
      category: key,
      guess: guess[key],
      result: null,
      boxIndex,
      rowIndex: index
    },
    key
  ) : /* @__PURE__ */ jsx4(
    AnswerBox,
    {
      category: key,
      guess: guess[key].guess,
      result: guess[key].result,
      boxIndex,
      rowIndex: index
    },
    key
  ) : null) });
}

// app/components/arknights-wordle/search/searchBar.tsx
import { useActionData as useActionData2, useLoaderData, useSubmit } from "@remix-run/react";
import React2 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
function SearchBar({ setResults }) {
  let submit = useSubmit(), allOperators = useLoaderData().allOperators, [input, setInput] = React2.useState(""), [_results, _setResults] = React2.useState([]), actionData = useActionData2(), handleChange = (value) => {
    if (setInput(value), value.trim() === "") {
      setResults([]), _setResults([]);
      return;
    }
    let lower = value.toLowerCase().trim(), results = allOperators.filter((op) => {
      let op_lower = op[0 /* name */].toLowerCase();
      return op_lower.startsWith(lower) || op_lower.replace("'", "").startsWith(lower.replace("", "")) || op_lower.replace("\u0142", "l").startsWith(lower) || // special cases for Pozyomka and Mylnar
      op_lower.replace("\xEB", "yo").startsWith(lower);
    });
    _setResults(results), setResults(results);
  }, handleKey = (e) => {
    if (e.key === "Enter") {
      let guesses = localStorage.getItem("guesses"), data = {
        "operator-guess": _results.length > 0 ? _results[0][0 /* name */] : "",
        guesses: guesses || JSON.stringify([])
      };
      submit(data, { method: "POST" });
    }
  };
  return React2.useEffect(() => {
    (() => {
      setInput(""), _setResults([]), setResults([]);
    })();
  }, [actionData]), /* @__PURE__ */ jsx5("div", { className: "items-center flex flex-row justify-center w-full", children: /* @__PURE__ */ jsx5(
    "input",
    {
      name: "operator-guess",
      value: input,
      onChange: (e) => handleChange(e.target.value),
      onKeyDown: (e) => handleKey(e),
      placeholder: "Start typing an operator name",
      className: "input input-bordered w-[80vw] md:w-[30vw] text-center",
      type: "text"
    }
  ) });
}

// app/components/arknights-wordle/search/search.tsx
import React4 from "react";

// app/components/arknights-wordle/search/result.tsx
import { useSubmit as useSubmit2 } from "@remix-run/react";
import React3 from "react";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
function Result({ op, hasGuessed }) {
  let submit = useSubmit2(), [_hasGuessed, setHasGuessed] = React3.useState(hasGuessed), handleSubmit = (event) => {
    event.preventDefault(), setHasGuessed(!0), hasGuessed = !0;
    let guesses = localStorage.getItem("guesses"), data = {
      "operator-guess": event.currentTarget.textContent,
      guesses: guesses || JSON.stringify([])
    };
    submit(data, { method: "POST" });
  }, url = getOperatorIconUrl(op[1 /* charId */], op[4 /* rarity */]), textStyle = " ";
  return _hasGuessed && (textStyle += "text-higher"), /* @__PURE__ */ jsxs3("div", { className: "flex flex-row self-center w-full items-center m-1", children: [
    /* @__PURE__ */ jsx6("div", { className: "flex w-1/2 justify-end pr-5", children: /* @__PURE__ */ jsx6("img", { src: url, alt: `${op[0]} operator icon`, width: 40 }) }),
    /* @__PURE__ */ jsx6("div", { className: "flex w-1/2 justify-start text-start text-2xl" + textStyle, onClick: (e) => handleSubmit(e), children: op[0 /* name */] })
  ] });
}

// app/components/arknights-wordle/search/resultsBox.tsx
import { Fragment as Fragment2, jsx as jsx7 } from "react/jsx-runtime";
function ResultsBox({ results, guesses }) {
  return /* @__PURE__ */ jsx7(Fragment2, { children: results.length > 0 && /* @__PURE__ */ jsx7("div", { className: "z-30 flex flex-col max-h-[50vh] overflow-y-scroll w-[80vw] md:w-[30vw] my-2 py-2 rounded-md bg-base-100 shadow-sm shadow-neutral-content no-scrollbar", children: results.map((op, index) => guesses.includes(op[0]) ? /* @__PURE__ */ jsx7(Result, { op, hasGuessed: !0 }, index) : /* @__PURE__ */ jsx7(Result, { op, hasGuessed: !1 }, index)) }) });
}

// app/components/arknights-wordle/search/search.tsx
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
function Search({ guesses }) {
  let [results, setResults] = React4.useState([]), newGuesses = [];
  for (let guess of guesses)
    newGuesses.push(guess.name);
  return /* @__PURE__ */ jsxs4("div", { className: "flex flex-col items-center w-full", children: [
    /* @__PURE__ */ jsx8(SearchBar, { setResults }),
    /* @__PURE__ */ jsx8(ResultsBox, { results, guesses: newGuesses })
  ] });
}

// app/components/arknights-wordle/share/shareBox.tsx
import React5 from "react";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
function ShareBox({ guesses, gameInfo }) {
  let [shareString, setShareString] = React5.useState(""), [isVisible, setIsVisible] = React5.useState(!1);
  React5.useEffect(() => {
    (() => {
      let newString = "";
      for (let guess of guesses.reverse()) {
        for (let category in guess) {
          if (category === "charId" || category === "name" || category === "correct")
            continue;
          let compare = guess[category];
          compare.result === "Correct" /* Correct */ || compare.result === "Correct" /* Correct */ || compare.result === !0 ? newString += "\u{1F7E9}" : compare.result === !1 || compare.result === "Wrong" /* Wrong */ ? newString += "\u{1F7E5}" : compare.result === "Lower" /* Lower */ ? newString += "\u2B07\uFE0F" : compare.result === "Higher" /* Higher */ ? newString += "\u2B06\uFE0F" : compare.result === "Half" /* Half */ && (newString += "\u{1F7E8}");
        }
        newString += `
`;
      }
      setShareString(newString);
    })();
  }, []);
  let handleShare = () => {
    let newString = `Arknights Wordle #${gameInfo.gameId}
` + shareString;
    navigator.clipboard.writeText(newString), setIsVisible(!0), setTimeout(() => setIsVisible(!1), 3e3);
  };
  return /* @__PURE__ */ jsxs5("div", { className: "justify-center flex flex-col", children: [
    /* @__PURE__ */ jsx9("span", { className: "whitespace-pre-line", children: shareString }),
    /* @__PURE__ */ jsx9("button", { className: "btn btn-success text-white", onClick: () => handleShare(), children: "Share your results!" }),
    isVisible && /* @__PURE__ */ jsxs5("div", { role: "alert", className: "alert bg-incorrect fixed left-0 bottom-0 animate-fade-in-out flex justify-center rounded-none text-white z-50", children: [
      /* @__PURE__ */ jsx9("svg", { xmlns: "http://www.w3.org/2000/svg", className: "stroke-current shrink-0 h-6 w-6", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx9("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
      /* @__PURE__ */ jsx9("span", { children: "Copied to clipboard" })
    ] })
  ] });
}

// app/components/arknights-wordle/hints/hintHelp.tsx
import { Fragment as Fragment3, jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function HintHelp() {
  return /* @__PURE__ */ jsxs6(Fragment3, { children: [
    /* @__PURE__ */ jsx10("button", { className: "indicator-item flex btn tooltip w-1/3 items-center m-2", "data-tip": "Help and Info", onClick: () => document.getElementById("help_modal").showModal(), children: /* @__PURE__ */ jsx10("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" }) }) }),
    /* @__PURE__ */ jsxs6("dialog", { id: "help_modal", className: "modal", children: [
      /* @__PURE__ */ jsxs6("div", { className: "modal-box", children: [
        /* @__PURE__ */ jsx10("h1", { className: "text-xl mb-2 font-bold", children: "How to play Arknights Wordle" }),
        /* @__PURE__ */ jsx10("p", { children: "Each operator has 7 categories each." }),
        /* @__PURE__ */ jsx10("p", { children: "You must enter an operator and compare its traits to the currently chosen operator." }),
        /* @__PURE__ */ jsxs6("p", { children: [
          /* @__PURE__ */ jsxs6("span", { className: "font-bold", children: [
            "After ",
            5 /* one */,
            " guesses"
          ] }),
          " the operator list will be sorted by Rarity and the world map will include operator Race information."
        ] }),
        /* @__PURE__ */ jsxs6("p", { children: [
          /* @__PURE__ */ jsxs6("span", { className: "font-bold", children: [
            "After ",
            8 /* two */,
            " guesses"
          ] }),
          " the operator list will be sorted by Class."
        ] }),
        /* @__PURE__ */ jsx10("p", { children: "After a guess, the correctness of your guess will be represented by these colours:" }),
        /* @__PURE__ */ jsxs6("ul", { className: "text-center whitespace-pre-line", children: [
          /* @__PURE__ */ jsxs6("li", { children: [
            /* @__PURE__ */ jsx10("p", { className: "bg-incorrect text-white", children: "Grey" }),
            /* @__PURE__ */ jsx10("p", { children: "Incorrect." })
          ] }),
          /* @__PURE__ */ jsxs6("li", { children: [
            /* @__PURE__ */ jsx10("p", { className: "bg-higher text-white", children: "Blue" }),
            /* @__PURE__ */ jsxs6("p", { children: [
              "The E2 cost of the chosen operator is ",
              /* @__PURE__ */ jsx10("span", { className: "font-bold", children: "HIGHER" }),
              /* @__PURE__ */ jsx10("br", {}),
              "than your guessed operators E2 cost."
            ] })
          ] }),
          /* @__PURE__ */ jsxs6("li", { children: [
            /* @__PURE__ */ jsx10("p", { className: "bg-lower text-white", children: "Red" }),
            /* @__PURE__ */ jsxs6("p", { children: [
              "The E2 cost of the chosen operator is ",
              /* @__PURE__ */ jsx10("span", { className: "font-bold", children: "LOWER" }),
              /* @__PURE__ */ jsx10("br", {}),
              "than your guessed operators E2 cost."
            ] })
          ] }),
          /* @__PURE__ */ jsxs6("li", { children: [
            /* @__PURE__ */ jsx10("p", { className: "bg-half text-white", children: "Orange" }),
            /* @__PURE__ */ jsxs6("p", { children: [
              "The ",
              /* @__PURE__ */ jsx10("span", { className: "font-bold", children: "allegiance" }),
              " of your guessed operator is ",
              /* @__PURE__ */ jsx10("span", { className: "font-bold", children: "partially correct" })
            ] }),
            /* @__PURE__ */ jsx10("p", { children: "E.g. If the character is under Elite Ops and you guess a character from OP Reserve A1, this guess would be partially correct because both groups fall under Rhodes Island." })
          ] }),
          /* @__PURE__ */ jsxs6("li", { children: [
            /* @__PURE__ */ jsx10("p", { className: "bg-correct text-white", children: "Green" }),
            /* @__PURE__ */ jsx10("p", { children: "Correct." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx10("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ jsx10("button", { children: "close" }) })
    ] })
  ] });
}

// app/components/arknights-wordle/hints/hintOperatorList.tsx
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/components/arknights-wordle/hints/hintListIcon.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function HintListIcon({ operator }) {
  let url = getOperatorIconUrl(operator[1 /* charId */], operator[4 /* rarity */]);
  return /* @__PURE__ */ jsx11("div", { className: "tooltip", "data-tip": operator[0], children: /* @__PURE__ */ jsx11("img", { className: "border-incorrect border-[0.1px] border-solid m-[0.5px] rounded-md", src: url, alt: `${operator[0]} operator icon`, width: 50, height: 50 }) });
}

// app/components/arknights-wordle/hints/hintOperatorList.tsx
import React6 from "react";
import { Fragment as Fragment4, jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
var Professsions = ["Vanguard", "Guard", "Defender", "Sniper", "Caster", "Medic", "Supporter", "Specialist"];
function HintOperatorList({ amtGuesses }) {
  let allOperators = useLoaderData2().allOperators, [showAlert, setShowAlert] = React6.useState(!1), [selectedProfession, setSelectedProfession] = React6.useState(""), sortedRarityOperators = {
    6: [],
    5: [],
    4: [],
    3: [],
    2: [],
    1: []
  };
  allOperators.map((operator) => sortedRarityOperators[operator[4 /* rarity */]].push(operator));
  let handleProfession = (e) => {
    selectedProfession === e.target.id ? setSelectedProfession("") : setSelectedProfession(e.target.id);
  }, handleClick = () => {
    document.getElementById("operator_list_modal").showModal(), setShowAlert(!1);
  };
  return React6.useEffect(() => {
    (() => {
      (amtGuesses === 5 /* one */ || amtGuesses === 8 /* two */) && setShowAlert(!0);
    })();
  }, [amtGuesses]), /* @__PURE__ */ jsxs7(Fragment4, { children: [
    /* @__PURE__ */ jsxs7("div", { className: "indicator w-1/3 m-2", children: [
      showAlert && /* @__PURE__ */ jsx12("span", { className: "indicator-item badge bg-higher" }),
      /* @__PURE__ */ jsx12("button", { className: "flex btn tooltip w-full items-center", "data-tip": "Operator List", onClick: () => handleClick(), children: /* @__PURE__ */ jsx12("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx12("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" }) }) })
    ] }),
    /* @__PURE__ */ jsxs7("dialog", { id: "operator_list_modal", className: "modal", children: [
      /* @__PURE__ */ jsxs7("div", { className: "modal-box flex flex-col max-w-[3/5vh] justify-items-center overflow-x-clip overflow-y-scroll no-scrollbar", children: [
        /* @__PURE__ */ jsx12("h1", { className: "w-full text-xl mb-2", children: "Operator List (Up to Executor Alter)" }),
        /* @__PURE__ */ jsx12("div", { className: "flex flex-row flex-wrap justify-center w-full", children: amtGuesses < 5 /* one */ ? /* @__PURE__ */ jsx12(Fragment4, { children: allOperators.map((operator) => /* @__PURE__ */ jsx12(HintListIcon, { operator }, `${operator} list icon`)) }) : /* @__PURE__ */ jsxs7(Fragment4, { children: [
          /* @__PURE__ */ jsx12("div", { children: amtGuesses >= 8 /* two */ && Professsions.map((p) => /* @__PURE__ */ jsx12("button", { className: "tooltip p-[0.2rem]", "data-tip": p, style: { backgroundColor: selectedProfession === p ? wordleColors.higher : "white" }, children: /* @__PURE__ */ jsx12("img", { src: getProfessionIconUrl(p), width: 40, id: p, onClick: handleProfession }) }, `${p} icon`)) }),
          Object.entries(sortedRarityOperators).reverse().map((rarity) => /* @__PURE__ */ jsxs7("div", { className: "w-full", children: [
            /* @__PURE__ */ jsxs7("h2", { children: [
              rarity[0],
              " star Operators"
            ] }),
            rarity[1].map((operator) => amtGuesses >= 8 /* two */ ? selectedProfession === "" ? /* @__PURE__ */ jsx12(HintListIcon, { operator }, `${operator} list icon`) : operator[2] === selectedProfession ? /* @__PURE__ */ jsx12(HintListIcon, { operator }, `${operator} list icon`) : null : /* @__PURE__ */ jsx12(HintListIcon, { operator }, `${operator} list icon`))
          ] }, `${rarity} rarity operators`))
        ] }) })
      ] }),
      /* @__PURE__ */ jsx12("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ jsx12("button", { children: "close" }) })
    ] })
  ] });
}

// public/world_map.png
var world_map_default = "/build/_assets/world_map-RTT2VYI4.png";

// app/components/arknights-wordle/hints/hintWorldMap.tsx
import React7 from "react";
import { Fragment as Fragment5, jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
var regions = {
  \u00C6gir: `Aquatic animals and Seaborn.
Groups: Abyssal Hunters.`,
  Bolivar: "Mainly Perros: Dogs.",
  Columbia: `Varied.
Groups: Blacksteel, Rhine Lab.`,
  Higashi: "Oni and some \xC6gir.",
  Iberia: "Mainly Liberi: Birds.",
  Kazimierz: `Mainly Kuranta: Horses and Zebras.
Groups: Pinus Sylvestris.`,
  Kjerag: "Varied. Snow Realm.",
  Laterano: "Mainly Sankta: Angels and Liberi: Birds.",
  Leithanien: "Mainly Caprinae: Goats/Sheep and Elafia: Deer.",
  Lungmen: `Varied.
Groups: Lee's Detective Agency, LGD, Penguin Logistics.`,
  Minos: "Mainly Forte: Bovines/Camels.",
  "Rhodes Island": `Varied.
Groups: Elite Ops, Followers, Op-teams, S.W.E.E.P.`,
  "Rim Billiton": "Mainly Cautus: Rabbits and Hares.",
  Sami: "Mainly Elafia: Deer",
  Sargon: "Mainly Archosauria: Crocodilians and Pythia: Serpents.",
  Siracusa: `Mainly Lupo: Wolves and Vulpo: Foxes.
Groups: Chiave's Gang.`,
  Ursus: `Mainly Ursus: Bears.
Groups: Ursus Student Self-Governing Group.`,
  Victoria: `Mainly Feline: Cats.
Groups: Dublinn, Glasgow.`,
  Yan: `Varied. Ruled by Lung.
Groups: Sui.`
};
function HintWorldMap({ amtGuesses }) {
  let [showAlert, setShowAlert] = React7.useState(!1), handleClick = () => {
    document.getElementById("world_map_modal").showModal(), setShowAlert(!1);
  };
  return React7.useEffect(() => {
    (() => {
      amtGuesses === 5 /* one */ && setShowAlert(!0);
    })();
  }, [amtGuesses]), /* @__PURE__ */ jsxs8(Fragment5, { children: [
    /* @__PURE__ */ jsxs8("div", { className: "flex indicator w-1/3 m-2", children: [
      showAlert && /* @__PURE__ */ jsx13("span", { className: "indicator-item badge bg-higher" }),
      /* @__PURE__ */ jsx13("button", { className: "flex btn tooltip w-full items-center", "data-tip": "World Map and Races", onClick: () => handleClick(), children: /* @__PURE__ */ jsx13("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx13("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" }) }) })
    ] }),
    /* @__PURE__ */ jsxs8("dialog", { id: "world_map_modal", className: "modal w-screen overflow-visible", children: [
      /* @__PURE__ */ jsxs8("div", { className: "modal-box max-w-[95vw] md:max-w-[80vw]", children: [
        /* @__PURE__ */ jsx13("div", { className: "w-full h-48 md:h-auto overflow-auto touch-auto", children: /* @__PURE__ */ jsx13("img", { className: "max-w-none w-[400%] md:w-[100%] h-auto", src: world_map_default }) }),
        amtGuesses >= 5 /* one */ && /* @__PURE__ */ jsx13("div", { className: "flex flex-wrap flex-row justify-start mt-5", children: Object.entries(regions).map((region) => /* @__PURE__ */ jsxs8("div", { className: "text-left w-1/2 h-32 md:h-20", children: [
          /* @__PURE__ */ jsx13("h1", { className: "font-bold", children: region[0] }),
          /* @__PURE__ */ jsx13("p", { className: "whitespace-pre-line", children: region[1] })
        ] }, region[0])) })
      ] }),
      /* @__PURE__ */ jsx13("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ jsx13("button", { children: "close" }) })
    ] })
  ] });
}

// app/components/arknights-wordle/hints/hints.tsx
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
function Hints({ amtGuesses }) {
  return /* @__PURE__ */ jsxs9("div", { className: "flex flex-row w-full justify-center", children: [
    /* @__PURE__ */ jsx14(HintOperatorList, { amtGuesses }),
    /* @__PURE__ */ jsx14(HintHelp, {}),
    /* @__PURE__ */ jsx14(HintWorldMap, { amtGuesses })
  ] });
}

// public/logo_black.png
var logo_black_default = "/build/_assets/logo_black-DB3SPWRY.png";

// public/logo_white.png
var logo_white_default = "/build/_assets/logo_white-63BXGV4I.png";

// app/routes/arknights-wordle.tsx
import { jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
var loader = async () => (console.log("Getting operator stats and all operators"), { stats: await getOperatorStats(), allOperators: await getAllOperatorNames() }), action = async ({ request }) => {
  let form = await request.formData(), guess = String(form.get("operator-guess"));
  if (guess) {
    let formGuesses = JSON.parse(String(form.get("guesses")));
    if (formGuesses.length > 0 && formGuesses.map((x) => x.name).includes(guess))
      return { error: "Operator already guessed previously" };
    console.log("Comparing guess");
    let res = await compareGuess(guess);
    return console.log("Got result"), res.result?.correct === !0 && updateWins(), res;
  }
  return { error: "Please enter an operator name" };
};
function ArknightsWordle() {
  let stats = useLoaderData3()?.stats, actionData = useActionData3(), [guesses, setGuesses] = React8.useState([]), [playing, setPlaying] = React8.useState(0), [isInputDelay, setIsInputDelay] = React8.useState(!1), [darkMode, setDarkMode] = React8.useState(!1);
  React8.useEffect(() => {
    let updateGuesses = () => {
      if (actionData?.result) {
        setIsInputDelay(!0);
        let isGuesses = localStorage.getItem("guesses"), guesses2 = isGuesses ? JSON.parse(isGuesses) : [], newGuesses = [actionData.result, ...guesses2];
        localStorage.setItem("guesses", JSON.stringify(newGuesses)), setGuesses(newGuesses), actionData.result.correct ? (setTimeout(() => setPlaying(1), 4e3), setTimeout(() => setIsInputDelay(!1), 4e3), localStorage.setItem("playing", "1")) : setTimeout(() => setIsInputDelay(!1), 2500);
      }
    }, initGuesses = () => {
      let now = (/* @__PURE__ */ new Date()).toDateString(), lastPlayed = localStorage.getItem("lastPlayed");
      if (now != lastPlayed)
        localStorage.setItem("guesses", JSON.stringify([])), localStorage.setItem("lastPlayed", now), localStorage.setItem("playing", "0"), setPlaying(0), setGuesses([]);
      else {
        let isGuesses = localStorage.getItem("guesses"), guesses2 = isGuesses ? JSON.parse(isGuesses) : [], isPlaying = localStorage.getItem("playing"), playing2 = isPlaying ? JSON.parse(isPlaying) : 0;
        setPlaying(playing2), setGuesses(guesses2);
      }
    }, initTheme = () => {
      let isTheme = localStorage.getItem("data-theme"), theme = isTheme || "light";
      document.getElementById("ak-wordle-root")?.setAttribute("data-theme", theme), theme === "dark" && (document.getElementById("theme-checkbox")?.setAttribute("checked", ""), setDarkMode(!0));
    };
    initGuesses(), updateGuesses(), initTheme();
  }, [actionData]);
  let handleThemeChange = (e) => {
    let theme = e.target.checked ? "dark" : "light";
    localStorage.setItem("data-theme", theme), document.getElementById("ak-wordle-root")?.setAttribute("data-theme", theme), setDarkMode(theme === "dark");
  };
  return /* @__PURE__ */ jsxs10("main", { id: "ak-wordle-root", className: "flex flex-col w-screen justify-top items-center align-middle text-center font-sans p-5 pt-10 h-screen", children: [
    /* @__PURE__ */ jsxs10("label", { className: "z-10 swap swap-rotate fixed bottom-1 right-1 md:bottom-auto md:top-3 md:right-3 ", children: [
      /* @__PURE__ */ jsx15("input", { id: "theme-checkbox", type: "checkbox", className: "theme-controller hidden", value: "dark", onClick: (e) => handleThemeChange(e) }),
      /* @__PURE__ */ jsx15("svg", { className: "swap-on fill-current w-10 h-10", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx15("path", { d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" }) }),
      /* @__PURE__ */ jsx15("svg", { className: "swap-off fill-current w-10 h-10", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx15("path", { d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" }) })
    ] }),
    /* @__PURE__ */ jsx15("img", { style: { height: "50" }, src: `${darkMode ? logo_white_default : logo_black_default}` }),
    /* @__PURE__ */ jsx15("h1", { className: "font-bold text-4xl", children: "WORDLE" }),
    /* @__PURE__ */ jsxs10("div", { className: "mt-2", children: [
      /* @__PURE__ */ jsx15("p", { children: `#${stats.gameId}, ${stats.date} (AEST)` }),
      /* @__PURE__ */ jsx15("p", { children: `${stats.timesGuessed === 0 ? "No Dokutah's have" : stats.timesGuessed + " " + (stats.timesGuessed > 1 ? "Dokutah's have" : "Dokutah has")} guessed the operator.` })
    ] }),
    !1,
    /* @__PURE__ */ jsx15("div", { className: "flex justify-center align-middle w-3/4 md:w-96 my-2", children: /* @__PURE__ */ jsx15(Hints, { amtGuesses: guesses.length }) }),
    actionData?.error ? /* @__PURE__ */ jsx15("p", { className: "text-red-500", children: actionData.error }) : null,
    /* @__PURE__ */ jsxs10("div", { className: "grid w-full justify-center", children: [
      /* @__PURE__ */ jsx15("div", { className: "flex flex-col col-start-1 row-start-1 align-middle w-full animate-fade-in", children: playing === 0 && !isInputDelay && /* @__PURE__ */ jsx15(Search, { guesses }) }),
      /* @__PURE__ */ jsx15("div", { className: "col-start-1 row-start-1 flex flex-col my-14 w-auto overflow-x-scroll overflow-y-clip md:overflow-visible", children: /* @__PURE__ */ jsxs10("div", { className: "flex flex-col items-start", children: [
        /* @__PURE__ */ jsx15("div", { className: "flex flex-row font-bold justify-center break-all", children: guesses && guesses.length > 0 ? Object.entries(guessCategoryToolTips).map((category, index) => /* @__PURE__ */ jsx15("span", { className: "tooltip-answer-row flex h-20 w-20 m-2 items-center justify-center bg-base-200 text-content whitespace-pre-line", "data-tip": category[1], children: category[0] }, index)) : null }),
        guesses && guesses.length > 0 && guesses.map((guess, index) => /* @__PURE__ */ jsx15(AnswerRow, { guess, index }, guess.charId ? guess.charId : index))
      ] }) })
    ] }),
    playing === 1 && !isInputDelay && /* @__PURE__ */ jsxs10("div", { className: "flex flex-col items-center animate-fade-in", children: [
      /* @__PURE__ */ jsx15("span", { children: "You guessed the operator!" }),
      /* @__PURE__ */ jsx15(ShareBox, { guesses, gameInfo: stats })
    ] })
  ] });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
import { jsx as jsx16 } from "react/jsx-runtime";
function Index() {
  return /* @__PURE__ */ jsx16("div", { children: "What the hell!!" });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-Z5K2Q2OQ.js", imports: ["/build/_shared/chunk-U32H4XJQ.js", "/build/_shared/chunk-DWFMXSZ6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RYCVZTSU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/arknights-wordle": { id: "routes/arknights-wordle", parentId: "root", path: "/arknights-wordle", index: void 0, caseSensitive: void 0, module: "/build/routes/arknights-wordle-KCASLSC3.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "/", index: !0, caseSensitive: void 0, module: "/build/routes/index-MY6HFYGI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "b37887d1", hmr: void 0, url: "/build/manifest-B37887D1.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/arknights-wordle": {
    id: "routes/arknights-wordle",
    parentId: "root",
    path: "/arknights-wordle",
    index: void 0,
    caseSensitive: void 0,
    module: arknights_wordle_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "/",
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
