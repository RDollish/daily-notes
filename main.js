let notes = []
notes.push({
    id: 1,
    topics: [ "strategy", "professional", "help" ],
    text: "I will get through this!",
    author: "Renee Doll",
    date: "2022-08-17"
}),

notes.push({
    id: 2,
    topics: [ "thinking" , "help" ],
    text: "I need to get a second monitor.",
    author: "Renee Doll",
    date: "2021-08-17"
}),

notes.push({
    id: 3,
    topics: [ "reminder" ],
    text: "Just do it.",
    author: "Renee Doll",
    date: "2021-08-17"
})

for (const note of notes) {
console.log(`${note.text}`)
}
console.log("*** All Note Topics ***")

for (const note of notes) {
    for (const topic of note.topics){
console.log(topic)
    }
}
console.log("*** Average Topics Per Note ***")

let totalNum = 0
let totalNotes = 0
for (const note of notes) {
    ++ totalNotes
    for (const topic of note.topics){
        ++ totalNum

}
}
console.log(totalNum/totalNotes)

console.log("*** Notes with the help topic ***")

// let filteredNotes = notes.filter(object => object.topics.includes("help"))
// console.log(filteredNotes)

let filteredNotes = []
for (const object of notes) {
if (object.topics.includes( "help" )) {
    filteredNotes.push(object)
}
}
console.log(filteredNotes)

console.log("***  Note Articles  ***")


for (const note of notes) {
console.log(`'<article>${note.text}<section>${note.topics}</section></article>'`)
    }
