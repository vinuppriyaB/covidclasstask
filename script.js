async function foo()
{
    let countryname=document.getElementById("getcountryname").value;
    let rescont=await fetch(`https://api.covid19api.com/dayone/country/${countryname}`);
    console.log(rescont);
    let rescontdata=await rescont.json();
    console.log(rescontdata);
    for(let i in rescontdata)
    {
        console.log(rescontdata[i].Country+" "+rescontdata[i].Active+" "+rescontdata[i].Deaths+" "+rescontdata[i].Recovered);
   
    }
   
}
