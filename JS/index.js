class ButtonLink {
  constructor(buttonElement) {
    this.buttonElement = buttonElement;
    this.dataButton = this.buttonElement.dataset.pic;
    this.pictures = document.querySelectorAll(`.carousel[data-pic="${dataButton}"]`);
    this.pictures.forEach(pictureElement => new SelectPicture(pictureElement));
    this.buttonElement.addEventListener("click", () => selectButton());
  }

  selectButton() {
    const buttons = document.querySelectorAll(".carouselButton");
    buttons.forEach(tab => tab.classList.remove("active-button"));
    const pictures = document.querySelectorAll(".carousel img");
  }
}

class SelectPicture {
  constructor(pictureElement) {

  }
}

const buttons = document.querySelectorAll(".carouselButton");
buttons.forEach(buttonElement => new ButtonLink(buttonElement));