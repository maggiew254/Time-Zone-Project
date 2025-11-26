function showTimezone(event) {
  if (event.target.value === "paris") {
    let parisElement = document.querySelector("#countries");
    let parisTimezone = moment()
      .tz("Europe/Paris")
      .format("dddd, MMMM D, YYYY h:mm A");
    alert(`It is ${parisTimezone} in Paris, France`);
  } else {
    if (event.target.value === "sydney") {
      let sydneyElement = document.querySelector("#countries");
      let sydneyTimezone = moment()
        .tz("Australia/Sydney")
        .format("dddd, MMMM D, YYYY h:mm A");
      alert(`It is ${sydneyTimezone} in Sydney, Australia`);
    }

    if (event.target.value === "tokyo") {
      let tokyoElement = document.querySelector("#countries");
      let tokyoTimezone = moment()
        .tz("Asia/Tokyo")
        .format("dddd, MMMM D, YYYY h:mm A");
      alert(`It is ${tokyoTimezone} in Tokyo, Japan`);
    }
  }
}

let countries = document.querySelector("#countries");
countries.addEventListener("change", showTimezone);
