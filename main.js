const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

const selectBtnAndUnSelectOther = function (
  selectThatBtn,
  unSelectThatBtn1,
  unSelectThatBtn2
) {
  selectThatBtn.className = "clicked";
  unSelectThatBtn1.className = "unclicked";
  unSelectThatBtn2.className = "unclicked";
};

const getTimeFrameByDateType = (timeFrames, dateType) => {
  if (dateType === "daily") return timeFrames.daily;
  else if (dateType === "weekly") return timeFrames.weekly;
  else return timeFrames.monthly;
};

const renderData = function (dateType) {
  data.forEach((element) => {
    const currentCard = document.getElementById(element.title);
    const timeFrame = getTimeFrameByDateType(element.timeframes, dateType);
    currentCard.querySelector("h2").textContent = timeFrame.current + "hrs";
    currentCard.querySelector("h3").textContent =
      "Last Week - " + timeFrame.previous + "hrs";
  });
};

dailyBtn.addEventListener("click", (e) => {
  selectBtnAndUnSelectOther(dailyBtn, weeklyBtn, monthlyBtn);
  renderData("daily");
});

weeklyBtn.addEventListener("click", (e) => {
  selectBtnAndUnSelectOther(weeklyBtn, dailyBtn, monthlyBtn);
  renderData("weekly");
});

monthlyBtn.addEventListener("click", (e) => {
  selectBtnAndUnSelectOther(monthlyBtn, weeklyBtn, dailyBtn);
  renderData("monthly");
});
