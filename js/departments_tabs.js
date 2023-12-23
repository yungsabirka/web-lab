const tabLinks = document.querySelectorAll('.departments_faculty');
const tabsInfo = document.querySelectorAll('.tabs-info-container');

tabLinks.forEach(tabLink => {
    tabLink.addEventListener('click', (event) => {
        event.preventDefault();

        const tabId = tabLink.getAttribute('data-tab');

        showTab(tabId);
        changeButtonColor(tabId);
    });
});
function showTab(tabId) {
    tabsInfo.forEach(tab => {
        if(tab.id !== tabId){
            tab.classList.add('no-active-tab');
            tab.classList.remove('active-tab');
        } else{
            tab.classList.add('active-tab');
        }
    });
}
function changeButtonColor(tabId){
    tabLinks.forEach(link => {
        if(link.getAttribute('data-tab') !== tabId){
            link.classList.remove('active-button');
        } else{
            link.classList.add('active-button');
        }
    })
}