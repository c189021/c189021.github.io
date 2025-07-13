/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => { //

    // Navbar shrink function
    var navbarShrink = function () { //
        const navbarCollapsible = document.body.querySelector('#mainNav'); //
        if (!navbarCollapsible) { //
            return; //
        }
        if (window.scrollY === 0) { //
            navbarCollapsible.classList.remove('navbar-shrink') //
        } else {
            navbarCollapsible.classList.add('navbar-shrink') //
        }
    };

    // Shrink the navbar
    navbarShrink(); //

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink); //

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav'); //
    if (mainNav) { //
        new bootstrap.ScrollSpy(document.body, { //
            target: '#mainNav', //
            rootMargin: '0px 0px -40%', //
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler'); //
    const responsiveNavItems = [].slice.call( //
        document.querySelectorAll('#navbarResponsive .nav-link') //
    );
    responsiveNavItems.map(function (responsiveNavItem) { //
        responsiveNavItem.addEventListener('click', () => { //
            if (window.getComputedStyle(navbarToggler).display !== 'none') { //
                navbarToggler.click(); //
            }
        });
    });

    // Language Toggle Functionality
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'ko'; // Default language is Korean

    const translations = {
        ko: {
            // Navigation
            portfolioNav: '포트폴리오',
            skillsNav: '기술',
            contactNav: '연락처',
            // Masthead
            mastheadHeading: '떵개 포트폴리오',
            mastheadSubheading: '풀스택 개발자',
            // Portfolio Section
            portfolioHeading: '포트폴리오',
            // Skills Section
            skillsHeading: '기술',
            htmlCssJs: 'HTML, JavaScript, CSS',
            react: 'React',
            python: 'Python',
            // Contact Section
            fullNameLabel: '이름',
            nameRequired: '이름을 입력해주세요.',
            emailLabel: '이메일 주소',
            emailRequired: '이메일 주소를 입력해주세요.',
            emailInvalid: '유효한 이메일 주소가 아닙니다.',
            phoneLabel: '전화번호',
            phoneRequired: '전화번호를 입력해주세요.',
            messageLabel: '메시지',
            messageRequired: '메시지를 입력해주세요.',
            formSuccess: '성공적으로 전송되었습니다!',
            formActivate: '이 양식을 활성화하려면 다음에서 가입하세요.',
            formError: '메시지 전송 오류!',
            sendButton: '보내기',
            contactHeading: '문의하기',
            // Footer
            locationHeading: '위치',
            locationText: `홍익대학교<br />소프트웨어융합학과`,
            aroundWebHeading: '웹사이트',
            siteHeading: '사이트',
            siteText: `박성진의 포트폴리오`,
            copyrightText: '저작권 &copy; 귀하의 웹사이트 2023',
            // Portfolio Modals
            project1Title: '머신러닝 열수요 예측',
            project1Description: '팀 프로젝트로 열 데이터를 활용하여 열수요 예측을 머신러닝을 이용하여 진행하였다.',
            project2Title: '클래스 다이어그램',
            project2Description: '디자인 패턴 프로그래밍 공부 중 빌더 패턴을 배우고 이를 활용한 코드를 작성하고 클래스 다이어그램까지 만들었다.',
            project3Title: '알고리즘 문제점',
            project3Description: '알고리즘 구조 이로 인해 발생하는 문제점에 대해서 기사와 논문을 참고하여 작성하였다.',
            project4Title: '창의적공학설계',
            project4Description: '팀 프로젝트로 창의적공학설계 시간 중 헤어 드라이기로 건조대를 결합하는 아이디어로 발명품을 만들어냈다.',
            project5Title: '팀 포트폴리오 사이트',
            project5Description: '팀 프로젝트로 팀원 모두의 포트폴리오를 작성할 수 있고 개인 프로필을 만든 팀 포트폴리오 사이트를 제작하였다.',
            project6Title: '티스토리',
            project6Description: '코딩 공부와 배운 내용들을 티스토리에 기록하며 공유를 하고 있다.',
            closeWindowButton: '창 닫기',
            prevButton: '이전',
            nextButton: '다음'
        },
        en: {
            // Navigation
            portfolioNav: 'Portfolio',
            skillsNav: 'Skills',
            contactNav: 'Contact',
            // Masthead
            mastheadHeading: "DDEONGGAE'S PORTFOLIO",
            mastheadSubheading: 'Full-Stack Developer',
            // Portfolio Section
            portfolioHeading: 'Portfolio',
            // Skills Section
            skillsHeading: 'Skills',
            htmlCssJs: 'HTML, JavaScript, CSS',
            react: 'React',
            python: 'Python',
            // Contact Section
            fullNameLabel: 'Full name',
            nameRequired: 'A name is required.',
            emailLabel: 'Email address',
            emailRequired: 'An email is required.',
            emailInvalid: 'Email is not valid.',
            phoneLabel: 'Phone number',
            phoneRequired: 'A phone number is required.',
            messageLabel: 'Message',
            messageRequired: 'A message is required.',
            formSuccess: 'Form submission successful!',
            formActivate: 'To activate this form, sign up at',
            formError: 'Error sending message!',
            sendButton: 'Send',
            contactHeading: 'Contact Me',
            // Footer
            locationHeading: 'Location',
            locationText: `Hongik University<br />Department Software Communication`,
            aroundWebHeading: 'Around the Web',
            siteHeading: 'Site',
            siteText: `Seoung Jin Park 's Portfolio`,
            copyrightText: 'Copyright &copy; Your Website 2023',
            // Portfolio Modals
            project1Title: 'Machine Learning Heat Demand Prediction',
            project1Description: 'A team project focused on predicting heat demand using machine learning with heat data.',
            project2Title: 'Class Diagram',
            project2Description: 'While studying design pattern programming, I learned the builder pattern and created code and a class diagram using it.',
            project3Title: 'Algorithm Issues',
            project3Description: 'I researched and wrote about the issues arising from algorithm structures, referencing articles and papers.',
            project4Title: 'Creative Engineering Design',
            project4Description: 'As a team project during Creative Engineering Design class, we invented a product combining a hair dryer with a drying rack.',
            project5Title: 'Team Portfolio Site',
            project5Description: 'A team project to create a team portfolio site where all team members can write their portfolios and create personal profiles.',
            project6Title: 'Tistory Blog',
            project6Description: 'I record and share my coding studies and learned content on Tistory.',
            closeWindowButton: 'Close Window',
            prevButton: 'Previous',
            nextButton: 'Next'
        }
    };

    function updateContent() {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.dataset.langKey;
            if (translations[currentLang][key]) {
                if (key === 'locationText') {
                    element.innerHTML = translations[currentLang][key];
                } else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });
        // Update button text
        langToggleBtn.textContent = currentLang === 'ko' ? 'EN' : '한';
    }

    if (langToggleBtn) { // Ensure the button exists before adding event listener
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ko' ? 'en' : 'ko';
            updateContent();
        });
    }

    // Initial content load
    updateContent();

    // Portfolio Modal Navigation (Existing Code)
    const portfolioModals = document.querySelectorAll('.portfolio-modal'); //
    const totalModals = portfolioModals.length; //
    let currentModalIndex = -1; //

    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(trigger => { //
        trigger.addEventListener('click', function() { //
            const targetModalId = this.getAttribute('data-bs-target'); //
            const targetModalElement = document.querySelector(targetModalId); //

            for (let i = 0; i < totalModals; i++) { //
                if (portfolioModals[i] === targetModalElement) { //
                    currentModalIndex = i; //
                    break; //
                }
            }
        });
    });

    document.querySelectorAll('.prev-project-btn').forEach(button => { //
        button.addEventListener('click', function() { //
            const currentModal = portfolioModals[currentModalIndex]; //
            const bsModal = bootstrap.Modal.getInstance(currentModal) || new bootstrap.Modal(currentModal); //
            bsModal.hide(); //

            if (currentModalIndex === 0) { //
                currentModalIndex = totalModals - 1; //
            } else {
                currentModalIndex--; //
            }

            const prevModal = portfolioModals[currentModalIndex]; //
            const bsPrevModal = bootstrap.Modal.getInstance(prevModal) || new bootstrap.Modal(prevModal); //
            bsPrevModal.show(); //
        });
    });

    document.querySelectorAll('.next-project-btn').forEach(button => { //
        button.addEventListener('click', function() { //
            const currentModal = portfolioModals[currentModalIndex]; //
            const bsModal = bootstrap.Modal.getInstance(currentModal) || new bootstrap.Modal(currentModal); //
            bsModal.hide(); //

            if (currentModalIndex === totalModals - 1) { //
                currentModalIndex = 0; //
            } else {
                currentModalIndex++; //
            }

            const nextModal = portfolioModals[currentModalIndex]; //
            const bsNextModal = bootstrap.Modal.getInstance(nextModal) || new bootstrap.Modal(nextModal); //
            bsNextModal.show(); //
        });
    });
});