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
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function Card({ children, className = '', padding = 'normal', hover = false, mobile = false, ...props }) {
    const paddings = {
        none: '',
        small: 'p-4',
        normal: 'p-6',
        large: 'p-8'
    };
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('card', mobile && 'rounded-2xl p-4', hover && 'card-hover', paddings[padding], className);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Card.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
});
_c1 = Card;
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c2 = function CardHeader({ children, className = '', mobile = false, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('card-header', mobile && 'p-4', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Card.js",
        lineNumber: 38,
        columnNumber: 5
    }, this);
});
_c3 = CardHeader;
const CardBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c4 = function CardBody({ children, className = '', mobile = false, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('card-body', mobile && 'p-4', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Card.js",
        lineNumber: 46,
        columnNumber: 5
    }, this);
});
_c5 = CardBody;
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c6 = function CardFooter({ children, className = '', mobile = false, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('card-footer', mobile && 'p-4', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Card.js",
        lineNumber: 54,
        columnNumber: 5
    }, this);
});
_c7 = CardFooter;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Card$memo");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$memo");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardBody$memo");
__turbopack_context__.k.register(_c5, "CardBody");
__turbopack_context__.k.register(_c6, "CardFooter$memo");
__turbopack_context__.k.register(_c7, "CardFooter");
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
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Input = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function Input({ label, placeholder, type = 'text', value, onChange, onBlur, onFocus, error = '', className = '', required = false, disabled = false, icon = null, mobile = false, ...props }) {
    _s();
    // 优化事件处理函数
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Input.Input.useCallback[handleChange]": (e)=>{
            if (onChange) {
                onChange(e);
            }
        }
    }["Input.Input.useCallback[handleChange]"], [
        onChange
    ]);
    const handleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Input.Input.useCallback[handleBlur]": (e)=>{
            if (onBlur) {
                onBlur(e);
            }
        }
    }["Input.Input.useCallback[handleBlur]"], [
        onBlur
    ]);
    const handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Input.Input.useCallback[handleFocus]": (e)=>{
            if (onFocus) {
                onFocus(e);
            }
        }
    }["Input.Input.useCallback[handleFocus]"], [
        onFocus
    ]);
    const inputClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full px-4 py-3 rounded-xl border border-gray-300/70 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/70 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-muted-foreground/60', 'min-h-[52px] text-lg', mobile && 'h-14 px-4 py-3 text-base min-h-[56px] rounded-2xl', error && 'border-error/70 focus:ring-error/50 focus:border-error', icon && 'pl-12', className);
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
                        lineNumber: 55,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Input.js",
                lineNumber: 53,
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
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: type,
                        placeholder: placeholder,
                        value: value,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        onFocus: handleFocus,
                        disabled: disabled,
                        className: inputClasses,
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Input.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Input.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-error mt-1",
                children: error
            }, void 0, false, {
                fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Input.js",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Input.js",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}, "KtnD5OqE742SivS5939/J1Gools="), (prevProps, nextProps)=>{
    // 自定义比较函数，只在必要时重新渲染
    return prevProps.value === nextProps.value && prevProps.error === nextProps.error && prevProps.disabled === nextProps.disabled && prevProps.mobile === nextProps.mobile && prevProps.label === nextProps.label && prevProps.placeholder === nextProps.placeholder && prevProps.type === nextProps.type && prevProps.required === nextProps.required && prevProps.icon === nextProps.icon;
}), "KtnD5OqE742SivS5939/J1Gools=");
_c1 = Input;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$memo");
__turbopack_context__.k.register(_c1, "Input");
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
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Button = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function Button({ children, variant = 'primary', size = 'md', disabled = false, loading = false, className = '', icon, onClick, type = 'button', mobile = false, ...props }) {
    _s();
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
    // 优化点击事件处理
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Button.Button.useCallback[handleClick]": (e)=>{
            if (!disabled && !loading && onClick) {
                onClick(e);
            }
        }
    }["Button.Button.useCallback[handleClick]"], [
        disabled,
        loading,
        onClick
    ]);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('btn', mobile && 'h-14 px-6 py-3 text-base min-h-[56px] rounded-2xl', variants[variant], sizes[size], (disabled || loading) && 'opacity-50 cursor-not-allowed', loading && 'opacity-75', className);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: classes,
        disabled: disabled || loading,
        onClick: handleClick,
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
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }, void 0, false, {
                        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Button.js",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Button.js",
                lineNumber: 62,
                columnNumber: 9
            }, this),
            icon && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-4 h-4",
                children: icon
            }, void 0, false, {
                fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Button.js",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/code/githubProject/life-tools-next/src/components/ui/Button.js",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}, "PRIOWs9bezaAbp8UlGmbaZMoYYA="), (prevProps, nextProps)=>{
    // 自定义比较函数，只在必要时重新渲染
    return prevProps.children === nextProps.children && prevProps.variant === nextProps.variant && prevProps.size === nextProps.size && prevProps.disabled === nextProps.disabled && prevProps.loading === nextProps.loading && prevProps.className === nextProps.className && prevProps.icon === nextProps.icon && prevProps.mobile === nextProps.mobile && prevProps.type === nextProps.type;
}), "PRIOWs9bezaAbp8UlGmbaZMoYYA=");
_c1 = Button;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$memo");
__turbopack_context__.k.register(_c1, "Button");
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
const ThemeToggle = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(function ThemeToggle() {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.ThemeToggle.useEffect": ()=>{
            setMounted(true);
            const savedTheme = localStorage.getItem('theme');
            const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const isDarkMode = savedTheme === 'dark' || !savedTheme && systemPreference;
            setIsDark(isDarkMode);
            document.documentElement.classList.toggle('dark', isDarkMode);
        }
    }["ThemeToggle.ThemeToggle.useEffect"], []);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeToggle.ThemeToggle.useCallback[toggleTheme]": ()=>{
            const newIsDark = !isDark;
            setIsDark(newIsDark);
            document.documentElement.classList.toggle('dark', newIsDark);
            localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
        }
    }["ThemeToggle.ThemeToggle.useCallback[toggleTheme]"], [
        isDark
    ]);
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
}, "LtAFYOqqaiR1ROAaX5aKIif3uiA=")), "LtAFYOqqaiR1ROAaX5aKIif3uiA=");
_c1 = ThemeToggle;
var _c, _c1;
__turbopack_context__.k.register(_c, "ThemeToggle$React.memo");
__turbopack_context__.k.register(_c1, "ThemeToggle");
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
    // 检查时间格式 HH:MM
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(timeString)) {
        return {
            isValid: false,
            message: '请输入有效时间 (HH:MM)'
        };
    }
    // 分割小时和分钟
    const [hours, minutes] = timeString.split(':').map(Number);
    // 验证小时和分钟范围
    if (hours < 0 || hours > 23) {
        return {
            isValid: false,
            message: '小时必须在0-23之间'
        };
    }
    if (minutes < 0 || minutes > 59) {
        return {
            isValid: false,
            message: '分钟必须在0-59之间'
        };
    }
    return {
        isValid: true,
        value: timeString
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SoyMilkPage
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
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alarm$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlarmClock$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/alarm-clock.js [app-client] (ecmascript) <export default as AlarmClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
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
function SoyMilkPage() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 缓存键名
    const CACHE_KEYS = {
        TARGET_TIME: 'soymilk_targetTime',
        MAKING_TIME: 'soymilk_makingTime',
        PRESET_TIMES: 'soymilk_presetTimes',
        HISTORY: 'soymilk_history'
    };
    // 预设制作时长
    const presetMakingTimes = [
        {
            label: '快速模式',
            time: 15,
            description: '适合少量豆浆'
        },
        {
            label: '标准模式',
            time: 25,
            description: '常规制作时长'
        },
        {
            label: '浓浆模式',
            time: 35,
            description: '口感更浓郁'
        },
        {
            label: '米糊模式',
            time: 20,
            description: '制作米糊'
        }
    ];
    // 预设饮用时间
    const presetDrinkTimes = [
        {
            label: '早餐时间',
            time: '07:30',
            description: '早上7:30'
        },
        {
            label: '早茶时间',
            time: '10:00',
            description: '上午10:00'
        },
        {
            label: '午餐时间',
            time: '12:30',
            description: '中午12:30'
        },
        {
            label: '下午茶',
            time: '15:30',
            description: '下午3:30'
        },
        {
            label: '晚餐时间',
            time: '18:30',
            description: '晚上6:30'
        },
        {
            label: '夜宵时间',
            time: '21:00',
            description: '晚上9:00'
        }
    ];
    // 表单状态
    const [targetTime, setTargetTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(CACHE_KEYS.TARGET_TIME, '');
    const [makingTime, setMakingTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(CACHE_KEYS.MAKING_TIME, '25');
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(CACHE_KEYS.HISTORY, []);
    // UI状态
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showPresets, setShowPresets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 更新当前时间
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoyMilkPage.useEffect": ()=>{
            const timer = setInterval({
                "SoyMilkPage.useEffect.timer": ()=>{
                    setCurrentTime(new Date());
                }
            }["SoyMilkPage.useEffect.timer"], 1000);
            return ({
                "SoyMilkPage.useEffect": ()=>clearInterval(timer)
            })["SoyMilkPage.useEffect"];
        }
    }["SoyMilkPage.useEffect"], []);
    // 倒计时更新
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoyMilkPage.useEffect": ()=>{
            if (result && result.timeRemaining > 0) {
                const timer = setInterval({
                    "SoyMilkPage.useEffect.timer": ()=>{
                        setCountdown(Math.max(0, result.timeRemaining - 1000));
                    }
                }["SoyMilkPage.useEffect.timer"], 1000);
                return ({
                    "SoyMilkPage.useEffect": ()=>clearInterval(timer)
                })["SoyMilkPage.useEffect"];
            }
        }
    }["SoyMilkPage.useEffect"], [
        result
    ]);
    // 页面初始化
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoyMilkPage.useEffect": ()=>{
            // 检测是否为移动设备
            const checkMobile = {
                "SoyMilkPage.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 640);
                }
            }["SoyMilkPage.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            setTimeout({
                "SoyMilkPage.useEffect": ()=>{
                    document.body.classList.remove('loading');
                }
            }["SoyMilkPage.useEffect"], 300);
            return ({
                "SoyMilkPage.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["SoyMilkPage.useEffect"];
        }
    }["SoyMilkPage.useEffect"], []);
    // 输入验证
    const validateInputs = ()=>{
        const newErrors = {};
        if (!targetTime) {
            newErrors.targetTime = '请选择目标饮用时间';
        } else {
            const timeValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$validations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateTime"])(targetTime);
            if (!timeValidation.isValid) {
                newErrors.targetTime = timeValidation.message;
            }
        }
        const makingValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$validations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateNumber"])(makingTime, 1, 120);
        if (!makingValidation.isValid) {
            newErrors.makingTime = '制作时长必须在1-120分钟之间';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // 计算预约时间
    const handleCalculate = ()=>{
        if (!validateInputs()) return;
        try {
            // 将时间字符串转换为完整的日期时间
            const today = new Date();
            const [hours, minutes] = targetTime.split(':');
            const targetDateTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(hours), parseInt(minutes));
            // 如果目标时间已过，设置为明天
            if (targetDateTime <= new Date()) {
                targetDateTime.setDate(targetDateTime.getDate() + 1);
            }
            const calculationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$calculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateSoyMilkTime"])(targetDateTime.toISOString(), parseInt(makingTime));
            // 添加到历史记录
            const historyEntry = {
                id: Date.now(),
                timestamp: new Date().toISOString(),
                targetTime: calculationResult.targetTime,
                appointmentTime: calculationResult.appointmentTime,
                makingTime: calculationResult.makingTime
            };
            setHistory((prev)=>[
                    historyEntry,
                    ...prev.slice(0, 4)
                ]); // 保留最近5条
            setResult(calculationResult);
            setCountdown(calculationResult.timeRemaining);
        } catch (error) {
            console.error('计算失败:', error);
            setResult({
                error: true,
                message: '计算失败，请检查输入参数'
            });
        }
    };
    // 设置预设饮用时间
    const setPresetDrinkTime = (time)=>{
        setTargetTime(time);
        setShowPresets(false);
    };
    // 设置预设制作时长
    const setPresetMakingTime = (time)=>{
        setMakingTime(time.toString());
    };
    // 清除结果
    const handleClear = ()=>{
        setResult(null);
        setCountdown(null);
        setErrors({});
    };
    // 格式化倒计时
    const formatCountdown = (milliseconds)=>{
        if (!milliseconds || milliseconds <= 0) return '已过期';
        const hours = Math.floor(milliseconds / (1000 * 60 * 60));
        const minutes = Math.floor(milliseconds % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(milliseconds % (1000 * 60) / 1000);
        if (hours > 0) {
            return `${hours}小时${minutes}分${seconds}秒`;
        } else if (minutes > 0) {
            return `${minutes}分${seconds}秒`;
        } else {
            return `${seconds}秒`;
        }
    };
    // 格式化时间显示
    const formatTime = (date)=>{
        return new Intl.DateTimeFormat('zh-CN', {
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(date);
    };
    // 检查是否需要立即开始
    const needsImmediateStart = result && result.appointmentTime <= new Date();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-background via-background to-muted/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 -z-10 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                    lineNumber: 227,
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
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                "返回首页"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                    className: "w-6 h-6 text-orange-600 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "h2",
                                    children: "豆浆助手"
                                }, void 0, false, {
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                    lineNumber: 234,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "max-w-2xl mx-auto space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "text-center animate-fade-in",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                                children: "智能预约制作，确保在最佳时间享用热腾腾的豆浆"
                            }, void 0, false, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-slide-up",
                            style: {
                                animationDelay: '200ms'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                hover: true,
                                className: "bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-90/20 dark:to-yellow-900/20 border-orange-200 dark:border-orange-800",
                                mobile: isMobile,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                    mobile: isMobile,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-5 h-5 text-orange-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 266,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 265,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-orange-800 dark:text-orange-20",
                                                        children: "当前时间"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 268,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 264,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold text-orange-900 dark:text-orange-100 mb-1",
                                                children: formatTime(currentTime)
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 272,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-orange-700 dark:text-orange-30",
                                                children: "系统实时时间"
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-slide-up",
                            style: {
                                animationDelay: '300ms'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                hover: true,
                                mobile: isMobile,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        mobile: isMobile,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 bg-orange-10 rounded-xl flex items-center justify-center mr-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                                        className: "w-6 h-6 text-orange-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 289,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "h3 mb-1",
                                                            children: "预约设置"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 292,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground",
                                                            children: "设置目标饮用时间和制作参数"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 293,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        className: "space-y-6",
                                        mobile: isMobile,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-foreground mb-2",
                                                        children: "目标饮用时间"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 301,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                type: "time",
                                                                value: targetTime,
                                                                onChange: (e)=>setTargetTime(e.target.value),
                                                                error: errors.targetTime,
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alarm$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlarmClock$3e$__["AlarmClock"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                    lineNumber: 310,
                                                                    columnNumber: 29
                                                                }, void 0),
                                                                required: true,
                                                                mobile: isMobile
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 305,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "outline",
                                                                size: "sm",
                                                                onClick: ()=>setShowPresets(!showPresets),
                                                                className: "absolute right-2 top-1/2 transform -translate-y-1/2",
                                                                mobile: isMobile,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                    lineNumber: 321,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 314,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 304,
                                                        columnNumber: 19
                                                    }, this),
                                                    showPresets && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-10 max-h-64 overflow-y-auto",
                                                        children: presetDrinkTimes.map((preset, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setPresetDrinkTime(preset.time),
                                                                className: "w-full text-left px-4 py-3 hover:bg-muted transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0 first:rounded-t-xl last:rounded-b-xl",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "font-medium text-foreground",
                                                                                    children: preset.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                                    lineNumber: 336,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm text-muted-foreground",
                                                                                    children: preset.description
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                                    lineNumber: 339,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                            lineNumber: 335,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-lg font-bold text-orange-600",
                                                                            children: preset.time
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                            lineNumber: 343,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                    lineNumber: 334,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 329,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-foreground mb-2",
                                                        children: "制作时长 (分钟)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 355,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "number",
                                                        placeholder: "请输入制作时长",
                                                        value: makingTime,
                                                        onChange: (e)=>setMakingTime(e.target.value),
                                                        error: errors.makingTime,
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 364,
                                                            columnNumber: 27
                                                        }, void 0),
                                                        min: "1",
                                                        max: "120",
                                                        step: "1",
                                                        required: true,
                                                        mobile: isMobile
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 358,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 grid grid-cols-2 gap-3",
                                                        children: presetMakingTimes.map((preset, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: parseInt(makingTime) === preset.time ? 'primary' : 'outline',
                                                                size: "sm",
                                                                onClick: ()=>setPresetMakingTime(preset.time),
                                                                className: "text-xs py-3",
                                                                mobile: isMobile,
                                                                children: [
                                                                    preset.label,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-1 opacity-75",
                                                                        children: [
                                                                            "(",
                                                                            preset.time,
                                                                            "分)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 384,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 375,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 373,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: handleCalculate,
                                                        className: "flex-1 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800",
                                                        size: "lg",
                                                        mobile: isMobile,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                className: "w-4 h-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 397,
                                                                columnNumber: 21
                                                            }, this),
                                                            "计算预约时间"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 391,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        onClick: handleClear,
                                                        size: "lg",
                                                        mobile: isMobile,
                                                        children: "清除结果"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 400,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        result && !result.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "animate-fade-in",
                                    style: {
                                        animationDelay: '400ms'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        hover: true,
                                        mobile: isMobile,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                mobile: isMobile,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                className: "w-5 h-5 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 422,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold",
                                                                children: "预约时间已计算"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 423,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 421,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                    lineNumber: 420,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 419,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                                className: "space-y-6",
                                                mobile: isMobile,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-muted/50 rounded-xl p-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-semibold flex items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alarm$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlarmClock$3e$__["AlarmClock"], {
                                                                                            className: "w-4 h-4 text-orange-600"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                                            lineNumber: 435,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                                        lineNumber: 434,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    "预约开始时间"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                                lineNumber: 433,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            needsImmediateStart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "badge badge-error",
                                                                                children: "需立即开始"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                                lineNumber: 440,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 432,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-bold mb-2",
                                                                        children: formatTime(result.appointmentTime)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 445,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: "豆浆机开始制作的时间"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 448,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 431,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-muted/50 rounded-xl p-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                                                                    className: "w-4 h-4 text-orange-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                                    lineNumber: 457,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                                lineNumber: 456,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-semibold",
                                                                                children: "目标饮用时间"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                                lineNumber: 459,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 455,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-bold mb-2",
                                                                        children: formatTime(result.targetTime)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 461,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: "期望喝到热豆浆的时间"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 464,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 454,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 429,
                                                        columnNumber: 21
                                                    }, this),
                                                    countdown !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                                                className: "w-4 h-4 text-blue-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                                lineNumber: 476,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                            lineNumber: 475,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        needsImmediateStart ? '已过期' : '距离预约开始'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                    lineNumber: 474,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 473,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `text-3xl font-bold mb-2 ${needsImmediateStart ? 'text-error' : 'text-blue-600'}`,
                                                                children: needsImmediateStart ? '请立即开始' : formatCountdown(countdown)
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 481,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: needsImmediateStart ? '预约时间已过，建议立即开始制作' : '剩余时间到预约开始'
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 486,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 472,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-muted/50 rounded-xl p-6 text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-muted-foreground mb-2",
                                                                        children: "制作时长"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 498,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-bold",
                                                                        children: [
                                                                            result.makingTime,
                                                                            " 分钟"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 499,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 497,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-muted/50 rounded-xl p-6 text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-muted-foreground mb-2",
                                                                        children: "完成等待"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 504,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-bold",
                                                                        children: [
                                                                            "约 ",
                                                                            Math.ceil(result.makingTime * 0.2),
                                                                            " 分钟"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 505,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-muted-foreground mt-1",
                                                                        children: "冷却到适宜温度"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 508,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 503,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 496,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 428,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                        lineNumber: 418,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                    lineNumber: 417,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "animate-fade-in",
                                    style: {
                                        animationDelay: '500ms'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-80",
                                        mobile: isMobile,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                            mobile: isMobile,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                            className: "w-4 h-4 text-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 523,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 522,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold text-blue-800 dark:text-blue-200 mb-3",
                                                                children: "温馨提示"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 526,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2 text-sm text-blue-700 dark:text-blue-300",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "• 请提前准备好豆子和水"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 530,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "• 建议在预约开始前5分钟内准备好所有材料"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 531,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "• 制作完成后豆浆会很热，请小心烫伤"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 532,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "• 不同豆浆机型号可能有时间差异，请根据实际情况调整"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 533,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                lineNumber: 529,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 525,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 521,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                            lineNumber: 520,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                        lineNumber: 519,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                    lineNumber: 518,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        result && result.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-fade-in",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-error bg-error/10",
                                mobile: isMobile,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                    mobile: isMobile,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-error",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-5 h-5 mr-3"
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 549,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold",
                                                        children: "计算失败"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 551,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: result.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 552,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 550,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                        lineNumber: 548,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                    lineNumber: 547,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                lineNumber: 546,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                            lineNumber: 545,
                            columnNumber: 13
                        }, this),
                        history.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-fade-in",
                            style: {
                                animationDelay: '600ms'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                hover: true,
                                mobile: isMobile,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        mobile: isMobile,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "h4 mb-2 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 bg-orange-10 rounded-lg flex items-center justify-center mr-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "w-4 h-4 text-orange-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 567,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 566,
                                                        columnNumber: 21
                                                    }, this),
                                                    "最近预约记录"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 565,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "查看最近的历史预约记录"
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 571,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                        lineNumber: 564,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        mobile: isMobile,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 max-h-64 overflow-y-auto",
                                            children: history.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                                                        className: "w-4 h-4 text-orange-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                        lineNumber: 583,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                    lineNumber: 582,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium",
                                                                            children: formatTime(new Date(entry.appointmentTime))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                            lineNumber: 586,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: [
                                                                                "制作 ",
                                                                                entry.makingTime,
                                                                                " 分钟"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                            lineNumber: 589,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                    lineNumber: 585,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 581,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: new Date(entry.timestamp).toLocaleDateString('zh-CN')
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 594,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, entry.id, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                    lineNumber: 577,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                            lineNumber: 575,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                        lineNumber: 574,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                lineNumber: 563,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                            lineNumber: 562,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-fade-in",
                            style: {
                                animationDelay: '700ms'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "bg-muted/30",
                                mobile: isMobile,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        mobile: isMobile,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "h4 mb-2 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                            className: "w-4 h-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 611,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                        lineNumber: 610,
                                                        columnNumber: 19
                                                    }, this),
                                                    "使用说明"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 609,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "了解如何使用豆浆助手"
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                lineNumber: 615,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                        lineNumber: 608,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        mobile: isMobile,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-primary",
                                                            children: "功能说明"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 621,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 text-sm text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "• ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "目标时间："
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                            lineNumber: 623,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        "您希望喝到豆浆的时间"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                    lineNumber: 623,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "• ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "制作时长："
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                            lineNumber: 624,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        "根据豆浆机型号和食材量调整"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                    lineNumber: 624,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "• ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "预约时间："
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                            lineNumber: 625,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        "系统自动计算，确保准时完成"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                    lineNumber: 625,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 622,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                    lineNumber: 620,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-accent",
                                                            children: "使用技巧"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 630,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 text-sm text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "• ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "倒计时提醒："
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                            lineNumber: 632,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        "实时显示距离预约开始的剩余时间"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                    lineNumber: 632,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "• ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "历史记录："
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                            lineNumber: 633,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        "保存最近的预约记录，方便查看"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                    lineNumber: 633,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "• ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "预设模式："
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                            lineNumber: 634,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        "快速选择常用的制作模式和饮用时间"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                                    lineNumber: 634,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                            lineNumber: 631,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                                    lineNumber: 629,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                            lineNumber: 619,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                        lineNumber: 618,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                                lineNumber: 607,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                            lineNumber: 606,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
            lineNumber: 225,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/code/githubProject/life-tools-next/src/app/soy-milk/page.js",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
_s(SoyMilkPage, "e2tpJs2swGqNfKXRCmMuXRfEe0g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"]
    ];
});
_c = SoyMilkPage;
var _c;
__turbopack_context__.k.register(_c, "SoyMilkPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=code_githubProject_life-tools-next_src_5ea5fff2._.js.map