let dem=`<h1 id="demo">DEMO</h1>`
let abou =`<h1 id="about">About</h1>`
let id=document.getElementById("content")
function demo(){
    id.innerHTML=dem
    history.forward()

}
demo()
function about(){
    id.innerHTML=abou;
    history.forward()
}