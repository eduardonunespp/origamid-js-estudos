export default function initTooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]')

function onMouseOver(event){
    console.log(event)
    const toolTipBox = criarTooltipBox(this)
    toolTipBox.style.top = event.pageY + 'px'
    toolTipBox.style.left = event.pageX + 'px'

    // function onMouseLeave(){
    //     toolTipBox.remove()
    // }

    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener('mousemove', onMouseMove)



    onMouseLeave.element = this;
    onMouseLeave.toolTipBox = toolTipBox;
    this.addEventListener('mouseleave', onMouseLeave)
  
}

const onMouseLeave = {
    toolTipBox: "",
    element: "",
    handleEvent() {
        this.toolTipBox.remove()
        this.element.removeEventListener('mouseleave', onMouseLeave)
        this.element.removeEventListener('mousemove', onMouseMove)
        
    }
}

const onMouseMove = {
    handleEvent(event) {
        this.toolTipBox.style.top = event.pageY + 20 + 'px'
        this.toolTipBox.style.left = event.pageX + 20 + 'px'
    }
}



tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
})

function criarTooltipBox(element){
    const toolTipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    toolTipBox.classList.add('tooltip')
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox)
    console.log(toolTipBox)
    return toolTipBox;
}
}

