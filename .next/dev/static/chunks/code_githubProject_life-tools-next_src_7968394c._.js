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
"[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TDayCalculatorPage
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
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/code/githubProject/life-tools-next/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
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
// 防抖函数
const debounce = (func, wait)=>{
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>func.apply(("TURBOPACK compile-time value", void 0), args), wait);
    };
};
function TDayCalculatorPage() {
    _s();
    // 缓存键名
    const CACHE_KEYS = {
        BUY_PRICE: 'tday_buyPrice',
        SELL_PRICE: 'tday_sellPrice',
        QUANTITY: 'tday_quantity',
        COMMISSION: 'tday_commission',
        ADVANCED: 'tday_advanced'
    };
    // 预设配置
    const presetCommissions = [
        {
            label: '默认费率',
            value: 0.0003,
            description: '万三佣金'
        },
        {
            label: '低费率',
            value: 0.0002,
            description: '万二佣金'
        },
        {
            label: '超低费率',
            value: 0.0001,
            description: '万一佣金'
        }
    ];
    // 表单状态
    const [buyPrice, setBuyPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(CACHE_KEYS.BUY_PRICE, '');
    const [sellPrice, setSellPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(CACHE_KEYS.SELL_PRICE, '');
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(CACHE_KEYS.QUANTITY, '1000');
    const [commission, setCommission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(CACHE_KEYS.COMMISSION, '0.0003');
    const [showAdvanced, setShowAdvanced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(CACHE_KEYS.ADVANCED, false);
    // 结果状态
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showBreakEven, setShowBreakEven] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 页面初始化
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TDayCalculatorPage.useEffect": ()=>{
            setTimeout({
                "TDayCalculatorPage.useEffect": ()=>{
                    document.body.classList.remove('loading');
                }
            }["TDayCalculatorPage.useEffect"], 300);
        }
    }["TDayCalculatorPage.useEffect"], []);
    // 输入验证（带防抖）
    const validateInputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(debounce({
        "TDayCalculatorPage.useCallback[validateInputs]": ()=>{
            const newErrors = {};
            const buyValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$validations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateNumber"])(buyPrice, 0);
            if (!buyValidation.isValid) {
                newErrors.buyPrice = buyValidation.message;
            }
            const sellValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$validations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateNumber"])(sellPrice, 0);
            if (!sellValidation.isValid) {
                newErrors.sellPrice = sellValidation.message;
            }
            const quantityValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$validations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateNumber"])(quantity, 1);
            if (!quantityValidation.isValid) {
                newErrors.quantity = quantityValidation.message;
            }
            const commissionValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$validations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateNumber"])(commission, 0, 0.003);
            if (!commissionValidation.isValid) {
                newErrors.commission = commissionValidation.message;
            }
            // 逻辑验证
            if (buyPrice && sellPrice) {
                const buy = parseFloat(buyPrice);
                const sell = parseFloat(sellPrice);
                if (sell <= buy) {
                    newErrors.sellPrice = '卖出价格必须大于买入价格';
                }
            }
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        }
    }["TDayCalculatorPage.useCallback[validateInputs]"], 300), [
        buyPrice,
        sellPrice,
        quantity,
        commission
    ]);
    // 计算做T收益
    const handleCalculate = ()=>{
        if (!validateInputs()) return;
        try {
            const calculationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$lib$2f$calculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateTDayProfit"])(parseFloat(buyPrice), parseFloat(sellPrice), parseInt(quantity), parseFloat(commission));
            // 计算盈亏平衡点
            const profitPerShare = parseFloat(sellPrice) - parseFloat(buyPrice);
            const totalCommission = parseFloat(calculationResult.commissionAmount);
            const commissionPerShare = totalCommission / parseInt(quantity);
            const breakEvenPrice = parseFloat(buyPrice) + commissionPerShare;
            setResult({
                ...calculationResult,
                profitPerShare: profitPerShare.toFixed(3),
                breakEvenPrice: breakEvenPrice.toFixed(3),
                priceSpread: (parseFloat(sellPrice) - parseFloat(buyPrice)).toFixed(3),
                spreadRate: ((parseFloat(sellPrice) - parseFloat(buyPrice)) / parseFloat(buyPrice) * 100).toFixed(3)
            });
        } catch (error) {
            console.error('计算失败:', error);
            setResult({
                error: true,
                message: '计算失败，请检查输入参数'
            });
        }
    };
    // 清除结果
    const handleClear = ()=>{
        setResult(null);
        setShowBreakEven(false);
        setErrors({});
    };
    // 计算盈亏平衡点所需价格
    const calculateRequiredSellPrice = ()=>{
        if (!buyPrice || !quantity || !commission) return 0;
        const buy = parseFloat(buyPrice);
        const qty = parseInt(quantity);
        const comm = parseFloat(commission);
        // 计算总成本
        const buyCost = buy * qty * (1 + comm);
        // 计算需要卖出的价格（考虑卖出成本）
        const requiredSellPrice = buyCost / (qty * (1 - comm - 0.001)) // 0.001是印花税
        ;
        return requiredSellPrice.toFixed(3);
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
                            className: "absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                    lineNumber: 173,
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
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                "返回首页"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                    className: "w-6 h-6 text-green-600 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "h2",
                                    children: "做T计算器"
                                }, void 0, false, {
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "max-w-4xl mx-auto space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "text-center animate-fade-in",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground max-w-3xl mx-auto",
                                children: "精准计算买卖成本和盈亏平衡点，助您优化日内交易策略"
                            }, void 0, false, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                            lineNumber: 199,
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
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                                                className: "w-6 h-6 text-green-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 212,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 211,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "h3 mb-1",
                                                                    children: "交易参数设置"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                    lineNumber: 215,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground",
                                                                    children: "配置买入卖出价格和数量"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                    lineNumber: 216,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 214,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: ()=>setShowAdvanced(!showAdvanced),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            className: "w-4 h-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 224,
                                                            columnNumber: 21
                                                        }, this),
                                                        showAdvanced ? '简化' : '高级'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold mb-4 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                    className: "w-4 h-4 text-blue-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                    lineNumber: 235,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 234,
                                                                columnNumber: 21
                                                            }, this),
                                                            "价格参数"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                label: "买入价格 (¥)",
                                                                type: "number",
                                                                placeholder: "股票买入价格",
                                                                value: buyPrice,
                                                                onChange: (e)=>setBuyPrice(e.target.value),
                                                                error: errors.buyPrice,
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                    lineNumber: 247,
                                                                    columnNumber: 29
                                                                }, void 0),
                                                                step: "0.001",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 240,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                label: "卖出价格 (¥)",
                                                                type: "number",
                                                                placeholder: "股票卖出价格",
                                                                value: sellPrice,
                                                                onChange: (e)=>setSellPrice(e.target.value),
                                                                error: errors.sellPrice,
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                    lineNumber: 258,
                                                                    columnNumber: 29
                                                                }, void 0),
                                                                step: "0.001",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 251,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 239,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold mb-4 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                                    className: "w-4 h-4 text-purple-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                    lineNumber: 269,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 268,
                                                                columnNumber: 21
                                                            }, this),
                                                            "交易数量"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 267,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        label: "股票数量 (股)",
                                                        type: "number",
                                                        placeholder: "交易股票数量",
                                                        value: quantity,
                                                        onChange: (e)=>setQuantity(e.target.value),
                                                        error: errors.quantity,
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 280,
                                                            columnNumber: 27
                                                        }, void 0),
                                                        step: "100",
                                                        min: "100",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 273,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, this),
                                            showAdvanced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6 border-t border-border pt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold mb-4 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                                        className: "w-4 h-4 text-orange-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 293,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                    lineNumber: 292,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "费率设置"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 291,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            label: "佣金费率",
                                                            type: "number",
                                                            placeholder: "默认0.0003（万三）",
                                                            value: commission,
                                                            onChange: (e)=>setCommission(e.target.value),
                                                            error: errors.commission,
                                                            step: "0.0001",
                                                            min: "0",
                                                            max: "0.003"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 298,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-foreground mb-2",
                                                                    children: "快速选择费率"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                    lineNumber: 312,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                                                                    children: presetCommissions.map((preset, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: parseFloat(commission) === preset.value ? 'primary' : 'outline',
                                                                            size: "sm",
                                                                            onClick: ()=>setCommission(preset.value.toString()),
                                                                            className: "p-3 h-auto flex flex-col items-center space-y-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "font-semibold",
                                                                                    children: preset.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                    lineNumber: 324,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-muted-foreground",
                                                                                    children: preset.description
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                    lineNumber: 325,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs font-mono",
                                                                                    children: [
                                                                                        (preset.value * 10000).toFixed(0),
                                                                                        "‱"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                    lineNumber: 328,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, index, true, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                            lineNumber: 317,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                    lineNumber: 315,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 311,
                                                            columnNumber: 23
                                                        }, this),
                                                        buyPrice && quantity && commission && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                            className: "w-4 h-4 text-blue-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                            lineNumber: 341,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 340,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-blue-800 dark:text-blue-200",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-semibold mb-1",
                                                                                children: "盈亏平衡点分析"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 344,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-lg font-bold mb-1",
                                                                                children: [
                                                                                    "¥",
                                                                                    calculateRequiredSellPrice()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 345,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs",
                                                                                children: "卖出价格需达到此值才能覆盖所有交易成本（佣金+印花税）"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 348,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 343,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 339,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 338,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                    lineNumber: 290,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: handleCalculate,
                                                        disabled: !buyPrice || !sellPrice || !quantity,
                                                        className: "flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
                                                        size: "lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                                                className: "w-4 h-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 366,
                                                                columnNumber: 21
                                                            }, this),
                                                            "计算收益"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 360,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        onClick: handleClear,
                                                        size: "lg",
                                                        children: "清除结果"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 359,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        result && !result.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-fade-in",
                            style: {
                                animationDelay: '400ms'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                hover: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `inline-flex items-center px-4 py-2 rounded-full ${parseFloat(result.profit) > 0 ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                        className: "w-5 h-5 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 392,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: parseFloat(result.profit) > 0 ? '交易盈利' : '交易亏损'
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 393,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 387,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                            lineNumber: 386,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                        lineNumber: 385,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-muted/50 rounded-xl p-6 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-muted-foreground mb-2",
                                                                children: "净收益"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 404,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `text-3xl font-bold ${parseFloat(result.profit) > 0 ? 'text-success' : 'text-error'}`,
                                                                children: [
                                                                    "¥",
                                                                    result.profit
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 405,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `text-sm mt-1 ${parseFloat(result.profitRate) > 0 ? 'text-success' : 'text-error'}`,
                                                                children: [
                                                                    result.profitRate,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 410,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 403,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-muted/50 rounded-xl p-6 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-muted-foreground mb-2",
                                                                children: "总成本"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 418,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-3xl font-bold",
                                                                children: [
                                                                    "¥",
                                                                    result.buyCost
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 419,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground mt-1",
                                                                children: "含所有手续费"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 422,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 417,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 402,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-muted/50 rounded-xl p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold mb-4",
                                                        children: "交易详情分析"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 430,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-center p-3 bg-background rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-muted-foreground",
                                                                                children: "买入成本"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 435,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: [
                                                                                    "¥",
                                                                                    result.buyCost
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 436,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 434,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-center p-3 bg-background rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-muted-foreground",
                                                                                children: "卖出收入"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 439,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: [
                                                                                    "¥",
                                                                                    result.sellIncome
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 440,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 438,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-center p-3 bg-background rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-muted-foreground",
                                                                                children: "价差收益"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 443,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium text-success",
                                                                                children: [
                                                                                    "¥",
                                                                                    (parseFloat(result.profit) + parseFloat(result.commissionAmount)).toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 444,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 442,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-center p-3 bg-background rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-muted-foreground",
                                                                                children: "手续费总额"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 449,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium text-error",
                                                                                children: [
                                                                                    "-¥",
                                                                                    result.commissionAmount
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 450,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 448,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 433,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border-t border-border pt-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between items-center p-3 bg-background rounded-lg",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-muted-foreground",
                                                                                    children: "每股价差"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                    lineNumber: 457,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: [
                                                                                        "¥",
                                                                                        result.priceSpread
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                    lineNumber: 458,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                            lineNumber: 456,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between items-center p-3 bg-background rounded-lg",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-muted-foreground",
                                                                                    children: "价差比例"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                    lineNumber: 461,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: [
                                                                                        result.spreadRate,
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                    lineNumber: 462,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                            lineNumber: 460,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                    lineNumber: 455,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 454,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 432,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 429,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-muted/50 rounded-xl p-6 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-muted-foreground mb-2",
                                                                children: "每股收益"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 472,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `text-2xl font-bold ${parseFloat(result.profitPerShare) > 0 ? 'text-success' : 'text-error'}`,
                                                                children: [
                                                                    "¥",
                                                                    result.profitPerShare
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 473,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 471,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-muted/50 rounded-xl p-6 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-muted-foreground mb-2",
                                                                children: "盈亏平衡价"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 480,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-primary",
                                                                children: [
                                                                    "¥",
                                                                    result.breakEvenPrice
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 481,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground mt-1",
                                                                children: "覆盖所有成本的价格"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 484,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 479,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 470,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `rounded-xl p-4 border ${parseFloat(result.profit) > 0 ? 'bg-success/10 border-success/30 text-success' : 'bg-error/10 border-error/30 text-error'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold mb-1",
                                                            children: parseFloat(result.profit) > 0 ? '🎉 交易建议' : '⚠️ 交易建议'
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 497,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm",
                                                            children: parseFloat(result.profit) > 0 ? '本次做T成功，获得了正收益！建议继续关注市场动态，适时止盈。' : '本次做T出现亏损，建议提高价差或选择更低费率的券商，确保价差能覆盖交易成本。'
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 500,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                    lineNumber: 496,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 491,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                        lineNumber: 400,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                lineNumber: 384,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                            lineNumber: 383,
                            columnNumber: 13
                        }, this),
                        result && result.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "animate-fade-in",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-error bg-error/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-error",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-5 h-5 mr-3"
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 519,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold",
                                                        children: "计算失败"
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 521,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: result.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 522,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 520,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                        lineNumber: 518,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                    lineNumber: 517,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                lineNumber: 516,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                            lineNumber: 515,
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
                                                className: "h4 mb-2 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                            className: "w-4 h-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 536,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 535,
                                                        columnNumber: 19
                                                    }, this),
                                                    "交易费用说明"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 534,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "了解A股交易的各种费用构成"
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 540,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                        lineNumber: 533,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$components$2f$ui$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold text-primary",
                                                                children: "费用构成"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 546,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2 text-sm text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            "• ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "佣金："
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 548,
                                                                                columnNumber: 28
                                                                            }, this),
                                                                            "双向收取，默认万三（0.03%）"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 548,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            "• ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "印花税："
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 549,
                                                                                columnNumber: 28
                                                                            }, this),
                                                                            "卖出时收取，千分之一（0.1%）"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 549,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            "• ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "过户费："
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 550,
                                                                                columnNumber: 28
                                                                            }, this),
                                                                            "双向收取，万分之0.2"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 550,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            "• ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "其他费用："
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 551,
                                                                                columnNumber: 28
                                                                            }, this),
                                                                            "可能包含监管费等"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 551,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 547,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 545,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold text-accent",
                                                                children: "交易建议"
                                                            }, void 0, false, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 556,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2 text-sm text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            "• ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "盈亏平衡："
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 558,
                                                                                columnNumber: 28
                                                                            }, this),
                                                                            "需覆盖所有交易成本"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 558,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            "• ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "做T建议："
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 559,
                                                                                columnNumber: 28
                                                                            }, this),
                                                                            "价差至少覆盖成本，建议1%以上"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 559,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            "• ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "费率优化："
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 560,
                                                                                columnNumber: 28
                                                                            }, this),
                                                                            "选择低费率券商降低成本"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 560,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            "• ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "风险提示："
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                                lineNumber: 561,
                                                                                columnNumber: 28
                                                                            }, this),
                                                                            "股市有风险，投资需谨慎"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                        lineNumber: 561,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                lineNumber: 557,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                        lineNumber: 555,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 544,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                            className: "w-5 h-5 text-amber-600 mr-3 mt-0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 568,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-amber-800 dark:text-amber-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "重要提醒："
                                                                }, void 0, false, {
                                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                                    lineNumber: 570,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "本工具计算结果仅供参考，实际费用可能因券商不同而有差异。投资有风险，请根据自身情况谨慎决策。"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                            lineNumber: 569,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                    lineNumber: 567,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                                lineNumber: 566,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                        lineNumber: 543,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                            lineNumber: 531,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
                    lineNumber: 197,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
            lineNumber: 171,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/code/githubProject/life-tools-next/src/app/t-day-calculator/page.js",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_s(TDayCalculatorPage, "c3SK5ZAwYsVXCWA02GnjCioYM70=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$githubProject$2f$life$2d$tools$2d$next$2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"]
    ];
});
_c = TDayCalculatorPage;
var _c;
__turbopack_context__.k.register(_c, "TDayCalculatorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=code_githubProject_life-tools-next_src_7968394c._.js.map