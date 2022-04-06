$(document).ready(function(){
    var apikey = "k_388hyaxv"
    var result1= ""
    var result3 = ""
    var url = "https://imdb-api.com/en/API/Top250Movies/"+apikey
    $.ajax({
        method:'GET',
                    
        url: url,
                    
                    
        success:function(data){

            console.log(data.items); 

                        
            result1 = `
            <img style = class="img-thumnail" width ="200" height ="200" src = "${(data.items)[0].image}"/>
            <h4>Rank:-${((data.items)[0].rank)} </h4>
            <h4>Movie name:-${((data.items)[0].fullTitle)}</h4>
            <h4>IMDB Rating:-${((data.items)[0].imDbRating)}</h4>
            `;
            $("#result1").html(result1)
            result2 = `
            <img style = class="img-thumnail" width ="200" height ="200" src = "${(data.items)[1].image}"/>
            <h4>Rank:-${((data.items)[1].rank)}</h4>
            <h4>Movie name:-${((data.items)[1].fullTitle)}</h4>
            <h4>IMDB Rating:-${((data.items)[1].imDbRating)}</h4>
            `;
            $("#result2").html(result2)
            result3 = `
            <img style = class="img-thumnail" width ="200" height ="200" src = "${(data.items)[2].image}"/>
            <h4>Rank:-${((data.items)[2].rank)}</h4>
            <h4>Movie name:-${((data.items)[2].fullTitle)}</h4>
            <h4>IMDB Rating:-${((data.items)[2].imDbRating)}</h4>
            `;
            $("#result3").html(result3)
            result4 = `
            <img style = class="img-thumnail" width ="200" height ="200" src = "${(data.items)[3].image}"/>
            <h4>Rank:-${((data.items)[3].rank)}</h4>
            <h4>Movie name:-${((data.items)[3].fullTitle)}</h4>
            <h4>IMDB Rating:-${((data.items)[3].imDbRating)}</h4>
            `;
            $("#result4").html(result4)
            result5 = `
            <img style = class="img-thumnail" width ="200" height ="200" src = "${(data.items)[4].image}"/>
            <h4>Rank:-${((data.items)[4].rank)}</h4>
            <h4>Movie name:-${((data.items)[4].fullTitle)}</h4>
            <h4>IMDB Rating:-${((data.items)[4].imDbRating)}</h4>
            `;
            $("#result5").html(result5)
            result6 = `
            <img style = class="img-thumnail" width ="200" height ="200" src = "${(data.items)[5].image}"/>
            <h4>Rank:-${((data.items)[5].rank)}</h4>
            <h4>Movie name:-${((data.items)[5].fullTitle)}</h4>
            <h4>IMDB Rating:-${((data.items)[5].imDbRating)}</h4>
            `;
            $("#result6").html(result6)
            result7 = `
            <img style = class="img-thumnail" width ="200" height ="200" src = "${(data.items)[6].image}"/>
            <h4>Rank:-${((data.items)[6].rank)}</h4>
            <h4>Movie name:-${((data.items)[6].fullTitle)}</h4>
            <h4>IMDB Rating:-${((data.items)[6].imDbRating)}</h4>
            `;
            $("#result7").html(result7)
            result8 = `
            <img style = class="img-thumnail" width ="200" height ="200" src = "${(data.items)[7].image}"/>
            <h4>Rank:-${((data.items)[7].rank)}</h4>
            <h4>Movie name:-${((data.items)[7].fullTitle)}</h4>
            <h4>IMDB Rating:-${((data.items)[7].imDbRating)}</h4>
            `;
            $("#result8").html(result8)
            result9 = `
            <img style = class="img-thumnail" width ="200" height ="200" src = "${(data.items)[8].image}"/>
            <h4>Rank:-${((data.items)[8].rank)}</h4>
            <h4>Movie name:-${((data.items)[8].fullTitle)}</h4>
            <h4>IMDB Rating:-${((data.items)[8].imDbRating)}</h4>
            `;
            $("#result9").html(result9)
            result10 = `
            <img style = class="img-thumnail" width ="200" height ="200" src = "${(data.items)[9].image}"/>
            <h4>Rank:-${((data.items)[9].rank)}</h4>
            <h4>Movie name:-${((data.items)[9].fullTitle)}</h4>
            <h4>IMDB Rating:-${((data.items)[9].imDbRating)}</h4>
            `;
            $("#result10").html(result10)
            



        } 
    })
            
});
            
