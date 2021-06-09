var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function()
{
    var data = JSON.parse(this.response);

    var div1 = document.createElement('div');
    div1.classList.add("center");
    
    var div2 = document.createElement('div');
    div2.classList.add("container"); 

    var div3 = document.createElement('div');
    div3.classList.add("row");
    for(i=0;i<data.length;i++)
    {
        // var div2 = document.createElement('div');
        // div2.classList.add("container");

        // var div3 = document.createElement('div');
        // div3.classList.add("row");

        var div4 = document.createElement('div');
        div4.classList.add("col-lg-4", "col-md-4", "col-sm-4"); 

        var div5 = document.createElement('div');
        div5.classList.add("center-info","text-center");
        div5.style.backgroundColor="gray";

        var div6 = document.createElement('div');
        div6.setAttribute("class","title");
        div6.innerHTML=data[i].name;

        var div7 = document.createElement('div');
        div7.setAttribute("class","text");
        div7.innerHTML=data[i].capital;

        var div8 = document.createElement('div');
        div8.setAttribute("class","text");
        div8.innerHTML=data[i].currencies[0].name;
        
        
        div5.append(div6,div7,div8);
        div4.append(div5);
        div3.append(div4);
        div2.append(div3);
        div1.append(div2);
        document.body.append(div1);
        // div3.append(div4);
        // div2.append(div3);
        // document.body.append(div1);
    }
    
}

