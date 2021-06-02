const rawTokenizerUk = require("./src/raw_tokenizer_uk")
const lexer = require("./src/lexer")

estSentence = "Юрист зайшов до залу"
lexer(estSentence)
    .then( res => {
        console.log(JSON.stringify(res, null," "))
    })
    .catch( e => {
        console.error(e.toString())
    })