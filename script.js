let challanges=[
"Code in your Fav Language",
"Read 10 Pages of Your Book",
"Do Exercise",
"Drink Milk",
"Learn New Communication Language",
"Touch Some Grass",
"Build Some Hardware Project",
"Work Hard",
"Solve Maths",
"Touch Some Grass",
]

let title=document.getElementById("challangeTitle")
let text=document.getElementById("challangeText")
let button=document.getElementById("challangeBtn")


function newChallange(){
    let random= math.floor(Math.random() * challanges.length)

    if (title&&text){
        title.innerHTML="Your Challange...."
        text.innerHTML=challanges[random]

    }
}

if(button){
    button.addEventListener("Click",newChallange)

    setInterval(newChallange,10000)




}

let search=document.getElementById("search")

if(search)
{
    search.addEventListener("keyup", function()
    {
        let value=search.value.toLowerCase()
        let items=document.querySelectorAll(".challanges")

        items.forEach(function(item){
            if(item.innerHTML.toLowerCase().includes(value)){
                item.style.display = "list-item";
            }

            else{
                item.style.display="none"
            }
        })

    })

}


let form = document.getElementById("challengeForm");
if(form){
    form.addEventListener("submit", function(event){
          event.preventDefault();
              let name = document.getElementById("name").value.trim();



    let category = document.getElementById("category").value;

      let challenge = document.getElementById("challenge").value.trim();


    let message = document.getElementById("message");


     if(name=="" || category=="" || challenge==""){

        message.style.color="red";
        message.innerHTML="Please fill in all fields.";

    }


     else{

        message.style.color="green";
        message.innerHTML="🎉 Thank you! Your challenge has been submitted.";

        form.reset();


            }

});

}
