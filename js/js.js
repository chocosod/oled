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
    },
    breakpoints:{
        //화면의 너비기 320이상 적용 옵션
       
        320:{slidesPerView:1,
            spaceBetween:50,

        },
        //화면의 너비가 760이상 적용옵션
        768:{slidesPerView:2,
            spaceBetween:50,
        },
        //화면의 너비가 1024이상 적용옵션
        1024:{slidesPerView:3,
            spaceBetween:0,
        },
    }
});


const view3 = new Swiper('#our_models_in_sub', {
    wrapperClass: 'our_models_in_sub_ul',   // 슬라이드를 감싸는 요소의 클래스명
    slideClass: 'our_models_in_sub_li',    // 슬라이드 요소의 공통된 클래스명
   
    slidesPerView: 3,   
   
});


/* pc버전 */
let top_menu = document.querySelectorAll('.top_menu');

top_menu.forEach(function(btn){
    btn.addEventListener('click', function(){
        // Array.from(this.children).forEach(function(child) {
        //     child.classList.toggle('active');
        // });
      
        this.querySelector(".top_menu_child").classList.toggle('active');
    });
}); //end:forech()








/* tablet 버전 */
//상단 햄버거 호출
let tablet = document.getElementById('tablet');
let hambuger = document.querySelector('.hambuger');
let experience = document.getElementById('experience');
hambuger.addEventListener('click',function(){
    tablet.classList.toggle('tablet_active'); 
});


//모델 복사
let clone_model = model.cloneNode(true);
tablet.appendChild(clone_model);

//고객지원 복사
let clone_buy = buy.cloneNode(true);
tablet.appendChild(clone_buy);

//멤버십 복사
let clone_experience = experience.cloneNode(true);
tablet.appendChild(clone_experience);

//베스트샵 복사
let clone_member= member.cloneNode(true);
tablet.appendChild(clone_member);

//브랜드스토리 복사
let clone_gene= gene.cloneNode(true);
tablet.appendChild(clone_gene);

//햄버거 안에 있는 버튼 호출
clone_model.addEventListener('click',function(){
    clone_model.classList.toggle('model_active');
});

clone_buy.addEventListener('click',function(){
    clone_buy.classList.toggle('buy_active');
});

clone_experience.addEventListener('click',function(){
    clone_experience.classList.toggle('experience_active');
});

clone_member.addEventListener('click',function(){
    clone_member.classList.toggle('member_active');
});

clone_gene.addEventListener('click',function(){
    clone_gene.classList.toggle('gene_active');
});











}//end:window.onload



/*bright 위치 조정*/
var sgc1 = new ScrollGiveClass("#bright",{
    add:-100, class:'scrolled1',
});

var sgc2 = new ScrollGiveClass("#bright",{
    add:-300, class:'scrolled1',
});

var sgc3 = new ScrollGiveClass("#bright",{
    add:-550, class:'scrolled2',
});


var sgc5 = new ScrollGiveClass("#bright",{
    add:-600, class:'scrolled3',
});
console.log(sgc1);



