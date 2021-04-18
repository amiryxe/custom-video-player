// Create volume btn

// force styles
document.querySelectorAll("input[data-plyr=volume]").style =
  "background: rgb(32, 45, 58); padding: 15px !important; border-radius: 5px; width: 150px;";

document
  .querySelectorAll("input[data-plyr=volume]")
  .forEach((item) => item.classList.add("plyr__tooltip-volume"));

document
  .querySelectorAll(".plyr__controls__item.plyr__control")
  .forEach((item) => {
    let volumeBtn = document.createElement("span");
    volumeBtn.innerHTML =
      '<button type="button" class="plyr__control" data-plyr="mute"><svg class="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-muted"></use></svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-volume"></use></svg></button>';

    document
      .querySelectorAll(".plyr__controls__item.plyr__volume")
      .forEach((item) => {
        item.style = "display: none";
      });

    // open and close volume control
    volumeBtn.addEventListener("mouseover", () => {
      document
        .querySelectorAll(".plyr__controls__item.plyr__volume")
        .forEach((item) => {
          item.style = "display: block";
        });
    });

    volumeBtn.addEventListener("mouseout", () => {
      document
        .querySelectorAll(".plyr__controls__item.plyr__volume")
        .forEach((item) => {
          item.style = "display: none";
        });
    });

    item.after(volumeBtn);
  });

document
  .querySelectorAll(".plyr__controls__item.plyr__volume")
  .forEach((item) => {
    item.addEventListener("mouseover", () => {
      document
        .querySelectorAll(".plyr__controls__item.plyr__volume")
        .forEach((item) => {
          item.style = "display: none";
        });
    });
  });

document
  .querySelectorAll(".plyr__controls__item.plyr__volume")
  .forEach((item) => {
    item.addEventListener("mouseout", () => {
      document
        .querySelectorAll(".plyr__controls__item.plyr__volume")
        .forEach((item) => {
          item.style = "display: none";
        });
    });
  });
