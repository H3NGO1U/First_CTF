
function func(){
    let header = document.getElementById("links_nav")
    header.classList.toggle("responsive")
}
  
let header = document.getElementById("header-comp");
header.innerHTML=
` 
<nav id="main_nav">
<a id="logo">
    Cool Website
</a>

<svg id="hamb" onclick="func()" height="60px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>

<div id="links_nav">
    <a class="link" href="homepage.html">Home</a>
    <a class="link" href="#">Games</a>
    <a class="link" href="about.html">About</a>
</div>
</nav>
<hr>
<style>

.link{
    font:1.5rem monospace;
    text-align:center;
    text-decoration:none;
    color:#291f24;
    padding:7vh;

}
.link:hover{
    opacity: .7
}
#logo{
    font: 1em arial;
}

#main_nav{
    display:flex;
    background-color: #f5b0dd;
    height:20vh;
    justify-content:space-between;
    align-items:center;
}

#links_nav{
    display:flex;
    align-items: center;
}
@media screen and (max-width:850px){
    body{
        font-size:28px;
    }
    #hamb{
        display:block;
    }
    #main_nav{
        background-color:white;
    }
    #links_nav{
        display:none;
        position: absolute;
        width: 50%;
        height:100%;
        top:10%;
        background-color: #f5b0dd;
        flex-direction:column;
        flex-wrap:wrap;
        right:0;
        border-radius:5px;
      }
    
      #links_nav.responsive {
        display:block;
      }
    
    .link{
        display: block;
      }
    
      #hamb {
        display: block;
      }
    }


@media screen and (min-width:850px){
    #hamb{
        display:none;
    }
    body{
        font-size:40px;
      }
}

</style>

`