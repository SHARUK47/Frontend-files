setInterval(()=>{
    let dt = new Date().toLocaleTimeString();
    document.getElementById("digi").innerHTML = dt;
},1000);