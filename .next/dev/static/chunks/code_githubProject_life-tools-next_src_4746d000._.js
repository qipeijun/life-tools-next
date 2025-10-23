(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/code/githubProject/life-tools-next/src/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/githubProject/life-tools-next/src/components/ui/Card.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardBody",
    ()=>CardBody,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/src/lib/utils.js [app-client] (ecmascript)");
'use client';
;
;
;
function Card({ children, className = '', padding = 'normal', hover = false, ...props }) {
    const paddings = {
        none: '',
        small: 'p-4',
        normal: 'p-6',
        large: 'p-8'
    };
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('card', hover && 'card-hover', paddings[padding], className);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Card.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ children, className = '', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('card-header', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Card.js",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardBody({ children, className = '', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('card-body', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Card.js",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c2 = CardBody;
function CardFooter({ children, className = '', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('card-footer', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Card.js",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c3 = CardFooter;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardBody");
__turbopack_context__.k.register(_c3, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/githubProject/life-tools-next/src/components/ui/Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/src/lib/utils.js [app-client] (ecmascript)");
'use client';
;
;
;
function Input({ label, placeholder, type = 'text', value, onChange, onBlur, onFocus, error = '', className = '', required = false, disabled = false, icon = null, ...props }) {
    const inputClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full px-4 py-3 rounded-xl border border-gray-300/70 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/70 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-muted-foreground/60', 'min-h-[52px] text-lg', error && 'border-error/70 focus:ring-error/50 focus:border-error', icon && 'pl-12', className);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('space-y-2 w-full', className),
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-foreground/80",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-error ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Input.js",
                        lineNumber: 34,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Input.js",
                lineNumber: 32,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full",
                children: [
                    icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground/70",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Input.js",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: type,
                        placeholder: placeholder,
                        value: value,
                        onChange: onChange,
                        onBlur: onBlur,
                        onFocus: onFocus,
                        disabled: disabled,
                        className: inputClasses,
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Input.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Input.js",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-error mt-1",
                children: error
            }, void 0, false, {
                fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Input.js",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Input.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/githubProject/life-tools-next/src/components/ui/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/src/lib/utils.js [app-client] (ecmascript)");
'use client';
;
;
;
function Button({ children, variant = 'primary', size = 'md', disabled = false, loading = false, className = '', icon, onClick, type = 'button', ...props }) {
    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        accent: 'btn-accent',
        success: 'btn-success',
        warning: 'btn-warning',
        error: 'btn-error',
        outline: 'btn-outline',
        ghost: 'btn-ghost'
    };
    const sizes = {
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg'
    };
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('btn', variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', loading && 'opacity-75', className);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: classes,
        disabled: disabled || loading,
        onClick: onClick,
        ...props,
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "animate-spin -ml-1 mr-2 h-4 w-4",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Button.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }, void 0, false, {
                        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Button.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Button.js",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            icon && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-4 h-4",
                children: icon
            }, void 0, false, {
                fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Button.js",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Button.js",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/githubProject/life-tools-next/src/components/ui/ThemeToggle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ThemeToggle() {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
            const savedTheme = localStorage.getItem('theme');
            const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const isDarkMode = savedTheme === 'dark' || !savedTheme && systemPreference;
            setIsDark(isDarkMode);
            document.documentElement.classList.toggle('dark', isDarkMode);
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        document.documentElement.classList.toggle('dark', newIsDark);
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-ios-button bg-ios-bg-tertiary dark:bg-ios-dark-bg-tertiary animate-pulse"
        }, void 0, false, {
            fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/ThemeToggle.js",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "w-10 h-10 rounded-ios-button bg-ios-bg-tertiary dark:bg-ios-dark-bg-tertiary flex items-center justify-center text-ios-text-primary dark:text-ios-dark-text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 transform active:scale-95",
        "aria-label": isDark ? '切换到亮色模式' : '切换到暗色模式',
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/ThemeToggle.js",
            lineNumber: 40,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/ThemeToggle.js",
            lineNumber: 42,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/ThemeToggle.js",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "4PPoEPuUE5ZM05wB23N+LA9kxlg=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/githubProject/life-tools-next/src/hooks/useLocalStorage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocalStorage",
    ()=>useLocalStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useLocalStorage(key, defaultValue) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLocalStorage.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const item = window.localStorage.getItem(key);
                    return item ? JSON.parse(item) : defaultValue;
                } catch (error) {
                    console.warn(`Error reading localStorage key "${key}":`, error);
                    return defaultValue;
                }
            }
            return defaultValue;
        }
    }["useLocalStorage.useState"]);
    const setStoredValue = (value)=>{
        try {
            setValue(value);
            if ("TURBOPACK compile-time truthy", 1) {
                window.localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    };
    return [
        value,
        setStoredValue
    ];
}
_s(useLocalStorage, "jlfyH1brEk8MPCFuXDdkd04uisI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/githubProject/life-tools-next/src/lib/calculations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// KDJ 计算逻辑
__turbopack_context__.s([
    "calculateGridProfit",
    ()=>calculateGridProfit,
    "calculateKDJ",
    ()=>calculateKDJ,
    "calculateKDJPro",
    ()=>calculateKDJPro,
    "calculateSoyMilkTime",
    ()=>calculateSoyMilkTime,
    "calculateTDayProfit",
    ()=>calculateTDayProfit,
    "computeSmartGridRange",
    ()=>computeSmartGridRange,
    "generateKDJData",
    ()=>generateKDJData,
    "generateRSIData",
    ()=>generateRSIData
]);
function calculateKDJ(jValue, rsiValue, volume = 0, cycle = 'day', options = {}) {
    const { overboughtThreshold = 80, oversoldThreshold = 20, sensitivity = 50 } = options;
    const j = parseFloat(jValue);
    const rsi = parseFloat(rsiValue);
    const result = {
        signal: 'neutral',
        advice: '中性信号，建议观望',
        confidence: 0.5
    };
    // 强烈买入条件
    if (j <= 20 && rsi <= oversoldThreshold) {
        result.signal = 'strong_buy';
        result.advice = `强烈买入信号：J值(${j.toFixed(1)})和RSI(${rsi.toFixed(1)})均处于严重超卖区域`;
        result.confidence = 0.9;
    } else if (j <= 30 || rsi <= 35) {
        result.signal = 'buy';
        result.advice = `买入信号：J值(${j.toFixed(1)})或RSI(${rsi.toFixed(1)})处于超卖区域`;
        result.confidence = 0.7;
    } else if (j >= 80 && rsi >= overboughtThreshold) {
        result.signal = 'strong_sell';
        result.advice = `强烈卖出信号：J值(${j.toFixed(1)})和RSI(${rsi.toFixed(1)})均处于严重超买区域`;
        result.confidence = 0.9;
    } else if (j >= 70 || rsi >= 70) {
        result.signal = 'sell';
        result.advice = `卖出信号：J值(${j.toFixed(1)})或RSI(${rsi.toFixed(1)})处于超买区域`;
        result.confidence = 0.7;
    } else {
        if (rsi >= 45 && rsi <= 55) {
            result.advice = `市场处于平衡状态，J值(${j.toFixed(1)})，RSI(${rsi.toFixed(1)})在正常区间，建议观望`;
        } else if (rsi > 55) {
            result.advice = `市场偏强势，J值(${j.toFixed(1)})，RSI(${rsi.toFixed(1)})偏高，可考虑逢高减仓`;
        } else {
            result.advice = `市场偏弱势，J值(${j.toFixed(1)})，RSI(${rsi.toFixed(1)})偏低，可考虑逢低吸纳`;
        }
        result.confidence = 0.4;
    }
    // 根据成交量调整置信度
    if (volume > 0) {
        result.confidence = Math.min(0.95, result.confidence + 0.1);
    }
    return result;
}
function computeSmartGridRange(rsi, bollUpper, bollLower, maxOffset = 0.1, maxScale = 0.2) {
    const center = (bollUpper + bollLower) / 2;
    const width = bollUpper - bollLower;
    // 偏移比例（决定位置）
    let offsetRatio = (rsi - 50) / 50 * maxOffset;
    offsetRatio = Math.max(-maxOffset, Math.min(maxOffset, offsetRatio));
    // 缩放比例（决定宽度）
    let scaleRatio = 1 + Math.abs(rsi - 50) / 50 * maxScale;
    const adjustedWidth = width * scaleRatio;
    const offset = adjustedWidth * offsetRatio / 2;
    const adjustedLower = +(center - adjustedWidth / 2 - offset).toFixed(2);
    const adjustedUpper = +(center + adjustedWidth / 2 - offset).toFixed(2);
    return {
        adjustedUpper,
        adjustedLower,
        adjustedWidth: +(adjustedUpper - adjustedLower).toFixed(2),
        scaleRatio: +scaleRatio.toFixed(4),
        offsetRatio: +offsetRatio.toFixed(4)
    };
}
function calculateTDayProfit(buyPrice, sellPrice, quantity, commission = 0.0003) {
    const buyCost = buyPrice * quantity * (1 + commission);
    const sellIncome = sellPrice * quantity * (1 - commission - 0.001) // 0.001是印花税
    ;
    const profit = sellIncome - buyCost;
    const profitRate = profit / buyCost * 100;
    return {
        buyCost: buyCost.toFixed(2),
        sellIncome: sellIncome.toFixed(2),
        profit: profit.toFixed(2),
        profitRate: profitRate.toFixed(2),
        commissionAmount: (buyPrice * quantity * commission + sellPrice * quantity * (commission + 0.001)).toFixed(2)
    };
}
function calculateSoyMilkTime(targetDrinkTime, makingTime = 25) {
    const target = new Date(targetDrinkTime);
    const appointmentTime = new Date(target.getTime() - makingTime * 60000);
    return {
        appointmentTime: appointmentTime,
        targetTime: target,
        makingTime: makingTime,
        timeRemaining: appointmentTime - new Date()
    };
}
function calculateKDJPro(kValue, dValue, jValue, rsiValue, rsiPeriod = 14, volume = 0, cycle = 'day', options = {}) {
    const { overboughtThreshold = 70, oversoldThreshold = 30, sensitivity = 50 } = options;
    const k = kValue !== undefined ? parseFloat(kValue) : undefined;
    const d = dValue !== undefined ? parseFloat(dValue) : undefined;
    const j = parseFloat(jValue);
    const rsi = parseFloat(rsiValue);
    const result = {
        signal: 'neutral',
        advice: '中性信号，建议观望',
        confidence: 0.5,
        details: {
            kdjStatus: '',
            rsiStatus: ''
        }
    };
    // KDJ状态分析
    let kdjScore = 0;
    let kdjStatus = '';
    if (k !== undefined && d !== undefined) {
        // 金叉死叉判断
        if (k > d && j > 0) {
            kdjStatus = '金叉向上';
            kdjScore = 2;
        } else if (k < d && j < 0) {
            kdjStatus = '死叉向下';
            kdjScore = -2;
        } else if (k > d) {
            kdjStatus = '偏强';
            kdjScore = 1;
        } else {
            kdjStatus = '偏弱';
            kdjScore = -1;
        }
        // 超买超卖判断
        if (j >= 100) {
            kdjStatus += '（严重超买）';
            kdjScore -= 2;
        } else if (j <= -100) {
            kdjStatus += '（严重超卖）';
            kdjScore += 2;
        } else if (j >= 80) {
            kdjStatus += '（超买）';
            kdjScore -= 1;
        } else if (j <= 20) {
            kdjStatus += '（超卖）';
            kdjScore += 1;
        }
    } else {
        // 仅J值分析
        if (j >= 80) {
            kdjStatus = 'J值超买';
            kdjScore = -1;
        } else if (j <= 20) {
            kdjStatus = 'J值超卖';
            kdjScore = 1;
        } else {
            kdjStatus = 'J值中性';
            kdjScore = 0;
        }
    }
    result.details.kdjStatus = kdjStatus;
    // RSI状态分析
    let rsiScore = 0;
    let rsiStatus = '';
    if (rsi >= overboughtThreshold) {
        if (rsi >= 85) {
            rsiStatus = '严重超买';
            rsiScore = -2;
        } else {
            rsiStatus = '超买';
            rsiScore = -1;
        }
    } else if (rsi <= oversoldThreshold) {
        if (rsi <= 15) {
            rsiStatus = '严重超卖';
            rsiScore = 2;
        } else {
            rsiStatus = '超卖';
            rsiScore = 1;
        }
    } else {
        rsiStatus = '中性';
        rsiScore = 0;
    }
    result.details.rsiStatus = rsiStatus;
    // 综合评分
    const totalScore = kdjScore + rsiScore;
    // 根据综合评分判断信号
    if (totalScore >= 3) {
        result.signal = 'strong_buy';
        result.advice = `强烈买入信号：${kdjStatus}，${rsiStatus}，多项指标显示强烈看涨`;
        result.confidence = 0.85;
    } else if (totalScore >= 1) {
        result.signal = 'buy';
        result.advice = `买入信号：${kdjStatus}，${rsiStatus}，指标显示看涨趋势`;
        result.confidence = 0.7;
    } else if (totalScore <= -3) {
        result.signal = 'strong_sell';
        result.advice = `强烈卖出信号：${kdjStatus}，${rsiStatus}，多项指标显示强烈看跌`;
        result.confidence = 0.85;
    } else if (totalScore <= -1) {
        result.signal = 'sell';
        result.advice = `卖出信号：${kdjStatus}，${rsiStatus}，指标显示看跌趋势`;
        result.confidence = 0.7;
    } else {
        result.advice = `中性信号：${kdjStatus}，${rsiStatus}，市场处于平衡状态，建议观望`;
        result.confidence = 0.5;
    }
    // 根据成交量调整置信度
    if (volume > 0) {
        result.confidence = Math.min(0.95, result.confidence + 0.05);
    }
    // 根据周期调整
    const cycleMultiplier = {
        'minute': 0.8,
        'hour': 0.9,
        'day': 1.0,
        'week': 1.1,
        'month': 1.2
    };
    result.confidence = Math.min(0.95, result.confidence * cycleMultiplier[cycle] || 1.0);
    return result;
}
function generateKDJData(count = 20) {
    const data = [];
    let k = 50, d = 50, j = 50;
    for(let i = 0; i < count; i++){
        // 模拟KDJ变化
        k += (Math.random() - 0.5) * 10;
        d += (Math.random() - 0.5) * 8;
        j = 3 * k - 2 * d;
        k = Math.max(0, Math.min(100, k));
        d = Math.max(0, Math.min(100, d));
        j = Math.max(-100, Math.min(200, j));
        data.push({
            x: i,
            y: j,
            k: k,
            d: d
        });
    }
    return data;
}
function generateRSIData(count = 20, period = 14) {
    const data = [];
    let rsi = 50;
    for(let i = 0; i < count; i++){
        // 模拟RSI变化
        rsi += (Math.random() - 0.5) * 15;
        rsi = Math.max(0, Math.min(100, rsi));
        data.push({
            x: i,
            y: rsi
        });
    }
    return data;
}
function calculateGridProfit(lowerPrice, upperPrice, gridCount, investment, commission = 0.001) {
    const gridSpacing = (upperPrice - lowerPrice) / (gridCount - 1);
    const perGridInvestment = investment / gridCount;
    // 计算每格的预期收益
    const profitPerGrid = gridSpacing * perGridInvestment / ((lowerPrice + upperPrice) / 2) - gridSpacing * perGridInvestment / ((lowerPrice + upperPrice) / 2) * commission * 2;
    // 计算总收益率
    const totalProfit = profitPerGrid * gridCount;
    const profitRate = totalProfit / investment * 100;
    // 年化收益率（假设每年50次网格交易）
    const annualizedRate = profitRate * 50;
    // 回本天数
    const breakEvenDays = profitRate !== 0 ? Math.ceil(100 / Math.abs(profitRate)) : Infinity;
    return {
        gridSpacing: gridSpacing.toFixed(2),
        profitPerGrid: profitPerGrid.toFixed(2),
        profitRate: profitRate.toFixed(2),
        annualizedRate: annualizedRate.toFixed(2),
        breakEvenDays: breakEvenDays,
        perGridInvestment: perGridInvestment.toFixed(2)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/githubProject/life-tools-next/src/lib/validations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 输入验证函数
__turbopack_context__.s([
    "validateNumber",
    ()=>validateNumber,
    "validatePercentage",
    ()=>validatePercentage,
    "validatePrice",
    ()=>validatePrice,
    "validateRSI",
    ()=>validateRSI,
    "validateTime",
    ()=>validateTime
]);
function validateNumber(value, min = 0, max = Infinity) {
    const num = parseFloat(value);
    if (isNaN(num)) return {
        isValid: false,
        message: '请输入有效数字'
    };
    if (num < min) return {
        isValid: false,
        message: `数值不能小于${min}`
    };
    if (num > max) return {
        isValid: false,
        message: `数值不能大于${max}`
    };
    return {
        isValid: true,
        value: num
    };
}
function validatePercentage(value) {
    return validateNumber(value, 0, 100);
}
function validatePrice(value) {
    return validateNumber(value, 0.01, 10000);
}
function validateRSI(value) {
    return validateNumber(value, 0, 100);
}
function validateTime(timeString) {
    const time = new Date(timeString);
    if (isNaN(time.getTime())) return {
        isValid: false,
        message: '请输入有效时间'
    };
    return {
        isValid: true,
        value: time
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KDJRSIPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/src/components/ui/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/src/components/ui/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/src/components/ui/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/src/components/ui/ThemeToggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/src/hooks/useLocalStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$calculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/src/lib/calculations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$validations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/src/lib/validations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function KDJRSIPage() {
    _s();
    // 缓存键名
    const CACHE_KEYS = {
        J_VALUE: 'kdjrsi_jValue',
        RSI_VALUE: 'kdjrsi_rsiValue',
        VOLUME: 'kdjrsi_volume',
        CYCLE: 'kdjrsi_cycle'
    };
    // 表单状态
    const [jValue, setJValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(CACHE_KEYS.J_VALUE, '');
    const [rsiValue, setRsiValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(CACHE_KEYS.RSI_VALUE, '');
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(CACHE_KEYS.VOLUME, '');
    const [cycle, setCycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(CACHE_KEYS.CYCLE, 'day');
    // 结果状态
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // 页面初始化
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KDJRSIPage.useEffect": ()=>{
            setTimeout({
                "KDJRSIPage.useEffect": ()=>{
                    document.body.classList.remove('loading');
                }
            }["KDJRSIPage.useEffect"], 300);
        }
    }["KDJRSIPage.useEffect"], []);
    // 输入验证
    const validateInputs = ()=>{
        const newErrors = {};
        const jValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$validations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateNumber"])(jValue, -100, 100);
        if (!jValidation.isValid) {
            newErrors.jValue = jValidation.message;
        }
        const rsiValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$validations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateRSI"])(rsiValue);
        if (!rsiValidation.isValid) {
            newErrors.rsiValue = rsiValidation.message;
        }
        const volumeValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$validations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateNumber"])(volume, 0);
        if (!volumeValidation.isValid && volume) {
            newErrors.volume = volumeValidation.message;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // 分析按钮点击处理
    const handleAnalyze = async ()=>{
        if (!validateInputs()) return;
        setIsLoading(true);
        // 模拟异步处理
        await new Promise((resolve)=>setTimeout(resolve, 500));
        try {
            const analysisResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$calculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateKDJ"])(parseFloat(jValue), parseFloat(rsiValue), parseFloat(volume) || 0, cycle);
            setResult(analysisResult);
        } catch (error) {
            console.error('分析失败:', error);
            setResult({
                signal: 'error',
                advice: '分析失败，请检查输入参数',
                confidence: 0
            });
        } finally{
            setIsLoading(false);
        }
    };
    // 清除结果
    const handleClear = ()=>{
        setResult(null);
        setErrors({});
    };
    // 获取信号样式
    const getSignalStyle = (signal)=>{
        switch(signal){
            case 'buy':
            case 'strong_buy':
                return 'badge-success';
            case 'sell':
            case 'strong_sell':
                return 'badge-error';
            case 'neutral':
                return 'badge-warning';
            default:
                return 'badge-secondary';
        }
    };
    // 获取信号文本
    const getSignalText = (signal)=>{
        switch(signal){
            case 'strong_buy':
                return '强烈买入';
            case 'buy':
                return '买入信号';
            case 'strong_sell':
                return '强烈卖出';
            case 'sell':
                return '卖出信号';
            case 'neutral':
                return '中性信号';
            default:
                return '无法判断';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-background via-background to-muted/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 -z-10 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-1/3 w-96 h-96 bg-success/5 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between mb-8 animate-slide-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-flex items-center text-muted-foreground hover:text-primary transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                "返回首页"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "w-6 h-6 text-primary animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "h2",
                                    children: "KDJ + RSI 分析"
                                }, void 0, false, {
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "max-w-2xl mx-auto space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "text-center animate-fade-in",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                                children: "基于KDJ和RSI指标的专业分析工具，助您把握市场脉搏"
                            }, void 0, false, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-slide-up",
                            style: {
                                animationDelay: '200ms'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                hover: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "w-6 h-6 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "h3 mb-1",
                                                            children: "参数输入"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground",
                                                            children: "填写技术指标参数进行智能分析"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        label: "KDJ - J值",
                                                        type: "number",
                                                        placeholder: "请输入J值 (-100 到 100)",
                                                        value: jValue,
                                                        onChange: (e)=>setJValue(e.target.value),
                                                        error: errors.jValue,
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                            lineNumber: 188,
                                                            columnNumber: 27
                                                        }, void 0),
                                                        step: "0.01",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        label: "RSI 指标",
                                                        type: "number",
                                                        placeholder: "请输入RSI值 (0 到 100)",
                                                        value: rsiValue,
                                                        onChange: (e)=>setRsiValue(e.target.value),
                                                        error: errors.rsiValue,
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                            lineNumber: 200,
                                                            columnNumber: 27
                                                        }, void 0),
                                                        step: "0.01",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                        lineNumber: 193,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "成交量 (可选)",
                                                type: "number",
                                                placeholder: "请输入成交量",
                                                value: volume,
                                                onChange: (e)=>setVolume(e.target.value),
                                                error: errors.volume,
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                    lineNumber: 213,
                                                    columnNumber: 25
                                                }, void 0),
                                                step: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-foreground mb-2",
                                                        children: "分析周期"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                        lineNumber: 218,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: cycle,
                                                        onChange: (e)=>setCycle(e.target.value),
                                                        className: "input",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "day",
                                                                children: "日线"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                lineNumber: 226,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "week",
                                                                children: "周线"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                lineNumber: 227,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "month",
                                                                children: "月线"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                lineNumber: 228,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "hour",
                                                                children: "小时线"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                lineNumber: 229,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: handleAnalyze,
                                                        disabled: isLoading || !jValue || !rsiValue,
                                                        loading: isLoading,
                                                        className: "flex-1",
                                                        size: "lg",
                                                        children: isLoading ? '分析中...' : '开始分析'
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                        lineNumber: 234,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        onClick: handleClear,
                                                        disabled: isLoading,
                                                        size: "lg",
                                                        children: "清除结果"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-fade-in",
                            style: {
                                animationDelay: '400ms'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                hover: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "h3 mb-1",
                                                        children: "分析结果"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `badge ${getSignalStyle(result.signal)}`,
                                                        children: getSignalText(result.signal)
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "置信度: ",
                                                    Math.round(result.confidence * 100),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                lineNumber: 267,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-muted/50 rounded-xl p-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                className: "w-4 h-4 text-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                lineNumber: 276,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                            lineNumber: 275,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold mb-2",
                                                                    children: "投资建议"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                    lineNumber: 279,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground leading-relaxed",
                                                                    children: result.advice
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                    lineNumber: 280,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                            lineNumber: 278,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                    lineNumber: 274,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, this),
                                            result.signal === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center text-error bg-error/10 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "w-5 h-5 mr-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                        lineNumber: 289,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "分析出现错误，请检查输入参数"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                        lineNumber: 290,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                lineNumber: 288,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                            lineNumber: 258,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-fade-in",
                            style: {
                                animationDelay: '600ms'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "bg-muted/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "h4 mb-2",
                                                children: "使用说明"
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "了解指标含义和使用技巧"
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-primary",
                                                            children: "指标说明"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                            lineNumber: 309,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 text-sm text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "• ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "J值："
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                            lineNumber: 311,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        "KDJ指标中的J值，反映价格变化的敏感度"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                    lineNumber: 311,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "• ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "RSI："
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                            lineNumber: 312,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        "相对强弱指标，判断超买超卖状态"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                    lineNumber: 312,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "• ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "成交量："
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                            lineNumber: 313,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        "市场活跃度的重要参考指标"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                    lineNumber: 313,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                            lineNumber: 310,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-accent",
                                                            children: "使用建议"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                            lineNumber: 318,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 text-sm text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "• 建议结合其他技术指标和市场环境综合判断"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                    lineNumber: 320,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "• 不同周期指标可能产生不同的信号"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                    lineNumber: 321,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "• 本工具仅供参考，投资有风险，入市需谨慎"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                                    lineNumber: 322,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                            lineNumber: 319,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                                    lineNumber: 317,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
            lineNumber: 130,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/code/githubProject/life-tools-next/src/app/kdj-rsi/page.js",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(KDJRSIPage, "w4qqxGLstL5YPDF+NLnwOaxlq2M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"]
    ];
});
_c = KDJRSIPage;
var _c;
__turbopack_context__.k.register(_c, "KDJRSIPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=code_githubProject_life-tools-next_src_4746d000._.js.map