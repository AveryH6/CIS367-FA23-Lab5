// div.innerHTML = `
    
//              <div class="container">
//                      <div class="card">
//                          <div class="cardInfo">
//                              <div>
//                                  <h2 class="nickName">${person.NickName}</h2>
//                                  <P class="fName">${person.FirstName} ${person.LastName}</p>
//                                  <p class="lName">${person.Type}</p>
//                              </div>
//                              <div>
//                                  <p class="hp">HP: ${person.HitPoints}</p>
//                              </div>
//                          </div>
//                          <div class="characteristics">
//                              <p>${person.Rank}</p>
//                              <p> | </p>
//                              <p>${person.Gender}</p>
//                              <p> | </p>
//                              <p>${person.EducationLevel}</p>
//                          </div>
//                          <div class="">
//                              <img src="${person.Image}" class="img" alt="something">
//                          </div>
//                          <div class="powerDetails">
                            
//                              <div class="specialAttacks">
//                                  <div>
//                                      <p class="Attacks">Attacks</p>
//                                      <p class="Attack1">1. ${person.Attack1} | ${person.Attack1Damage}</p>
//                                      <p class="Attack2">2. ${person.Attack2} | ${person.Attack2Damage}</p>
//                                  </div>
//                              </div>
//                              <div class="weaknesses">
//                                  <div>
//                                      <div class="weak">
//                                          <p class="weakness">Weakness</p>
//                                          <p class="weakness1">${person.Weakness}</p>
//                                      </div>
//                                      <div class="">
//                                          <p class="damage">DamageType</p>
//                                          <p class="damgeType">${person.DamageType}</p>
//                                      </div>
                                        
//                                  </div>
//                                  <div>
//                                      <div class="resstam">
//                                          <p class="resistance">Resistance</p>
//                                          <p class="resistanceType">${person.Resistances}</p>
//                                      </div>
//                                      <div class="">
//                                          <p class="stamina">Stamina</p>
//                                          <p class="staminaType">${person.Stamina}</p>
//                                      </div>    
                                        
//                                  </div>
//                              </div>
//                              <div class="creator">
//                                  <p class="">Creator |</p>
//                                  <p class="creatorName">${person.Creator}</p>
//                              </div>
//                          </div>
//                          <div class="options">
//                             <Button class="share_btn"><i class="share_btn fa-solid fa-arrow-up-from-bracket"></i></Button>
//                             <Button class="like_btn"><i class="like_btn fa-regular fa-heart"></i></Button>
//                             <Button class="download_btn"><i class="download_btn fa-solid fa-download"></i></Button>

//                          </div>
//                      </div>
                    
//              </div>
//          `;
const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json"

const data = [];

const carousel = document.getElementsByClassName("carousel")[0];
var activeIndex = Math.floor(data.length/2);

// htmlToImage.toPng() {
//     .then(function (dataUrl))
// }


