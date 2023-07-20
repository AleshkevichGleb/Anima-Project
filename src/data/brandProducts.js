import { productState } from "./productState"

let types = [];
productState.forEach(item => {
    types = [...types, item.type];
})
const set = new Set(types)


let colors = [];
productState.forEach(item => {
    colors = [...colors, item.specifications.find(el => el.id === 4).text];
})
const setColors = new Set(colors);

export const brandProducts = Array.from(set);
export const colorsProducts = Array.from(setColors);