import fooString from "./foo.js"
import bar from "./bar.js"
import "./style.css"
import Icon from "./item3.jpg"




function component(){
    const element=document.createElement('div')
    element.innerHTML=(['We operate worldwide'])
    element.classList.add('hello')

    //adding image to our existing div
    const myIcon=new Image()
    myIcon.src=Icon
    element.appendChild(myIcon)
    return element



}

document.body.appendChild(component())
console.log(fooString,bar)