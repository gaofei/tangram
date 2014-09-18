
export default function Point (x, y) {
    return { x: x, y: y };
}

Point.copy = function (p) {
    if (p == null) {
        return null;
    }
    return { x: p.x, y: p.y };
};


