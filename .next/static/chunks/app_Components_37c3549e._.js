(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/Components/Navbar/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Function to handle smooth scrolling to a section
    const scrollToSection = (sectionId)=>{
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
        // Close the mobile menu after clicking a link
        setIsOpen(false);
    };
    // Listen to scroll events and toggle isScrolled state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    // Check if the user has scrolled past a certain threshold (e.g., 50px)
                    const scrolled = window.scrollY > 50;
                    console.log("Scroll position:", window.scrollY, "isScrolled:", scrolled); // Debug log
                    setIsScrolled(scrolled);
                }
            }["Navbar.useEffect.handleScroll"];
            // Add scroll event listener
            window.addEventListener("scroll", handleScroll);
            // Trigger handleScroll on mount to set initial state
            handleScroll();
            // Cleanup the event listener on component unmount
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed z-30 w-full top-0 left-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[100%] mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] w-[90%] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `2xl:w-[964px] xl:w-[964px] lg:w-[885px] md:w-[664px] w-full 2xl:h-[93px] 
                xl:h-[93px] lg:h-[82px] md:h-[62px] h-[56px] 2xl:mt-[44px] xl:mt-[40px] lg:mt-[20px] md:mt-[15px] mt-[10px] 2xl:rounded-[20px] xl:rounded-[20px] lg:rounded-[18px] md:rounded-[15px] rounded-[12px] mx-auto px-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? "bg-white shadow-custom" : "bg-[#FFFFFF1A] backdrop-blur-[4px]"}`,
                        style: isScrolled ? {
                            boxShadow: "0px 4px 30px #D8D8D866"
                        } : {},
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/Images/logo.svg",
                                alt: "logo",
                                width: 66,
                                height: 66,
                                className: "2xl:my-[13px] xl:my-[13px] lg:my-[16px] md:my-[12px] my-[8px] 2xl:w-[66px]  2xl:h-[66px] xl:w-[66px] xl:h-[66px] lg:w-[50.67px] lg:h-[50.67px] md:w-[38px] md:h-[38px] w-[38px] h-[38px]"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: `2xl:flex xl:flex lg:flex md:flex 2xl:w-[524px] xl:w-[524px] lg:w-[527px] 
                md:w-[399px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[14px] leading-[100%] items-center geologica font-medium justify-between hidden transition-colors duration-300 ${isScrolled ? "text-[#1B1A1F]" : "text-[#FFFFFF]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("home"),
                                        className: `cursor-pointer transition-colors ${isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"}`,
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("what-makes"),
                                        className: `cursor-pointer transition-colors ${isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"}`,
                                        children: "Features"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("scan"),
                                        className: `cursor-pointer transition-colors ${isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"}`,
                                        children: "Who It's For"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("integrate"),
                                        className: `cursor-pointer transition-colors ${isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"}`,
                                        children: "Integrate With Your App"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `bg-[#1B1A1F] 2xl:w-[141px] 2xl:h-[56px] xl:w-[141px] xl:h-[56px] lg:w-[137.33px] 
                lg:h-[56px] md:w-[100px] md:h-[42px] hidden 2xl:block xl:block lg:block md:block 2xl:rounded-[15px] 
                xl:rounded-[15px] lg:rounded-[12px] md:rounded-[8px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[13px] leading-[100%] 2xl:my-[19px] xl:my-[19px] lg:my-[13.33px] md:my-[10px] geologica font-medium transition-colors duration-300 ${isScrolled ? "text-white" : "text-[#FFFFFF]"}`,
                                children: "Get free trial"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(!isOpen),
                                    className: "w-[33px] h-[33px] bg-[#ffffff] rounded-[5px] flex items-center justify-center",
                                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#1B1A1F] text-[20px] font-bold",
                                        children: "X"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/menu.svg",
                                        alt: "menu",
                                        width: 25,
                                        height: 25
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `fixed top-0 right-0 h-screen w-[80vw] bg-[#FFFFFF] shadow-lg z-40 px-12 py-5 text-[#1B1A1F] text-base font-medium geologica flex flex-col transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-black text-2xl font-bold",
                                    children: "X"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-4 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>scrollToSection("home"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>scrollToSection("what-makes"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Features"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>scrollToSection("scan"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Who It's For"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>scrollToSection("integrate"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Integrate With Your App"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-[#1B1A1F] text-[#FFFFFF] px-4 py-2 rounded-md w-full mt-10",
                                children: "Get free trial"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Components/Navbar/Navbar.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Navbar, "ih+zOjPnCwe91JM2Yua0KTFwF/0=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/Scan./Scan.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Scan)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
function Scan() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b289cafc66bc09e9" + " " + "w-full bg-[#ffffff] overflow-hidden ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b289cafc66bc09e9" + " " + "2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px]  w-[100%] mx-auto overflow-hidden  ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b289cafc66bc09e9" + " " + "2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px]  w-[90%] mx-auto  ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b289cafc66bc09e9" + " " + "2xl:w-[1068px] xl:w-[950.65px] lg:w-[806.67px] md:w-[605px] sm:w-[500px]  w-[273px]  py-[50px] lg:py-[90px] md:py-[70px] 2xl:py-0 xl:py-0 mx-auto relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b289cafc66bc09e9" + " " + "lg:w-[646px]  md:w-[484px] sm:w-[400px] w-[273px] md:mt-[70px] mx-auto 2xl:hidden xl:hidden lg:block md:block ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b289cafc66bc09e9" + " " + "lg:w-[448px] md:w-[434px] sm:w-[380px]  w-[266px] sm:text-[32px] text-[20px] lg:text-[36px] md:text-[34px] text-[#000000] leading-[100%] font-semibold geologica flex justify-between mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-b289cafc66bc09e9",
                                                    children: "Analyze."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 14,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-b289cafc66bc09e9",
                                                    children: "Scan."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 15,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-b289cafc66bc09e9",
                                                    children: "Results."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 16,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                            lineNumber: 13,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-b289cafc66bc09e9" + " " + "lg:text-[20px] md:text-[16px] sm:text-[16px] text-[14px] lg:mt-[20px] md:mt-[24px] sm:mt-[22px]  mt-[15px] text-[#7D7C81] leading-[100%] geologica text-center",
                                            children: "Helping health professionals guide clients to better nutrition is challenging. Endless food options, misleading labels, and confusing choices."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                            lineNumber: 18,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                    lineNumber: 12,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        backgroundImage: "url('/Images/animation-bg.png')"
                                    },
                                    className: "jsx-b289cafc66bc09e9" + " " + "bg-cover bg-center bg-no-repeat w-[273px] h-[273px] sm:w-[500px] sm:h-[500px] sm:mt-[40px]  2xl:mt-0 xl:mt-0 2xl:w-[1068px] 2xl:h-[1069px] xl:w-[950.65px] xl:h-[951.54px] md:w-[605px] md:h-[605px] md:mt-[50px] mt-[50px] lg:w-[806.67px] lg:h-[806.67px] lg:mt-[80px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b289cafc66bc09e9" + " " + "w-[64px] h-[64px] my-[110px] mx-[107px] sm:mx-[200px] sm:my-[200px]  lg:w-[210px] lg:h-[210px]  sm:w-[100px] sm:h-[100px] sm:rounded-[70px] md:w-[157px] md:h-[157px] lg:rounded-[106.67px] rounded-[32px] md:rounded-[80px]  p-[13.44px] lg:p-[44.14px] md:p-[33px] lg:my-[299.67px] md:my-[225px] lg:mx-[297px] md:mx-[223px] absolute bg-[#1B1A1F] 2xl:hidden xl:hidden lg:block md:block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/Images/logo.svg",
                                                alt: "Green circular icon with a checkmark",
                                                width: 37.12,
                                                height: 37.12,
                                                className: "lg:w-[121.72px] lg:h-[121.72px] md:w-[91px] md:h-[91px] sm:h-[75px] sm:w-[75px]  mx-auto"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                lineNumber: 30,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b289cafc66bc09e9" + " " + "2xl:w-[592px] xl:w-[527px] 2xl:mx-[238px] xl:mx-[211px] xl:my-[330px] 2xl:my-[351px] absolute hidden lg:hidden md:hidden 2xl:block xl:block",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-b289cafc66bc09e9" + " " + "2xl:text-[40px] xl:text-[36px] font-semibold text-center leading-[100%] text-[#000000]",
                                                    children: "Scan."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b289cafc66bc09e9" + " " + "flex 2xl:w-[454px] xl:w-[405.48px] justify-between 2xl:mt-[13px] xl:mt-[10.7px] mx-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "jsx-b289cafc66bc09e9" + " " + "2xl:text-[40px] xl:text-[36px] 2xl:mt-[25px] xl:mt-[22px] font-semibold text-center text-[#000000] leading-[100%]",
                                                            children: "Analyze."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-b289cafc66bc09e9" + " " + "2xl:w-[100px] 2xl:h-[100px] xl:w-[89px] xl:h-[89px] 2xl:rounded-[50px] xl:rounded-[44.51px] bg-[#1B1A1F]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/Images/logo.svg",
                                                                alt: "Green circular icon with a checkmark",
                                                                width: 58,
                                                                height: 58,
                                                                className: "2xl:w-[58px] 2xl:h-[58px] xl:w-[52px] xl:h-[52px] 2xl:my-[21px] xl:my-[19px] mx-auto",
                                                                priority: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                                lineNumber: 49,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "jsx-b289cafc66bc09e9" + " " + "text-[#000000] 2xl:text-[40px] xl:text-[36px] font-semibold text-center leading-[100%] 2xl:mt-[25px] xl:mt-[22px]",
                                                            children: "Results."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-b289cafc66bc09e9" + " " + "text-[#7D7C81] 2xl:w-[592px] xl:w-[527px] 2xl:text-[20px] xl:text-[20px] leading-[100%] 2xl:mt-[30px] xl:mt-[27.3px] text-center",
                                                    children: "Helping health professionals guide clients to better nutrition is challenging. Endless food options, misleading labels, and confusing choices."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b289cafc66bc09e9" + " " + "flex justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "jsx-b289cafc66bc09e9" + " " + ([
                                                            "2xl:w-[249px] 2xl:h-[61px] xl:w-[239px] xl:h-[51px]",
                                                            "2xl:text-[17px] xl:text-[16px] 2xl:rounded-[15px] xl:rounded-[14px]",
                                                            "flex items-center justify-center",
                                                            "2xl:mt-[64px] xl:mt-[57px] bg-[#1B1A1F] text-[#ffffff]"
                                                        ].join(" ") || ""),
                                                        children: "Get free trial"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b289cafc66bc09e9" + " " + "circular-motion flex justify-center items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b289cafc66bc09e9" + " " + "card absolute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/gym owners.svg",
                                                            alt: "gym owners",
                                                            width: 182,
                                                            height: 0,
                                                            className: "2xl:w-[300px] xl:w-[250px] lg:w-[162px] md:w-[162px] hidden  lg:block md:block 2xl:block xl:block sm:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/gym owners-iscon.svg",
                                                            alt: "gym owners-iscon",
                                                            width: 150,
                                                            height: 40,
                                                            className: "lg:hidden md:hidden sm:hidden block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b289cafc66bc09e9" + " " + "card absolute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/sport coaches.svg",
                                                            alt: "sport coaches",
                                                            width: 182,
                                                            height: 0,
                                                            className: "2xl:w-[300px] xl:w-[250px] lg:w-[189px] md:w-[189px]  hidden  lg:block md:block 2xl:block xl:block sm:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/sport coaches-icons.svg",
                                                            alt: "sport coaches-iscon",
                                                            width: 150,
                                                            height: 40,
                                                            className: " lg:hidden md:hidden sm:hidden block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b289cafc66bc09e9" + " " + "card absolute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/nutritions.svg",
                                                            alt: "nutritions",
                                                            width: 182,
                                                            height: 0,
                                                            className: "2xl:w-[300px] xl:w-[250px]  lg:w-[162px] md:w-[162px] hidden  lg:block md:block 2xl:block xl:block sm:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/nutritions-icons.svg",
                                                            alt: "nutritions-iscon",
                                                            width: 150,
                                                            height: 40,
                                                            className: "lg:hidden sm:hidden md:hidden block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b289cafc66bc09e9" + " " + "card absolute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/health-care.svg",
                                                            alt: "health-care",
                                                            width: 182,
                                                            height: 0,
                                                            className: "2xl:w-[300px] xl:w-[250px] lg:w-[178px] md:w-[178px]  hidden  lg:block md:block 2xl:block xl:block sm:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/health-care-icons.svg",
                                                            alt: "health-care-iscon",
                                                            width: 150,
                                                            height: 40,
                                                            className: "lg:hidden md:hidden sm:hidden block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b289cafc66bc09e9" + " " + "card absolute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/Wellness & Fitness.svg",
                                                            alt: "wellness & fitness",
                                                            width: 182,
                                                            height: 0,
                                                            className: "2xl:w-[300px] xl:w-[250px] lg:w-[211px] md:w-[211px]  hidden  lg:block md:block 2xl:block xl:block sm:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/Wellness & Fitness-icons.svg",
                                                            alt: "wellness & fitness-iscon",
                                                            width: 150,
                                                            height: 40,
                                                            className: " block md:hidden lg:hidden sm:hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b289cafc66bc09e9" + " " + "card absolute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/Yoga instructors.svg",
                                                            alt: "yoga instructors",
                                                            width: 182,
                                                            height: 0,
                                                            className: "2xl:w-[300px] xl:w-[250px] lg:w-[194px] md:w-[194px]  hidden  lg:block md:block 2xl:block xl:block sm:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/Yoga instructors-icons.svg",
                                                            alt: "yoga instructors-iscon",
                                                            width: 150,
                                                            height: 40,
                                                            className: " block md:hidden lg:hidden sm:hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Scan./Scan.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/Scan./Scan.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "b289cafc66bc09e9",
                children: ".circular-motion.jsx-b289cafc66bc09e9{justify-content:center;align-items:center;width:1068px;height:1068px;display:flex;position:relative}.card.jsx-b289cafc66bc09e9{transform-origin:548px 548px;animation:25s linear infinite spin,25s linear infinite fadeAndHide;position:absolute}.card.jsx-b289cafc66bc09e9:first-child{animation-delay:0s;transform:rotate(0)translate(548px)rotate(0)}.card.jsx-b289cafc66bc09e9:nth-child(2){animation-delay:-4.17s;transform:rotate(60deg)translate(548px)rotate(-60deg)}.card.jsx-b289cafc66bc09e9:nth-child(3){animation-delay:-8.34s;transform:rotate(120deg)translate(548px)rotate(-120deg)}.card.jsx-b289cafc66bc09e9:nth-child(4){animation-delay:-12.5s;transform:rotate(180deg)translate(548px)rotate(-180deg)}.card.jsx-b289cafc66bc09e9:nth-child(5){animation-delay:-16.67s;transform:rotate(240deg)translate(548px)rotate(-240deg)}.card.jsx-b289cafc66bc09e9:nth-child(6){animation-delay:-20.84s;transform:rotate(300deg)translate(548px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(548px)rotate(0)}to{transform:rotate(360deg)translate(548px)rotate(-360deg)}}@keyframes fadeAndHide{0%{opacity:1;visibility:visible}24%{opacity:.1;visibility:visible}25%{opacity:0;visibility:hidden}26%{opacity:.1;visibility:visible}50%{opacity:1;visibility:visible}74%{opacity:.1;visibility:visible}75%{opacity:0;visibility:hidden}76%{opacity:.1;visibility:visible}to{opacity:1;visibility:visible}}@media (width<=1537px){.circular-motion.jsx-b289cafc66bc09e9{width:950.65px;height:951.54px}.card.jsx-b289cafc66bc09e9{transform-origin:488px 488px;border-radius:28px;animation:25s linear infinite spin,25s linear infinite fadeAndHide}.card.jsx-b289cafc66bc09e9:first-child{transform:rotate(0)translate(488px)rotate(0)}.card.jsx-b289cafc66bc09e9:nth-child(2){transform:rotate(60deg)translate(488px)rotate(-60deg)}.card.jsx-b289cafc66bc09e9:nth-child(3){transform:rotate(120deg)translate(488px)rotate(-120deg)}.card.jsx-b289cafc66bc09e9:nth-child(4){transform:rotate(180deg)translate(488px)rotate(-180deg)}.card.jsx-b289cafc66bc09e9:nth-child(5){transform:rotate(240deg)translate(488px)rotate(-240deg)}.card.jsx-b289cafc66bc09e9:nth-child(6){transform:rotate(300deg)translate(488px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(488px)rotate(0)}to{transform:rotate(360deg)translate(488px)rotate(-360deg)}}@keyframes fadeAndHide{0%{opacity:1;visibility:visible}24%{opacity:.1;visibility:visible}25%{opacity:0;visibility:hidden}26%{opacity:.1;visibility:visible}50%{opacity:1;visibility:visible}74%{opacity:.1;visibility:visible}75%{opacity:0;visibility:hidden}76%{opacity:.1;visibility:visible}to{opacity:1;visibility:visible}}}@media (width<=1439px){.circular-motion.jsx-b289cafc66bc09e9{width:950.65px;height:951.54px}.card.jsx-b289cafc66bc09e9{transform-origin:488px 488px;border-radius:28px;animation:25s linear infinite spin,25s linear infinite fadeAndHide}.card.jsx-b289cafc66bc09e9:first-child{transform:rotate(0)translate(488px)rotate(0)}.card.jsx-b289cafc66bc09e9:nth-child(2){transform:rotate(60deg)translate(488px)rotate(-60deg)}.card.jsx-b289cafc66bc09e9:nth-child(3){transform:rotate(120deg)translate(488px)rotate(-120deg)}.card.jsx-b289cafc66bc09e9:nth-child(4){transform:rotate(180deg)translate(488px)rotate(-180deg)}.card.jsx-b289cafc66bc09e9:nth-child(5){transform:rotate(240deg)translate(488px)rotate(-240deg)}.card.jsx-b289cafc66bc09e9:nth-child(6){transform:rotate(300deg)translate(488px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(488px)rotate(0)}to{transform:rotate(360deg)translate(488px)rotate(-360deg)}}@keyframes fadeAndHide{0%{opacity:1;visibility:visible}24%{opacity:.1;visibility:visible}25%{opacity:0;visibility:hidden}26%{opacity:.1;visibility:visible}50%{opacity:1;visibility:visible}74%{opacity:.1;visibility:visible}75%{opacity:0;visibility:hidden}76%{opacity:.1;visibility:visible}to{opacity:1;visibility:visible}}}@media (width<=1279px){.circular-motion.jsx-b289cafc66bc09e9{width:806.67px;height:806.67px}.card.jsx-b289cafc66bc09e9{transform-origin:414px 414px;border-radius:28px;animation:25s linear infinite spin}.card.jsx-b289cafc66bc09e9:first-child{transform:rotate(0)translate(414px)rotate(0)}.card.jsx-b289cafc66bc09e9:nth-child(2){transform:rotate(60deg)translate(414px)rotate(-60deg)}.card.jsx-b289cafc66bc09e9:nth-child(3){transform:rotate(120deg)translate(414px)rotate(-120deg)}.card.jsx-b289cafc66bc09e9:nth-child(4){transform:rotate(180deg)translate(414px)rotate(-180deg)}.card.jsx-b289cafc66bc09e9:nth-child(5){transform:rotate(240deg)translate(414px)rotate(-240deg)}.card.jsx-b289cafc66bc09e9:nth-child(6){transform:rotate(300deg)translate(414px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(414px)rotate(0)}to{transform:rotate(360deg)translate(414px)rotate(-360deg)}}}@media (width<=1023px){.circular-motion.jsx-b289cafc66bc09e9{width:605px;height:650px}.card.jsx-b289cafc66bc09e9{transform-origin:310px 310px;border-radius:21px;animation:25s linear infinite spin}.card.jsx-b289cafc66bc09e9:first-child{transform:rotate(0)translate(310px)rotate(0)}.card.jsx-b289cafc66bc09e9:nth-child(2){transform:rotate(60deg)translate(310px)rotate(-60deg)}.card.jsx-b289cafc66bc09e9:nth-child(3){transform:rotate(120deg)translate(310px)rotate(-120deg)}.card.jsx-b289cafc66bc09e9:nth-child(4){transform:rotate(180deg)translate(310px)rotate(-180deg)}.card.jsx-b289cafc66bc09e9:nth-child(5){transform:rotate(240deg)translate(310px)rotate(-240deg)}.card.jsx-b289cafc66bc09e9:nth-child(6){transform:rotate(300deg)translate(310px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(310px)rotate(0)}to{transform:rotate(360deg)translate(310px)rotate(-360deg)}}}@media (width<=767px){.circular-motion.jsx-b289cafc66bc09e9{width:500px;height:550px}.card.jsx-b289cafc66bc09e9{transform-origin:250px 250px;border-radius:9px;animation:25s linear infinite spin}.card.jsx-b289cafc66bc09e9:first-child{animation-delay:0s;transform:rotate(0)translate(250px)rotate(0)}.card.jsx-b289cafc66bc09e9:nth-child(2){animation-delay:-4.17s;transform:rotate(60deg)translate(250px)rotate(-60deg)}.card.jsx-b289cafc66bc09e9:nth-child(3){animation-delay:-8.34s;transform:rotate(120deg)translate(250px)rotate(-120deg)}.card.jsx-b289cafc66bc09e9:nth-child(4){animation-delay:-12.5s;transform:rotate(180deg)translate(250px)rotate(-180deg)}.card.jsx-b289cafc66bc09e9:nth-child(5){animation-delay:-16.67s;transform:rotate(240deg)translate(250px)rotate(-240deg)}.card.jsx-b289cafc66bc09e9:nth-child(6){animation-delay:-20.84s;transform:rotate(300deg)translate(250px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(250px)rotate(0)}to{transform:rotate(360deg)translate(250px)rotate(-360deg)}}@keyframes fadeAndHide{0%{opacity:1;visibility:visible}24%{opacity:.1;visibility:visible}25%{opacity:0;visibility:hidden}26%{opacity:.1;visibility:visible}50%{opacity:1;visibility:visible}74%{opacity:.1;visibility:visible}75%{opacity:0;visibility:hidden}76%{opacity:.1;visibility:visible}to{opacity:1;visibility:visible}}}@media (width<=639px){.circular-motion.jsx-b289cafc66bc09e9{justify-content:center;align-items:center;width:273px;height:330px;display:flex}.card.jsx-b289cafc66bc09e9{transform-origin:140px 140px;border-radius:9px;animation:25s linear infinite spin}.card.jsx-b289cafc66bc09e9:first-child{animation-delay:0s;transform:rotate(0)translate(140px)rotate(0)}.card.jsx-b289cafc66bc09e9:nth-child(2){animation-delay:-4.17s;transform:rotate(60deg)translate(140px)rotate(-60deg)}.card.jsx-b289cafc66bc09e9:nth-child(3){animation-delay:-8.34s;transform:rotate(120deg)translate(140px)rotate(-120deg)}.card.jsx-b289cafc66bc09e9:nth-child(4){animation-delay:-12.5s;transform:rotate(180deg)translate(140px)rotate(-180deg)}.card.jsx-b289cafc66bc09e9:nth-child(5){animation-delay:-16.67s;transform:rotate(240deg)translate(140px)rotate(-240deg)}.card.jsx-b289cafc66bc09e9:nth-child(6){animation-delay:-20.84s;transform:rotate(300deg)translate(140px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(140px)rotate(0)}to{transform:rotate(360deg)translate(140px)rotate(-360deg)}}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_c = Scan;
var _c;
__turbopack_context__.k.register(_c, "Scan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/Frequently/Frequently.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Frequently)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const filteredFAQs = [
    {
        id: '1',
        title: 'How do I integrate this solution into my app?',
        description: 'Most orders are processed and sent out within 24–48 hours after inventory arrives.'
    },
    {
        id: '2',
        title: 'Is technical knowledge required for integration?',
        description: 'Yes, we offer careful packaging and handling for delicate or special care products.'
    },
    {
        id: '3',
        title: 'Can I customize the features to match my apps design?',
        description: 'Absolutely, we provide tracking and inventory updates so you’re always in the loop.'
    },
    {
        id: '4',
        title: 'What platforms are supported?',
        description: 'Absolutely, we provide tracking and inventory updates so you’re always in the loop.'
    },
    {
        id: '5',
        title: 'How long does it take to integrate?',
        description: 'Absolutely, we provide tracking and inventory updates so you’re always in the loop.'
    }
];
const Card = ({ item, isActive, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "cursor-pointer w-full h-auto bg-white px-[35px] py-[22px] rounded-[15px] transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "2xl:text-[20px] xl:text-[18px] lg:text-[17px] md:text-[17px] text-[16px] font-semibold text-[#1B1A1F]",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                        lineNumber: 54,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        animate: {
                            rotate: isActive ? 180 : 0
                        },
                        transition: {
                            duration: 0.15
                        },
                        className: "text-xl text-[#1B1A1F]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowDown"], {}, void 0, false, {
                            fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                            lineNumber: 63,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                        lineNumber: 58,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: 'auto'
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    transition: {
                        duration: 0.15
                    },
                    className: "overflow-hidden 2xl:mt-[10px] xl:mt-[15px] lg:mt-[15px] md:mt-[15px] mt-[15px] 2xl:text-[18px] xl:text-[17px] lg:text-[16px] md:text-[16px] text-[14px] text-[#1B1A1F]",
                    children: item.description
                }, void 0, false, {
                    fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                lineNumber: 67,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Components/Frequently/Frequently.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, this);
_c = Card;
function Frequently() {
    _s();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleClick = (id)=>{
        setActiveId((prev)=>prev === id ? null : id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#F7F7F7] w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[100%] h-auto md:h-[720px]  2xl:h-[800px] xl:h-[800px] lg:h-[800px] 2xl:py-[75px] xl:py-[95px] lg:py-[100px] md:py-[50px] py-[40px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] w-[90%] mx-auto ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "2xl:w-[308px] 2xl:h-[54px] xl:w-[308px] xl:h-[54px] w-[265px] h-[46px] lg:w-[276px] lg:h-[54px] md:w-[276px] md:h-[54px] bg-[#ffffff]  2xl:rounded-[50px] xl:rounded-[50px] lg:rounded-[50px] md:rounded-[50px] rounded-[50px] flex 2xl:gap-[11px] xl:gap-[11px] lg:gap-[11px] md:gap-[11px] gap-[8.21px] mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "2xl:w-[39px] 2xl:h-[39px] xl:w-[39px] xl:h-[39px] lg:w-[39px] lg:h-[39px]  md:w-[39px] md:h-[39px] w-[30px] h-[30px] bg-[#C7FFE1] rounded-full 2xl:ml-[8px] xl:ml-[8px] 2xl:my-[8px] xl:my-[8px] md:my-[8px] my-[8px] lg:my-[8px] lg:ml-[8px] md:ml-[8px] ml-[8px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Frequently-icon.svg",
                                        alt: "icon",
                                        width: 20.53,
                                        height: 20.53,
                                        className: "2xl:w-[26px]  xl:w-[26px]  lg:w-[26px] md:w-[26px] md:h-[26px] 2xl:my-[6px] xl:my-[6px] 2xl:mx-[6px] xl:mx-[6px] md:mx-[7px] md:my-[6px] lg:mx-[7px] lg:my-[6px] mx-[5.53px] my-[4.74px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: " 2xl:text-[18px] xl:text-[18px] lg:text-[16px] md:text-[16px] text-[16px] 2xl:my-[18px] xl:my-[18px] lg:my-[16px] md:my-[17px] my-[13px] text-[#1B1A1F] font-normal geologica leading-[100%]",
                                    children: "Frequently asked question"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "2xl:text-[40px] xl:text-[36px] lg:text-[36px] md:text-[34px] text-[20px] 2xl:mt-[40px] xl:mt-[30px] lg:mt-[30px] md:mt-[30px] mt-[20px] text-[#1B1A1F] geologica font-bold w-[50%] lg:w-full md:w-full 2xl:w-full xl:w-full mx-auto leading-[130%] text-center ",
                            children: "Quick Help for Easy Integration"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "2xl:w-[866px] xl:w-[866px] lg:w-[668px] md:w-[668px] w-[90%] mx-auto 2xl:mt-[65px] xl:mt-[70px] lg:mt-[53px] md:mt-[55px] mt-[30px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col 2xl:gap-[15px] xl:gap-[15px] lg:gap-[15px] md:gap-[15px] gap-[15px]",
                                children: filteredFAQs.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        item: item,
                                        isActive: activeId === item.id,
                                        onClick: ()=>handleClick(item.id)
                                    }, item.id, false, {
                                        fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Components/Frequently/Frequently.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Frequently, "rNhBSDzMaHbVUX4Eik4A5qiLMlg=");
_c1 = Frequently;
var _c, _c1;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "Frequently");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/Our Technology/Our Technology.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OurTechnology)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function OurTechnology() {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    // Create separate animation controls for each chip
    const controls = Array.from({
        length: 11
    }, _s1(()=>{
        _s1();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    }, "YfilLoO5ZZXq7jwRX1lU3wfYQNM=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
        ];
    }));
    // Reference to the section to observe
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Detect if the section is in view
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "0px 0px -100px 0px"
    });
    // State to store the current screen size, typed as ScreenSize
    const [screenSize, setScreenSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('mobile');
    // State to store the sorted order of chips based on top positions
    const [sortedOrder, setSortedOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Detect screen size on mount and on resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurTechnology.useEffect": ()=>{
            const handleResize = {
                "OurTechnology.useEffect.handleResize": ()=>{
                    const width = window.innerWidth;
                    if (width >= 1440) {
                        setScreenSize('2xl');
                    } else if (width >= 1280) {
                        setScreenSize('xl');
                    } else if (width >= 1024) {
                        setScreenSize('lg');
                    } else if (width >= 768) {
                        setScreenSize('md');
                    } else if (width >= 640) {
                        setScreenSize('sm');
                    } else {
                        setScreenSize('mobile');
                    }
                }
            }["OurTechnology.useEffect.handleResize"];
            handleResize(); // Initial check
            window.addEventListener('resize', handleResize);
            return ({
                "OurTechnology.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["OurTechnology.useEffect"];
        }
    }["OurTechnology.useEffect"], []);
    // Define final top positions for each chip based on screen size
    const finalTopPositions = {
        '2xl': [
            '62.44%',
            '68.78%',
            '84.65%',
            '79.36%',
            '87.29%',
            '71.43%',
            '76.72%',
            '58.22%',
            '82.53%',
            '58.22%',
            '83.06%'
        ],
        xl: [
            '68.94%',
            '71.90%',
            '86.69%',
            '78.24%',
            '87.53%',
            '58.38%',
            '71.90%',
            '85.00%',
            '59.22%',
            '65.56%',
            '82.46%'
        ],
        lg: [
            '88.17%',
            '83.46%',
            '57.00%',
            '78.70%',
            '80.67%',
            '68.84%',
            '73.97%',
            '63.71%',
            '58.97%',
            '60.94%',
            '72.78%'
        ],
        md: [
            '87.48%',
            '87.48%',
            '59.33%',
            '78.82%',
            '76.65%',
            '89.65%',
            '76.65%',
            '65.83%',
            '61.50%',
            '61.50%',
            '76.65%'
        ],
        sm: [
            '90.48%',
            '86.48%',
            '65.33%',
            '78.82%',
            '76.65%',
            '89.65%',
            '74.65%',
            '65.83%',
            '61.50%',
            '61.50%',
            '76.65%'
        ],
        mobile: [
            '90.77%',
            '62.56%',
            '40.64%',
            '81.18%',
            '56.92%',
            '65.38%',
            '71.03%',
            '54.10%',
            '49.02%',
            '45.64%',
            '81.74%'
        ]
    };
    // Define final rotation values for each chip based on screen size
    const finalRotations = {
        '2xl': [
            -25,
            -7,
            -3,
            -15,
            0,
            0,
            -22,
            20,
            -16,
            30,
            -17
        ],
        xl: [
            -25,
            -12,
            0,
            -23,
            0,
            14,
            -16,
            18,
            9,
            16,
            21
        ],
        lg: [
            0,
            -9,
            -9,
            17,
            -20,
            5,
            -36,
            0,
            -27,
            13,
            9
        ],
        md: [
            0,
            -9,
            -20,
            -22,
            -16,
            -15,
            -36,
            0,
            -28,
            14,
            9
        ],
        sm: [
            0,
            -30,
            -20,
            -22,
            -16,
            -15,
            -36,
            0,
            -28,
            14,
            9
        ],
        mobile: [
            0,
            -13,
            -8,
            -19,
            -14,
            0,
            5,
            -23,
            -15,
            9,
            -22
        ]
    };
    // Sort chips by final top position (highest to lowest) when screen size changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurTechnology.useEffect": ()=>{
            const indices = Array.from({
                length: 11
            }, {
                "OurTechnology.useEffect.indices": (_, i)=>i
            }["OurTechnology.useEffect.indices"]); // [0, 1, 2, ..., 10]
            const sorted = indices.sort({
                "OurTechnology.useEffect.sorted": (a, b)=>{
                    const topA = parseFloat(finalTopPositions[screenSize][a]); // Convert percentage to number
                    const topB = parseFloat(finalTopPositions[screenSize][b]);
                    return topB - topA; // Sort in descending order (highest first)
                }
            }["OurTechnology.useEffect.sorted"]);
            setSortedOrder(sorted);
        }
    }["OurTechnology.useEffect"], [
        screenSize
    ]);
    // Trigger animations sequentially in sorted order when the section comes into view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurTechnology.useEffect": ()=>{
            if (isInView && sortedOrder.length > 0) {
                controls.forEach({
                    "OurTechnology.useEffect": (control, index)=>{
                        const delay = sortedOrder.indexOf(index) * 0.15; // Stagger based on sorted order
                        control.start({
                            translateY: 0,
                            opacity: 1,
                            top: [
                                '0%',
                                finalTopPositions[screenSize][index]
                            ],
                            rotate: [
                                0,
                                finalRotations[screenSize][index]
                            ],
                            transition: {
                                top: {
                                    duration: 0.8,
                                    ease: 'easeOut',
                                    delay: delay
                                },
                                rotate: {
                                    duration: 0.8,
                                    ease: 'easeOut',
                                    delay: delay
                                },
                                translateY: {
                                    type: 'spring',
                                    stiffness: 80,
                                    damping: 10,
                                    delay: delay
                                },
                                opacity: {
                                    duration: 0.5,
                                    delay: delay
                                }
                            }
                        });
                    }
                }["OurTechnology.useEffect"]);
            }
        }
    }["OurTechnology.useEffect"], [
        isInView,
        controls,
        screenSize,
        sortedOrder
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[310px] sm:w-[620px] 2xl:py-[103px] xl:py-[100px] lg:py-[60px] md:py-[60px] py-[65px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: "2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] 2xl:h-[468px]  xl:h-[536px] lg-healing-[479px] md:h-[564px] h-[702px] 2xl:rounded-[40px] xl:rounded-[40px] lg:rounded-[30px] md:rounded-[20px] rounded-[20px] bg-[#1B1A1F] relative mx-auto overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "2xl:w-[604px] xl:w-[475px] lg:w-[420px] md:w-[420px] sm:w-[400px] w-[300px] 2xl:pt-[62px] xl:pt-[50px]  lg:pt-[50px] md:pt-[50px] pt-[60px] mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[#1DD673] geologica text-center font-normal 2xl:text-[24px] xl:text-[20px] lg:text-[18px]  md:text-[18px] sm:text-[18px] text-[16px] leading-[130%] tracking-[-2%]",
                                    children: "Ready to integrate?"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "geologica text-center font-bold text-[#FFFFFF] 2xl:text-[40px] xl:text-[36px]  lg:text-[34px] md:text-[34px] sm:text-[34px] text-[24px] leading-[130%] tracking-[-2%] 2xl:mt-[10px] xl:mt-[15px] lg:mt-[26px] md:mt-[26px] mt-[20px]",
                                    children: "Supercharge Your App with Our Technology"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "2xl:w-[249px] 2xl:h-[61px] xl:w-[183px] xl:h-[55px] w-[141px] h-[47px] lg:w-[160px] lg:h-[54px] md:w-[160px] md:h-[54px] sm:w-[160px] sm:h-[54px] 2xl:mt-[25px] xl:mt-[20px] lg:mt-[29px] md:mt-[29px] mt-[30px]  2xl:rounded-[15px] xl:rounded-[12px] lg:rounded-[10px] md:rounded-[10px] rounded-[10px] sm:rounded-[10px] 2xl:text-[15px] xl:text-[15px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[15px] bg-[#FFFFFF] text-[#1B1A1F] leading-[100%] font-medium geologica",
                                        children: "Get free trial"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "2xl:w-[1117.82px] xl:w-[1070.58px] lg:w-[814px] md:w-[644.83px] sm:w-[600px] w-[304px] h-full  left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[50%] absolute right-0 flex z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[0],
                                    className: "absolute 2xl:top-[33%] xl:top-[33%] lg:top-[79%] md:top-[75%] sm:top-[75%] top-[90%]  2xl:left-0 xl:left-0 lg:left-[33%] md:left-[34%] sm:left-[33%] left-[15%] transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Vegan.svg",
                                        alt: "Vegan",
                                        width: 209,
                                        height: 54,
                                        className: "2xl:w-[276.74px] xl:w-[276.74px] lg:w-[233.03px] md:w-[233px] sm:w-[233px] w-[209px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[1],
                                    className: "absolute 2xl:top-[45%] xl:top-[40%] lg:top-[67%] md:top-[75%] sm:top-[75%] top-[40%]  2xl:left-[15%] xl:left-[20%] lg:left-[9%] md:left-[8%] sm:left-[8%] left-0 transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/yoga.svg",
                                        alt: "yoga",
                                        width: 198.5,
                                        height: 54,
                                        className: "2xl:w-[198.5px] xl:w-[198.5px] lg:w-[162.9px] md:w-[163px] sm:w-[163px] w-[147px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[2],
                                    className: "absolute 2xl:top-[75%] xl:top-[75%] lg:top-0 md:top-[10%]  2xl:left-[5%] xl:left-[7%] lg:left-[5%] md:left-[5%] sm:left-[1%] left-[2%] transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/sports.svg",
                                        alt: "sports",
                                        width: 182,
                                        height: 54,
                                        className: "2xl:w-[182px] xl:w-[182px] lg:w-[141.95px] md:w-[142px] sm:w-[142px] w-[127px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[3],
                                    className: "absolute 2xl:top-[65%] xl:top-[55%] lg:top-[55%] md:top-[55%] top-[73%]  2xl:left-[23%] xl:left-[29%] lg:left-[50%] md:left-[70%] sm:left-[70%] left-[43%] transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/organic.svg",
                                        alt: "organic",
                                        width: 246.11,
                                        height: 54,
                                        className: "2xl:w-[246.11px] xl:w-[246.11px] lg:w-[196px] md:w-[196px] sm:w-[196px] w-[175px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[4],
                                    className: "absolute 2xl:top-[80%] xl:top-[77%] lg:top-[60%] md:top-[50%] top-[30%]  2xl:left-[39%] xl:left-[43%] lg:left-[78%] md:left-[55%] sm:left-[55%] left-[50%]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/fitnes.svg",
                                        alt: "fitnes",
                                        width: 200,
                                        height: 0,
                                        className: "2xl:w-[200px] xl:w-[200px] lg:w-[145px] md:w-[145px] sm:w-[145px] w-[140px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[5],
                                    className: "absolute 2xl:top-[50%] xl:top-[8%] lg:top-[30%] md:top-[80%] top-[45%]  2xl:left-[47%] xl:left-[30%] lg:left-[66%] md:left-[78%] sm:left-[78%] left-[60%]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Dietitians.svg",
                                        alt: "Dietitians",
                                        width: 151.56,
                                        height: 0,
                                        className: "2xl:w-[151.56px] xl:w-[151.56px] lg:w-[121px] md:w-[121px] sm:w-[121px] w-[117px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 253,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[6],
                                    className: "absolute 2xl:top-[60%] xl:top-[40%] lg:top-[43%] md:top-[50%] top-[55%]  2xl:left-[57%] xl:left-[52%] lg:left-0 md:left-0 sm:left-0 left-[15%] transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Gluten free brands.svg",
                                        alt: "Gluten free brands",
                                        width: 225.42,
                                        height: 54,
                                        className: "2xl:w-[224.42px] xl:w-[224.42px] lg:w-[179px] md:w-[179px] sm:w-[179px] w-[179px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[7],
                                    className: "absolute 2xl:top-[25%] xl:top-[71%] lg:top-[17%] md:top-[25%] top-[25%]  2xl:left-[70%] xl:left-[65%] md:left-[40%] sm:left-[40%] lg:left-[45%] left-[8%] transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/TeleNutrition .svg",
                                        alt: "TeleNutrition",
                                        width: 192.95,
                                        height: 54,
                                        className: "2xl:w-[192.95px] xl:w-[192.95px] lg:w-[145px] md:w-[145px] sm:w-[145px] w-[132px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 285,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[8],
                                    className: "absolute 2xl:top-[71%] xl:top-[10%] lg:top-[5%] md:top-[15%] top-[16%]  2xl:left-[70%] xl:left-[48%] lg:left-[23%] md:left-[27%] sm:left-[27%] left-0 transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/gyms.svg",
                                        alt: "gym",
                                        width: 139,
                                        height: 54,
                                        className: "2xl:w-[139px] xl:w-[139px] lg:w-[101px] md:w-[101px] sm:w-[101px] w-[95px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[9],
                                    className: "absolute 2xl:top-[25%] xl:top-[25%] lg:top-[10%] md:top-[15%] top-[10%]  2xl:left-[81%] xl:left-[75%] lg:left-[75%] md:left-[65%] sm:left-[65%] left-[40%] transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Modern Paleo Brands.svg",
                                        alt: "Modern Paleo Brands",
                                        width: 239,
                                        height: 54,
                                        className: "2xl:w-[239px] xl:w-[239px] lg:w-[202px] md:w-[202px] sm:w-[202px] w-[179px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 317,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[10],
                                    className: "absolute 2xl:top-[72%] xl:top-[65%] lg:top-[40%] md:top-[50%] top-[74%]  2xl:left-[82%] xl:left-[81%] lg:left-[27%] md:left-[28%] sm:left-[28%] left-0 transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Health Coaches.svg",
                                        alt: "gym owners icon",
                                        width: 200,
                                        height: 54,
                                        className: "2xl:w-[200px] xl:w-[200px] lg:w-[161.97px] md:w-[162px] sm:w-[162px] w-[142px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(OurTechnology, "K8e1BtvU6aEmoPu8zpbq68wJVzY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = OurTechnology;
var _c;
__turbopack_context__.k.register(_c, "OurTechnology");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/Unlock/Unlock.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Unlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
function Unlock() {
    // Function to handle smooth scrolling to a section
    const scrollToSection = (sectionId)=>{
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[url('/Images/Unlock-bg.png')] bg-cover bg-center w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "2xl:pt-[50px] xl:pt-[44px] lg:pt-[70px] md:pt-[60px] pt-[20px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "2xl:w-[692px] xl:w-[635px] lg:w-[743px] md:w-[441px] mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/Images/logo.svg",
                                alt: "logo",
                                width: 57,
                                height: 57,
                                className: "2xl:w-[101px] 2xl:h-[101px] xl:w-[89px] xl:h-[89px] lg:w-[125px] lg:h-[125px] md:w-[113px] md:h-[113px] mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "md:text-[32px] text-[20px] md:mt-[30px] mt-[20px] md:w-[441px] w-[200px] mx-auto geologica font-bold leading-[130%] tracking-[-2%]  text-center text-[#1B1A1F] md:block 2xl:hidden xl:hidden lg:hidden",
                                children: "Unlock the Power of Smart Scanning"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "2xl:text-[17px] xl:text-[16px] lg:text-[20px] md:text-[18px] text-[16px] 2xl:mt-[40px] xl:mt-[35px] lg:mt-[50px] md:mt-[44px] mt-[34px] 2xl:w-full xl:w-full lg:w-full md:w-[211px] md:h-[185px] w-[187px] h-[135px] 2xl:h-full xl:h-full lg:h-full mx-auto md:text-center text-center geologica font-normal leading-[100%] flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col justify-between text-[#1B1A1F]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("home"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("what-makes"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Features"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("scan"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Who It's For"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("how-its-works"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "How its work"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("integrate"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Integrate With Your App"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                        lineNumber: 71,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "2xl:text-[36px] xl:text-[32px] lg:text-[40px] 2xl:mt-[50px] xl:mt-[34px] lg:mt-[44px]  lg:w-[588px] 2xl:w-full xl:w-full mx-auto geologica font-bold leading-[130%] tracking-[-2%] text-center text-[#1B1A1F] md:hidden hidden 2xl:block xl:block lg:block",
                                children: "Unlock the Power of Smart Scanning"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "2xl:w-[170.4px] xl:w-[152px] lg:w-[266px] md:w-[226px] w-[144px] 2xl:mt-[40px] xl:mt-[35px] lg:mt-[50px] md:mt-[54px] mt-[40px] mx-auto flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Small-components/Icons/linkedin.svg",
                                        alt: "linkedin",
                                        width: 38,
                                        height: 38,
                                        className: "2xl:w-[48px] 2xl:h-[48px] xl:w-[43px] xl:h-[43px] lg:w-[70px] lg:h-[70px] md:w-[62px] md:h-[62px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Small-components/Icons/insta.svg",
                                        alt: "insta",
                                        width: 38,
                                        height: 38,
                                        className: "2xl:w-[48px] 2xl:h-[48px] xl:w-[43px] xl:h-[43px] lg:w-[70px] lg:h-[70px] md:w-[62px] md:h-[62px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Small-components/Icons/facebook.svg",
                                        alt: "facebook",
                                        width: 38,
                                        height: 38,
                                        className: "2xl:w-[48px] 2xl:h-[48px] xl:w-[43px] xl:h-[43px] lg:w-[70px] lg:h-[70px] md:w-[62px] md:h-[62px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "2xl:mt-[31px] xl:mt-[37.44px] lg:mt-[70px] md:mt-[40px] mt-[40px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:w-[870px] md:w-[295px] w-[262px] h-[93px] md:h-[109px] lg:h-0 flex lg:flex-row md:flex-col flex-col 2xl:hidden xl:hidden lg:text-[18x] md:text-[17px] text-[15px] text-[#1B1A1F] leading-[130%] justify-between tracking-[-2%] font-light geologica mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row justify-between mx-auto md:flex-row md:justify-between lg:w-[280px] md:w-[257px] md:mx-auto lg:mx-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: "Terms of service"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: "Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: "© 2025 Scanveri. All rights reserved."
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-center",
                                        children: "Built for Innovators."
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full 2xl:mt-[31px] xl:mt-[37.44px] lg:mt-[70px] md:mt-[40px] mt-[30px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/Images/un-1.png",
                                                alt: "un-1",
                                                width: 290,
                                                height: 0,
                                                className: "w-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "2xl:text-[18px] xl:text-[16px]  geologica leading-[130%] tracking-[-2%] text-center font-light",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "2xl:block xl:block lg:hidden md:hidden hidden",
                                                children: "Terms of service Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "2xl:text-[18px] xl:text-[16px]  geologica leading-[130%] tracking-[-2%] text-center font-light 2xl:block xl:block lg:hidden md:hidden hidden",
                                                    children: "© 2025 Scanveri. All rights reserved."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {}, void 0, false, {
                                                    fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/Images/un-3.png",
                                                    alt: "un-1",
                                                    width: 290,
                                                    height: 0,
                                                    className: "w-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "2xl:text-[18px] xl:text-[16px]  geologica leading-[130%] tracking-[-2%] text-center font-light",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "2xl:block xl:block lg:hidden md:hidden hidden",
                                                children: "Built for Innovators."
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/Images/un-5.png",
                                                alt: "un-1",
                                                width: 290,
                                                height: 0,
                                                className: "w-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/Images/un-2.png",
                                                alt: "un-1",
                                                width: 290,
                                                height: 0,
                                                className: "w-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/Images/un-4.png",
                                                alt: "un-1",
                                                width: 290,
                                                height: 0,
                                                className: "w-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Unlock/Unlock.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Components/Unlock/Unlock.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c = Unlock;
var _c;
__turbopack_context__.k.register(_c, "Unlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_Components_37c3549e._.js.map