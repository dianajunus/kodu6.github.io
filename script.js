(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();

            if (h < 10) {
                h = "0" + h;
            }
            if(h>12){
                h = h-12;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            c.innerHTML = h + ":" + m + ":" + s;
            
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    
    function estimateDelivery(event) {
        

        event.preventDefault();
    
        if (document.getElementById("customRadio1").checked || document.getElementById("customRadio2").checked ||document.getElementById("customRadio3").checked ||document.getElementById("customRadio4").checked){
        
        if(document.getElementById("fname").value=="" && document.getElementById("lname").value==""){
            alert("sisestage andmed");            
        }
        else{
            

        let price = 0;
        
        let linn = document.getElementById("linn");
        
        if (document.getElementById("v1").checked){
            
            price = price+ 5;
        }
        if (document.getElementById("v2").checked){
            
            price = price+ 1;
        }
        


        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;
            
            
        } 
        

        if (linn.value == "tln") {
            linn.focus();
            e.innerHTML = price + ",00 &euro;";
            console.log("Tarne hind on arvutatud");}

        if (linn.value == "trt") {
                linn.focus();
                e.innerHTML = (price + 2.5) +"0 &euro;";
                console.log("Tarne hind on arvutatud");}

        if (linn.value == "nrv") {
            linn.focus();
            e.innerHTML = (price + 2.5) +"0 &euro;";
            console.log("Tarne hind on arvutatud");}

        if (linn.value == "prn") {
            linn.focus();
            e.innerHTML = (price + 3) +",00 &euro;";
            console.log("Tarne hind on arvutatud");}t
        } }else{
            alert("Valige aeg");
            }

    return price;
}

    
})();

// map


let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

let map;

function GetMap() {
    
    "use strict";

    let centerPoint = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );

    let jeju = new Microsoft.Maps.Location(
        33.38104, 
        126.71992
    );
    let cent = new Microsoft.Maps.Location(
        45.38104, 
        70.71992
    );

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: cent,
        zoom: 3,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
    let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Tartu Ülikool',
            //subTitle: 'Hea koht',
            //text: 'UT'
        });
        let korea = new Microsoft.Maps.Pushpin(jeju, {
            title: 'Korea',
            //subTitle: 'Hea koht',
            //text: 'UT'
        });
    

    map.entities.push(pushpin);
    map.entities.push(korea);

}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

