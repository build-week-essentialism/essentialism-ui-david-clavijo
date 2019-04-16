// const test = document.querySelectorAll(".signButton");
// test.addEventListener("click", () => console.log("hey js is working"));

const buttonse = document.querySelector("#signButton");
console.log(buttonse);


// class ButtonLink {
//   constructor(buttonElement) {
//     this.buttonElement = buttonElement;
//     this.dataButton = this.buttonElement.dataset.pic;
//     this.pictures = document.querySelectorAll(`.carousel[data-pic="${dataButton}"]`);
//     this.pictures.forEach(pictureElement => new ButtonPicture(pictureElement));
//     this.buttonElement.addEventListener("click", () => selectButton());
//   }

//   selectButton() {
//     const buttons = document.querySelectorAll(".carouselButton");
//     buttons.forEach(tab => tab.classList.remove("active-button"));
//     const pictures = document.querySelectorAll(".carousel img");
//     pictures.forEach(picture => picture.style.display = "none");
//     this.buttonElement.classList.add("active-button");
//     this.pictures.forEach(picture => picture.selectPicture());
//   }
// }

// class ButtonPicture {
//   constructor(pictureElement) {
//     this.pictureElement = pictureElement;
//   }

//   selectPicture() {
//     this.pictureElement.style.display = "flex";
//   }
// }

// const buttons = document.querySelectorAll(".carouselButton");
// buttons.forEach(buttonElement => new ButtonLink(buttonElement));