const btn1 = document.querySelector("#parse");
const btn2 = document.querySelector("#stringify");
const h2 = document.querySelector("h2");

const str = '{"name":"John","age":30,"car":null,"married":true,"nationality":undefined}';
const obj = {
    name: 'Juan',
    age: 29,
    car: null,
    married: false,
    nationality: undefined,
    info: [6, "tall"],
    address: {
        street: 'Street 1',
        number: 3
    }
};

const parse = str => {
    const res = {};
    let key, value, begin = 2;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === ":") {
            key = str.slice(begin, i - 1);
            begin = i + 1;
        } else if (char === "," || char === "}") {
            value = str.slice(begin, i);
            if (value.match(/\d/)) {
                value = Number(value);
            } else if (value === "null") {
                value = null;
            } else if (value === "true") {
                value = true;
            } else if (value === "undefined") {
                value = undefined;
            }
            else {
                const len = value.length;
                value = value.slice(1, len - 1);
            }
            res[key] = value;
            begin = i + 2;
        }
    }
    return res;
}

const stringify = obj => {
    let res = '';
    const dumb = dummy => {
        const type = typeof dummy;
        if (type === "string") {
            res += `"${dummy}"`;
        } else if (type === "object") {
            if (dummy !== null) {
                res += `${stringify(dummy)}`;
            } else {
                res += `${dummy}`;
            }
        } else {
            res += `${dummy}`;
        }
    }
    if (Array.isArray(obj) !== true) {
        res += '{';
        const lastKey = Object.keys(obj).pop();
        for (const key in obj) {
            res += `"${key}":`;
            const value = obj[key];
            dumb(value);
            if (key !== lastKey) {
                res += ",";
            }
        }
        res += '}';
    } else {
        res += '[';
        for (const el of obj) {
            dumb(el);
            if (el !== obj[obj.length - 1]) {
                res += ",";
            }
        }
        res += ']';
    }
    return res;
}

btn1.addEventListener("click", () => {
    console.log("Test String:", `'${str}'`);
    console.log("JSON.parse(Test String):", parse(str));
    h2.style.display = "block";
});

btn2.addEventListener("click", () => {
    console.log("Test Object:", obj);
    console.log("JSON.stringify(Test Object):", stringify(obj));
    h2.style.display = "block";
});