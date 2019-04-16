class ButtonLink {
  constructor(buttonElement) {
    this.buttonElement = buttonElement;
    this.tabData = this.buttonElement.dataset.tab;
    this.cards = document.querySelectorAll(`.image[data-tab="${this.tabData}"]`);
    this.cards = Array.from(this.cards).map(cardElement => new ButtonPicture(cardElement));
    this.buttonElement.addEventListener("click", () => this.selectButton());
  }

  selectButton() {
    const buttons = document.querySelectorAll(".carouselButton");
    buttons.forEach(button => button.classList.remove("buttonActive"));
    const cards = document.querySelectorAll(".image");
    cards.forEach(card => card.style.display = "none");
    this.buttonElement.classList.add("buttonActive");
    this.cards.forEach(card => card.selectPicture());
  }
}

class ButtonPicture {
  constructor(cardElement) {
    this.cardElement = cardElement;
  }

  selectPicture() {
    this.cardElement.style.display = "flex";
  }
}

const buttons = document.querySelectorAll(".carouselButton");
buttons.forEach(buttonElement => new ButtonLink(buttonElement));