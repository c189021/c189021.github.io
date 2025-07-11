    /*!
    * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    //
    // Scripts
    //

    window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
    return;
}
    if (window.scrollY === 0) {
    navbarCollapsible.classList.remove('navbar-shrink')
} else {
    navbarCollapsible.classList.add('navbar-shrink')
}

};

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
    target: '#mainNav',
    rootMargin: '0px 0px -40%',
});
};

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
    if (window.getComputedStyle(navbarToggler).display !== 'none') {
    navbarToggler.click();
}
});
});

});

    document.addEventListener('DOMContentLoaded', function() {
        // 모든 포트폴리오 모달 요소를 가져옵니다.
        const portfolioModals = document.querySelectorAll('.portfolio-modal');
        const totalModals = portfolioModals.length; // 전체 모달 개수

        // 현재 열려있는 모달의 인덱스를 저장할 변수
        let currentModalIndex = -1;

        // 각 포트폴리오 아이템(이미지) 클릭 시 이벤트 리스너를 추가하여
        // 어떤 모달이 열리는지 감지하고 currentModalIndex를 업데이트합니다.
        document.querySelectorAll('[data-bs-toggle="modal"]').forEach(trigger => {
            trigger.addEventListener('click', function() {
                const targetModalId = this.getAttribute('data-bs-target'); // 예: #portfolioModal1
                const targetModalElement = document.querySelector(targetModalId); // 해당 모달 요소

                // 열리는 모달의 인덱스를 portfolioModals 배열에서 찾습니다.
                for (let i = 0; i < totalModals; i++) {
                    if (portfolioModals[i] === targetModalElement) {
                        currentModalIndex = i; // 현재 모달의 인덱스 설정
                        break;
                    }
                }
            });
        });

        // '이전' 버튼 클릭 이벤트 리스너
        document.querySelectorAll('.prev-project-btn').forEach(button => {
            button.addEventListener('click', function() {
                // 현재 열려있는 모달을 닫습니다.
                const currentModal = portfolioModals[currentModalIndex];
                const bsModal = bootstrap.Modal.getInstance(currentModal) || new bootstrap.Modal(currentModal);
                bsModal.hide();

                // 인덱스 업데이트 (순환 로직)
                if (currentModalIndex === 0) { // 현재 첫 번째 모달이라면
                    currentModalIndex = totalModals - 1; // 마지막 모달로 이동
                } else {
                    currentModalIndex--; // 그 외에는 이전 모달로 이동
                }

                // 새로운 모달을 엽니다.
                const prevModal = portfolioModals[currentModalIndex];
                const bsPrevModal = bootstrap.Modal.getInstance(prevModal) || new bootstrap.Modal(prevModal);
                bsPrevModal.show();
            });
        });

        // '다음' 버튼 클릭 이벤트 리스너
        document.querySelectorAll('.next-project-btn').forEach(button => {
            button.addEventListener('click', function() {
                // 현재 열려있는 모달을 닫습니다.
                const currentModal = portfolioModals[currentModalIndex];
                const bsModal = bootstrap.Modal.getInstance(currentModal) || new bootstrap.Modal(currentModal);
                bsModal.hide();

                // 인덱스 업데이트 (순환 로직)
                if (currentModalIndex === totalModals - 1) { // 현재 마지막 모달이라면
                    currentModalIndex = 0; // 첫 번째 모달로 이동
                } else {
                    currentModalIndex++; // 그 외에는 다음 모달로 이동
                }

                // 새로운 모달을 엽니다.
                const nextModal = portfolioModals[currentModalIndex];
                const bsNextModal = bootstrap.Modal.getInstance(nextModal) || new bootstrap.Modal(nextModal);
                bsNextModal.show();
            });
        });
    });