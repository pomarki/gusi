import { gusi } from "../date/myDate.js"

const canvas = document.querySelector(".canvas")

let arr = gusi.filter((item) => {
    return item.branch === "x"
})

/* console.log(arr) */