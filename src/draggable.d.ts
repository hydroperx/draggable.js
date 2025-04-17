export type DraggableOptions = {
    /**
     * Grid size for snapping on drag.
     * @default 0
     */
    grid?: number,

    /**
     * The handle of the draggable; if null, the whole element is the handle
     * @default null
     */
    handle?: Element | null,

    /**
     * Prevent drag when target passes this test.
     * @default null
     */
    filterTarget?: ((target: Element) => boolean) | null,

    /**
     * Limit x/y drag bounds.
     *
     * The `limit` option accepts arguments in several forms:
    *
     * ```ts
     * // no limit
     * limit: null

     * // limit x, but leave y unbounded
     * limit: {
     *     x: [1,10],
     *     y: null
     * }

     * // limit both axes
     * limit: {
     *     x: [1,10],
     *     y: [1,500]
     * }

     * // bound x, set y to a constant
     * limit: {
     *     x: [1,10],
     *     y: 5
     * }

     * // bound with an element
     * limit: document.getElementById("id")

     * // bound with a custom function
     * limit(
     *     x,  // current X coordinate
     *     y,  // current Y coordinate
     *     x0, // original X coordinate (where drag was started)
     *     y0  // original Y coordinate (where drag was started)
     * ) {
     *     let radius = 100,
     *         dx = x - x0,
     *         dy = y - y0,
     *         distance = Math.sqrt(dx*dx + dy*dy),
     * 
     *     // only allow dragging within a circle of radius 100
     *     outOfRange = distance > radius;
     * 
     *     // if our point is outside of the circle, compute the
     *     // point on the circle's edge closest to our point
     *     if (outOfRange) {
     *         x = x0 + radius * (x - x0) / distance;
     *         y = y0 + radius * (y - y0) / distance;
     *     }
     * 
     *     return { x, y };
     * }
     * ```
     *
     * @default undefined
     */
    limit?: Element | ((x: any, y: any, x0: any, y0: any) => { x: number, y: number }) | {
        x: number | number[] | null,
        y: number | number[] | null,
    },

    /**
     * Threshold before drag begins (in px)
     * @default 0
     */
    threshold?: number,

    /**
     * Change cursor to `move`?
     * @default false
     */
    setCursor?: boolean,

    /**
     * Change draggable position to `absolute`?
     * @default true
     */
    setPosition?: boolean,

    /**
     * Snap to grid only when dropped, not during drag
     * @default true
     */
    smoothDrag?: boolean,

    /**
     * Move graphics calculation/composition to the GPU?
     * (modern browsers only, graceful degradation)
     * @default true
     */
    useGPU?: boolean,

    /**
     * Event dispatched when drag moves.
     */
    onDrag?: (element: Element, x: number, y: number, event: Event) => void,
    /**
     * Event dispatched when drag starts.
     */
    onDragStart?: (element: Element, x: number, y: number, event: Event) => void,
    /**
     * Event dispatched when drag stops.
     */
    onDragEnd?: (element: Element, x: number, y: number, event: Event) => void,
};

/**
 * Main class for making an element draggable.
 */
export default class Draggable {
    constructor(element: Element, options?: DraggableOptions);

    /**
     * Returns the current coordinates.
     */
    get(): { x: number, y: number };

    /**
     * Moves to the specified coordinates.
     */
    set(x: number, y: number): void;

    /**
     * Sets an option in the live instance.
     */
    setOption(property: string, value: any): void;

    /**
     * Unbinds the instance's DOM event listeners.
     */
    destroy(): void;
}