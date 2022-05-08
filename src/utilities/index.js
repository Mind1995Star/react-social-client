export const UpperCase = (str) => {
    if (typeof str === 'string') {
        return str.toUpperCase();
    }
    console.error("This is not String");
}