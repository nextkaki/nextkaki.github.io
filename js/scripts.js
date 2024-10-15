/*!
 * Start Bootstrap - Simple Sidebar v6.0.6 (https://startbootstrap.com/template/simple-sidebar)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
 */
//
// Scripts
//
document.addEventListener('DOMContentLoaded', function () {
    var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'));
    var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
        return new bootstrap.Offcanvas(offcanvasEl);
    });
});


window.addEventListener("DOMContentLoaded", (event) => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector("#sidebarToggle");
    if (sidebarToggle) {
        sidebarToggle.addEventListener("click", (event) => {
            event.preventDefault();
            document.body.classList.toggle("sb-sidenav-toggled");
            localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
        });
    }

    // 메뉴 클릭 시 페이지를 동적으로 로드하는 함수
    window.loadPage = function (page) {
        // 전역 함수로 설정
        fetch("pages/" + page)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Page not found");
                }
                return response.text();
            })
            .then((data) => {
                document.getElementById("page-content").innerHTML = data;
            })
            .catch((error) => {
                console.error("Error loading page:", error);
                document.getElementById("page-content").innerHTML = "<h1>Page not found</h1>";
            });
    };

    // 하위 메뉴 토글 함수
    window.toggleSubMenu = function (submenuId) {
        // 전역 함수로 설정
        const submenu = document.getElementById(submenuId);
        if (submenu) {
            submenu.classList.toggle("show"); // 'show' 클래스를 토글하여 하위 메뉴를 표시 또는 숨김
        }
    };

    // 각 메뉴에 클릭 이벤트 리스너 추가
    const menuLinks = document.querySelectorAll(".list-group-item");
    menuLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // 기본 링크 동작 방지

            // onclick에 정의된 내용에서 페이지 이름 추출
            const page = this.getAttribute("onclick").replace("loadPage('", "").replace("')", "");
            if (page && page !== "#") {
                loadPage(page); // 페이지가 명시되어 있으면 해당 페이지 로드
            }
        });
    });

    // 링크 열기 함수: 영어 룬 이름을 사용해 URL 생성
    function openRuneLink(rune) {
        const url = `https://diablo.trade/listings/items?cursor=1&mode=season%20softcore&rune=${rune}&type=WTB`;
        window.open(url, "_blank");
    }
});
