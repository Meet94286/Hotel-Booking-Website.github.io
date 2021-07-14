const API_URL = "https://tripadvisor1.p.rapidapi.com/";
const tripAdvisorHost = "tripadvisor1.p.rapidapi.com";
const tripAdvisorKey = "e64884c8aamshdfb72ab55cb56c0p122fffjsn80ebf167af2b";

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
     } ;



    



    