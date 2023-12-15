function update1(){
    let e = document.createElement('h2')
    e.innerHTML="Sampreet"
    document.body.appendChild(e)
}

function update2(){
    let e = document.createElement('h2')
    e.innerHTML = "Klair"
    
    let e1  = document.getElementById('id1')
    document.body.insertBefore(e, e1)
}

function update3() {
    let f = document.getElementById('id1')

    f.style.color = 'red';
}