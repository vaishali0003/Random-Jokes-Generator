
joke=document.querySelector('.joke');
console.log(joke);

btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    joke.innerHTML="";
    document.querySelector('.spinner').style.display="block"
    url="https://icanhazdadjoke.com/";
    fetch(url,{
        headers:{
            "Accept": "application/json"
        }
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
    document.querySelector('.spinner').style.display="none"
    content=data.joke;
    joke.innerHTML=content;
    })
    
})