const getType = (value: unknown) => Object.prototype.toString.call(value).slice(8, -1)

const isString = (value: unknown) => getType(value) === 'String'

const isNumber = (value: unknown) => getType(value) === 'Number'

const isBoolean = (value: unknown) => getType(value) === 'Boolean'

const isArray = (value: unknown) => getType(value) === 'Array'

const isObject = (value: unknown) => getType(value) === 'Object'

const isFunction = (value: unknown) => getType(value) === 'Function'

const isNull = (value: unknown) => getType(value) === 'Null'

const isUndefined = (value: unknown) => getType(value) === 'Undefined'

const isDate = (value: unknown) => getType(value) === 'Date'

const isRegExp = (value: unknown) => getType(value) === 'RegExp'

export { isString, isNumber, isBoolean, isArray, isObject, isFunction, isNull, isUndefined, isDate, isRegExp }
