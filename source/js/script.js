let navSite = document.querySelector(".navigation-site");
let navHeader = document.querySelector(".header");
let navToggle = document.querySelector(".navigation-site__toggle");

navSite.classList.remove("navigation-site--nojs");
navHeader.classList.remove("header--nojs");

navToggle.addEventListener("click", function () {
  if (navSite.classList.contains("navigation-site--closed")) {
    navSite.classList.remove("navigation-site--closed");
    navSite.classList.add("navigation-site--opened");
  } else {
    navSite.classList.add("navigation-site--closed");
    navSite.classList.remove("navigation-site--opened");
  }
});

const map = L.map("map").setView(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  17
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: "img/svg/map.svg",
  iconSize: [38, 50],
  iconAnchor: [19, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);
