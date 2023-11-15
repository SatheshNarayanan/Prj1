const a = "hi";

let cardList = document.getElementById("cardGrid");

let selectSector = document.getElementById("selectSector");

var modal = document.getElementById("myModal");

var closeModal = document.getElementById("close");

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let cardData = [
  {
    img: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=",
    title: "Digital",
    sector: "Digital",
    duration: "60 Minutes",
    cost: 999,
    rating: 4,
  },
  {
    img: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=",
    title: "IOT(Internet Of Things)",
    sector: "IOT",
    duration: "60 Minutes",
    cost: 999,
    rating: 4,
  },
  {
    img: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=",
    title: "Web Developer",
    sector: "Digital",
    duration: "60 Minutes",
    cost: 999,
    rating: 4,
  },
  {
    img: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=",
    title: "Java - Full Stack Java Developer,Programmer",
    sector: "Digital",
    duration: "60 Minutes",
    cost: 999,
    rating: 4,
  },
  {
    img: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=",
    title: "Artificial Intelligence",
    sector: "Artificial Intelligence",
    duration: "60 Minutes",
    cost: 999,
    rating: 4,
  },
  {
    img: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=",
    title: "Cloud Analyst, Cloud Engineer",
    sector: "Cloud Computing",
    duration: "60 Minutes",
    cost: 999,
    rating: 4,
  },
];

function LoadSector() {
  let obj = { "": "" };
  cardData.map((element) => {
    obj[element.sector] = element.sector;
  });
  Object.keys(obj).map((element) => {
    let optionElement = document.createElement("option");
    optionElement.setAttribute("value", obj[element]);
    optionElement.innerHTML = element;
    selectSector.appendChild(optionElement);
  });
}

selectSector.addEventListener("change", function (e) {
  // console.log(e.target.value)
  cardList.innerHTML = "";

  cardRender(e.target.value);
});

function cardRender(sector) {
  let data =
    sector === ""
      ? [...cardData]
      : cardData.filter(
          (element) => element.sector.toLowerCase() === sector.toLowerCase()
        );

  data.forEach((element) => {
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");

    let imgElement = document.createElement("img");
    imgElement.setAttribute("class", "courseImage");
    imgElement.setAttribute("src", element.img);

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", " wordBreak  padding-content");

    let header4 = document.createElement("h4");
    header4.innerHTML = element.title;

    let starRating = document.createElement("div");
    starRating.innerHTML = element.rating;

    let durationTag = document.createElement("div");
    durationTag.setAttribute("class", "fontSmall secondaryFont");
    durationTag.innerHTML = `Duration - ${element.duration}`;

    let costTag = document.createElement("p");
    costTag.innerHTML = `Cost INR ${element.cost}`;

    let buttonTag = document.createElement("button");
    buttonTag.setAttribute("class", "primaryButton");
    buttonTag.innerHTML = `Apply`;
    buttonTag.addEventListener("click", function (e) {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user?.name) {
        console.log("you have logged in");
      } else {
        // showDialog()
        modal.style.display = "block";
      }
    });
    //add onclick function to all button here

    cardContent.appendChild(header4);
    cardContent.appendChild(starRating);
    cardContent.appendChild(durationTag);
    cardContent.appendChild(costTag);
    cardContent.appendChild(buttonTag);

    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(cardContent);

    cardList.appendChild(cardDiv);
  });
}

LoadSector();
cardRender("");
