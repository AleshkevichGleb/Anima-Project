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

let productsMM = [];
productState.forEach(item => {
    productsMM = [...productsMM, item.specifications.find(el => el.id === 2).text.replace(/\D/g, "")];
})

const setProductsMM = new Set(productsMM);

export const brandProducts = Array.from(set);
export const colorsProducts = Array.from(setColors);
export const productsMMProducts = Array.from([...setProductsMM].sort((a, b) => a - b));