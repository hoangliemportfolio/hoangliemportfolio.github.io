


// Active cho nút chọn Portfolio
var activeType = document.querySelectorAll('.port__navbar-item')
var navList = document.querySelector('.port__navbar-list')
var product = document.querySelectorAll('.port__body-content')
for (let i = 0; i < activeType.length; i++) {
    activeType[i].addEventListener('click', function(){
        for (let j = 0; j < activeType.length; j++){
            activeType[j].classList.remove('active');
        }
        this.classList.add('active');
        a = i
    })
}


for (aa = 0; aa < activeType.length; aa++) {
    activeType[aa].addEventListener('click', function(){
        

            let productType = this.getAttribute('data-filter');

            for (let cc = 0; cc < product.length; cc++) {
                product[cc].classList.add('hide');

                if (product[cc].getAttribute('data-item') == productType) {
                    product[cc].classList.remove('hide')
                }

            }
    })
}


// Hàm khi scroll trái phải thì nội dung thay đổi theo
function scrollItem() {
    let productType = activeType[a].getAttribute('data-filter');

    for (let cc = 0; cc < product.length; cc++) {
        product[cc].classList.add('hide');

        if (product[cc].getAttribute('data-item') == productType) {
            product[cc].classList.remove('hide')
        }

        

    }
}













// Vuốt màn hình -------------------------------------------------

var portBody = document.querySelector('.port__body')


portBody.addEventListener('touchstart', handleTouchStart, false);        
portBody.addEventListener('touchmove', handleTouchMove, false);
var a = 0
var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 


            if(a == 0){
                a++;
                for (let k = 0; k < activeType.length; k++){
                    activeType[k].classList.remove('active');}
                    activeType[a].classList.add('active');
                    scrollItem()
            } else {
                if(a == 1){
                    a++;
                    for (let k = 0; k < activeType.length; k++){
                        activeType[k].classList.remove('active');}
                        activeType[a].classList.add('active');
                        scrollItem()
                } else {
                    if(a == 2){
                        a++;
                        for (let k = 0; k < activeType.length; k++){
                            activeType[k].classList.remove('active');}
                            activeType[a].classList.add('active');
                            navList.scrollBy(400,0)
                            scrollItem()
                    } else {
                        if(a == 3){
                            a++;
                            for (let k = 0; k < activeType.length; k++){
                                activeType[k].classList.remove('active');}
                                activeType[a].classList.add('active');
                                scrollItem()
                               
                        } else {
                            if(a == 4){
                                a++;
                                for (let k = 0; k < activeType.length; k++){
                                    activeType[k].classList.remove('active');}
                                    activeType[a].classList.add('active');
                                    scrollItem()
                            // } else {
                            //     if(a == 5){
                            //         a++;
                            //         for (let k = 0; k < activeType.length; k++){
                            //             activeType[k].classList.remove('active');}
                            //             activeType[a].classList.add('active');
                            //     } else {
                            //         if(a == 6){
                            //             a++;
                            //             for (let k = 0; k < activeType.length; k++){
                            //                 activeType[k].classList.remove('active');}
                            //                 activeType[a].classList.add('active');
                            //         } 
                            //     }
                            }
                        }
                    }
                }
            }
        } else {
            /* right swipe */
            if(a == 5){
                a--;
                for (let k = 0; k < activeType.length; k++){
                    activeType[k].classList.remove('active');}
                    activeType[a].classList.add('active');
                    scrollItem()
            } else {
                if(a == 4){
                    a--;
                    for (let k = 0; k < activeType.length; k++){
                        activeType[k].classList.remove('active');}
                        activeType[a].classList.add('active');
                        scrollItem()
                } else {
                    if(a == 3){
                        a--;
                        for (let k = 0; k < activeType.length; k++){
                            activeType[k].classList.remove('active');}
                            activeType[a].classList.add('active');
                            navList.scrollBy(-400,0)
                            scrollItem()
                    } else {
                        if(a == 2){
                            a--;
                            for (let k = 0; k < activeType.length; k++){
                                activeType[k].classList.remove('active');}
                                activeType[a].classList.add('active');
                                scrollItem()
                        } 
                        else {
                            if(a == 1){
                                a--;
                                for (let k = 0; k < activeType.length; k++){
                                    activeType[k].classList.remove('active');}
                                    activeType[a].classList.add('active');
                                    scrollItem()
                            } 
                        else {
                                if(a == 0){
                                    scrollItem()
                                    }}}
                        //     //     } else {
                        //     //         if(a == 6){
                        //     //             a++;
                        //     //             for (let k = 0; k < activeType.length; k++){
                        //     //                 activeType[k].classList.remove('active');}
                        //     //                 activeType[a].classList.add('active');
                        //     //         } 
                        //     //     }
                        //     }
                        // }
                    }
                }
            }
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};