let dePopup = document.querySelectorAll('.delightful-experience-img');
addEventListenerList(dePopup, 'mouseover', showPopup); 
addEventListenerList(dePopup, 'mouseout', hidePopup); 

function showPopup(){
    this.querySelectorAll('.delightful-experience-purchase-popup')[0].style.display = 'flex';
}
function hidePopup(){
    this.querySelectorAll('.delightful-experience-purchase-popup')[0].style.display = 'none';
}
function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn);
    }
}