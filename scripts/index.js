let  view = () => {
    let viewE1 = document.getElementById("view-more-button");
        if(viewE1.innerText == "View more"){
            document.getElementById('container-2').style.display = "block";
            viewE1.innerText = "View less";
        }
        else{
        document.getElementById("container-2").style.display = "none";
        viewE1.innerText = "View more";
        }
     }
    
    