export const isObject = obj => typeof obj === 'object' && obj instanceof Object;

export const isArray = array =>  array instanceof Array;

export const merge = (obj1, obj2) => ({...obj1, ...obj2});


export const arrayFind = (array, valueFinded, propName) => {
    if(propName)
        return array.find(item => item[propName] === valueFinded);
    return array.find(item => item === valueFinded);
}