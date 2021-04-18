// Create volume btn
document
  .querySelectorAll(".plyr__controls__item.plyr__volume")
  .forEach((item) => {
    item.style = "display: none";
  });

// force styles
document.querySelectorAll("input[data-plyr=volume]").style =
  "background: rgb(32, 45, 58); padding: 15px !important; border-radius: 5px; width: 150px;";

document
  .querySelectorAll("input[data-plyr=volume]")
  .forEach((item) => item.classList.add("plyr__tooltip-volume"));

// sound button

document
  .querySelectorAll(
    ".plyr__controls .plyr__controls__item.plyr__control[data-plyr=play]"
  )
  .forEach((item) => {
    let volumeBtn = document.createElement("span");
    volumeBtn.classList.add("volume-control-button");
    volumeBtn.innerHTML =
      '<button type="button" class="plyr__control" data-plyr="mute"><svg class="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-muted"></use></svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-volume"></use></svg></button>';

    item.after(volumeBtn);
  });

// open and close volume control
document.querySelectorAll(".volume-control-button").forEach((item1) => {
  item1.addEventListener("mouseover", (e) => {
    e.target.parentNode.parentNode.querySelector(
      ".plyr__controls__item.plyr__volume"
    ).style = "display: block";
  });

  item1.addEventListener("mouseout", (e) => {
    e.target.parentNode.parentNode.querySelector(
      ".plyr__controls__item.plyr__volume"
    ).style = "display: none";
  });
});

document
  .querySelectorAll(".plyr__controls__item.plyr__volume")
  .forEach((item1) => {
    item1.addEventListener("mouseover", (e) => {
      e.target.parentNode.parentNode.querySelector(
        ".plyr__controls__item.plyr__volume"
      ).style = "display: block";
    });

    item1.addEventListener("mouseout", (e) => {
      e.target.parentNode.parentNode.querySelector(
        ".plyr__controls__item.plyr__volume"
      ).style = "display: none";
    });
  });
