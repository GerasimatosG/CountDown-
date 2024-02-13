// Coding for the background-video
let vid = document.getElementById("myVideo");
vid.playbackRate = 0.75;

// Coding for the Countdown
var countDownDate = new Date("May 5, 2024 12:00:00").getTime();
var x = setInterval(function () {
  var currentDate = new Date().getTime();
  var timeTillEvent = countDownDate - currentDate;
  var days = Math.floor(timeTillEvent / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  var hours = Math.floor(
    (timeTillEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
    .toString()
    .padStart(2, "0");
  var minutes = Math.floor((timeTillEvent % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  var seconds = Math.floor((timeTillEvent % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");
  document.getElementById("countdown").innerHTML =
    days + " | " + hours + " | " + minutes + " | " + seconds;

  //    Coding when it ends
  if (timeTillEvent < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "NOW LIVE";
  }
}, 1000);

//  Coding for Subscribe Modal
let subscribeModal = document.getElementById("subscribeModal");
let subscribeBtn = document.getElementById("subscribebtn");
let subscribeSpan = document.getElementsByClassName("close")[0];

subscribeModal.style.display = "none";

subscribeBtn.onclick = function () {
  subscribeModal.style.display = "block";
};

subscribeSpan.onclick = function () {
  subscribeModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == subscribeModal) {
    subscribeModal.style.display = "none";
  }
};

let submitSubscribe = document.getElementById("submitSubscribe");

submitSubscribe.addEventListener("click", function (event) {
  event.preventDefault();

  if (validateSubscribeForm()) {
    alert("YOU HAVE SUCCESSFULLY SUBSCRIBED");
    subscribeModal.style.display = "none";
    document.getElementById("subscribeForm").reset();
  }
});

function validateSubscribeForm() {
  let firstName = document.getElementById("firstName").value.toString();
  let lastName = document.getElementById("lastName").value.toString();
  let email = document.getElementById("email").value.toString();
  if (
    firstName.trim() === "" ||
    lastName.trim() === "" ||
    email.trim() === ""
  ) {
    return false;
  } else {
    return true;
  }
}

// Coding for Contact Us Modal
let contactModal = document.getElementById("contactModal");
let contactBtn = document.getElementById("contactbtn");
let contactSpan = document.getElementsByClassName("closeContact")[0];

contactModal.style.display = "none";

contactBtn.onclick = function () {
  contactModal.style.display = "block";
};

contactSpan.onclick = function () {
  contactModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
};

// Submiting the Contact Form

let submitForm = document.getElementById("submitForm");
submitForm.addEventListener("click", function () {
  let textInputs = document.querySelectorAll(
    '#contactForm input[type="text"], #contactForm input[type="email"], #contactForm input[type="number"]'
  );
  let isValid = true;

  textInputs.forEach(function (input) {
    if (!input.checkValidity()) {
      isValid = false;
      return;
    }
  });
  //   To querySelectorAll με τις παραμετρους που εδωσα παιρνει απο το id contactForm τα inputs με value text email number για να τα επεξεργαστει
  //   το forEach ειναι method της javascript που κανει loop και στην συγκεκριμενη περιπτωση δινει το function σε καθε στοιχειο του textInputs
  //   το function(input) ελεγχει το αντιστροφο Validity του καθε input που πηραμε προηγουμενως ωστε αν δεν ειναι valid να δωσει την τιμη false στο isValid και
  //   το loop να σταματήσει νωρίς χωρις να χρειάζεται να ελεγξει την υπόλοιπη φορμα αφου εχει βρει σφαλμα

  // Check validity for Select element
  let genderSelect = document.getElementById("gender");
  let educationSelect = document.getElementById("education");
  let militaryObligations = document.getElementById("militaryObligations");

  if (
    genderSelect.value === "choose" ||
    educationSelect.value === "choose" ||
    militaryObligations.value === "choose"
  ) {
    isValid = false;
  }
  if (genderSelect.value === "man" && militaryObligations.value === "choose") {
    isValid = false;
  } else if (
    genderSelect.value === "woman" &&
    militaryObligations.value === "choose"
  ) {
    isValid = true;
  }
  {
    if (isValid) {
      alert("FORM HAS BEEN SUBMITTED");
      contactModal.style.display = "none";
      document.getElementById("contactForm").reset();
    } else {
      alert("PLEASE FILL ALL THE MANDATORY FIELDS MARKED WITH * ");
    }
  }
});

// Coding for Children CheckBox

let childrenCheckbox = document.getElementById("children");
let additionalField = document.getElementById("additionalField");

childrenCheckbox.addEventListener("change", function () {
  additionalField.style.display = this.checked ? "block" : "none";
});

// Coding for Military based on Gender

let military = document.getElementById("military");
let gender = document.getElementById("gender");

gender.addEventListener("change", function () {
  military.style.display = gender.value === "man" ? "block" : "none";
});

// Coding for military based on if it has been done

let militaryObligationsDate = document.getElementById(
  "militaryObligationsDate"
);

militaryObligations.addEventListener("change", function () {
  militaryObligationsDate.style.display =
    militaryObligations.value === "yes" ? "block" : "none";
});
