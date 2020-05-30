const doc = window.document;



//导航栏点击
{
  const li = doc.querySelectorAll('.nav-li-id');
  const activeClass = 'li-active';
  let currentIndex = 0;

  let len = li.length;
  for(let i = 0; i < len; ++i){
    li[i].onclick = function(e){
      li[currentIndex].classList.remove(activeClass);
      this.classList.add(activeClass);
      currentIndex = i;
    }
  }
}

//轮播图
{
  const swiper = doc.querySelector('.swiper');
  const cuePointItems = doc.querySelectorAll('.cue-point-item');

  let swiperTranslateClasses = ['swiper-translate-0', 'swiper-translate-1', 
                                'swiper-translate-2', 'swiper-translate-3',
                                'swiper-translate-4'
                              ];
                    
  let currentIndex = 0;
  let currentActiveClass = swiperTranslateClasses[currentIndex];
  let activeClass = '';
  let delay = 3000;

  let time = setInterval(() => {

    cuePointItems[currentIndex].classList.remove('cb-bg-pink');
    ++currentIndex;
    if(currentIndex === 5){
      currentIndex = 0
    }

    activeClass = swiperTranslateClasses[currentIndex];
    swiper.classList.replace(currentActiveClass, activeClass);
    currentActiveClass =  activeClass;
    
    cuePointItems[currentIndex].classList.add('cb-bg-pink');
   
  }, delay)

}

//  第三部分


{
  const side1 = doc.querySelectorAll('.side1-id');
  const side2 = doc.querySelectorAll('.side2-id');
  const side3 = doc.querySelectorAll('.side3-id');
  const side4 = doc.querySelectorAll('.side4-id');
  const bigImgItem = doc.querySelectorAll('.main-3-item');
  const imgText = doc.querySelectorAll('.img-text');
  const iconBox = doc.querySelectorAll('.text-icon-box');

  const none = 'content-none';
  const anim = 'cb-anim';
  const animScaleSpring = 'cb-anim-scaleSpring'

  let currentIndex = 0;

  const arr = [
    [side1[0], side1[1]],
    [side2[0], side2[1]],
    [side3[0], side3[1]],
    [side4[0], side4[1]]
  ]

  let currentZIndexArr = ['z-index1', 'z-index2', 'z-index3', 'z-index4'];
  let newZIndexArr = [];

  function gec(select,index, fn){
    select.onmouseenter = function(){
      fn(index)
    }
  }

  function replaceZindex(currentZIndexArr, newZIndexArr){
    for(let i = 0; i < 4; ++i){
      bigImgItem[i].classList.replace(currentZIndexArr[i], newZIndexArr[i]);
    }
  }

  function change(index){
    
    let valueArr = [];
    imgText[currentIndex].classList.remove(anim, animScaleSpring);
    imgText[currentIndex].classList.add(none);
    iconBox[currentIndex].classList.add(none);

    valueArr = arr[currentIndex];
    for(let i = 0; i < 2; ++i){
      valueArr[i].classList.remove(none)
    }

    currentIndex = index; //当前展示的图片索引

    valueArr = arr[currentIndex];
    console.log(valueArr)
    for(let i = 0; i < 2; ++i){
      valueArr[i].classList.add(none)
    }
    
    switch(index){
      case 0:
        newZIndexArr = ['z-index1', 'z-index2', 'z-index3', 'z-index4'];
        replaceZindex(currentZIndexArr,newZIndexArr)
        currentZIndexArr = newZIndexArr;
        break;
      case 1:
        newZIndexArr = ['z-index2', 'z-index1', 'z-index3', 'z-index4'];
        replaceZindex(currentZIndexArr,newZIndexArr)
        currentZIndexArr = newZIndexArr;
        break;
      case 2:
        newZIndexArr = ['z-index3', 'z-index2', 'z-index1', 'z-index4'];
        replaceZindex(currentZIndexArr,newZIndexArr)
        currentZIndexArr = newZIndexArr;
        break;
      case 3:
        newZIndexArr = ['z-index4', 'z-index3', 'z-index2', 'z-index1'];
        replaceZindex(currentZIndexArr,newZIndexArr)
        currentZIndexArr = newZIndexArr;
        break;
    }

    imgText[currentIndex].classList.remove(none);
    iconBox[currentIndex].classList.remove(none);
    imgText[currentIndex].classList.add(anim, animScaleSpring);

  }

  gec(side1[0],0, change)
  gec(side1[1],0, change)

  gec(side2[0],1, change)
  gec(side2[1],1, change)

  gec(side3[0],2, change)
  gec(side3[1],2, change)

  gec(side4[0],3, change)
  gec(side4[1],3, change)

  
  //根据窗口大小改变高度
  changeHeight()

  function changeHeight(){
    const imgItemBox = doc.querySelector('.img-item-box')
    const imgItemBoxHeight = bigImgItem[0].offsetHeight + 1;
    imgItemBox.style.cssText += `; height: ${imgItemBoxHeight + 'px'};`;
  }
  
  window.onresize = function(){
    changeHeight()
  }
}




