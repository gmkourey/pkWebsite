var testimonialArr = ["testimonial1", "testimonial2", "testimonial3"];
var currentTestimonial = 0;

function fadeInOut () {
    setInterval (function() {
        $("#" + testimonialArr[currentTestimonial]).fadeOut(1500);
        setTimeout (function () {
            if (currentTestimonial < 2) {
                currentTestimonial++;
            } else {
                currentTestimonial = 0;
            }
        $("#" + testimonialArr[currentTestimonial]).fadeIn(1500);
        }, 1500)
    }, 10000)
}

fadeInOut();

$("#menuIcon").on("click", function () {
    const menuStyle = $("#navbar p").css("display");
    if(menuStyle === "none") {
        $("#menuIcon").html("<img src='./visualAssets/close.png'/>Close Menu");
        $("#navbar p").css("display", "block");
    } else {
        $("#menuIcon").html("<img src='./visualAssets/menu.png'/>Menu")
        $("#navbar p").css("display", "none");
    }

})