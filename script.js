
$(document).ready(function () {
    
    $("#a").Menue({
        outsidePadding: "20px",
        SpaceInbetween: "40px",
        size: "20px",
        transparency: "-110%",
        color: "black",
        backgroundColor: "white",
        width: "300px",
        tomouse: "true",
        positionX: "50%",
        positionY: "100px",
        class: "cont",
        entrys: ["yahoo!", "Qwant", "Bing", "Google", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."],
        entryType: ["a href='https://yahoo.com/'", "a href='https://qwant.com/'", "a href='https://bing.com'", "a href='https://google.com/'", "a href='https://loremipsum.de/'"]
    });
    
    $("#b").Menue({
        outsidePadding: "10px",
        contentOpacity: "30%",
        Overflow: "false",
        SpaceInbetween: "10px",
        size: "12px",
        bordering: "3px solid red",
        entrys: ["yahoo!", "Qwant", "Bing", "Google"],
        entryType: ["a href='https://yahoo.com/'", "a href='https://qwant.com/'", "a href='https://bing.com'", "a href='https://google.com/'"]
    });

    $("#c").Menue();

});