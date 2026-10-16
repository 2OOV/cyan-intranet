/*
  CYAN MAGAZINE · CONTENT & UI
  새 매거진은 magazines 배열에 객체 하나만 추가하세요.
  가장 큰 id의 매거진이 LATEST ISSUE로 자동 표시됩니다.
  최신호는 feature, latestTitle, description, image, imageAlt, url을 입력해야 합니다.
  할로윈 특집의 실제 링크와 표지 이미지 URL이 준비되면 id: 25로 추가하세요.
*/

const magazines = [
  {
    id: 24,
    category: "PEOPLE",
    feature: "PEOPLE · AUTUMN SPECIAL",
    title: "[가을 특집] CYAN PEOPLE — 가을, 시안의 사람들",
    latestTitle: "CYAN PEOPLE — 가을, 시안의 사람들",
    description: "조금 느려진 계절 속에서 만난 여섯 명의 시안인. 일과 일상, 그리고 요즘의 작은 취향을 물었습니다.",
    date: "2026.10.03",
    views: 128,
    image: "https://res.cloudinary.com/qucqug6s/image/upload/v1791006444/2026._%EA%B0%80%EC%9D%84_%ED%91%9C%EC%A7%80%EC%B9%B4%EB%93%9C.jpg",
    imageAlt: "2026 Autumn CYAN PEOPLE",
    url: "https://nifty-weather-a78.notion.site/2026-AUTUMN-PEOPLE-3eec1937328780e680b3cb500fd03770?pvs=143"
  },
  { id: 23, category: "CULTURE", title: "시안인의 가을 플레이리스트", date: "2026.09.25", views: 486, url: "#" },
  { id: 22, category: "LIFE", title: "점심시간, 다들 어디에서 보내세요?", date: "2026.09.18", views: 352, url: "#" },
  { id: 21, category: "PEOPLE", title: "우리가 일하는 사람들", date: "2026.09.11", views: 619, url: "#" },
  { id: 20, category: "WORK", title: "CYAN BIO 연구동의 하루", date: "2026.09.04", views: 274, url: "#" },
  { id: 19, category: "CULTURE", title: "늦여름을 보내는 우리의 방식", date: "2026.08.27", views: 441, url: "#" },
  { id: 18, category: "LIFE", title: "사내카페에서 가장 많이 찾는 메뉴", date: "2026.08.20", views: 583, url: "#" },
  { id: 17, category: "WORK", title: "회의실 밖에서 시작된 아이디어", date: "2026.08.13", views: 318, url: "#" },
  { id: 16, category: "PEOPLE", title: "오늘도 같은 자리에서 — 시안의 오래된 동료들", date: "2026.08.06", views: 527, url: "#" },
  { id: 15, category: "CULTURE", title: "여름 끝, 퇴근길에 듣는 다섯 곡", date: "2026.07.30", views: 394, url: "#" }
];


const magazineList = document.getElementById("magazineList");
const emptyState = document.getElementById("emptyState");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-button");

const latestDate = document.getElementById("latestDate");
const latestCard = document.getElementById("latestCard");
const latestCategory = document.getElementById("latestCategory");
const latestTitle = document.getElementById("latestTitle");
const latestDescription = document.getElementById("latestDescription");
const latestImage = document.getElementById("latestImage");


let activeFilter = "ALL";
let searchKeyword = "";


function formatViews(value) {
  return value.toLocaleString("ko-KR");
}


function renderLatest() {

  const latest =
    [...magazines]
      .sort((a, b) => b.id - a.id)[0];

  if (!latest) {
    document.querySelector(".latest-section").style.display = "none";
    return;
  }

  latestDate.textContent = latest.date;
  latestCategory.textContent = latest.feature;
  latestTitle.textContent = latest.latestTitle;
  latestDescription.textContent = latest.description;
  latestImage.src = latest.image;
  latestImage.alt = latest.imageAlt;
  latestCard.href = latest.url;

}


function renderMagazines() {

  const keyword =
    searchKeyword.trim().toLowerCase();


  const filtered =
    [...magazines]
      .sort((a, b) => b.id - a.id)
      .filter((magazine) => {

        const categoryMatch =
          activeFilter === "ALL" ||
          magazine.category === activeFilter;

        const searchMatch =
          keyword === "" ||
          magazine.title
            .toLowerCase()
            .includes(keyword);

        return categoryMatch && searchMatch;

      });


  if (!filtered.length) {

    magazineList.innerHTML = "";
    emptyState.style.display = "block";

    return;
  }


  emptyState.style.display = "none";


  magazineList.innerHTML =
    filtered.map((magazine) => `

      <div class="magazine-row">

        <div class="magazine-number">
          ${String(magazine.id).padStart(3, "0")}
        </div>

        <div class="magazine-category">
          ${magazine.category}
        </div>

        <div class="magazine-title-cell">

          ${
            magazine.url === "#"
              ? `<span class="magazine-link">${magazine.title}</span>`
              : `<a
                  class="magazine-link"
                  href="${magazine.url}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ${magazine.title}
                </a>`
          }

        </div>

        <div class="magazine-date">
          ${magazine.date}
        </div>

        <div class="magazine-views">
          ${formatViews(magazine.views)}
        </div>

      </div>

    `).join("");

}


filterButtons.forEach((button) => {

  button.addEventListener("click", function() {

    activeFilter =
      button.dataset.filter;


    filterButtons.forEach((item) => {

      item.classList.toggle(
        "active",
        item === button
      );

    });


    renderMagazines();

  });

});


searchForm.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();

    searchKeyword =
      searchInput.value;

    renderMagazines();

  }
);


searchInput.addEventListener(
  "input",
  function() {

    searchKeyword =
      searchInput.value;

    renderMagazines();

  }
);


renderLatest();
renderMagazines();
