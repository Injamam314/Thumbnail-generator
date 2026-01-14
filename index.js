function createCard(title, cName, views, monthsOld, duration, thumbnail){

    let viewCnt
        if(views<1000){
            viewCnt = views;
        }
        else if(views<1000000) {
            viewCnt = views/1000 + "k"
        }
        else if(views<1000000000){
            viewCnt = views/1000000 + "M"
        }
        else 
            viewCnt = views/1000000000 + "B"

    let months
        if(monthsOld>12){
            months = monthsOld%12 + " years"
        }
        else months = monthsOld + " months"
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewCnt} views . ${months} ago</p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Which Pays More: Data Science or Data Analytics? | Data Science vs Data Analytics", "CodeWithHarry", "400000", 4, "21:22", "https://i.ytimg.com/vi/sf6ZOBmzhGQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD-8OpVQZZy6zFNtIJlFF2k8BP0JA")
createCard("L-1.2: Von Neumann's Architecture | Stored Memory Concept in Computer Architecture", "GateSmashers", "1700000", 4, "21:22", "https://i.ytimg.com/vi/2mowjC3dCqk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAxCwXFWuqjPHF2jgVqXLhAQPThPw")

