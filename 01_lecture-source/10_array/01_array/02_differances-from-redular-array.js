const arr = [
    '너구리',
    20,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function(){}
];

console.table(arr);

console.log(Object.getOwnPropertyDescriptors(arr));