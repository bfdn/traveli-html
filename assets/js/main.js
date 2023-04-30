const menuBtn = document.querySelector(".fa-bars");
menuBtn.addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("navbar--show");
});


$(document).ready(function () {
    $('.tours__list').flickity({
        //freeScroll: true,
        contain: true,
        // disable previous & next buttons and dots
        prevNextButtons: false,
        pageDots: true,
        autoPlay: true,
        dragThreshold: 10,
        cellAlign: 'left',
        groupCells: 2,
        /*responsive: [
            {
              breakpoint: 1024,
              settings: {
                wrapAround: true,
                cellAlign: "center",
                freeScroll: false,
                prevNextButtons: false,
                pageDots: false
              }
            }
          ]*/
        //rightToLeft: true
        //resize: true
    });

    $('.testimonials__list').flickity({
        //freeScroll: true,
        contain: true,
        // disable previous & next buttons and dots
        prevNextButtons: false,
        pageDots: true,
        autoPlay: true,
        dragThreshold: 10,
        cellAlign: 'left',
        groupCells: 4
    });
});