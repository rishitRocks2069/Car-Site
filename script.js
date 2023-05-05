const toggle = document.querySelector('.toggle')
const list = document.querySelector('nav ul')

toggle.addEventListener('click', ()=>{
    list.classList.toggle('hidden')
    toggle.classList.toggle('open')
})

// tabs
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('.tab-content')

if(tabs){
    tabs.forEach(tab => {
        tab.addEventListener('click' ,function() {
            const target = document.querySelector(tab.dataset.tabTarget);
    
            tabs.forEach(tab => {tab.classList.remove('active')})
            tabContent.forEach(content => {content.classList.remove('active')})
            tab.classList.add('active')
            target.classList.add('active')
        })
    })
}