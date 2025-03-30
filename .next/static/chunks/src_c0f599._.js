(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_c0f599._.js", {

"[project]/src/components/background.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ImageBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function ImageBackground() {
    _s();
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const images = [
        '/images/img1.jpeg',
        '/images/img2.jpeg',
        '/images/img3.jpeg',
        '/images/img4.jpeg',
        '/images/img5.jpeg',
        '/images/img6.jpeg',
        '/images/img7.jpeg',
        '/images/img8.jpeg',
        '/images/img9.jpeg',
        '/images/img10.jpeg',
        '/images/img11.jpeg',
        '/images/img12.jpeg',
        '/images/img13.jpeg',
        '/images/img14.jpeg',
        '/images/img15.jpeg',
        '/images/img16.jpeg',
        '/images/img17.jpeg',
        '/images/img18.jpeg'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageBackground.useEffect": ()=>{
            // Divide the screen into grid sections to ensure better distribution
            const gridSize = Math.ceil(Math.sqrt(images.length));
            const cellWidth = 100 / gridSize;
            const cellHeight = 100 / gridSize;
            // Create positions with better distribution
            const initialPositions = images.map({
                "ImageBackground.useEffect.initialPositions": (_, index)=>{
                    // Calculate grid position
                    const gridX = index % gridSize;
                    const gridY = Math.floor(index / gridSize);
                    // Add randomness within the grid cell
                    const top = gridY * cellHeight + Math.random() * (cellHeight * 0.7);
                    const left = gridX * cellWidth + Math.random() * (cellWidth * 0.7);
                    return {
                        top: top,
                        left: left,
                        rotate: Math.random() * 20 - 10,
                        scale: 0.3 + Math.random() * 0.4,
                        zIndex: Math.floor(Math.random() * 10)
                    };
                }
            }["ImageBackground.useEffect.initialPositions"]);
            setPositions(initialPositions);
            // Upward movement effect
            const interval = setInterval({
                "ImageBackground.useEffect.interval": ()=>{
                    setPositions({
                        "ImageBackground.useEffect.interval": (prev)=>prev.map({
                                "ImageBackground.useEffect.interval": (pos)=>({
                                        top: (pos.top - 5 + 100) % 100,
                                        left: pos.left,
                                        rotate: pos.rotate,
                                        scale: pos.scale,
                                        zIndex: pos.zIndex
                                    })
                            }["ImageBackground.useEffect.interval"])
                    }["ImageBackground.useEffect.interval"]);
                }
            }["ImageBackground.useEffect.interval"], 3000); // Faster interval for smoother movement
            return ({
                "ImageBackground.useEffect": ()=>clearInterval(interval)
            })["ImageBackground.useEffect"];
        }
    }["ImageBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-14dbb59a94302830" + " " + "background",
        children: [
            images.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        top: `${positions[index]?.top}%`,
                        left: `${positions[index]?.left}%`,
                        transform: `rotate(${positions[index]?.rotate}deg) scale(${positions[index]?.scale})`,
                        zIndex: positions[index]?.zIndex,
                        backgroundColor: index % 3 === 0 ? 'rgba(255, 100, 50, 0.2)' : index % 3 === 1 ? 'rgba(30, 144, 255, 0.2)' : 'rgba(200, 200, 200, 0.2)'
                    },
                    className: "jsx-14dbb59a94302830" + " " + "image-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: src,
                        alt: `Background ${index}`,
                        width: 240,
                        height: 180,
                        className: "floating-image"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background.js",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/background.js",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "14dbb59a94302830",
                children: ".background.jsx-14dbb59a94302830{z-index:-1;filter:blur(1px);background:#000;width:100vw;height:100vh;position:fixed;top:0;left:0;overflow:hidden}.image-container.jsx-14dbb59a94302830{border-radius:4px;padding:10px;transition:all 5s;position:absolute;overflow:hidden;box-shadow:0 4px 12px #0000001a}.floating-image.jsx-14dbb59a94302830{opacity:.6;object-fit:cover;filter:blur(10px);width:100%;height:auto}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/background.js",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(ImageBackground, "3LkfiWGtBEM8hKuM1fZoE6OzM7U=");
_c = ImageBackground;
var _c;
__turbopack_refresh__.register(_c, "ImageBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/focus-cards.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Card": (()=>Card),
    "FocusCards": (()=>FocusCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(({ card, index, hovered, setHovered })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHovered(index),
        onMouseLeave: ()=>setHovered(null),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-48 md:h-72 max-h-[30rem] w-full transition-all duration-300 ease-out", hovered !== null && hovered !== index && "blur-sm scale-[0.98]"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: card.src,
                alt: card.title,
                fill: true,
                className: "object-cover absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/focus-cards.jsx",
                lineNumber: 19,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300", hovered === index ? "opacity-100" : "opacity-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200",
                    children: card.title
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/focus-cards.jsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/focus-cards.jsx",
                lineNumber: 24,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/focus-cards.jsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c = Card;
Card.displayName = "Card";
function FocusCards({ cards }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 max-w-7xl mx-auto md:px-8 w-full",
        children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                card: card,
                index: index,
                hovered: hovered,
                setHovered: setHovered
            }, card.title, false, {
                fileName: "[project]/src/components/ui/focus-cards.jsx",
                lineNumber: 48,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/focus-cards.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(FocusCards, "mEhKvegbaT+HE5gyL2KiZdVDWeQ=");
_c1 = FocusCards;
var _c, _c1;
__turbopack_refresh__.register(_c, "Card");
__turbopack_refresh__.register(_c1, "FocusCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/logo-carousel.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LogoCarousel": (()=>LogoCarousel),
    "LogoColumn": (()=>LogoColumn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
const shuffleArray = (array)=>{
    const shuffled = [
        ...array
    ];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    return shuffled;
};
const distributeLogos = (allLogos, columnCount)=>{
    const shuffled = shuffleArray(allLogos);
    const columns = Array.from({
        length: columnCount
    }, ()=>[]);
    shuffled.forEach((logo, index)=>{
        columns[index % columnCount].push(logo);
    });
    const maxLength = Math.max(...columns.map((col)=>col.length));
    columns.forEach((col)=>{
        while(col.length < maxLength){
            col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
    });
    return columns;
};
const LogoColumn = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s(({ logos, index, currentTime })=>{
    _s();
    const cycleInterval = 2000;
    const columnDelay = index * 200;
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length);
    const currentIndex = Math.floor(adjustedTime / cycleInterval);
    const CurrentLogo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoColumn.useMemo[CurrentLogo]": ()=>logos[currentIndex].img
    }["LogoColumn.useMemo[CurrentLogo]"], [
        logos,
        currentIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "relative h-14 w-24 overflow-hidden md:h-24 md:w-48",
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: index * 0.1,
            duration: 0.5,
            ease: "easeOut"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 flex items-center justify-center",
                initial: {
                    y: "10%",
                    opacity: 0,
                    filter: "blur(8px)"
                },
                animate: {
                    y: "0%",
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        mass: 1,
                        bounce: 0.2,
                        duration: 0.5
                    }
                },
                exit: {
                    y: "-20%",
                    opacity: 0,
                    filter: "blur(6px)",
                    transition: {
                        type: "tween",
                        ease: "easeIn",
                        duration: 0.3
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentLogo, {
                    className: "h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/logo-carousel.jsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            }, `${logos[currentIndex].id}-${currentIndex}`, false, {
                fileName: "[project]/src/components/ui/logo-carousel.jsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/logo-carousel.jsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/logo-carousel.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}, "6HnN20kdTRlBYr2ozTQpX7LUxpU="));
_c = LogoColumn;
function LogoCarousel({ columnCount = 2, logos }) {
    _s1();
    const [logoSets, setLogoSets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const updateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoCarousel.useCallback[updateTime]": ()=>{
            setCurrentTime({
                "LogoCarousel.useCallback[updateTime]": (prevTime)=>prevTime + 100
            }["LogoCarousel.useCallback[updateTime]"]);
        }
    }["LogoCarousel.useCallback[updateTime]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LogoCarousel.useEffect": ()=>{
            const intervalId = setInterval(updateTime, 100);
            return ({
                "LogoCarousel.useEffect": ()=>clearInterval(intervalId)
            })["LogoCarousel.useEffect"];
        }
    }["LogoCarousel.useEffect"], [
        updateTime
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LogoCarousel.useEffect": ()=>{
            const distributedLogos = distributeLogos(logos, columnCount);
            setLogoSets(distributedLogos);
        }
    }["LogoCarousel.useEffect"], [
        logos,
        columnCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex space-x-4",
        children: logoSets.map((logos, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoColumn, {
                logos: logos,
                index: index,
                currentTime: currentTime
            }, index, false, {
                fileName: "[project]/src/components/ui/logo-carousel.jsx",
                lineNumber: 109,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/logo-carousel.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s1(LogoCarousel, "O/IaSYeju8L1jcrZ7iVrMILKhfo=");
_c1 = LogoCarousel;
;
var _c, _c1;
__turbopack_refresh__.register(_c, "LogoColumn");
__turbopack_refresh__.register(_c1, "LogoCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/sponsor-logos.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AmazonLogo": (()=>AmazonLogo),
    "GoogleLogo": (()=>GoogleLogo),
    "IBMLogo": (()=>IBMLogo),
    "MetaLogo": (()=>MetaLogo),
    "MicrosoftLogo": (()=>MicrosoftLogo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const GoogleLogo = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 272 92",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#EA4335",
                d: "M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 10,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FBBC05",
                d: "M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 14,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#4285F4",
                d: "M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#34A853",
                d: "M225 3v65h-9.5V3h9.5z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 22,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#EA4335",
                d: "M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 23,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sponsor-logos.jsx",
        lineNumber: 5,
        columnNumber: 3
    }, this);
_c = GoogleLogo;
const MicrosoftLogo = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 23 23",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#f3f3f3",
                d: "M0 0h23v23H0z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 36,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#f35325",
                d: "M1 1h10v10H1z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 37,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#81bc06",
                d: "M12 1h10v10H12z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 38,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#05a6f0",
                d: "M1 12h10v10H1z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 39,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#ffba08",
                d: "M12 12h10v10H12z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 40,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sponsor-logos.jsx",
        lineNumber: 31,
        columnNumber: 3
    }, this);
_c1 = MicrosoftLogo;
const AmazonLogo = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 602.28 181.5",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FF9900",
                d: "M374.03 142.17c-34.99 25.8-85.73 39.56-129.47 39.56-61.27 0-116.42-22.65-158.13-60.32-3.27-2.96-.34-7 3.59-4.7 45.01 26.19 100.67 41.95 158.17 41.95 38.77 0 81.35-8.02 120.56-24.67 5.92-2.51 10.88 3.88 5.28 8.18z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 50,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FF9900",
                d: "M388.56 125.51c-4.46-5.72-29.57-2.7-40.88-1.36-3.43.39-3.95-2.57-.87-4.72 20.01-14.08 52.82-10.01 56.65-5.29 3.84 4.76-1 37.72-19.84 53.46-2.9 2.42-5.67 1.13-4.37-2.07 4.23-10.57 13.7-34.26 9.31-40.02z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 54,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#000000",
                d: "M348.49 20.18v-14.22c0-2.15 1.64-3.58 3.58-3.58h63.42c2.03 0 3.66 1.46 3.66 3.58v12.2c-.03 2.04-1.74 4.7-4.76 8.92l-32.84 46.83c12.19-.28 25.09 1.52 36.16 7.7 2.5 1.39 3.17 3.43 3.36 5.44v15.21c0 2.05-2.25 4.44-4.61 3.2-19.26-10.1-44.78-11.18-66.09.06-2.17 1.14-4.44-1.18-4.44-3.23v-14.45c0-2.27.03-6.17 2.31-9.63l38.07-54.59h-33.13c-2.03 0-3.66-1.43-3.66-3.58l-.03-.86zm-207.56 73.88h-19.27c-1.84-.13-3.31-1.5-3.43-3.24l.03-98.34c0-1.96 1.65-3.52 3.67-3.52h17.97c1.85.08 3.33 1.5 3.46 3.27v12.84h.37c4.69-12.47 13.46-18.28 25.35-18.28 12.06 0 19.59 5.81 24.97 18.28 4.67-12.47 15.27-18.28 26.62-18.28 8.09 0 16.94 3.34 22.33 10.88 6.1 8.34 4.85 20.47 4.85 31.09l-.03 62.01c0 1.96-1.65 3.52-3.67 3.52h-19.25c-1.9-.13-3.41-1.64-3.41-3.52v-52.1c0-4.14.37-14.5-.54-18.42-1.42-6.61-5.69-8.47-11.22-8.47-4.62 0-9.44 3.09-11.41 8.04-1.97 4.95-1.79 13.17-1.79 18.85v52.1c0 1.96-1.65 3.52-3.67 3.52h-19.25c-1.9-.13-3.41-1.64-3.41-3.52l-.03-52.1c0-10.95 1.79-27.06-11.75-27.06-13.71 0-13.17 15.74-13.17 27.06l-.03 52.1c-.03 1.96-1.67 3.52-3.69 3.52zm322.45-89.04c-14.12 0-15.01 19.25-15.01 31.28 0 12.06-.88 37.74 14.85 37.74 14.86 0 15.61-20.69 15.61-33.29 0-8.28-.35-18.22-2.85-26.09-2.14-6.89-6.4-9.64-12.6-9.64zm-.88 89.74c-28.58 0-44.09-24.55-44.09-55.83 0-30.19 15.84-54.24 44.09-54.24 28.08 0 43.38 24.55 43.38 55.13 0 30.82-15.84 54.94-43.38 54.94zm80.25-89.74c-14.12 0-15.01 19.25-15.01 31.28 0 12.06-.88 37.74 14.85 37.74 14.86 0 15.61-20.69 15.61-33.29 0-8.28-.35-18.22-2.85-26.09-2.14-6.89-6.4-9.64-12.6-9.64zm-.88 89.74c-28.58 0-44.09-24.55-44.09-55.83 0-30.19 15.84-54.24 44.09-54.24 28.08 0 43.38 24.55 43.38 55.13 0 30.82-15.84 54.94-43.38 54.94zm-205.51-1.66h-19.2c-1.9-.13-3.41-1.64-3.41-3.52l-.03-98.34c.16-1.78 1.69-3.17 3.63-3.17h17.88c1.65.08 3.01 1.21 3.37 2.72v15.04h.37c5.4-13.56 12.97-20.02 26.28-20.02 8.65 0 17.09 3.12 22.5 11.67 5.05 7.95 5.05 21.32 5.05 30.93v62.42c-.21 1.69-1.74 3.03-3.63 3.03h-19.33c-1.73-.13-3.17-1.42-3.37-3.03v-53.89c0-10.86 1.25-26.76-12.15-26.76-4.72 0-9.07 3.15-11.22 7.95-2.72 6.09-3.09 12.15-3.09 18.8v53.39c-.03 1.96-1.69 3.52-3.67 3.52z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 58,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sponsor-logos.jsx",
        lineNumber: 45,
        columnNumber: 3
    }, this);
_c2 = AmazonLogo;
const MetaLogo = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 800 800",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                id: "a",
                cx: "101.9",
                cy: "809",
                r: "1.1",
                gradientTransform: "matrix(800 0 0 -800 -81386 648000)",
                gradientUnits: "userSpaceOnUse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "0",
                        stopColor: "#09f"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                        lineNumber: 79,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: ".6",
                        stopColor: "#a033ff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                        lineNumber: 80,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: ".9",
                        stopColor: "#ff5280"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                        lineNumber: 81,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "1",
                        stopColor: "#ff7061"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                        lineNumber: 82,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 71,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#a)",
                d: "M400 0C174.7 0 0 165.1 0 388c0 116.6 47.8 217.4 125.6 287 6.5 5.8 10.5 14 10.7 22.8l2.2 71.2a32 32 0 0 0 44.9 28.3l79.4-35c6.7-3 14.3-3.5 21.4-1.6 36.5 10 75.3 15.4 115.8 15.4 225.3 0 400-165.1 400-388S625.3 0 400 0z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 84,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FFF",
                d: "m159.8 501.5 117.5-186.4a60 60 0 0 1 86.8-16l93.5 70.1a24 24 0 0 0 28.9-.1l126.2-95.8c16.8-12.8 38.8 7.4 27.6 25.3L522.7 484.9a60 60 0 0 1-86.8 16l-93.5-70.1a24 24 0 0 0-28.9.1l-126.2 95.8c-16.8 12.8-38.8-7.3-27.5-25.2z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sponsor-logos.jsx",
                lineNumber: 88,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sponsor-logos.jsx",
        lineNumber: 66,
        columnNumber: 3
    }, this);
_c3 = MetaLogo;
const IBMLogo = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 400",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "#1F70C1",
            d: "M0 0v27.4h194.2V0zm222.2 0v27.4h277.9c0-10.9-8.9-27.4-27.8-27.4zm333.9 0v27.4H750V0zm222.6 0v27.4H1000V0zM55.6 55.5v27.4h138.6V55.5zm222.2 0v27.4h222.2c0-10.9-3.3-27.4-27.8-27.4zm222.2 0v27.4h222.2V55.5zm222.2 0v27.4H1000V55.5zM55.6 111v27.4h138.6V111zm222.2 0v27.4h249.9V111zm166.7 0v27.4h55.6V111zm55.5 0v27.4h166.7V111zm166.7 0v27.4H1000V111zM0 166.5v27.4h194.2v-27.4zm55.6 0v27.4h138.6v-27.4zm166.6 0v27.4h138.9v-27.4zm166.7 0v27.4h55.6v-27.4zm55.5 0v27.4h138.9v-27.4zm166.7 0v27.4h138.6v-27.4zm166.7 0v27.4H1000v-27.4zM55.6 221.9v27.4h138.6v-27.4zm166.6 0v27.4h138.9v-27.4zm166.7 0v27.4h55.6v-27.4zm55.5 0v27.4h138.9v-27.4zm166.7 0v27.4h138.6v-27.4zM55.6 277.4v27.4h138.6v-27.4zm166.6 0v27.4h194.5c0-11.5-8.4-27.4-27.8-27.4zm222.2 0v27.4h55.6v-27.4zm55.5 0v27.4h194.4c0-11.5-8.3-27.4-27.7-27.4zm222.3 0v27.4h138.6v-27.4zM0 332.9v27.4h194.2v-27.4zm222.2 0v27.4h277.9c0-10.9-8.9-27.4-27.8-27.4zm333.9 0v27.4H750v-27.4zm222.6 0v27.4H1000v-27.4z"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sponsor-logos.jsx",
            lineNumber: 101,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sponsor-logos.jsx",
        lineNumber: 96,
        columnNumber: 3
    }, this);
_c4 = IBMLogo;
var _c, _c1, _c2, _c3, _c4;
__turbopack_refresh__.register(_c, "GoogleLogo");
__turbopack_refresh__.register(_c1, "MicrosoftLogo");
__turbopack_refresh__.register(_c2, "AmazonLogo");
__turbopack_refresh__.register(_c3, "MetaLogo");
__turbopack_refresh__.register(_c4, "IBMLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/splash-cursor.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SplashCursor": (()=>SplashCursor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
function SplashCursor({ // Add whatever props you like for customization
SIM_RESOLUTION = 128, DYE_RESOLUTION = 1440, CAPTURE_RESOLUTION = 512, DENSITY_DISSIPATION = 3.5, VELOCITY_DISSIPATION = 2, PRESSURE = 0.1, PRESSURE_ITERATIONS = 20, CURL = 3, SPLAT_RADIUS = 0.2, SPLAT_FORCE = 6000, SHADING = true, COLOR_UPDATE_SPEED = 10, BACK_COLOR = {
    r: 0.5,
    g: 0,
    b: 0
}, TRANSPARENT = true }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashCursor.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            function pointerPrototype() {
                this.id = -1;
                this.texcoordX = 0;
                this.texcoordY = 0;
                this.prevTexcoordX = 0;
                this.prevTexcoordY = 0;
                this.deltaX = 0;
                this.deltaY = 0;
                this.down = false;
                this.moved = false;
                this.color = [
                    0,
                    0,
                    0
                ];
            }
            let config = {
                SIM_RESOLUTION,
                DYE_RESOLUTION,
                CAPTURE_RESOLUTION,
                DENSITY_DISSIPATION,
                VELOCITY_DISSIPATION,
                PRESSURE,
                PRESSURE_ITERATIONS,
                CURL,
                SPLAT_RADIUS,
                SPLAT_FORCE,
                SHADING,
                COLOR_UPDATE_SPEED,
                PAUSED: false,
                BACK_COLOR,
                TRANSPARENT
            };
            let pointers = [
                new pointerPrototype()
            ];
            const { gl, ext } = getWebGLContext(canvas);
            if (!ext.supportLinearFiltering) {
                config.DYE_RESOLUTION = 256;
                config.SHADING = false;
            }
            function getWebGLContext(canvas) {
                const params = {
                    alpha: true,
                    depth: false,
                    stencil: false,
                    antialias: false,
                    preserveDrawingBuffer: false
                };
                let gl = canvas.getContext("webgl2", params);
                const isWebGL2 = !!gl;
                if (!isWebGL2) gl = canvas.getContext("webgl", params) || canvas.getContext("experimental-webgl", params);
                let halfFloat;
                let supportLinearFiltering;
                if (isWebGL2) {
                    gl.getExtension("EXT_color_buffer_float");
                    supportLinearFiltering = gl.getExtension("OES_texture_float_linear");
                } else {
                    halfFloat = gl.getExtension("OES_texture_half_float");
                    supportLinearFiltering = gl.getExtension("OES_texture_half_float_linear");
                }
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat && halfFloat.HALF_FLOAT_OES;
                let formatRGBA;
                let formatRG;
                let formatR;
                if (isWebGL2) {
                    formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
                    formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
                    formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
                } else {
                    formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
                    formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
                    formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
                }
                return {
                    gl,
                    ext: {
                        formatRGBA,
                        formatRG,
                        formatR,
                        halfFloatTexType,
                        supportLinearFiltering
                    }
                };
            }
            function getSupportedFormat(gl, internalFormat, format, type) {
                if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
                    switch(internalFormat){
                        case gl.R16F:
                            return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
                        case gl.RG16F:
                            return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
                        default:
                            return null;
                    }
                }
                return {
                    internalFormat,
                    format
                };
            }
            function supportRenderTextureFormat(gl, internalFormat, format, type) {
                const texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
                const fbo = gl.createFramebuffer();
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
                return status === gl.FRAMEBUFFER_COMPLETE;
            }
            class Material {
                constructor(vertexShader, fragmentShaderSource){
                    this.vertexShader = vertexShader;
                    this.fragmentShaderSource = fragmentShaderSource;
                    this.programs = [];
                    this.activeProgram = null;
                    this.uniforms = [];
                }
                setKeywords(keywords) {
                    let hash = 0;
                    for(let i = 0; i < keywords.length; i++)hash += hashCode(keywords[i]);
                    let program = this.programs[hash];
                    if (program == null) {
                        let fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
                        program = createProgram(this.vertexShader, fragmentShader);
                        this.programs[hash] = program;
                    }
                    if (program === this.activeProgram) return;
                    this.uniforms = getUniforms(program);
                    this.activeProgram = program;
                }
                bind() {
                    gl.useProgram(this.activeProgram);
                }
            }
            class Program {
                constructor(vertexShader, fragmentShader){
                    this.uniforms = {};
                    this.program = createProgram(vertexShader, fragmentShader);
                    this.uniforms = getUniforms(this.program);
                }
                bind() {
                    gl.useProgram(this.program);
                }
            }
            function createProgram(vertexShader, fragmentShader) {
                let program = gl.createProgram();
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) console.trace(gl.getProgramInfoLog(program));
                return program;
            }
            function getUniforms(program) {
                let uniforms = [];
                let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                for(let i = 0; i < uniformCount; i++){
                    let uniformName = gl.getActiveUniform(program, i).name;
                    uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
                }
                return uniforms;
            }
            function compileShader(type, source, keywords) {
                source = addKeywords(source, keywords);
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) console.trace(gl.getShaderInfoLog(shader));
                return shader;
            }
            function addKeywords(source, keywords) {
                if (!keywords) return source;
                let keywordsString = "";
                keywords.forEach({
                    "SplashCursor.useEffect.addKeywords": (keyword)=>{
                        keywordsString += "#define " + keyword + "\n";
                    }
                }["SplashCursor.useEffect.addKeywords"]);
                return keywordsString + source;
            }
            const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;

      void main () {
          vUv = aPosition * 0.5 + 0.5;
          vL = vUv - vec2(texelSize.x, 0.0);
          vR = vUv + vec2(texelSize.x, 0.0);
          vT = vUv + vec2(0.0, texelSize.y);
          vB = vUv - vec2(0.0, texelSize.y);
          gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `);
            const copyShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `);
            const clearShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
   `);
            const displayShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `;
            const splatShader = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;

      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }
    `);
            const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;

      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);

          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }

      void main () {
          #ifdef MANUAL_FILTERING
              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
              vec4 result = bilerp(uSource, coord, dyeTexelSize);
          #else
              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
              vec4 result = texture2D(uSource, coord);
          #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
      }
    `, ext.supportLinearFiltering ? null : [
                "MANUAL_FILTERING"
            ]);
            const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;

          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }

          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `);
            const curlShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `);
            const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;

      void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;

          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;

          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `);
            const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `);
            const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `);
            const blit = ({
                "SplashCursor.useEffect.blit": ()=>{
                    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                        -1,
                        -1,
                        -1,
                        1,
                        1,
                        1,
                        1,
                        -1
                    ]), gl.STATIC_DRAW);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
                    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
                        0,
                        1,
                        2,
                        0,
                        2,
                        3
                    ]), gl.STATIC_DRAW);
                    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
                    gl.enableVertexAttribArray(0);
                    return ({
                        "SplashCursor.useEffect.blit": (target, clear = false)=>{
                            if (target == null) {
                                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                            } else {
                                gl.viewport(0, 0, target.width, target.height);
                                gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
                            }
                            if (clear) {
                                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                                gl.clear(gl.COLOR_BUFFER_BIT);
                            }
                            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
                        }
                    })["SplashCursor.useEffect.blit"];
                }
            })["SplashCursor.useEffect.blit"]();
            let dye, velocity, divergence, curl, pressure;
            const copyProgram = new Program(baseVertexShader, copyShader);
            const clearProgram = new Program(baseVertexShader, clearShader);
            const splatProgram = new Program(baseVertexShader, splatShader);
            const advectionProgram = new Program(baseVertexShader, advectionShader);
            const divergenceProgram = new Program(baseVertexShader, divergenceShader);
            const curlProgram = new Program(baseVertexShader, curlShader);
            const vorticityProgram = new Program(baseVertexShader, vorticityShader);
            const pressureProgram = new Program(baseVertexShader, pressureShader);
            const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);
            const displayMaterial = new Material(baseVertexShader, displayShaderSource);
            function initFramebuffers() {
                let simRes = getResolution(config.SIM_RESOLUTION);
                let dyeRes = getResolution(config.DYE_RESOLUTION);
                const texType = ext.halfFloatTexType;
                const rgba = ext.formatRGBA;
                const rg = ext.formatRG;
                const r = ext.formatR;
                const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
                gl.disable(gl.BLEND);
                if (!dye) dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
                else dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
                if (!velocity) velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
                else velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
                divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
                curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
                pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
            }
            function createFBO(w, h, internalFormat, format, type, param) {
                gl.activeTexture(gl.TEXTURE0);
                let texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
                let fbo = gl.createFramebuffer();
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                gl.viewport(0, 0, w, h);
                gl.clear(gl.COLOR_BUFFER_BIT);
                let texelSizeX = 1.0 / w;
                let texelSizeY = 1.0 / h;
                return {
                    texture,
                    fbo,
                    width: w,
                    height: h,
                    texelSizeX,
                    texelSizeY,
                    attach (id) {
                        gl.activeTexture(gl.TEXTURE0 + id);
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                        return id;
                    }
                };
            }
            function createDoubleFBO(w, h, internalFormat, format, type, param) {
                let fbo1 = createFBO(w, h, internalFormat, format, type, param);
                let fbo2 = createFBO(w, h, internalFormat, format, type, param);
                return {
                    width: w,
                    height: h,
                    texelSizeX: fbo1.texelSizeX,
                    texelSizeY: fbo1.texelSizeY,
                    get read () {
                        return fbo1;
                    },
                    set read (value){
                        fbo1 = value;
                    },
                    get write () {
                        return fbo2;
                    },
                    set write (value){
                        fbo2 = value;
                    },
                    swap () {
                        let temp = fbo1;
                        fbo1 = fbo2;
                        fbo2 = temp;
                    }
                };
            }
            function resizeFBO(target, w, h, internalFormat, format, type, param) {
                let newFBO = createFBO(w, h, internalFormat, format, type, param);
                copyProgram.bind();
                gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
                blit(newFBO);
                return newFBO;
            }
            function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
                if (target.width === w && target.height === h) return target;
                target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
                target.write = createFBO(w, h, internalFormat, format, type, param);
                target.width = w;
                target.height = h;
                target.texelSizeX = 1.0 / w;
                target.texelSizeY = 1.0 / h;
                return target;
            }
            function updateKeywords() {
                let displayKeywords = [];
                if (config.SHADING) displayKeywords.push("SHADING");
                displayMaterial.setKeywords(displayKeywords);
            }
            updateKeywords();
            initFramebuffers();
            let lastUpdateTime = Date.now();
            let colorUpdateTimer = 0.0;
            function updateFrame() {
                const dt = calcDeltaTime();
                if (resizeCanvas()) initFramebuffers();
                updateColors(dt);
                applyInputs();
                step(dt);
                render(null);
                requestAnimationFrame(updateFrame);
            }
            function calcDeltaTime() {
                let now = Date.now();
                let dt = (now - lastUpdateTime) / 1000;
                dt = Math.min(dt, 0.016666);
                lastUpdateTime = now;
                return dt;
            }
            function resizeCanvas() {
                let width = scaleByPixelRatio(canvas.clientWidth);
                let height = scaleByPixelRatio(canvas.clientHeight);
                if (canvas.width !== width || canvas.height !== height) {
                    canvas.width = width;
                    canvas.height = height;
                    return true;
                }
                return false;
            }
            function updateColors(dt) {
                colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
                if (colorUpdateTimer >= 1) {
                    colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
                    pointers.forEach({
                        "SplashCursor.useEffect.updateColors": (p)=>{
                            p.color = generateColor();
                        }
                    }["SplashCursor.useEffect.updateColors"]);
                }
            }
            function applyInputs() {
                pointers.forEach({
                    "SplashCursor.useEffect.applyInputs": (p)=>{
                        if (p.moved) {
                            p.moved = false;
                            splatPointer(p);
                        }
                    }
                }["SplashCursor.useEffect.applyInputs"]);
            }
            function step(dt) {
                gl.disable(gl.BLEND);
                // Curl
                curlProgram.bind();
                gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
                blit(curl);
                // Vorticity
                vorticityProgram.bind();
                gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
                gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
                gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
                gl.uniform1f(vorticityProgram.uniforms.dt, dt);
                blit(velocity.write);
                velocity.swap();
                // Divergence
                divergenceProgram.bind();
                gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
                blit(divergence);
                // Clear pressure
                clearProgram.bind();
                gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
                gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
                blit(pressure.write);
                pressure.swap();
                // Pressure
                pressureProgram.bind();
                gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
                for(let i = 0; i < config.PRESSURE_ITERATIONS; i++){
                    gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
                    blit(pressure.write);
                    pressure.swap();
                }
                // Gradient Subtract
                gradienSubtractProgram.bind();
                gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
                gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
                blit(velocity.write);
                velocity.swap();
                // Advection
                advectionProgram.bind();
                gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                if (!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
                let velocityId = velocity.read.attach(0);
                gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
                gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
                gl.uniform1f(advectionProgram.uniforms.dt, dt);
                gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
                blit(velocity.write);
                velocity.swap();
                if (!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
                gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
                gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
                gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
                blit(dye.write);
                dye.swap();
            }
            function render(target) {
                gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
                gl.enable(gl.BLEND);
                drawDisplay(target);
            }
            function drawDisplay(target) {
                let width = target == null ? gl.drawingBufferWidth : target.width;
                let height = target == null ? gl.drawingBufferHeight : target.height;
                displayMaterial.bind();
                if (config.SHADING) gl.uniform2f(displayMaterial.uniforms.texelSize, 1.0 / width, 1.0 / height);
                gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
                blit(target);
            }
            function splatPointer(pointer) {
                let dx = pointer.deltaX * config.SPLAT_FORCE;
                let dy = pointer.deltaY * config.SPLAT_FORCE;
                splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
            }
            function clickSplat(pointer) {
                const color = generateColor();
                color.r *= 10.0;
                color.g *= 10.0;
                color.b *= 10.0;
                let dx = 10 * (Math.random() - 0.5);
                let dy = 30 * (Math.random() - 0.5);
                splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color);
            }
            function splat(x, y, dx, dy, color) {
                splatProgram.bind();
                gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
                gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
                gl.uniform2f(splatProgram.uniforms.point, x, y);
                gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
                gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100.0));
                blit(velocity.write);
                velocity.swap();
                gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
                gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
                blit(dye.write);
                dye.swap();
            }
            function correctRadius(radius) {
                let aspectRatio = canvas.width / canvas.height;
                if (aspectRatio > 1) radius *= aspectRatio;
                return radius;
            }
            function updatePointerDownData(pointer, id, posX, posY) {
                pointer.id = id;
                pointer.down = true;
                pointer.moved = false;
                pointer.texcoordX = posX / canvas.width;
                pointer.texcoordY = 1.0 - posY / canvas.height;
                pointer.prevTexcoordX = pointer.texcoordX;
                pointer.prevTexcoordY = pointer.texcoordY;
                pointer.deltaX = 0;
                pointer.deltaY = 0;
                pointer.color = generateColor();
            }
            function updatePointerMoveData(pointer, posX, posY, color) {
                pointer.prevTexcoordX = pointer.texcoordX;
                pointer.prevTexcoordY = pointer.texcoordY;
                pointer.texcoordX = posX / canvas.width;
                pointer.texcoordY = 1.0 - posY / canvas.height;
                pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
                pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
                pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
                pointer.color = color;
            }
            function updatePointerUpData(pointer) {
                pointer.down = false;
            }
            function correctDeltaX(delta) {
                let aspectRatio = canvas.width / canvas.height;
                if (aspectRatio < 1) delta *= aspectRatio;
                return delta;
            }
            function correctDeltaY(delta) {
                let aspectRatio = canvas.width / canvas.height;
                if (aspectRatio > 1) delta /= aspectRatio;
                return delta;
            }
            function generateColor() {
                let c = HSVtoRGB(Math.random(), 1.0, 1.0);
                c.r *= 0.15;
                c.g *= 0.15;
                c.b *= 0.15;
                return c;
            }
            function HSVtoRGB(h, s, v) {
                let r, g, b, i, f, p, q, t;
                i = Math.floor(h * 6);
                f = h * 6 - i;
                p = v * (1 - s);
                q = v * (1 - f * s);
                t = v * (1 - (1 - f) * s);
                switch(i % 6){
                    case 0:
                        r = v;
                        g = t;
                        b = p;
                        break;
                    case 1:
                        r = q;
                        g = v;
                        b = p;
                        break;
                    case 2:
                        r = p;
                        g = v;
                        b = t;
                        break;
                    case 3:
                        r = p;
                        g = q;
                        b = v;
                        break;
                    case 4:
                        r = t;
                        g = p;
                        b = v;
                        break;
                    case 5:
                        r = v;
                        g = p;
                        b = q;
                        break;
                    default:
                        break;
                }
                return {
                    r,
                    g,
                    b
                };
            }
            function wrap(value1, min, max) {
                const range = max - min;
                if (range === 0) return min;
                return (value1 - min) % range + min;
            }
            function getResolution(resolution) {
                let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
                if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
                const min = Math.round(resolution);
                const max = Math.round(resolution * aspectRatio);
                if (gl.drawingBufferWidth > gl.drawingBufferHeight) return {
                    width: max,
                    height: min
                };
                else return {
                    width: min,
                    height: max
                };
            }
            function scaleByPixelRatio(input) {
                const pixelRatio = window.devicePixelRatio || 1;
                return Math.floor(input * pixelRatio);
            }
            function hashCode(s) {
                if (s.length === 0) return 0;
                let hash = 0;
                for(let i = 0; i < s.length; i++){
                    hash = (hash << 5) - hash + s.charCodeAt(i);
                    hash |= 0;
                }
                return hash;
            }
            window.addEventListener("mousedown", {
                "SplashCursor.useEffect": (e)=>{
                    let pointer = pointers[0];
                    let posX = scaleByPixelRatio(e.clientX);
                    let posY = scaleByPixelRatio(e.clientY);
                    updatePointerDownData(pointer, -1, posX, posY);
                    clickSplat(pointer);
                }
            }["SplashCursor.useEffect"]);
            document.body.addEventListener("mousemove", function handleFirstMouseMove(e) {
                let pointer = pointers[0];
                let posX = scaleByPixelRatio(e.clientX);
                let posY = scaleByPixelRatio(e.clientY);
                let color = generateColor();
                updateFrame(); // start animation loop
                updatePointerMoveData(pointer, posX, posY, color);
                document.body.removeEventListener("mousemove", handleFirstMouseMove);
            });
            window.addEventListener("mousemove", {
                "SplashCursor.useEffect": (e)=>{
                    let pointer = pointers[0];
                    let posX = scaleByPixelRatio(e.clientX);
                    let posY = scaleByPixelRatio(e.clientY);
                    let color = pointer.color;
                    updatePointerMoveData(pointer, posX, posY, color);
                }
            }["SplashCursor.useEffect"]);
            document.body.addEventListener("touchstart", function handleFirstTouchStart(e) {
                const touches = e.targetTouches;
                let pointer = pointers[0];
                for(let i = 0; i < touches.length; i++){
                    let posX = scaleByPixelRatio(touches[i].clientX);
                    let posY = scaleByPixelRatio(touches[i].clientY);
                    updateFrame(); // start animation loop
                    updatePointerDownData(pointer, touches[i].identifier, posX, posY);
                }
                document.body.removeEventListener("touchstart", handleFirstTouchStart);
            });
            window.addEventListener("touchstart", {
                "SplashCursor.useEffect": (e)=>{
                    const touches = e.targetTouches;
                    let pointer = pointers[0];
                    for(let i = 0; i < touches.length; i++){
                        let posX = scaleByPixelRatio(touches[i].clientX);
                        let posY = scaleByPixelRatio(touches[i].clientY);
                        updatePointerDownData(pointer, touches[i].identifier, posX, posY);
                    }
                }
            }["SplashCursor.useEffect"]);
            window.addEventListener("touchmove", {
                "SplashCursor.useEffect": (e)=>{
                    const touches = e.targetTouches;
                    let pointer = pointers[0];
                    for(let i = 0; i < touches.length; i++){
                        let posX = scaleByPixelRatio(touches[i].clientX);
                        let posY = scaleByPixelRatio(touches[i].clientY);
                        updatePointerMoveData(pointer, posX, posY, pointer.color);
                    }
                }
            }["SplashCursor.useEffect"], false);
            window.addEventListener("touchend", {
                "SplashCursor.useEffect": (e)=>{
                    const touches = e.changedTouches;
                    let pointer = pointers[0];
                    for(let i = 0; i < touches.length; i++){
                        updatePointerUpData(pointer);
                    }
                }
            }["SplashCursor.useEffect"]);
            updateFrame();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["SplashCursor.useEffect"], [
        SIM_RESOLUTION,
        DYE_RESOLUTION,
        CAPTURE_RESOLUTION,
        DENSITY_DISSIPATION,
        VELOCITY_DISSIPATION,
        PRESSURE,
        PRESSURE_ITERATIONS,
        CURL,
        SPLAT_RADIUS,
        SPLAT_FORCE,
        SHADING,
        COLOR_UPDATE_SPEED,
        BACK_COLOR,
        TRANSPARENT
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 z-50 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            id: "fluid",
            className: "w-screen h-screen"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/splash-cursor.jsx",
            lineNumber: 1118,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/splash-cursor.jsx",
        lineNumber: 1117,
        columnNumber: 5
    }, this);
}
_s(SplashCursor, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = SplashCursor;
;
var _c;
__turbopack_refresh__.register(_c, "SplashCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/about/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_c0f599._.js.map