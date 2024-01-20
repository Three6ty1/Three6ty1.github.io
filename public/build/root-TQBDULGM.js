import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
  useRouteError
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var React = __toESM(require_react(), 1);

// app/styles/global.css
var global_default = "/build/_assets/global-OKAN6S6R.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => {
  return [{
    rel: "stylesheet",
    href: global_default
  }, {
    rel: "manifest",
    href: "/manifest.json"
  }];
};
var meta = () => {
  return [{
    title: "Arknights Wordle"
  }, {
    property: "og:title",
    content: "Arknights Wordle"
  }, {
    name: "description",
    content: "Arknights Wordle project by Three6ty1"
  }];
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_c = App;
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8", name: "viewport", content: "width=device-width,initial-scale=1,initial-scale=1, maximum-scale=1, user-scalable=0" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: title }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { className: "no-scrollbar", children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RouteChangeAnnouncement, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 52
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_c2 = Document;
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "remix-app", children }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_c3 = Layout;
function CatchBoundary() {
  _s();
  const caught = useRouteError();
  let message;
  if (isRouteErrorResponse(caught)) {
    switch (caught.status) {
      case 401:
        message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 91,
          columnNumber: 19
        }, this);
        break;
      case 404:
        message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that does not exist." }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 97,
          columnNumber: 19
        }, this);
        break;
      default:
        throw new Error(caught.data || caught.statusText);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
        caught.status,
        ": ",
        caught.statusText
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this),
      message
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 102,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { title: "Unknown Error has occured", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: "Unknown error has occured" }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 112,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 111,
    columnNumber: 10
  }, this);
}
_s(CatchBoundary, "vZO8vFHs0cvyOVpRsTvS9J3R7pg=", false, function() {
  return [useRouteError];
});
_c4 = CatchBoundary;
function ErrorBoundary({
  error
}) {
  console.error(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "There was an error" }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 128,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error.message }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 129,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 130,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Hey, developer, you should replace this with what you want your users to see." }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 131,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 127,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 126,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 125,
    columnNumber: 10
  }, this);
}
_c5 = ErrorBoundary;
var RouteChangeAnnouncement = _s2(React.memo(_c6 = _s2(() => {
  _s2();
  let [hydrated, setHydrated] = React.useState(false);
  let [innerHtml, setInnerHtml] = React.useState("");
  let location = useLocation();
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  let firstRenderRef = React.useRef(true);
  React.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);
  if (!hydrated) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-live": "assertive", "aria-atomic": true, id: "route-change-region", style: {
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
  }, children: innerHtml }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 169,
    columnNumber: 10
  }, this);
}, "/w14E5i2ITjOnaRSZZopu9saTfw=", false, function() {
  return [useLocation];
})), "/w14E5i2ITjOnaRSZZopu9saTfw=", false, function() {
  return [useLocation];
});
_c7 = RouteChangeAnnouncement;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "Document");
$RefreshReg$(_c3, "Layout");
$RefreshReg$(_c4, "CatchBoundary");
$RefreshReg$(_c5, "ErrorBoundary");
$RefreshReg$(_c6, "RouteChangeAnnouncement$React.memo");
$RefreshReg$(_c7, "RouteChangeAnnouncement");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-TQBDULGM.js.map
