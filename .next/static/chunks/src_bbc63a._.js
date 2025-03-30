(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_bbc63a._.js", {

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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-40 md:h-64 w-full transition-all duration-300 ease-out", hovered !== null && hovered !== index && "blur-sm scale-[0.98]"),
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
        className: "grid grid-cols-1 md:grid-cols-4 gap-2 max-w-7xl mx-auto md:px-8 w-full",
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
"[project]/src/app/about/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_bbc63a._.js.map