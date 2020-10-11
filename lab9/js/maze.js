(function maze() {
    "use strict";
    var crossed = 0;
    var started = false;

    $(document).ready(function () {
        $(".boundary").mouseover(function () {
            if(started) {
                $(".boundary").addClass("youlose");
                crossed++;
            }
        });
        $("#status").mouseover(function () {
            if(started) {
                crossed++;
            }
        });
        $("#belowboundary").mouseover(function () {
            if(started) {
                crossed++;
            }
        });
        $("#end").mouseover(function () {
            if(started === true) {
                if (crossed == 0) {
                    $("#status").text("you win");
                }
                else {
                    $("#status").text("you lose");
                }
                started = false;
            }
        });
        $("#start").click(function () {
            $(".boundary").removeClass("youlose");
            $("#status").text("Game is Started");
            crossed = 0;
            started = true;
        });
    });
})();
