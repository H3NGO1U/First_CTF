class Header extends HTMLElement{
  
connectedCallback(){
    this.innerHTML=
` <nav id="main_nav">
<a id="logo">
    Cool Website
</a>
<nav id="links_nav">
    <a href="https://supersecuredwebsite.netlify.app/html/homepage.html">Home</a>
    <a href="#">Games</a>
    <a href="https://supersecuredwebsite.netlify.app/html/about.html">About</a>
</nav>
</nav>
<style>
nav{
    display:flex;
    justify-content: space-between;
    background-color: black;
    color:#098221;
    box-shadow: 5px 5px #2e032a;
}

a{
    font: 3vw monospace;
    padding: 10px;
    color:#098221;
    text-decoration:none;
}



</style>
`
}
}

customElements.define("header-comp", Header)