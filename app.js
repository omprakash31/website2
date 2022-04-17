document.querySelector('#search').addEventListener('keyup',getUserData)
function getUserData(e){
const username=e.target.value
if(username!=='')
{
    console.log(username)
    const github=new Github()
    github.getUser(username)
    .then(function(data){
        console.log(data)
    //     // console.log(data.profile.avatar_url)
        // document.querySelector('#text').innerHTML=`<img src="${data.avatar_url}" alt="image"></img> `

    })
}
}
const one1={
om:"om1",
name:'raju'

}
// const a=new Object()
const a={
    oooo:"1",
    pppp1:"2"
}
console.log(one1,a)