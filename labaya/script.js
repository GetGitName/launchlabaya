// FORM

const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const formData = new FormData(form);

  try {

    const response = await fetch("send-mail.php", {
      method: "POST",
      body: formData
    });

    const result = await response.text();

    responseMessage.innerHTML = result;

    form.reset();

  } catch (error) {

    responseMessage.innerHTML =
      "Error sending message.";

  }

});

// MODAL MAP

const modal = document.getElementById("mapModal");
const mapImage = document.getElementById("mapImage");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

mapImage.onclick = function(){

  modal.style.display = "block";
  modalImg.src = this.src;

}

closeModal.onclick = function(){

  modal.style.display = "none";

}

window.onclick = function(event){

  if(event.target == modal){

    modal.style.display = "none";

  }

}