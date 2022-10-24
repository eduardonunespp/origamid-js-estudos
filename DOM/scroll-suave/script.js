
function initTabNav(){
        const tabMenu = document.querySelectorAll('.js-tabmenu li')
        const tabContent = document.querySelectorAll('.js-tabcontent section')
        tabContent[0].classList.add('ativo')


    if(tabMenu.length && tabContent.length){
        function activeclass(index){

            tabContent.forEach((item) => {
                item.classList.remove('ativo')
            })
            
            tabContent[index].classList.add('ativo')
        }


        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeclass(index)
            })
        })
    }



}

function initTabNav(){

const accordionList = document.querySelectorAll('.js-accordion dt')
 
    this.classList.add('ativo')
    this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
})



function scrollmoth(){

const links_internos = document.querySelectorAll('.js-menu a[href^="#"]')


    function scrollmoth(event){
        event.preventDefault();
        const href = this.getAttribute('href')
        const section = document.querySelector(href)
        const topo = section.offsetTop
        // window.scrollTo({
        //     top: topo,
        //     behavior: "smooth",
        // })

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }


links_internos.forEach((links) => {
    links.addEventListener('click', scrollmoth)
})

}

scrollmoth()