const ele = document.getElementById("content")
console.log(ele.innerHTML)
console.log(ele.textContent, "separat", ele.innerText)
const invisible = document.getElementById("invisible")
invisible.style.visibility = "none"
console.log(invisible.textContent)
console.log(invisible.innerText)

const scriptTag = document.getElementById("scriptContent")
console.log(scriptTag.textContent)
console.log(scriptTag.innerText)

const stringScript = document.getElementById("stringScript")
console.log(stringScript.innerText)
console.log(stringScript.textContent)