async function addCards() {

    let response = await fetch(API_URL);
    let people = await response.json();


    people.forEach(person => {
        data.push(person)
    });
    
    data.forEach( (person) => {
        let div = document.createElement('div');
        div.classList.add("box");
    
        div.innerHTML = 
        `
    
                <div class="container">
                    <div class="options">
                        <Button class="email_btn"><i class="email_btn fa-regular fa-envelope"></i></Button>
                        <Button onclick="likeCard()" class="dislike_btn"><i class="dislike_btn fa-regular fa-heart"></i></Button>
                        <Button onclick="likeCard()" class="like_btn"><i class="like_btn fa-solid fa-heart"></i></Button>
                        <Button class="download_btn"><i class="download_btn fa-regular fa-circle-down"></i></Button>
                    </div>
                    <div class="card">
                     <div class="cardInfo">
                        <div>
                            <h2 class="nickName">${person.NickName}</h2>
                            <P class="fName">${person.FirstName} ${person.LastName}</p>
                            <p class="lName">${person.Type}</p>
                        </div>
                            <div>
                                <p class="hp">HP: ${person.HitPoints}</p>
                            </div>
                        </div>
                        <div class="characteristics">
                            <p>${person.Rank}</p>
                            <p> | </p>
                            <p>${person.Gender}</p>
                            <p> | </p>
                            <p>${person.EducationLevel}</p>
                        </div>
                        <div class="photo">
                            <img src="https://fhu-faculty-api.netlify.app/images/headshots/${person.Image}" class="img" alt="something">
                        </div>
                        <div class="powerDetails">
                            
                            <div class="specialAttacks">
                                <div>
                                    <p class="Attacks">Attacks</p>
                                    <p class="Attack1">1. ${person.Attack1} | ${person.Attack1Damage}</p>
                                    <p class="Attack2">2. ${person.Attack2} | ${person.Attack2Damage}</p>
                                </div>
                            </div>
                            <div class="weaknesses">
                                <div>
                                    <div class="weak">
                                        <p class="weakness">Weakness</p>
                                        <p class="weakness1">${person.Weakness}</p>
                                    </div>
                                    <div class="">
                                        <p class="damage">DamageType</p>
                                        <p class="damgeType">${person.DamageType}</p>
                                    </div>
                                        
                                </div>
                                <div>
                                    <div class="resstam">
                                        <p class="resistance">Resistance</p>
                                        <p class="resistanceType">${person.Resistances}</p>
                                    </div>
                                    <div class="">
                                        <p class="stamina">Stamina</p>
                                        <p class="staminaType">${person.Stamina}</p>
                                    </div>    
                                        
                                </div>
                            </div>
                            <div class="creator">
                                <p class="">Creator |</p>
                                <p class="creatorName">${person.Creator}</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
        `;
    
        carousel.appendChild(div);

        const likeBtn = div.querySelector('.like_btn');
        const dislikeBtn = div.querySelector('.dislike_btn');
        let isLiked = false;
        likeBtn.style.display = 'none';

        function likeCard() {
            if(isLiked){
                isLiked = false;
                likeBtn.style.display = 'none'
                dislikeBtn.style.display = 'inline';
            } else{
                isLiked = true;
                likeBtn.style.display = 'inline';
                dislikeBtn.style.display = 'none';
            }
        }



        div.addEventListener("click", likeCard);

  
    });
}

addCards();
updateCards();

function updateCards() {

    var windowWidth = window.innerWidth;
    console.log(windowWidth);
    var cardWidth = 350;
    const length = data.length;

    const boxes = document.querySelectorAll(".carousel .box");
    
    boxes.forEach( (div, index) => {
      
        //let div = document.createElement('div');
        //div.classList.add("box");
    
        if( index < activeIndex){
            //div.classList.add("left");
            div.classList.remove("active");
            //const offset = windowWidth/2 - cardWidth/2 - index * 10;
            // div.style.transform = `translateX(${-offset}px)`;
            
            div.style.zIndex = index;
            const offset = 100+(length-index)*2;
            div.style.transform = `translateX(-${offset}%) scale(100%)`;
           
            // div.style.left = `${index*8}px`
            //div.style.transform+=` scale(${ Math.pow(0.9, length-index+1)})`;
        }
        else if(index === activeIndex)
        {
            div.classList.add("active");
            div.style.zIndex = 300;
            div.style.transform = `translateX(0) scale(120%)`;

        }
        else {
            //div.classList.add("right");
            div.classList.remove("active");
            // const offset = windowWidth/2 - cardWidth/2 - (length - index+1) * 10;
            // console.log(offset)
            // div.style.transform = `translateX(${offset}px)`;
            div.style.zIndex = (length - index);
            const offset = 100+(index)*2;

            div.style.transform = `translateX(${offset}%) scale(100%)`;

            // div.style.right = `${ (length-index)*8}px`
            //div.style.right  = `${offset}px`
        }
    });

}



window.addEventListener("resize", updateCards);


document.getElementById("prevButton").addEventListener("click", ()=>{
    if( activeIndex >= 0)
    {
        activeIndex--;
        updateCards();
    }
    
});

document.getElementById("nextButton").addEventListener("click", ()=>{
    if( activeIndex < data.length)
    {
        activeIndex++;
        updateCards();
    }
    
});