const jsonRes = '{"fact": "While many parts of Europe and North America consider the black cat a sign of bad luck, in Britain and Australia, black cats are considered lucky.","length": 146 }'

// json data to js obj.
const validResp = JSON.parse(jsonRes); 

// console.log(validResp);

const obj = {
    "name" : "Prashant",
    "age" : 19
}

const json = JSON.stringify(obj);
console.log(json);