 $("document").ready(function()
              {
                 /*$("#subMenuSeasons").hide();*/
                 $(".divMenuItem2").hover(function(){
                      $("#subMenuSeasons").fadeIn('slow', function() {});    
                  });
                 $("#content").hover(function(){
                      $("#subMenuSeasons").fadeOut('slow', function() {});    
                  });
                 $(".divMenuItem1 a").hover(function(){
                      $("#subMenuSeasons").fadeOut('slow', function() {});    
                  });
                 $(".divMenuItem3 a").hover(function(){
                      $("#subMenuSeasons").fadeOut('slow', function() {});    
                  });
                 $(".divMenuItem4 a").hover(function(){
                      $("#subMenuSeasons").fadeOut('slow', function() {});    
                  });
                 $(".divMenuItem5 a").hover(function(){
                      $("#subMenuSeasons").fadeOut('slow', function() {});    
                  });

              });