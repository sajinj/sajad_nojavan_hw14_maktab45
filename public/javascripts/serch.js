$(document).ready(function(){
    
    $("#btn-serch").click(function(){
      search_product();
    });



    function search_product() { 
        let input = $("#serch-input").val(); 
        input=input.toLowerCase(); 
        let cards = $(".card-container");
        for (let i = 0; i < cards.length; i++) {
            if(!cards[i].textContent.toLowerCase().includes(input))
                cards[i].style.display = "none";
            else
                cards[i].style.display = "block";
        }
    } 
  });

  