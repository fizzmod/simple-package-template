// examples

export const isObject = obj => typeof obj === 'object' && obj instanceof Object && !(obj instanceof Array);

export const merge = (obj1, obj2) => ({...obj1, ...obj2});