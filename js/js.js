window.onload=function(){
const view1 = new Swiper('#main', {
    wrapperClass: 'main_ul',   // 슬라이드를 감싸는 요소의 클래스명
    slideClass: 'main_li',    // 슬라이드 요소의 공통된 클래스명
    effect: 'fade', 	// 전환효과
    loop:'true',       // 슬라이드가 반복됨
    
    autoplay:{
        delay:'2000',   //2000 =2초마다 전환됨.
    },
    pagination: {
    el: ".swiper-pagination",
    clickable:'true', //클릭시 슬라이드전환 활성화
    bulletActiveClass: 'active', //활성화된 버튼에 부여된는 클래스명
  },      
});

const view2 = new Swiper('#our_models_out', {
    wrapperClass: 'our_models_out_ul',   // 슬라이드를 감싸는 요소의 클래스명
    slideClass: 'our_models_out_li',    // 슬라이드 요소의 공통된 클래스명
    loop:true,       // 슬라이드가 반복됨
    slidesPerView: 3,
    spaceBetween:50,
    
    autoplay:{
        delay:'12000',   //2000 =2초마다 전환됨.
    },
    pagination:{
    el:'.pager',   //<------- 여기하고 맨 위만 .아나 #
    clickable: true,
    bulletActiveClass: 'active',
}
});

}
var sgc1 = new ScrollGiveClass("#bright",{
    add:-100, class:'scrolled1',
});

var sgc2 = new ScrollGiveClass("#bright",{
    add:-300, class:'scrolled1',
});

var sgc3 = new ScrollGiveClass("#bright",{
    add:-550, class:'scrolled2',
});
console.log(sgc1);
