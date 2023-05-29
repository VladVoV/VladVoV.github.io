const appContainer = document.getElementById("app");
const navLinks = document.querySelectorAll(".nav__link");
const hamburgerChecker = document.querySelector(".hamburger-checker");
let isHomeTrue = false;
window.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", async (event)=>{
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        if (data.success) {
            alert(data.message); // Display success message
            // Disable the form
            loginForm.reset();
            document.querySelector(".user-form").style.display = "none";
        } else alert(data.message); // Display error message
    });
});
navLinks.forEach((link)=>{
    link.addEventListener("click", ()=>{
        hamburgerChecker.checked = false;
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
const renderHome = ()=>{
    return `
        <div class="content">
      <article class="article">
        <p>Welcome to TechWave, your ultimate destination for all your technical needs.</p>
      </article>
    </div>
    <div class="rec">
      <h1>
        Recommendations For You
      </h1>
    </div>
    `;
};
const renderAbout = ()=>{
    return `
    <div class="about">
      <div class="vlad">
        <img src="/about-images/vladP.jpg"
             alt="vlad-photo"
             class="photo">
        <p>Vladyslav Voichyshyn</p>
      </div>

      <div class="marta">
        <img src="/about-images/martaP.jpg"
             alt="marta-photo"
             class="photo">
        <p>Marta Matsevych</p>
      </div>

      <div class="bus">
        <img src="/about-images/busP.jpg"
             alt="maks-photo"
             class="photo">
        <p>Maksym Busel</p>
      </div>
    </div>
  `;
};
const render = (data)=>{
    const container = document.createElement("div");
    container.id = "container";
    container.className = "catalog";
    data.forEach((data)=>{
        const card = document.createElement("div");
        card.classList.add("card");
        const cardImage = document.createElement("img");
        cardImage.classList.add("card__image");
        cardImage.src = data.imageUrl;
        cardImage.alt = data.imageAlt;
        card.appendChild(cardImage);
        const cardText = document.createElement("div");
        cardText.classList.add("card__text");
        cardText.textContent = data.name;
        card.appendChild(cardText);
        const cardCode = document.createElement("div");
        cardCode.classList.add("card__code");
        cardCode.textContent = data.productCode;
        card.appendChild(cardCode);
        const cardPrice = document.createElement("div");
        cardPrice.classList.add("card__price");
        const priceText = document.createElement("div");
        priceText.classList.add("card__price-text");
        priceText.textContent = "Price:";
        cardPrice.appendChild(priceText);
        const priceValue = document.createElement("div");
        priceValue.classList.add("card__price-value");
        priceValue.textContent = data.price;
        cardPrice.appendChild(priceValue);
        card.appendChild(cardPrice);
        const buyButton = document.createElement("a");
        buyButton.classList.add("card__buy-button");
        buyButton.href = "#buy";
        buyButton.textContent = "Buy";
        card.appendChild(buyButton);
        container.appendChild(card);
    });
    appContainer.innerHTML = "";
    if (isHomeTrue === true) appContainer.innerHTML = renderHome();
    appContainer.appendChild(container);
};
const fetchAndRenderLaptops = ()=>{
    fetch("/data-laptops").then((response)=>response.json()).then((data)=>{
        render(data);
    }).catch((error)=>console.error("Error fetching data:", error));
};
const fetchAndRenderSmartphones = ()=>{
    fetch("/data-smartphones").then((response)=>response.json()).then((data)=>{
        render(data);
    }).catch((error)=>console.error("Error fetching data:", error));
};
const fetchAndRenderComputer = ()=>{
    fetch("/data-pc").then((response)=>response.json()).then((data)=>{
        render(data);
    }).catch((error)=>console.error("Error fetching data:", error));
};
const fetchAndRenderGadget = ()=>{
    fetch("/data-gadget").then((response)=>response.json()).then((data)=>{
        render(data);
    }).catch((error)=>console.error("Error fetching data:", error));
};
const fetchAndRenderTablet = ()=>{
    fetch("/data-tablet").then((response)=>response.json()).then((data)=>{
        render(data);
    }).catch((error)=>console.error("Error fetching data:", error));
};
const fetchAndRenderHome = async ()=>{
    isHomeTrue = true;
    await fetch("/home").then((response)=>response.json()).then((data)=>{
        render(data);
    }).catch((error)=>console.error("Error fetching data:", error));
    isHomeTrue = false;
};
const handleHashChange = ()=>{
    const hash = window.location.hash.toLowerCase();
    if (hash === "#laptops") fetchAndRenderLaptops();
    else if (hash === "#smartphones") fetchAndRenderSmartphones();
    else if (hash === "#computers") fetchAndRenderComputer();
    else if (hash === "#gadgets") fetchAndRenderGadget();
    else if (hash === "#tablets") fetchAndRenderTablet();
    else if (hash === "#about") appContainer.innerHTML = renderAbout();
    else fetchAndRenderHome();
};
window.addEventListener("hashchange", handleHashChange);
handleHashChange();

//# sourceMappingURL=index.c1d638e3.js.map
