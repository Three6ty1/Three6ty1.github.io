import {
  useActionData,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-M54XMZCT.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-VSEYBMLP.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/wordle.server
var require_wordle = __commonJS({
  "empty-module:~/wordle.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/arknights-wordle.tsx
var import_wordle = __toESM(require_wordle(), 1);
var import_react12 = __toESM(require_react(), 1);

// app/helper/helper.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\helper\\helper.ts"
  );
  import.meta.hot.lastModified = "1705736979376.8113";
}
var ICON_DIR = "https://raw.githubusercontent.com/Three6ty1/ak-wordle-icons/main/avatars/";
var PROFESSION_ICON_DIR = "https://raw.githubusercontent.com/Three6ty1/ak-wordle-icons/main/classes/black/";
var wordleColors = {
  incorrect: "#919090",
  higher: "#08aadd",
  lower: "#c80000",
  half: "#FFAC1C",
  correct: "#6BBF59"
};
function getOperatorIconUrl(charId, rarity) {
  let url;
  if (rarity > 3) {
    url = ICON_DIR + charId + "_2.png";
  } else {
    url = ICON_DIR + charId + ".png";
  }
  return url;
}
function getProfessionIconUrl(profession) {
  return PROFESSION_ICON_DIR + "icon_profession_" + profession.toLowerCase() + "_large.png";
}
var raceToolTips = {
  "\xC6gir": "Seaborn and Aquatic animals",
  "Anasa": "Asuras, Rakshasas and Yakshas (Hindu-Buddhist mythology)",
  "Anaty": "Otters, Weasels, Raccoons and Wolverines",
  "Anura": "Frogs",
  "Archosauria": "Crocodilians",
  "Aslan": "Lions",
  "Caprinae": "Goats and Sheeps",
  "Cautus": "Rabbits and Hares",
  "Cerato": "Rhinoceroses",
  "Chimera": "Hybrid race",
  "Draco": "European dragons",
  "Durin": "Dwarves",
  "Elafia": "Deers",
  "Feline": "Cats, Big cats and Mongooses (Exc. Aslan: Lions)",
  "Forte": "Bovines and camelids",
  "Itra": "Musk Deer",
  "Kuranta": "Horses and Zebras",
  "Kylin": "Qilin (Chinese mythology)",
  "Liberi": "Birds and Bird-like mythological creatures",
  "Lung": "Chinese dragons",
  "Lupo": "Wolves",
  "Manticore": "Manticore (one) (Persian mythology)",
  "Oni": "Oni (Japanese mythology)",
  "Perro": "Dogs",
  "Petram": "Turtles and Tortoises",
  "Pilosa": "Sloths",
  "Pythia": "Serpents",
  "Rebbah": "Hyenas",
  "Robot": "Beep Boop",
  "Sankta": "Angels (Abrahamic religions)",
  "Sarkaz": "Demons (Abrahamic religions)",
  "Savra": "Lizards and Salamanders",
  "Ursus": "Bears",
  "Vouivre": "Wyverns, Wyrms, Hydras, Amphipteres (Winged Serpents)\nand Drakes",
  "Vulpo": "Foxes",
  "Zalak": "Rodents, Opposums and Moles",
  "Credits to": "Arknights Fandom wiki"
};
var guessCategoryToolTips = {
  "Operator": null,
  "Gender": "Male/Female",
  "Race": null,
  "Allegiance": "The Group/Team > Nation the operator represents.",
  "Infected": "Yes/No/Undisclosed",
  "Profession": null,
  "Rarity": "1/2/3/4/5/6 star",
  "Cost (E2)": "Cost is compared at E2 Pot0."
};
var costToolTips = {
  "Higher": "The E2 cost of the correct operator is HIGHER\nthan this operators E2 cost.",
  "Lower": "The E2 cost of the correct operator is LOWER\nthan this operators E2 cost."
};

// app/components/arknights-wordle/results/answerBox.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\arknights-wordle\\\\results\\\\answerBox.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\arknights-wordle\\results\\answerBox.tsx"
  );
  import.meta.hot.lastModified = "1705736979360.812";
}
var animationDelay = 225;
function AnswerBox({
  category,
  guess,
  result,
  boxIndex,
  rowIndex
}) {
  _s();
  const showResult = result == "Higher" /* Higher */ || result == "Lower" /* Lower */;
  const actionData = useActionData();
  let divStyle = "flex flex-col mx-2 my-1 h-20 w-20 p-1 leading-2 break-all justify-center text-white";
  const isGuesses = localStorage.getItem("guesses");
  const guesses = isGuesses ? JSON.parse(isGuesses) : [];
  const op = guesses[rowIndex];
  const url = getOperatorIconUrl(op["charId"], op["rarity"].guess);
  !actionData?.error && (rowIndex === 0 ? true : false) && (op["correct"] ? divStyle += " opacity-0 animate-win " : divStyle += " opacity-0 animate-flip ");
  let bg = wordleColors.correct;
  if (typeof result === "boolean" && !result) {
    bg = wordleColors.incorrect;
  } else if (result === "Lower" /* Lower */) {
    bg = wordleColors.lower;
  } else if (result === "Higher" /* Higher */) {
    bg = wordleColors.higher;
  } else if (result === "Half" /* Half */) {
    bg = wordleColors.half;
  } else if (result === "Wrong" /* Wrong */) {
    bg = wordleColors.incorrect;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: category === "name" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${divStyle} tooltip-answer-row bg-base-200`, "data-tip": guess, style: {
    animationDelay: "200ms"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: url }, void 0, false, {
    fileName: "app/components/arknights-wordle/results/answerBox.tsx",
    lineNumber: 71,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "app/components/arknights-wordle/results/answerBox.tsx",
    lineNumber: 68,
    columnNumber: 36
  }, this) : category === "race" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${divStyle} tooltip-answer-row`, "data-tip": raceToolTips[guess], style: {
    "backgroundColor": bg,
    animationDelay: `${boxIndex * animationDelay}ms`
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: guess }, void 0, false, {
    fileName: "app/components/arknights-wordle/results/answerBox.tsx",
    lineNumber: 76,
    columnNumber: 29
  }, this) }, void 0, false, {
    fileName: "app/components/arknights-wordle/results/answerBox.tsx",
    lineNumber: 72,
    columnNumber: 52
  }, this) : category === "cost" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${divStyle} tooltip-answer-row`, "data-tip": costToolTips[result], style: {
    "backgroundColor": bg,
    animationDelay: `${boxIndex * animationDelay}ms`
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: `E0: ${guess[0]}` }, void 0, false, {
      fileName: "app/components/arknights-wordle/results/answerBox.tsx",
      lineNumber: 81,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: `E2: ${guess[1]}` }, void 0, false, {
      fileName: "app/components/arknights-wordle/results/answerBox.tsx",
      lineNumber: 82,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: result }, void 0, false, {
      fileName: "app/components/arknights-wordle/results/answerBox.tsx",
      lineNumber: 83,
      columnNumber: 33
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/arknights-wordle/results/answerBox.tsx",
    lineNumber: 77,
    columnNumber: 56
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${divStyle}`, style: {
    "backgroundColor": bg,
    animationDelay: `${boxIndex * animationDelay}ms`
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: guess }, void 0, false, {
      fileName: "app/components/arknights-wordle/results/answerBox.tsx",
      lineNumber: 88,
      columnNumber: 33
    }, this),
    showResult && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: result }, void 0, false, {
      fileName: "app/components/arknights-wordle/results/answerBox.tsx",
      lineNumber: 89,
      columnNumber: 48
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/arknights-wordle/results/answerBox.tsx",
    lineNumber: 84,
    columnNumber: 38
  }, this) }, void 0, false, {
    fileName: "app/components/arknights-wordle/results/answerBox.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_s(AnswerBox, "fHVw5pq0Zwd2gXh2gyrnVdHnLCc=", false, function() {
  return [useActionData];
});
_c = AnswerBox;
var _c;
$RefreshReg$(_c, "AnswerBox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/arknights-wordle/results/answerRow.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\arknights-wordle\\\\results\\\\answerRow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\arknights-wordle\\results\\answerRow.tsx"
  );
  import.meta.hot.lastModified = "1705739632659.836";
}
function AnswerRow({
  guess,
  index
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row justify-center w-auto", children: Object.keys(guess).map((key, boxIndex) => key != "charId" && key != "correct" ? key == "name" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    AnswerBox,
    {
      category: key,
      guess: guess[key],
      result: null,
      boxIndex,
      rowIndex: index
    },
    key,
    false,
    {
      fileName: "app/components/arknights-wordle/results/answerRow.tsx",
      lineNumber: 27,
      columnNumber: 110
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    AnswerBox,
    {
      category: key,
      guess: guess[key].guess,
      result: guess[key].result,
      boxIndex,
      rowIndex: index
    },
    key,
    false,
    {
      fileName: "app/components/arknights-wordle/results/answerRow.tsx",
      lineNumber: 29,
      columnNumber: 79
    },
    this
  ) : null) }, void 0, false, {
    fileName: "app/components/arknights-wordle/results/answerRow.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c2 = AnswerRow;
var _c2;
$RefreshReg$(_c2, "AnswerRow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/arknights-wordle/search/searchBar.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\arknights-wordle\\\\search\\\\searchBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\arknights-wordle\\search\\searchBar.tsx"
  );
  import.meta.hot.lastModified = "1705736979373.812";
}
function SearchBar({
  setResults
}) {
  _s2();
  const submit = useSubmit();
  const loaderData = useLoaderData();
  const allOperators = loaderData.allOperators;
  const [input, setInput] = import_react3.default.useState("");
  const [_results, _setResults] = import_react3.default.useState([]);
  const actionData = useActionData();
  const handleChange = (value) => {
    setInput(value);
    if (value.trim() === "") {
      setResults([]);
      _setResults([]);
      return;
    }
    const lower = value.toLowerCase().trim();
    const results = allOperators.filter((op) => {
      const op_lower = op[0 /* name */].toLowerCase();
      return op_lower.startsWith(lower) || op_lower.replace("'", "").startsWith(lower.replace("", "")) || op_lower.replace("\u0142", "l").startsWith(lower) || // special cases for Pozyomka and Mylnar
      op_lower.replace("\xEB", "yo").startsWith(lower);
    });
    _setResults(results);
    setResults(results);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      const guesses = localStorage.getItem("guesses");
      let data = {
        "operator-guess": _results.length > 0 ? _results[0][0 /* name */] : "",
        "guesses": guesses ? guesses : JSON.stringify([])
      };
      submit(data, {
        method: "POST"
      });
    }
  };
  import_react3.default.useEffect(() => {
    const resetInput = () => {
      setInput("");
      _setResults([]);
      setResults([]);
    };
    resetInput();
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "items-center flex flex-row justify-center w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { name: "operator-guess", value: input, onChange: (e) => handleChange(e.target.value), onKeyDown: (e) => handleKey(e), placeholder: "Start typing an operator name", className: "input input-bordered w-[80vw] md:w-[30vw] text-center", type: "text" }, void 0, false, {
    fileName: "app/components/arknights-wordle/search/searchBar.tsx",
    lineNumber: 75,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/arknights-wordle/search/searchBar.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s2(SearchBar, "PO+k+ln+fDd3awPGTstX1ACi8K8=", false, function() {
  return [useSubmit, useLoaderData, useActionData];
});
_c3 = SearchBar;
var _c3;
$RefreshReg$(_c3, "SearchBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/arknights-wordle/search/search.tsx
var import_react6 = __toESM(require_react(), 1);

// app/components/arknights-wordle/search/result.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\arknights-wordle\\\\search\\\\result.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\arknights-wordle\\search\\result.tsx"
  );
  import.meta.hot.lastModified = "1705736979371.8105";
}
function Result({
  op,
  hasGuessed
}) {
  _s3();
  let submit = useSubmit();
  const [_hasGuessed, setHasGuessed] = import_react5.default.useState(hasGuessed);
  const handleSubmit = (event) => {
    event.preventDefault();
    setHasGuessed(true);
    hasGuessed = true;
    const guesses = localStorage.getItem("guesses");
    let data = {
      "operator-guess": event.currentTarget.textContent,
      "guesses": guesses ? guesses : JSON.stringify([])
    };
    submit(data, {
      method: "POST"
    });
  };
  const url = getOperatorIconUrl(op[1 /* charId */], op[4 /* rarity */]);
  let textStyle = " ";
  if (_hasGuessed) {
    textStyle += "text-higher";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-row self-center w-full items-center m-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex w-1/2 justify-end pr-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: url, alt: `${op[0]} operator icon`, width: 40 }, void 0, false, {
      fileName: "app/components/arknights-wordle/search/result.tsx",
      lineNumber: 57,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/arknights-wordle/search/result.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex w-1/2 justify-start text-start text-2xl" + textStyle, onClick: (e) => handleSubmit(e), children: op[0 /* name */] }, void 0, false, {
      fileName: "app/components/arknights-wordle/search/result.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/arknights-wordle/search/result.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s3(Result, "5EN8msu4V33ro0a/RLpB5p/Ulh4=", false, function() {
  return [useSubmit];
});
_c4 = Result;
var _c4;
$RefreshReg$(_c4, "Result");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/arknights-wordle/search/resultsBox.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\arknights-wordle\\\\search\\\\resultsBox.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\arknights-wordle\\search\\resultsBox.tsx"
  );
  import.meta.hot.lastModified = "1705739661579.2717";
}
function ResultsBox({
  results,
  guesses
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: results.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "z-30 flex flex-col max-h-[50vh] overflow-y-scroll w-[80vw] md:w-[30vw] my-2 py-2 rounded-md bg-base-100 shadow-sm shadow-neutral-content no-scrollbar", children: results.map((op, index) => {
    if (guesses.includes(op[0])) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Result, { op, hasGuessed: true }, index, false, {
        fileName: "app/components/arknights-wordle/search/resultsBox.tsx",
        lineNumber: 30,
        columnNumber: 18
      }, this);
    } else {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Result, { op, hasGuessed: false }, index, false, {
        fileName: "app/components/arknights-wordle/search/resultsBox.tsx",
        lineNumber: 32,
        columnNumber: 18
      }, this);
    }
  }) }, void 0, false, {
    fileName: "app/components/arknights-wordle/search/resultsBox.tsx",
    lineNumber: 27,
    columnNumber: 36
  }, this) }, void 0, false, {
    fileName: "app/components/arknights-wordle/search/resultsBox.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c5 = ResultsBox;
var _c5;
$RefreshReg$(_c5, "ResultsBox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/arknights-wordle/search/search.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\arknights-wordle\\\\search\\\\search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\arknights-wordle\\search\\search.tsx"
  );
  import.meta.hot.lastModified = "1705739788983.905";
}
function Search({
  guesses
}) {
  _s4();
  const [results, setResults] = import_react6.default.useState([]);
  let newGuesses = [];
  for (const guess of guesses) {
    newGuesses.push(guess.name);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SearchBar, { setResults }, void 0, false, {
      fileName: "app/components/arknights-wordle/search/search.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ResultsBox, { results, guesses: newGuesses }, void 0, false, {
      fileName: "app/components/arknights-wordle/search/search.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/arknights-wordle/search/search.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s4(Search, "QYmH5xyAMv1uIO9V7tguRx7oNwo=");
_c6 = Search;
var _c6;
$RefreshReg$(_c6, "Search");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/arknights-wordle/share/shareBox.tsx
var import_react7 = __toESM(require_react(), 1);
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\arknights-wordle\\\\share\\\\shareBox.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\arknights-wordle\\share\\shareBox.tsx"
  );
  import.meta.hot.lastModified = "1705736979375.8108";
}
function ShareBox({
  guesses,
  gameInfo
}) {
  _s5();
  const [shareString, setShareString] = import_react7.default.useState("");
  const [isVisible, setIsVisible] = import_react7.default.useState(false);
  import_react7.default.useEffect(() => {
    const generateshareString = () => {
      let newString = "";
      for (const guess of guesses.reverse()) {
        for (const category in guess) {
          if (category === "charId" || category === "name" || category === "correct") {
            continue;
          }
          const compare = guess[category];
          if (compare.result === "Correct" /* Correct */ || compare.result === "Correct" /* Correct */ || compare.result === true) {
            newString += "\u{1F7E9}";
          } else if (compare.result === false || compare.result === "Wrong" /* Wrong */) {
            newString += "\u{1F7E5}";
          } else if (compare.result === "Lower" /* Lower */) {
            newString += "\u2B07\uFE0F";
          } else if (compare.result === "Higher" /* Higher */) {
            newString += "\u2B06\uFE0F";
          } else if (compare.result === "Half" /* Half */) {
            newString += "\u{1F7E8}";
          }
        }
        newString += "\n";
      }
      setShareString(newString);
    };
    generateshareString();
  }, []);
  const handleShare = () => {
    const newString = `Arknights Wordle #${gameInfo.gameId}
` + shareString;
    navigator.clipboard.writeText(newString);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3e3);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "justify-center flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "whitespace-pre-line", children: shareString }, void 0, false, {
      fileName: "app/components/arknights-wordle/share/shareBox.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn btn-success text-white", onClick: () => handleShare(), children: "Share your results!" }, void 0, false, {
      fileName: "app/components/arknights-wordle/share/shareBox.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    isVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { role: "alert", className: "alert bg-incorrect fixed left-0 bottom-0 animate-fade-in-out flex justify-center rounded-none text-white z-50", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "stroke-current shrink-0 h-6 w-6", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, false, {
        fileName: "app/components/arknights-wordle/share/shareBox.tsx",
        lineNumber: 72,
        columnNumber: 137
      }, this) }, void 0, false, {
        fileName: "app/components/arknights-wordle/share/shareBox.tsx",
        lineNumber: 72,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Copied to clipboard" }, void 0, false, {
        fileName: "app/components/arknights-wordle/share/shareBox.tsx",
        lineNumber: 73,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/arknights-wordle/share/shareBox.tsx",
      lineNumber: 71,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/arknights-wordle/share/shareBox.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s5(ShareBox, "PRlhg8YygUm4NYJMmV/HMYzf/J0=");
_c7 = ShareBox;
var _c7;
$RefreshReg$(_c7, "ShareBox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/arknights-wordle/hints/hintHelp.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\arknights-wordle\\\\hints\\\\hintHelp.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\arknights-wordle\\hints\\hintHelp.tsx"
  );
  import.meta.hot.lastModified = "1705739649091.5444";
}
function HintHelp() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "indicator-item flex btn tooltip w-1/3 items-center m-2", "data-tip": "Help and Info", onClick: () => document.getElementById("help_modal").showModal(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" }, void 0, false, {
      fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
      lineNumber: 27,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
      lineNumber: 26,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("dialog", { id: "help_modal", className: "modal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "modal-box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-xl mb-2 font-bold", children: "How to play Arknights Wordle" }, void 0, false, {
          fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Each operator has 7 categories each." }, void 0, false, {
          fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "You must enter an operator and compare its traits to the currently chosen operator." }, void 0, false, {
          fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
          lineNumber: 34,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "font-bold", children: [
            "After ",
            HintBreakpoints.one,
            " guesses"
          ] }, void 0, true, {
            fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
            lineNumber: 35,
            columnNumber: 24
          }, this),
          " the operator list will be sorted by Rarity and the world map will include operator Race information."
        ] }, void 0, true, {
          fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
          lineNumber: 35,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "font-bold", children: [
            "After ",
            HintBreakpoints.two,
            " guesses"
          ] }, void 0, true, {
            fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
            lineNumber: 36,
            columnNumber: 24
          }, this),
          " the operator list will be sorted by Class."
        ] }, void 0, true, {
          fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
          lineNumber: 36,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "After a guess, the correctness of your guess will be represented by these colours:" }, void 0, false, {
          fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
          lineNumber: 37,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { className: "text-center whitespace-pre-line", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "bg-incorrect text-white", children: "Grey" }, void 0, false, {
              fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
              lineNumber: 40,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Incorrect." }, void 0, false, {
              fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
              lineNumber: 41,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
            lineNumber: 39,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "bg-higher text-white", children: "Blue" }, void 0, false, {
              fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
              lineNumber: 44,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
              "The E2 cost of the chosen operator is ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "font-bold", children: "HIGHER" }, void 0, false, {
                fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
                lineNumber: 45,
                columnNumber: 70
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
                lineNumber: 45,
                columnNumber: 111
              }, this),
              "than your guessed operators E2 cost."
            ] }, void 0, true, {
              fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
              lineNumber: 45,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
            lineNumber: 43,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "bg-lower text-white", children: "Red" }, void 0, false, {
              fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
              lineNumber: 48,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
              "The E2 cost of the chosen operator is ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "font-bold", children: "LOWER" }, void 0, false, {
                fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
                lineNumber: 49,
                columnNumber: 70
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
                lineNumber: 49,
                columnNumber: 110
              }, this),
              "than your guessed operators E2 cost."
            ] }, void 0, true, {
              fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
              lineNumber: 49,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
            lineNumber: 47,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "bg-half text-white", children: "Orange" }, void 0, false, {
              fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
              lineNumber: 52,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
              "The ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "font-bold", children: "allegiance" }, void 0, false, {
                fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
                lineNumber: 53,
                columnNumber: 36
              }, this),
              " of your guessed operator is ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "font-bold", children: "partially correct" }, void 0, false, {
                fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
                lineNumber: 53,
                columnNumber: 110
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
              lineNumber: 53,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "E.g. If the character is under Elite Ops and you guess a character from OP Reserve A1, this guess would be partially correct because both groups fall under Rhodes Island." }, void 0, false, {
              fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
              lineNumber: 54,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
            lineNumber: 51,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "bg-correct text-white", children: "Green" }, void 0, false, {
              fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
              lineNumber: 60,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Correct." }, void 0, false, {
              fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
              lineNumber: 61,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
            lineNumber: 59,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { children: "close" }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/arknights-wordle/hints/hintHelp.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c8 = HintHelp;
var _c8;
$RefreshReg$(_c8, "HintHelp");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/arknights-wordle/hints/hintListIcon.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\arknights-wordle\\\\hints\\\\hintListIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\arknights-wordle\\hints\\hintListIcon.tsx"
  );
  import.meta.hot.lastModified = "1703134445511.8567";
}
function HintListIcon({
  operator
}) {
  const url = getOperatorIconUrl(operator[1 /* charId */], operator[4 /* rarity */]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "tooltip", "data-tip": operator[0], children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { className: "border-incorrect border-[0.1px] border-solid m-[0.5px] rounded-md", src: url, alt: `${operator[0]} operator icon`, width: 50, height: 50 }, void 0, false, {
    fileName: "app/components/arknights-wordle/hints/hintListIcon.tsx",
    lineNumber: 27,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/arknights-wordle/hints/hintListIcon.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c9 = HintListIcon;
var _c9;
$RefreshReg$(_c9, "HintListIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/arknights-wordle/hints/hintOperatorList.tsx
var import_react9 = __toESM(require_react(), 1);
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\arknights-wordle\\\\hints\\\\hintOperatorList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\arknights-wordle\\hints\\hintOperatorList.tsx"
  );
  import.meta.hot.lastModified = "1705739649094.5474";
}
var Professsions = ["Vanguard", "Guard", "Defender", "Sniper", "Caster", "Medic", "Supporter", "Specialist"];
function HintOperatorList({
  amtGuesses
}) {
  _s6();
  const loaderData = useLoaderData();
  const allOperators = loaderData.allOperators;
  const [showAlert, setShowAlert] = import_react9.default.useState(false);
  const [selectedProfession, setSelectedProfession] = import_react9.default.useState("");
  const sortedRarityOperators = {
    "6": [],
    "5": [],
    "4": [],
    "3": [],
    "2": [],
    "1": []
  };
  allOperators.map((operator) => sortedRarityOperators[operator[4 /* rarity */]].push(operator));
  const handleProfession = (e) => {
    selectedProfession === e.target.id ? setSelectedProfession("") : setSelectedProfession(e.target.id);
  };
  const handleClick = () => {
    document.getElementById("operator_list_modal").showModal();
    setShowAlert(false);
  };
  import_react9.default.useEffect(() => {
    const setAmtGuesses = () => {
      if (amtGuesses === HintBreakpoints.one || amtGuesses === HintBreakpoints.two) {
        setShowAlert(true);
      }
    };
    setAmtGuesses();
  }, [amtGuesses]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "indicator w-1/3 m-2", children: [
      showAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "indicator-item badge bg-higher" }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
        lineNumber: 66,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "flex btn tooltip w-full items-center", "data-tip": "Operator List", onClick: () => handleClick(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
        lineNumber: 69,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("dialog", { id: "operator_list_modal", className: "modal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "modal-box flex flex-col max-w-[3/5vh] justify-items-center overflow-x-clip overflow-y-scroll no-scrollbar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "w-full text-xl mb-2", children: "Operator List (Up to Executor Alter)" }, void 0, false, {
          fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-row flex-wrap justify-center w-full", children: amtGuesses < HintBreakpoints.one ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: allOperators.map((operator) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HintListIcon, { operator }, `${operator} list icon`, false, {
            fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
            lineNumber: 89,
            columnNumber: 22
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
          lineNumber: 87,
          columnNumber: 61
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: amtGuesses >= HintBreakpoints.two && Professsions.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "tooltip p-[0.2rem]", "data-tip": p, style: {
            backgroundColor: selectedProfession === p ? wordleColors.higher : "white"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: getProfessionIconUrl(p), width: 40, id: p, onClick: handleProfession }, void 0, false, {
            fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
            lineNumber: 96,
            columnNumber: 49
          }, this) }, `${p} icon`, false, {
            fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
            lineNumber: 93,
            columnNumber: 101
          }, this)) }, void 0, false, {
            fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
            lineNumber: 92,
            columnNumber: 37
          }, this),
          Object.entries(sortedRarityOperators).reverse().map((rarity) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { children: [
              rarity[0],
              " star Operators"
            ] }, void 0, true, {
              fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
              lineNumber: 100,
              columnNumber: 45
            }, this),
            rarity[1].map((operator) => {
              if (amtGuesses >= HintBreakpoints.two) {
                if (selectedProfession === "") {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HintListIcon, { operator }, `${operator} list icon`, false, {
                    fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
                    lineNumber: 104,
                    columnNumber: 28
                  }, this);
                }
                if (operator[2] === selectedProfession) {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HintListIcon, { operator }, `${operator} list icon`, false, {
                    fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
                    lineNumber: 107,
                    columnNumber: 28
                  }, this);
                }
                return null;
              }
              return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HintListIcon, { operator }, `${operator} list icon`, false, {
                fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
                lineNumber: 111,
                columnNumber: 24
              }, this);
            })
          ] }, `${rarity} rarity operators`, true, {
            fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
            lineNumber: 99,
            columnNumber: 100
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
          lineNumber: 91,
          columnNumber: 39
        }, this) }, void 0, false, {
          fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
          lineNumber: 76,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { children: "close" }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
        lineNumber: 118,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
        lineNumber: 117,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/arknights-wordle/hints/hintOperatorList.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s6(HintOperatorList, "iAbYC8NBtwg/GpbM15vHJ0uNiH0=", false, function() {
  return [useLoaderData];
});
_c10 = HintOperatorList;
var _c10;
$RefreshReg$(_c10, "HintOperatorList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// public/world_map.png
var world_map_default = "/build/_assets/world_map-RTT2VYI4.png";

// app/components/arknights-wordle/hints/hintWorldMap.tsx
var import_react10 = __toESM(require_react(), 1);
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\arknights-wordle\\\\hints\\\\hintWorldMap.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\arknights-wordle\\hints\\hintWorldMap.tsx"
  );
  import.meta.hot.lastModified = "1705739828853.0784";
}
var regions = {
  "\xC6gir": "Aquatic animals and Seaborn.\nGroups: Abyssal Hunters.",
  "Bolivar": "Mainly Perros: Dogs.",
  "Columbia": "Varied.\nGroups: Blacksteel, Rhine Lab.",
  "Higashi": "Oni and some \xC6gir.",
  "Iberia": "Mainly Liberi: Birds.",
  "Kazimierz": "Mainly Kuranta: Horses and Zebras.\nGroups: Pinus Sylvestris.",
  "Kjerag": "Varied. Snow Realm.",
  "Laterano": "Mainly Sankta: Angels and Liberi: Birds.",
  "Leithanien": "Mainly Caprinae: Goats/Sheep and Elafia: Deer.",
  "Lungmen": "Varied.\nGroups: Lee's Detective Agency, LGD, Penguin Logistics.",
  "Minos": "Mainly Forte: Bovines/Camels.",
  "Rhodes Island": "Varied.\nGroups: Elite Ops, Followers, Op-teams, S.W.E.E.P.",
  "Rim Billiton": "Mainly Cautus: Rabbits and Hares.",
  "Sami": "Mainly Elafia: Deer",
  "Sargon": "Mainly Archosauria: Crocodilians and Pythia: Serpents.",
  "Siracusa": "Mainly Lupo: Wolves and Vulpo: Foxes.\nGroups: Chiave's Gang.",
  "Ursus": "Mainly Ursus: Bears.\nGroups: Ursus Student Self-Governing Group.",
  "Victoria": "Mainly Feline: Cats.\nGroups: Dublinn, Glasgow.",
  "Yan": "Varied. Ruled by Lung.\nGroups: Sui."
};
function HintWorldMap({
  amtGuesses
}) {
  _s7();
  const [showAlert, setShowAlert] = import_react10.default.useState(false);
  const handleClick = () => {
    document.getElementById("world_map_modal").showModal();
    setShowAlert(false);
  };
  import_react10.default.useEffect(() => {
    const setAmtGuesses = () => {
      if (amtGuesses === HintBreakpoints.one) {
        setShowAlert(true);
      }
    };
    setAmtGuesses();
  }, [amtGuesses]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex indicator w-1/3 m-2", children: [
      showAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "indicator-item badge bg-higher" }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
        lineNumber: 66,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { className: "flex btn tooltip w-full items-center", "data-tip": "World Map and Races", onClick: () => handleClick(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
        lineNumber: 69,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dialog", { id: "world_map_modal", className: "modal w-screen overflow-visible", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "modal-box max-w-[95vw] md:max-w-[80vw]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w-full h-48 md:h-auto overflow-auto touch-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { className: "max-w-none w-[400%] md:w-[100%] h-auto", src: world_map_default }, void 0, false, {
          fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
          lineNumber: 76,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this),
        amtGuesses >= HintBreakpoints.one && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-wrap flex-row justify-start mt-5", children: Object.entries(regions).map((region) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-left w-1/2 h-32 md:h-20", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "font-bold", children: region[0] }, void 0, false, {
            fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
            lineNumber: 81,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "whitespace-pre-line", children: region[1] }, void 0, false, {
            fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
            lineNumber: 82,
            columnNumber: 33
          }, this)
        ] }, region[0], true, {
          fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
          lineNumber: 80,
          columnNumber: 64
        }, this)) }, void 0, false, {
          fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
          lineNumber: 79,
          columnNumber: 59
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { children: "close" }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
        lineNumber: 87,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
        lineNumber: 86,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/arknights-wordle/hints/hintWorldMap.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s7(HintWorldMap, "XmhiORUYKJjBwXS4R6LfUAKQGcs=");
_c11 = HintWorldMap;
var _c11;
$RefreshReg$(_c11, "HintWorldMap");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/arknights-wordle/hints/hints.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\arknights-wordle\\\\hints\\\\hints.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\arknights-wordle\\hints\\hints.tsx"
  );
  import.meta.hot.lastModified = "1705739650968.3384";
}
var HintBreakpoints = /* @__PURE__ */ function(HintBreakpoints2) {
  HintBreakpoints2[HintBreakpoints2["one"] = 5] = "one";
  HintBreakpoints2[HintBreakpoints2["two"] = 8] = "two";
  return HintBreakpoints2;
}({});
function Hints({
  amtGuesses
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-row w-full justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(HintOperatorList, { amtGuesses }, void 0, false, {
      fileName: "app/components/arknights-wordle/hints/hints.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(HintHelp, {}, void 0, false, {
      fileName: "app/components/arknights-wordle/hints/hints.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(HintWorldMap, { amtGuesses }, void 0, false, {
      fileName: "app/components/arknights-wordle/hints/hints.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/arknights-wordle/hints/hints.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c12 = Hints;
var _c12;
$RefreshReg$(_c12, "Hints");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// public/logo_black.png
var logo_black_default = "/build/_assets/logo_black-DB3SPWRY.png";

// public/logo_white.png
var logo_white_default = "/build/_assets/logo_white-63BXGV4I.png";

// app/routes/arknights-wordle.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\arknights-wordle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\arknights-wordle.tsx"
  );
  import.meta.hot.lastModified = "1705739663366.0476";
}
function ArknightsWordle() {
  _s8();
  const loaderData = useLoaderData();
  const stats = loaderData?.stats;
  const actionData = useActionData();
  const [guesses, setGuesses] = import_react12.default.useState([]);
  const [playing, setPlaying] = import_react12.default.useState(0);
  const [isInputDelay, setIsInputDelay] = import_react12.default.useState(false);
  const [darkMode, setDarkMode] = import_react12.default.useState(false);
  import_react12.default.useEffect(() => {
    const updateGuesses = () => {
      if (actionData?.result) {
        setIsInputDelay(true);
        const isGuesses = localStorage.getItem("guesses");
        const guesses2 = isGuesses ? JSON.parse(isGuesses) : [];
        let newGuesses = [actionData.result, ...guesses2];
        localStorage.setItem("guesses", JSON.stringify(newGuesses));
        setGuesses(newGuesses);
        if (actionData.result.correct) {
          setTimeout(() => setPlaying(1), 4e3);
          setTimeout(() => setIsInputDelay(false), 4e3);
          localStorage.setItem("playing", "1");
        } else {
          setTimeout(() => setIsInputDelay(false), 2500);
        }
      }
    };
    const initGuesses = () => {
      const now = (/* @__PURE__ */ new Date()).toDateString();
      const lastPlayed = localStorage.getItem("lastPlayed");
      if (now != lastPlayed) {
        localStorage.setItem("guesses", JSON.stringify([]));
        localStorage.setItem("lastPlayed", now);
        localStorage.setItem("playing", "0");
        setPlaying(0);
        setGuesses([]);
      } else {
        const isGuesses = localStorage.getItem("guesses");
        const guesses2 = isGuesses ? JSON.parse(isGuesses) : [];
        const isPlaying = localStorage.getItem("playing");
        const playing2 = isPlaying ? JSON.parse(isPlaying) : 0;
        setPlaying(playing2);
        setGuesses(guesses2);
      }
    };
    const initTheme = () => {
      const isTheme = localStorage.getItem("data-theme");
      const theme = isTheme ? isTheme : "light";
      document.getElementById("ak-wordle-root")?.setAttribute("data-theme", theme);
      if (theme === "dark") {
        document.getElementById("theme-checkbox")?.setAttribute("checked", "");
        setDarkMode(true);
      }
    };
    initGuesses();
    updateGuesses();
    initTheme();
  }, [actionData]);
  const handleThemeChange = (e) => {
    const theme = e.target.checked ? "dark" : "light";
    localStorage.setItem("data-theme", theme);
    document.getElementById("ak-wordle-root")?.setAttribute("data-theme", theme);
    setDarkMode(theme === "dark");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { id: "ak-wordle-root", className: "flex flex-col w-screen justify-top items-center align-middle text-center font-sans p-5 pt-10 h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { className: "z-10 swap swap-rotate fixed bottom-1 right-1 md:bottom-auto md:top-3 md:right-3 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { id: "theme-checkbox", type: "checkbox", className: "theme-controller hidden", value: "dark", onClick: (e) => handleThemeChange(e) }, void 0, false, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 142,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { className: "swap-on fill-current w-10 h-10", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" }, void 0, false, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 144,
        columnNumber: 120
      }, this) }, void 0, false, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 144,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { className: "swap-off fill-current w-10 h-10", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" }, void 0, false, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 146,
        columnNumber: 121
      }, this) }, void 0, false, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 146,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/arknights-wordle.tsx",
      lineNumber: 140,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { style: {
      height: "50"
    }, src: `${darkMode ? logo_white_default : logo_black_default}` }, void 0, false, {
      fileName: "app/routes/arknights-wordle.tsx",
      lineNumber: 148,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "font-bold text-4xl", children: "WORDLE" }, void 0, false, {
      fileName: "app/routes/arknights-wordle.tsx",
      lineNumber: 151,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: `#${stats.gameId}, ${stats.date} (AEST)` }, void 0, false, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 153,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: `${stats.timesGuessed === 0 ? "No Dokutah's have" : stats.timesGuessed + " " + (stats.timesGuessed > 1 ? "Dokutah's have" : "Dokutah has")} guessed the operator.` }, void 0, false, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 154,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/arknights-wordle.tsx",
      lineNumber: 152,
      columnNumber: 13
    }, this),
    false,
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex justify-center align-middle w-3/4 md:w-96 my-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Hints, { amtGuesses: guesses.length }, void 0, false, {
      fileName: "app/routes/arknights-wordle.tsx",
      lineNumber: 160,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/arknights-wordle.tsx",
      lineNumber: 159,
      columnNumber: 13
    }, this),
    actionData?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-red-500", children: actionData.error }, void 0, false, {
      fileName: "app/routes/arknights-wordle.tsx",
      lineNumber: 162,
      columnNumber: 34
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "grid w-full justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col col-start-1 row-start-1 align-middle w-full animate-fade-in", children: playing === 0 && !isInputDelay && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Search, { guesses }, void 0, false, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 170,
        columnNumber: 56
      }, this) }, void 0, false, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 169,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-start-1 row-start-1 flex flex-col my-14 w-auto overflow-x-scroll overflow-y-clip md:overflow-visible", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-row font-bold justify-center break-all", children: guesses && guesses.length > 0 ? Object.entries(guessCategoryToolTips).map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "tooltip-answer-row flex h-20 w-20 m-2 items-center justify-center bg-base-200 text-content whitespace-pre-line", "data-tip": category[1], children: category[0] }, index, false, {
          fileName: "app/routes/arknights-wordle.tsx",
          lineNumber: 177,
          columnNumber: 125
        }, this)) : null }, void 0, false, {
          fileName: "app/routes/arknights-wordle.tsx",
          lineNumber: 176,
          columnNumber: 25
        }, this),
        guesses && guesses.length > 0 && guesses.map((guess, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AnswerRow, { guess, index }, guess.charId ? guess.charId : index, false, {
          fileName: "app/routes/arknights-wordle.tsx",
          lineNumber: 180,
          columnNumber: 89
        }, this))
      ] }, void 0, true, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 175,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 173,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/arknights-wordle.tsx",
      lineNumber: 168,
      columnNumber: 13
    }, this),
    playing === 1 && !isInputDelay && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col items-center animate-fade-in", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: "You guessed the operator!" }, void 0, false, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 186,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ShareBox, { guesses, gameInfo: stats }, void 0, false, {
        fileName: "app/routes/arknights-wordle.tsx",
        lineNumber: 187,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/arknights-wordle.tsx",
      lineNumber: 185,
      columnNumber: 48
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/arknights-wordle.tsx",
    lineNumber: 139,
    columnNumber: 10
  }, this);
}
_s8(ArknightsWordle, "aByQxwADkm01YOXvJ/jgMIEBnKo=", false, function() {
  return [useLoaderData, useActionData];
});
_c13 = ArknightsWordle;
var _c13;
$RefreshReg$(_c13, "ArknightsWordle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ArknightsWordle as default
};
//# sourceMappingURL=/build/routes/arknights-wordle-4ETPTC22.js.map
