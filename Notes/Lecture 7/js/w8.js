window.onload = function(){
    let names = ['Sam', 'Jad', 'Tom']
    let link = {text:"Seneca College", url:'https://senecacollege.ca/home.html'}
    
    function createList() {
        let orderList = document.createElement('ol')
        for (e in names){
            let listItem = document.createElement('li')
            let text = document.createTextNode(names[e])
            listItem.appendChild(text)
            orderList.appendChild(listItem)
        }
        document.getElementById('list1').appendChild(orderList)
    }
    
    function createLink(){
        let a = document.createElement('a')
        let text = document.createTextNode(link.text)
        a.appendChild(text);
        a.setAttribute('href', link.url)
        a.target="_blank"
        document.querySelector('#link').appendChild(a);
    }
    
    document.getElementById("method2").onclick = greeting;
    function greeting(){
        console.log('Hello');
        alert('Hello')
    }
    
    document.getElementsByTagName('h1').onclick = changeHeadingColor;
    function changeHeadingColor(){
        this.style.color = 'purple'
        this.style.backgroundColor = 'yellow'
    }
    
    document.getElementById('link').onmouseover = function () {
        this.style.backgroundColor = 'red'
    }
    
    document.getElementById('link').onmouseout = function () {
        this.style.backgroundColor = 'yellow'
    }
    
    document.getElementById('method3').addEventListener('click', greeting);
    document.getElementById('method3').addEventListener('click', changeHeadingColor);

    function showTime() {
        var currentTime = new Date();
        document.getElementById('time').innerHTML = currentTime.toLocaleTimeString();
    }
    
    var t1;

    document.getElementById('clock').onclick = function(){
        if(this.value=='clock' || this.value=='Start'){
            t1 = setInterval(showTime, 1000)
            this.value = 'Stop'
        }
        else if(this.value = 'Stop'){
            clearInterval(t1);
            this.value = 'Start'
        }
    }
};