

// volunteer page, click botton event

document.addEventListener("DOMContentLoaded", function(){
    var submitBtn = document.getElementById("submit-btn");
    var contentDiv = document.getElementById("content");
    var contentDiv2 = document.getElementById("content2");
    submitBtn.addEventListener("click", function(event){
        event.preventDefault();
        var selectedValue = document.querySelector('input[name="flexRadioDefault"]:checked').id;        
        if(selectedValue == "project") {
            contentDiv.style.display = "block";
            contentDiv2.style.display = "none";
        } else if(selectedValue == "tutor") {
            contentDiv2.style.display = "block";
            contentDiv.style.display = "none";
        }
    });
});

const learnCards = document.querySelector(".learnContainer")

function createCard([type, title, description, link]) {
    let code = `
    
    <div class="col">        
            <div class="card learnCard">
            <div class="card-header">
            ${type}
          </div>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href="${link}" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    </div>
    

    `;
    learnCards.innerHTML += code;
}

let HTML1 = ["HTML", "Codecademy HTML Course", "This course teaches you how to make HTML from scratch", "https://www.codecademy.com/learn/learn-html"]
let CSS1 = ["CSS", "Codecademy CSS Course", "This course teaches you how to make CSS on your own", "https://www.codecademy.com/learn/learn-css"]
let HTML2 = ["HTML", "FreeCodeCamp HTML Course", "This course teaches you how to make HTML from scratch", "https://www.freecodecamp.org/news/learn-html-beginners-course/"]
let CSS2 = ["CSS", "FreeCodeCamp CSS Course", "This course teaches you how to make CSS on your own", "https://www.freecodecamp.org/news/learn-css-in-11-hours/"]

createCard(HTML1)
createCard(CSS1)
createCard(HTML2)
createCard(CSS2)

