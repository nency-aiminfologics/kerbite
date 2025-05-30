module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/Components/Navbar/Navbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Navbar() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            // Check if the user has scrolled past a certain threshold (e.g., 50px)
            const scrolled = window.scrollY > 50;
            console.log("Scroll position:", window.scrollY, "isScrolled:", scrolled); // Debug log
            setIsScrolled(scrolled);
        };
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        // Trigger handleScroll on mount to set initial state
        handleScroll();
        // Cleanup the event listener on component unmount
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed z-30 w-full top-0 left-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[100%] mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] w-[90%] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `2xl:w-[964px] xl:w-[964px] lg:w-[885px] md:w-[664px] w-full 2xl:h-[93px] 
                xl:h-[93px] lg:h-[82px] md:h-[62px] h-[56px] 2xl:mt-[44px] xl:mt-[40px] lg:mt-[20px] md:mt-[15px] mt-[10px] 2xl:rounded-[20px] xl:rounded-[20px] lg:rounded-[18px] md:rounded-[15px] rounded-[12px] mx-auto px-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? "bg-white shadow-custom" : "bg-[#FFFFFF1A] backdrop-blur-[4px]"}`,
                        style: isScrolled ? {
                            boxShadow: "0px 4px 30px #D8D8D866"
                        } : {},
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: `2xl:flex xl:flex lg:flex md:flex 2xl:w-[524px] xl:w-[524px] lg:w-[527px] 
                md:w-[399px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[14px] leading-[100%] items-center geologica font-medium justify-between hidden transition-colors duration-300 ${isScrolled ? "text-[#1B1A1F]" : "text-[#FFFFFF]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("home"),
                                        className: `cursor-pointer transition-colors ${isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"}`,
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("what-makes"),
                                        className: `cursor-pointer transition-colors ${isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"}`,
                                        children: "Features"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("scan"),
                                        className: `cursor-pointer transition-colors ${isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"}`,
                                        children: "Who It's For"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `bg-[#1B1A1F] 2xl:w-[141px] 2xl:h-[56px] xl:w-[141px] xl:h-[56px] lg:w-[137.33px] 
                lg:h-[56px] md:w-[100px] md:h-[42px] hidden 2xl:block xl:block lg:block md:block 2xl:rounded-[15px] 
                xl:rounded-[15px] lg:rounded-[12px] md:rounded-[8px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[13px] leading-[100%] 2xl:my-[19px] xl:my-[19px] lg:my-[13.33px] md:my-[10px] geologica font-medium transition-colors duration-300 ${isScrolled ? "text-white" : "text-[#FFFFFF]"}`,
                                children: "Get free trial"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(!isOpen),
                                    className: "w-[33px] h-[33px] bg-[#ffffff] rounded-[5px] flex items-center justify-center",
                                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#1B1A1F] text-[20px] font-bold",
                                        children: "X"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `fixed top-0 right-0 h-screen w-[80vw] bg-[#FFFFFF] shadow-lg z-40 px-12 py-5 text-[#1B1A1F] text-base font-medium geologica flex flex-col transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-4 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>scrollToSection("home"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>scrollToSection("what-makes"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Features"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>scrollToSection("scan"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Who It's For"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}}),
"[project]/app/Components/Scan./Scan.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Scan)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Scan() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e85669bacb018e2a" + " " + "w-full bg-[#ffffff] overflow-hidden ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-e85669bacb018e2a" + " " + "2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px]  w-[100%] mx-auto overflow-hidden  ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e85669bacb018e2a" + " " + "2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px]  w-[90%] mx-auto   ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e85669bacb018e2a" + " " + "2xl:w-[1068px] xl:w-[950.65px] lg:w-[806.67px] md:w-[605px]  w-[273px]  py-[50px] lg:py-[90px] md:py-[70px] 2xl:py-0 xl:py-0 mx-auto relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e85669bacb018e2a" + " " + "lg:w-[646px]  md:w-[484px]  w-[273px] md:mt-[70px] mx-auto 2xl:hidden xl:hidden lg:block md:block ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e85669bacb018e2a" + " " + "lg:w-[448px] md:w-[434px]  w-[266px] text-[20px] lg:text-[36px] md:text-[34px] text-[#000000] leading-[100%] font-semibold geologica flex justify-between mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-e85669bacb018e2a",
                                                    children: "Analyze."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 14,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-e85669bacb018e2a",
                                                    children: "Scan."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 15,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-e85669bacb018e2a",
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-e85669bacb018e2a" + " " + "lg:text-[20px] md:text-[16px] text-[14px] lg:mt-[20px] md:mt-[24px]  mt-[15px] text-[#7D7C81] leading-[100%] geologica text-center",
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        backgroundImage: "url('/Images/animation-bg.png')"
                                    },
                                    className: "jsx-e85669bacb018e2a" + " " + "bg-cover bg-center bg-no-repeat w-[273px] h-[273px]  2xl:mt-0 xl:mt-0 2xl:w-[1068px] 2xl:h-[1069px] xl:w-[950.65px] xl:h-[951.54px] md:w-[605px] md:h-[605px] md:mt-[50px] mt-[50px] lg:w-[806.67px] lg:h-[806.67px] lg:mt-[80px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e85669bacb018e2a" + " " + "w-[64px] h-[64px] my-[110px] mx-[107px]  lg:w-[210px] lg:h-[210px] md:w-[157px] md:h-[157px] lg:rounded-[106.67px] rounded-[32px] md:rounded-[80px]  p-[13.44px] lg:p-[44.14px] md:p-[33px] lg:my-[299.67px] md:my-[225px] lg:mx-[297px] md:mx-[223px] absolute bg-[#1B1A1F] 2xl:hidden xl:hidden lg:block md:block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/Images/logo.svg",
                                                alt: "Green circular icon with a checkmark",
                                                width: 37.12,
                                                height: 37.12,
                                                className: "lg:w-[121.72px] lg:h-[121.72px] md:w-[91px] md:h-[91px]  mx-auto"
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e85669bacb018e2a" + " " + "2xl:w-[592px] xl:w-[527px] 2xl:mx-[238px] xl:mx-[211px] xl:my-[330px] 2xl:my-[351px] absolute hidden lg:hidden md:hidden 2xl:block xl:block",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-e85669bacb018e2a" + " " + "2xl:text-[40px] xl:text-[36px] font-semibold text-center leading-[100%] text-[#000000]",
                                                    children: "Scan."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e85669bacb018e2a" + " " + "flex 2xl:w-[454px] xl:w-[405.48px] justify-between 2xl:mt-[13px] xl:mt-[10.7px] mx-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "jsx-e85669bacb018e2a" + " " + "2xl:text-[40px] xl:text-[36px] 2xl:mt-[25px] xl:mt-[22px] font-semibold text-center text-[#000000] leading-[100%]",
                                                            children: "Analyze."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-e85669bacb018e2a" + " " + "2xl:w-[100px] 2xl:h-[100px] xl:w-[89px] xl:h-[89px] 2xl:rounded-[50px] xl:rounded-[44.51px] bg-[#1B1A1F]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "jsx-e85669bacb018e2a" + " " + "text-[#000000] 2xl:text-[40px] xl:text-[36px] font-semibold text-center leading-[100%] 2xl:mt-[25px] xl:mt-[22px]",
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-e85669bacb018e2a" + " " + "text-[#7D7C81] 2xl:w-[592px] xl:w-[527px] 2xl:text-[20px] xl:text-[20px] leading-[100%] 2xl:mt-[30px] xl:mt-[27.3px] text-center",
                                                    children: "Helping health professionals guide clients to better nutrition is challenging. Endless food options, misleading labels, and confusing choices."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e85669bacb018e2a" + " " + "flex justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "jsx-e85669bacb018e2a" + " " + ([
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e85669bacb018e2a" + " " + "circular-motion flex justify-center items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e85669bacb018e2a" + " " + "card absolute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/gym owners.svg",
                                                            alt: "gym owners",
                                                            width: 182,
                                                            height: 0,
                                                            className: "2xl:w-[300px] xl:w-[250px] lg:w-[162px] md:w-[162px] hidden  lg:block md:block 2xl:block xl:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/gym owners-iscon.svg",
                                                            alt: "gym owners-iscon",
                                                            width: 150,
                                                            height: 40,
                                                            className: "lg:hidden md:hidden block"
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e85669bacb018e2a" + " " + "card absolute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/sport coaches.svg",
                                                            alt: "sport coaches",
                                                            width: 182,
                                                            height: 0,
                                                            className: "2xl:w-[300px] xl:w-[250px] lg:w-[189px] md:w-[189px]  hidden  lg:block md:block 2xl:block xl:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/sport coaches-icons.svg",
                                                            alt: "sport coaches-iscon",
                                                            width: 150,
                                                            height: 40,
                                                            className: " lg:hidden md:hidden block"
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e85669bacb018e2a" + " " + "card absolute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/nutritions.svg",
                                                            alt: "nutritions",
                                                            width: 182,
                                                            height: 0,
                                                            className: "2xl:w-[300px] xl:w-[250px]  lg:w-[162px] md:w-[162px] hidden  lg:block md:block 2xl:block xl:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/nutritions-icons.svg",
                                                            alt: "nutritions-iscon",
                                                            width: 150,
                                                            height: 40,
                                                            className: "lg:hidden md:hidden block"
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e85669bacb018e2a" + " " + "card absolute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/health-care.svg",
                                                            alt: "health-care",
                                                            width: 182,
                                                            height: 0,
                                                            className: "2xl:w-[300px] xl:w-[250px] lg:w-[178px] md:w-[178px]  hidden  lg:block md:block 2xl:block xl:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/health-care-icons.svg",
                                                            alt: "health-care-iscon",
                                                            width: 150,
                                                            height: 40,
                                                            className: "lg:hidden md:hidden block"
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e85669bacb018e2a" + " " + "card absolute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/Wellness & Fitness.svg",
                                                            alt: "wellness & fitness",
                                                            width: 182,
                                                            height: 0,
                                                            className: "2xl:w-[300px] xl:w-[250px] lg:w-[211px] md:w-[211px]  hidden  lg:block md:block 2xl:block xl:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/Wellness & Fitness-icons.svg",
                                                            alt: "wellness & fitness-iscon",
                                                            width: 150,
                                                            height: 40,
                                                            className: " block md:hidden lg:hidden"
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e85669bacb018e2a" + " " + "card absolute",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/Yoga instructors.svg",
                                                            alt: "yoga instructors",
                                                            width: 182,
                                                            height: 0,
                                                            className: "2xl:w-[300px] xl:w-[250px] lg:w-[194px] md:w-[194px]  hidden  lg:block md:block 2xl:block xl:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/Scan./Scan.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/Yoga instructors-icons.svg",
                                                            alt: "yoga instructors-iscon",
                                                            width: 150,
                                                            height: 40,
                                                            className: " block md:hidden lg:hidden"
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "e85669bacb018e2a",
                children: ".circular-motion.jsx-e85669bacb018e2a{justify-content:center;align-items:center;width:1068px;height:1068px;display:flex;position:relative}.card.jsx-e85669bacb018e2a{transform-origin:548px 548px;animation:25s linear infinite spin,25s linear infinite fadeAndHide;position:absolute}.card.jsx-e85669bacb018e2a:first-child{animation-delay:0s;transform:rotate(0)translate(548px)rotate(0)}.card.jsx-e85669bacb018e2a:nth-child(2){animation-delay:-4.17s;transform:rotate(60deg)translate(548px)rotate(-60deg)}.card.jsx-e85669bacb018e2a:nth-child(3){animation-delay:-8.34s;transform:rotate(120deg)translate(548px)rotate(-120deg)}.card.jsx-e85669bacb018e2a:nth-child(4){animation-delay:-12.5s;transform:rotate(180deg)translate(548px)rotate(-180deg)}.card.jsx-e85669bacb018e2a:nth-child(5){animation-delay:-16.67s;transform:rotate(240deg)translate(548px)rotate(-240deg)}.card.jsx-e85669bacb018e2a:nth-child(6){animation-delay:-20.84s;transform:rotate(300deg)translate(548px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(548px)rotate(0)}to{transform:rotate(360deg)translate(548px)rotate(-360deg)}}@keyframes fadeAndHide{0%{opacity:1;visibility:visible}24%{opacity:.1;visibility:visible}25%{opacity:0;visibility:hidden}26%{opacity:.1;visibility:visible}50%{opacity:1;visibility:visible}74%{opacity:.1;visibility:visible}75%{opacity:0;visibility:hidden}76%{opacity:.1;visibility:visible}to{opacity:1;visibility:visible}}@media (width<=1440px){.circular-motion.jsx-e85669bacb018e2a{width:950.65px;height:951.54px}.card.jsx-e85669bacb018e2a{transform-origin:488px 488px;border-radius:28px;animation:25s linear infinite spin,25s linear infinite fadeAndHide}.card.jsx-e85669bacb018e2a:first-child{transform:rotate(0)translate(488px)rotate(0)}.card.jsx-e85669bacb018e2a:nth-child(2){transform:rotate(60deg)translate(488px)rotate(-60deg)}.card.jsx-e85669bacb018e2a:nth-child(3){transform:rotate(120deg)translate(488px)rotate(-120deg)}.card.jsx-e85669bacb018e2a:nth-child(4){transform:rotate(180deg)translate(488px)rotate(-180deg)}.card.jsx-e85669bacb018e2a:nth-child(5){transform:rotate(240deg)translate(488px)rotate(-240deg)}.card.jsx-e85669bacb018e2a:nth-child(6){transform:rotate(300deg)translate(488px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(488px)rotate(0)}to{transform:rotate(360deg)translate(488px)rotate(-360deg)}}@keyframes fadeAndHide{0%{opacity:1;visibility:visible}24%{opacity:.1;visibility:visible}25%{opacity:0;visibility:hidden}26%{opacity:.1;visibility:visible}50%{opacity:1;visibility:visible}74%{opacity:.1;visibility:visible}75%{opacity:0;visibility:hidden}76%{opacity:.1;visibility:visible}to{opacity:1;visibility:visible}}}@media (width<=1280px){.circular-motion.jsx-e85669bacb018e2a{width:950.65px;height:951.54px}.card.jsx-e85669bacb018e2a{transform-origin:488px 488px;border-radius:28px;animation:25s linear infinite spin,25s linear infinite fadeAndHide}.card.jsx-e85669bacb018e2a:first-child{transform:rotate(0)translate(488px)rotate(0)}.card.jsx-e85669bacb018e2a:nth-child(2){transform:rotate(60deg)translate(488px)rotate(-60deg)}.card.jsx-e85669bacb018e2a:nth-child(3){transform:rotate(120deg)translate(488px)rotate(-120deg)}.card.jsx-e85669bacb018e2a:nth-child(4){transform:rotate(180deg)translate(488px)rotate(-180deg)}.card.jsx-e85669bacb018e2a:nth-child(5){transform:rotate(240deg)translate(488px)rotate(-240deg)}.card.jsx-e85669bacb018e2a:nth-child(6){transform:rotate(300deg)translate(488px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(488px)rotate(0)}to{transform:rotate(360deg)translate(488px)rotate(-360deg)}}@keyframes fadeAndHide{0%{opacity:1;visibility:visible}24%{opacity:.1;visibility:visible}25%{opacity:0;visibility:hidden}26%{opacity:.1;visibility:visible}50%{opacity:1;visibility:visible}74%{opacity:.1;visibility:visible}75%{opacity:0;visibility:hidden}76%{opacity:.1;visibility:visible}to{opacity:1;visibility:visible}}}@media (width<=1024px){.circular-motion.jsx-e85669bacb018e2a{width:806.67px;height:806.67px}.card.jsx-e85669bacb018e2a{transform-origin:414px 414px;border-radius:28px;animation:25s linear infinite spin}.card.jsx-e85669bacb018e2a:first-child{transform:rotate(0)translate(414px)rotate(0)}.card.jsx-e85669bacb018e2a:nth-child(2){transform:rotate(60deg)translate(414px)rotate(-60deg)}.card.jsx-e85669bacb018e2a:nth-child(3){transform:rotate(120deg)translate(414px)rotate(-120deg)}.card.jsx-e85669bacb018e2a:nth-child(4){transform:rotate(180deg)translate(414px)rotate(-180deg)}.card.jsx-e85669bacb018e2a:nth-child(5){transform:rotate(240deg)translate(414px)rotate(-240deg)}.card.jsx-e85669bacb018e2a:nth-child(6){transform:rotate(300deg)translate(414px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(414px)rotate(0)}to{transform:rotate(360deg)translate(414px)rotate(-360deg)}}}@media (width<=1279px){.circular-motion.jsx-e85669bacb018e2a{width:806.67px;height:806.67px}.card.jsx-e85669bacb018e2a{transform-origin:414px 414px;border-radius:28px;animation:25s linear infinite spin}.card.jsx-e85669bacb018e2a:first-child{transform:rotate(0)translate(414px)rotate(0)}.card.jsx-e85669bacb018e2a:nth-child(2){transform:rotate(60deg)translate(414px)rotate(-60deg)}.card.jsx-e85669bacb018e2a:nth-child(3){transform:rotate(120deg)translate(414px)rotate(-120deg)}.card.jsx-e85669bacb018e2a:nth-child(4){transform:rotate(180deg)translate(414px)rotate(-180deg)}.card.jsx-e85669bacb018e2a:nth-child(5){transform:rotate(240deg)translate(414px)rotate(-240deg)}.card.jsx-e85669bacb018e2a:nth-child(6){transform:rotate(300deg)translate(414px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(414px)rotate(0)}to{transform:rotate(360deg)translate(414px)rotate(-360deg)}}}@media (width<=768px){.circular-motion.jsx-e85669bacb018e2a{width:605px;height:605px}.card.jsx-e85669bacb018e2a{transform-origin:310px 310px;border-radius:21px;animation:25s linear infinite spin}.card.jsx-e85669bacb018e2a:first-child{transform:rotate(0)translate(310px)rotate(0)}.card.jsx-e85669bacb018e2a:nth-child(2){transform:rotate(60deg)translate(310px)rotate(-60deg)}.card.jsx-e85669bacb018e2a:nth-child(3){transform:rotate(120deg)translate(310px)rotate(-120deg)}.card.jsx-e85669bacb018e2a:nth-child(4){transform:rotate(180deg)translate(310px)rotate(-180deg)}.card.jsx-e85669bacb018e2a:nth-child(5){transform:rotate(240deg)translate(310px)rotate(-240deg)}.card.jsx-e85669bacb018e2a:nth-child(6){transform:rotate(300deg)translate(310px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(310px)rotate(0)}to{transform:rotate(360deg)translate(310px)rotate(-360deg)}}}@media (width<=1023px){.circular-motion.jsx-e85669bacb018e2a{width:605px;height:605px}.card.jsx-e85669bacb018e2a{transform-origin:310px 310px;border-radius:21px;animation:25s linear infinite spin}.card.jsx-e85669bacb018e2a:first-child{transform:rotate(0)translate(310px)rotate(0)}.card.jsx-e85669bacb018e2a:nth-child(2){transform:rotate(60deg)translate(310px)rotate(-60deg)}.card.jsx-e85669bacb018e2a:nth-child(3){transform:rotate(120deg)translate(310px)rotate(-120deg)}.card.jsx-e85669bacb018e2a:nth-child(4){transform:rotate(180deg)translate(310px)rotate(-180deg)}.card.jsx-e85669bacb018e2a:nth-child(5){transform:rotate(240deg)translate(310px)rotate(-240deg)}.card.jsx-e85669bacb018e2a:nth-child(6){transform:rotate(300deg)translate(310px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(310px)rotate(0)}to{transform:rotate(360deg)translate(310px)rotate(-360deg)}}}@media (width<=767px){.circular-motion.jsx-e85669bacb018e2a{justify-content:center;align-items:center;width:273px;height:330px;display:flex}.card.jsx-e85669bacb018e2a{transform-origin:140px 140px;border-radius:9px;animation:25s linear infinite spin}.card.jsx-e85669bacb018e2a:first-child{animation-delay:0s;transform:rotate(0)translate(140px)rotate(0)}.card.jsx-e85669bacb018e2a:nth-child(2){animation-delay:-4.17s;transform:rotate(60deg)translate(140px)rotate(-60deg)}.card.jsx-e85669bacb018e2a:nth-child(3){animation-delay:-8.34s;transform:rotate(120deg)translate(140px)rotate(-120deg)}.card.jsx-e85669bacb018e2a:nth-child(4){animation-delay:-12.5s;transform:rotate(180deg)translate(140px)rotate(-180deg)}.card.jsx-e85669bacb018e2a:nth-child(5){animation-delay:-16.67s;transform:rotate(240deg)translate(140px)rotate(-240deg)}.card.jsx-e85669bacb018e2a:nth-child(6){animation-delay:-20.84s;transform:rotate(300deg)translate(140px)rotate(-300deg)}@keyframes spin{0%{transform:rotate(0)translate(140px)rotate(0)}to{transform:rotate(360deg)translate(140px)rotate(-360deg)}}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__4d9a2d1e._.js.map