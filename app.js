//Selectors
const add_btn = document.getElementById("butn");
const input_to_do = document.getElementById("inpt");
const toDoList = document.getElementById("to_do_list");
let i=0;
add_btn.addEventListener('click',(even)=>{
    if(input_to_do.value==='')return
    createDeleteElements(input_to_do.value)
    input_to_do.value='';
})
function createDeleteElements(value){
    i++
    const li =document.createElement('li')
    const inptValue=document.createElement('input')
    const butn=document.createElement('input')
    const delet=document.createElement('button')
    const elemDiv=document.createElement('div')
    const num =document.createElement('span')
    const listGrup=document.createElement('div')
    const penImg=document.createElement('img')

inptValue.className='text';
inptValue.type='text';
inptValue.value=value
inptValue.disabled=true

penImg.className='pen'
penImg.src='./pen-solid.svg'
    listGrup.className='list-grup'


    num.className='badge'
    num.textContent=i

elemDiv.className='btn-grup'

    delet.className='btn_delete'
delet.innerHTML=`<img src='./trash-alt-solid.svg'></img>` ;
    
    butn.type='checkbox'
    butn.className='checking'

    li.className='list-1'
    


    delet.addEventListener('click',(even) =>{
        toDoList.removeChild(li)
        i=0
    })
    butn.addEventListener('click',(even) =>{
        li.classList.toggle('bajarildi')
    })
    
    console.log(toDoList.value);

penImg.addEventListener('click',()=>{
    if(inptValue.disabled===true){
        inptValue.disabled=false
    }
    else{
        inptValue.disabled=true
    }
})

    li.appendChild(inptValue)
    li.appendChild(listGrup)
    listGrup.appendChild(num)
    
    li.appendChild(elemDiv)
    
    li.appendChild(delet)
    li.appendChild(butn)
    li.appendChild(penImg)
    elemDiv.appendChild(butn)
    elemDiv.appendChild(delet)
    elemDiv.appendChild(penImg)
    toDoList.appendChild(li)

}
