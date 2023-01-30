// const learnCards = document.querySelector(".cardHolder")

// function createCard([img, title, description, link]) {
//     let code = `
//     <div class="card">
//         <img src="${img}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${title}</h5>
//             <p class="card-text">${description}</p>
//             <a href="${link}" class="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>
//     `;
//     learnCards.innerHTML += code;
// }

// let item1 = [example.png, "HTML Course", "This course teaches you how to make HTML from scratch", "https://www.codecademy.com/learn/learn-html"]
// let item2 = [example.png, "CSS Course", "This course teaches you how to make CSS on your own", "https://www.codecademy.com/learn/learn-css"]

// createCard(item1)
// createCard(item2)


const learnCards = document.querySelector(".row")

function createCard([img, title, description, link]) {
    let code = `
        <div class="col">
            <div class="card">
                <img src="${img}" class="card-img-top" alt="...">
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

let item1 = ["example.png", "HTML Course", "This course teaches you how to make HTML from scratch", "https://www.codecademy.com/learn/learn-html"]
let item2 = ["example.png", "CSS Course", "This course teaches you how to make CSS on your own", "https://www.codecademy.com/learn/learn-css"]

createCard(item1)
createCard(item2)
createCard(item1)
createCard(item2)