const svgAttributes = [
    { id: 1, svgAttribute: "accent-height", svgInlineAttribute: "accentHeight" },
    { id: 2, svgAttribute: "alignment-baseline", svgInlineAttribute: "alignmentBaseline" },
    { id: 3, svgAttribute: "allow-reorder", svgInlineAttribute: "allowReorder" },
    { id: 4, svgAttribute: "arabic-form", svgInlineAttribute: "arabicForm" },
    { id: 5, svgAttribute: "attribute-name", svgInlineAttribute: "attributeName" },
    { id: 6, svgAttribute: "attribute-type", svgInlineAttribute: "attributeType" },
    { id: 7, svgAttribute: "auto-reverse", svgInlineAttribute: "autoReverse" },
    { id: 8, svgAttribute: "base-frequency", svgInlineAttribute: "baseFrequency" },
    { id: 9, svgAttribute: "base-profile", svgInlineAttribute: "baseProfile" },
    { id: 10, svgAttribute: "baseline-shift", svgInlineAttribute: "baselineShift" },
    { id: 11, svgAttribute: "calc-mode", svgInlineAttribute: "calcMode" },
    { id: 12, svgAttribute: "cap-height", svgInlineAttribute: "capHeight" },
    { id: 13, svgAttribute: "clip-path-units", svgInlineAttribute: "clipPathUnits" },
    { id: 14, svgAttribute: "clip-path", svgInlineAttribute: "clipPath" },
    { id: 15, svgAttribute: "clip-rule", svgInlineAttribute: "clipRule" },
    { id: 16, svgAttribute: "color-interpolation-filters", svgInlineAttribute: "colorInterpolationFilters" },
    { id: 17, svgAttribute: "color-interpolation", svgInlineAttribute: "colorInterpolation" },
    { id: 18, svgAttribute: "color-profile", svgInlineAttribute: "colorProfile" },
    { id: 19, svgAttribute: "color-rendering", svgInlineAttribute: "colorRendering" },
    { id: 20, svgAttribute: "content-script-type", svgInlineAttribute: "contentScriptType" },
    { id: 21, svgAttribute: "content-style-type", svgInlineAttribute: "contentStyleType" },
    { id: 22, svgAttribute: "diffuse-constant", svgInlineAttribute: "diffuseConstant" },
    { id: 23, svgAttribute: "dominant-baseline", svgInlineAttribute: "dominantBaseline" },
    { id: 24, svgAttribute: "edge-mode", svgInlineAttribute: "edgeMode" },
    { id: 25, svgAttribute: "enable-background", svgInlineAttribute: "enableBackground" },
    { id: 26, svgAttribute: "external-resources-required", svgInlineAttribute: "externalResourcesRequired" },
    { id: 27, svgAttribute: "fill-opacity", svgInlineAttribute: "fillOpacity" },
    { id: 28, svgAttribute: "fill-rule", svgInlineAttribute: "fillRule" },
    { id: 29, svgAttribute: "filter-res", svgInlineAttribute: "filterRes" },
    { id: 30, svgAttribute: "filter-units", svgInlineAttribute: "filterUnits" },
    { id: 31, svgAttribute: "flood-color", svgInlineAttribute: "floodColor" },
    { id: 32, svgAttribute: "flood-opacity", svgInlineAttribute: "floodOpacity" },
    { id: 33, svgAttribute: "font-size-adjust", svgInlineAttribute: "fontSizeAdjust" },
    { id: 34, svgAttribute: "font-family", svgInlineAttribute: "fontFamily" },
    { id: 35, svgAttribute: "font-size", svgInlineAttribute: "fontSize" },
    { id: 36, svgAttribute: "font-stretch", svgInlineAttribute: "fontStretch" },
    { id: 37, svgAttribute: "font-style", svgInlineAttribute: "fontStyle" },
    { id: 38, svgAttribute: "font-variant", svgInlineAttribute: "fontVariant" },
    { id: 39, svgAttribute: "font-weight", svgInlineAttribute: "fontWeight" },
    { id: 40, svgAttribute: "glyph-orientation-horizontal", svgInlineAttribute: "glyphOrientationHorizontal" },
    { id: 41, svgAttribute: "glyph-orientation-vertical", svgInlineAttribute: "glyphOrientationVertical" },
    { id: 42, svgAttribute: "glyph-name", svgInlineAttribute: "glyphName" },
    { id: 43, svgAttribute: "glyph-ref", svgInlineAttribute: "glyphRef" },
    { id: 44, svgAttribute: "gradient-transform", svgInlineAttribute: "gradientTransform" },
    { id: 45, svgAttribute: "gradient-units", svgInlineAttribute: "gradientUnits" },
    { id: 46, svgAttribute: "horiz-adv-x", svgInlineAttribute: "horizAdvX" },
    { id: 47, svgAttribute: "horiz-origin-x", svgInlineAttribute: "horizOriginX" },
    { id: 49, svgAttribute: "image-rendering", svgInlineAttribute: "imageRendering" },
    { id: 50, svgAttribute: "kernel-unit-length", svgInlineAttribute: "kernelUnitLength  " },
    { id: 51, svgAttribute: "kernel-matrix", svgInlineAttribute: "kernelMatrix" },
    { id: 52, svgAttribute: "key-points", svgInlineAttribute: "keyPoints" },
    { id: 53, svgAttribute: "key-splines", svgInlineAttribute: "keySplines" },
    { id: 54, svgAttribute: "key-times", svgInlineAttribute: "keyTimes" },
    { id: 55, svgAttribute: "length-adjust", svgInlineAttribute: "lengthAdjust" },
    { id: 56, svgAttribute: "letter-spacing", svgInlineAttribute: "letterSpacing" },
    { id: 57, svgAttribute: "lighting-color", svgInlineAttribute: "lightingColor" },
    { id: 58, svgAttribute: "limiting-cone-angle", svgInlineAttribute: "limitingConeAngle" },
    { id: 59, svgAttribute: "marker-end", svgInlineAttribute: "markerEnd" },
    { id: 60, svgAttribute: "marker-height", svgInlineAttribute: "markerHeight" },
    { id: 61, svgAttribute: "marker-mid", svgInlineAttribute: "markerMid" },
    { id: 62, svgAttribute: "marker-start", svgInlineAttribute: "markerStart" },
    { id: 63, svgAttribute: "marker-units", svgInlineAttribute: "markerUnits" },
    { id: 64, svgAttribute: "marker-width", svgInlineAttribute: "markerWidth" },
    { id: 65, svgAttribute: "mask-content-units", svgInlineAttribute: "maskContentUnits" },
    { id: 66, svgAttribute: "mask-units", svgInlineAttribute: "maskUnits" },
    { id: 68, svgAttribute: "num-octaves", svgInlineAttribute: "numOctaves" },
    { id: 69, svgAttribute: "overline-position", svgInlineAttribute: "overlinePosition" },
    { id: 70, svgAttribute: "overline-thickness", svgInlineAttribute: "overlineThickness" },
    { id: 71, svgAttribute: "paint-order", svgInlineAttribute: "paintOrder" },
    { id: 72, svgAttribute: "path-length", svgInlineAttribute: "pathLength" },
    { id: 73, svgAttribute: "pattern-content-units", svgInlineAttribute: "patternContentUnits" },
    { id: 74, svgAttribute: "pattern-transform", svgInlineAttribute: "patternTransform" },
    { id: 75, svgAttribute: "pattern-units", svgInlineAttribute: "patternUnits" },
    { id: 76, svgAttribute: "pointer-events", svgInlineAttribute: "pointerEvents" },
    { id: 77, svgAttribute: "points-at-x", svgInlineAttribute: "pointsAtX" },
    { id: 78, svgAttribute: "points-at-y", svgInlineAttribute: "pointsAtY" },
    { id: 79, svgAttribute: "points-at-z", svgInlineAttribute: "pointsAtZ" },
    { id: 80, svgAttribute: "preserve-aspect-ratio", svgInlineAttribute: "preserveAspectRatio" },
    { id: 81, svgAttribute: "preserve-alpha", svgInlineAttribute: "preserveAlpha" },
    { id: 82, svgAttribute: "primitive-units", svgInlineAttribute: "primitiveUnits" },
    { id: 83, svgAttribute: "ref-x", svgInlineAttribute: "refX" },
    { id: 84, svgAttribute: "ref-y", svgInlineAttribute: "refY" },
    { id: 85, svgAttribute: "rendering-intent", svgInlineAttribute: "renderingIntent" },
    { id: 86, svgAttribute: "repeat-count", svgInlineAttribute: "repeatCount" },
    { id: 87, svgAttribute: "repeat-dur", svgInlineAttribute: "repeatDur" },
    { id: 88, svgAttribute: "required-extensions", svgInlineAttribute: "requiredExtensions" },
    { id: 89, svgAttribute: "required-features", svgInlineAttribute: "requiredFeatures" },
    { id: 90, svgAttribute: "shape-rendering", svgInlineAttribute: "shapeRendering" },
    { id: 91, svgAttribute: "specular-constant", svgInlineAttribute: "specularConstant" },
    { id: 92, svgAttribute: "specular-exponent", svgInlineAttribute: "specularExponent" },
    { id: 93, svgAttribute: "spread-method", svgInlineAttribute: "spreadMethod" },
    { id: 94, svgAttribute: "start-offset", svgInlineAttribute: "startOffset" },
    { id: 95, svgAttribute: "std-deviation", svgInlineAttribute: "stdDeviation" },
    { id: 96, svgAttribute: "stitch-tiles", svgInlineAttribute: "stitchTiles" },
    { id: 97, svgAttribute: "stop-color", svgInlineAttribute: "stopColor" },
    { id: 98, svgAttribute: "stop-opacity", svgInlineAttribute: "stopOpacity" },
    { id: 99, svgAttribute: "strikethrough-position", svgInlineAttribute: "strikethroughPosition" },
    { id: 100, svgAttribute: "strikethrough-thickness", svgInlineAttribute: "strikethroughThickness" },
    { id: 101, svgAttribute: "stroke-dasharray", svgInlineAttribute: "strokeDasharray" },
    { id: 102, svgAttribute: "stroke-dashoffset", svgInlineAttribute: "strokeDashoffset" },
    { id: 103, svgAttribute: "stroke-linecap", svgInlineAttribute: "strokeLinecap" },
    { id: 104, svgAttribute: "stroke-linejoin", svgInlineAttribute: "strokeLinejoin" },
    { id: 105, svgAttribute: "stroke-miterlimit", svgInlineAttribute: "strokeMiterlimit" },
    { id: 106, svgAttribute: "stroke-opacity", svgInlineAttribute: "strokeOpacity" },
    { id: 107, svgAttribute: "stroke-width", svgInlineAttribute: "strokeWidth" },
    { id: 108, svgAttribute: "surface-scale", svgInlineAttribute: "surfaceScale" },
    { id: 109, svgAttribute: "system-language", svgInlineAttribute: "systemLanguage" },
    { id: 110, svgAttribute: "table-values", svgInlineAttribute: "tableValues" },
    { id: 111, svgAttribute: "target-x", svgInlineAttribute: "targetX" },
    { id: 112, svgAttribute: "target-y", svgInlineAttribute: "targetY" },
    { id: 113, svgAttribute: "text-anchor", svgInlineAttribute: "textAnchor" },
    { id: 114, svgAttribute: "text-decoration", svgInlineAttribute: "textDecoration" },
    { id: 115, svgAttribute: "text-length", svgInlineAttribute: "textLength" },
    { id: 116, svgAttribute: "text-rendering", svgInlineAttribute: "textRendering" },
    { id: 117, svgAttribute: "underline-position", svgInlineAttribute: "underlinePosition" },
    { id: 118, svgAttribute: "underline-thickness", svgInlineAttribute: "underlineThickness" },
    { id: 119, svgAttribute: "unicode-bidi", svgInlineAttribute: "unicodeBidi" },
    { id: 120, svgAttribute: "unicode-range", svgInlineAttribute: "unicodeRange" },
    { id: 121, svgAttribute: "units-per-em", svgInlineAttribute: "unitsPerEm" },
    { id: 122, svgAttribute: "v-alphabetic", svgInlineAttribute: "vAlphabetic" },
    { id: 123, svgAttribute: "v-hanging", svgInlineAttribute: "vHanging" },
    { id: 124, svgAttribute: "v-ideographic", svgInlineAttribute: "vIdeographic" },
    { id: 125, svgAttribute: "v-mathematical", svgInlineAttribute: "vMathematical" },
    { id: 126, svgAttribute: "vector-effect", svgInlineAttribute: "vectorEffect" },
    { id: 127, svgAttribute: "vert-origin-x", svgInlineAttribute: "vertOriginX" },
    { id: 128, svgAttribute: "vert-adv-y", svgInlineAttribute: "vertAdvY" },
    { id: 129, svgAttribute: "vert-origin-y", svgInlineAttribute: "vertOriginY" },
    { id: 130, svgAttribute: "view-target", svgInlineAttribute: "viewTarget" },
    { id: 131, svgAttribute: "word-spacing", svgInlineAttribute: "wordSpacing" },
    { id: 132, svgAttribute: "writing-mode", svgInlineAttribute: "writingMode" },
    { id: 133, svgAttribute: "x-channel-selector", svgInlineAttribute: "xChannelSelector" },
    { id: 134, svgAttribute: "x-height", svgInlineAttribute: "xHeight" },
    { id: 135, svgAttribute: "xlink-actuate", svgInlineAttribute: "xlinkActuate" },
    { id: 136, svgAttribute: "xlink-arcrole", svgInlineAttribute: "xlinkArcrole" },
    { id: 137, svgAttribute: "xlink-href", svgInlineAttribute: "xlinkHref" },
    { id: 138, svgAttribute: "xlink-role", svgInlineAttribute: "xlinkRole" },
    { id: 139, svgAttribute: "xlink-show", svgInlineAttribute: "xlinkShow" },
    { id: 140, svgAttribute: "xlink-title", svgInlineAttribute: "xlinkTitle" },
    { id: 141, svgAttribute: "xlink-type", svgInlineAttribute: "xlinkType" },
    { id: 142, svgAttribute: "xml-base", svgInlineAttribute: "xmlBase" },
    { id: 143, svgAttribute: "xml-lang", svgInlineAttribute: "xmlLang" },
    { id: 144, svgAttribute: "xml-space", svgInlineAttribute: "xmlSpace" },
    { id: 145, svgAttribute: "xmlns-xlink", svgInlineAttribute: "xmlnsXlink" },
    { id: 146, svgAttribute: "y-channel-selector", svgInlineAttribute: "yChannelSelector" },
    { id: 147, svgAttribute: "zoom-and-pan", svgInlineAttribute: "zoomAndPan" },
    { id: 148, svgAttribute: "xmlns:svg", svgInlineAttribute: "xmlnssvg" },
];


export default svgAttributes