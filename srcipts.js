let dem=`<h1 id="demo">DEMO</h1>`
let abou =`<h1 id="about">About</h1>`
let id=document.getElementById("content")
document.getElementById("demobtn").addEventListener("click",demo)
function demo(){
    id.innerHTML=dem
   

}
demo()
function about(){
    id.innerHTML=abou;
    
}