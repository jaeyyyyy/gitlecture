

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

    //  Activate Bootstrap scrollspy on the main nav element
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

// particleground 
$(document).ready(function() {
    $('#particles').particleground({
      dotColor: 'rgba(255,255,255,0.3)',
      lineColor: 'rgba(255,255,255,0.3)',
      density: 5000,
      particleRadius: 5,
      lineWidth: 0.5,
    });
    $('#particles > .container').css({
      'margin-top': -($('.intro').height() / 2)
    });
  });
  
 // 텍스트 입력 효과
 const content = "개발자를 꿈꾸는 김재연입니다.";
 const title = document.querySelector('.blinking_txt');
 let i = 0;
 function typing(){
    let txt = content[i++];
    title.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        title.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200);


 // contact
 const hypenTel = (target) => {
    target.value = target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
   }
  // 010-1234-5678 // 휴대폰 자동 하이픈 생성

$('form').on('submit', function (e){ // 이름, 이메일, 전화번호 유효성 검사
    if($('#name').val() == ''){
    $('#submitErrorMessage').html('이름을 입력해주세요.');
    $('#submitErrorMessage').removeClass('d-none');
    e.preventDefault();
    } else if($('#email').val() == ''){
        $('#submitErrorMessage').html('이메일을 입력해주세요.');
        $('#submitErrorMessage').removeClass('d-none');
        e.preventDefault();
    } else if($('#phone').val() == ''){
        $('#submitErrorMessage').html('전화번호를 입력해주세요.');
        $('#submitErrorMessage').removeClass('d-none');
        e.preventDefault();
    } else if($('#message').val() == ''){
        $('#submitErrorMessage').html('메세지 내용을 입력해주세요.');
        $('#submitErrorMessage').removeClass('d-none');
        e.preventDefault();
    } else {
        $('#submitErrorMessage').addClass('d-none');
        $('#submitSuccessMessage').html('메세지가 성공적으로 발송되었습니다 :)');
        $('#submitSuccessMessage').removeClass('d-none');
        e.preventDefault();
    }
}); 

