// manipulating DOM using js

let body = document.querySelector('body')
body.style.backgroundColor = "lightpink"


function changeTopic(topic) {
    let h2 = document.querySelector("h2")
    h2.id = "heading"
    h2.textContent = topic
    h2.style.color = "blue"
    let form = document.querySelector("#record")
        
}

changeTopic("Thursday Session")