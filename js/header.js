
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

nav{
    display:flex;
    justify-content: space-between;
    background-color: #253b2e;
    height:50px;
}
.link{
    font:4vw monospace;
    padding: 5px;
    color:white;
    text-decoration:none;
}
.link:hover{
    background-color:#14241a;
}
#logo{
    font: 2em Lucida Handwriting;
}

#main_nav{
    display:flex;
    align-items:center;
}
@media screen and (max-width:850px){
    #hamb{
        display:block;
    }
    #links_nav{
        display:none;
        position: absolute;
        width: 50%;
        height:100%;
        top:10%;
        background-color:black;
        flex-direction:column;
        flex-wrap:wrap;
        right:0;
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
}

</style>

`