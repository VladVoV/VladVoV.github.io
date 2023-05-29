fetch("/data").then((response)=>response.json()).then((data)=>{
    const container = document.getElementById("laptops-container");
    data.forEach((laptop)=>{
        const card = document.createElement("div");
        card.classList.add("card");
        const cardImage = document.createElement("img");
        cardImage.classList.add("card__image");
        cardImage.src = laptop.imageUrl;
        cardImage.alt = laptop.imageAlt;
        card.appendChild(cardImage);
        const cardText = document.createElement("div");
        cardText.classList.add("card__text");
        cardText.textContent = laptop.name;
        card.appendChild(cardText);
        const cardCode = document.createElement("div");
        cardCode.classList.add("card__code");
        cardCode.textContent = laptop.productCode;
        card.appendChild(cardCode);
        const cardPrice = document.createElement("div");
        cardPrice.classList.add("card__price");
        const priceText = document.createElement("div");
        priceText.classList.add("card__price-text");
        priceText.textContent = "Price:";
        cardPrice.appendChild(priceText);
        const priceValue = document.createElement("div");
        priceValue.classList.add("card__price-value");
        priceValue.textContent = laptop.price;
        cardPrice.appendChild(priceValue);
        card.appendChild(cardPrice);
        const buyButton = document.createElement("a");
        buyButton.classList.add("card__buy-button");
        buyButton.href = "#buy";
        buyButton.textContent = "Buy";
        card.appendChild(buyButton);
        container.appendChild(card);
    });
}).catch((error)=>console.error("Error fetching data:", error));

//# sourceMappingURL=index.d4a8b14f.js.map
