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

function collectData() {
    // collecting data from form

    let form = document.querySelector("#record")
    form.addEventListener("submit", (event) => {
       event.preventDefault() 
        // logic

        let formData = {
            fullName: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }

    });
};

collectData();

function displayFeedback() {
    // grab form
    let data = document.querySelector(".feedbackForm")
    data.addEventListener("submit", (e) => {
        e.preventDefault()

        //grab the input value
        let feedbackInput = e.target.feedback.value
        let p = document.createElement('p')
        p.textContent = feedbackInput
        let section = document.querySelector('section')
        section.appendChild(p)
        
    })

}

displayFeedback();