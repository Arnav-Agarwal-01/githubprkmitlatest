module.exports = {

"[project]/src/components/background.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ImageBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ImageBackground() {
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Divide the screen into grid sections to ensure better distribution
        const gridSize = Math.ceil(Math.sqrt(images.length));
        const cellWidth = 100 / gridSize;
        const cellHeight = 100 / gridSize;
        // Create positions with better distribution
        const initialPositions = images.map((_, index)=>{
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
        });
        setPositions(initialPositions);
        // Upward movement effect
        const interval = setInterval(()=>{
            setPositions((prev)=>prev.map((pos)=>({
                        top: (pos.top - 5 + 100) % 100,
                        left: pos.left,
                        rotate: pos.rotate,
                        scale: pos.scale,
                        zIndex: pos.zIndex
                    })));
        }, 3000); // Faster interval for smoother movement
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-14dbb59a94302830" + " " + "background",
        children: [
            images.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        top: `${positions[index]?.top}%`,
                        left: `${positions[index]?.left}%`,
                        transform: `rotate(${positions[index]?.rotate}deg) scale(${positions[index]?.scale})`,
                        zIndex: positions[index]?.zIndex,
                        backgroundColor: index % 3 === 0 ? 'rgba(255, 100, 50, 0.2)' : index % 3 === 1 ? 'rgba(30, 144, 255, 0.2)' : 'rgba(200, 200, 200, 0.2)'
                    },
                    className: "jsx-14dbb59a94302830" + " " + "image-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}}),
"[project]/src/app/about/page.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_a0df64._.js.map