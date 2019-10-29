var name;
var email;
var p1, p2, p3, p4, p5, p6;
var n1, n2, n3, n4, n5, n6;


//1st to 2nd Display
$(function () {
    $('#getIn').click(function () {
        name = document.getElementById('name1').value;
        email = document.getElementById('email1').value;
        if (name == "" || email == "") {
            alert("Please enter all necessary details!");
        }
        else {
            $('#d1').fadeOut(1000);
            $('#d2').fadeIn(1000);
            $('#name2').text("Hello " + name + ", Welcome to our Mart!");
            // $('#container').fadeTo('fast',0).fadeTo('slow',1);
            document.getElementById("back").style.backgroundImage = "url(background1.jpg)";
            document.getElementById("container").style.background = "linear-gradient(to bottom, rgba(255, 255, 126,.4), rgba(251, 191, 76, .4), rgba(251, 191, 76, .4), rgba(251, 191, 76, .4), rgba(255, 255, 126,.4)) center fixed no-repeat";
            document.getElementById("container").style.backgroundSize = "cover";
            document.getElementById("name2").style.color = "rgba(250, 216, 89,.9)";
            document.getElementById("subhead1").style.color = "rgba(250, 216, 89,.9)";
            document.getElementById("flowers").style.backgroundColor = "rgba(255,180,0,.9)";
            document.getElementById("fruits").style.backgroundColor = "rgba(255,180,0,.9)";
            document.getElementById("herbs").style.backgroundColor = "rgba(255,180,0,.9)";

        }

    });
    // $('#elem').fadeTo('slow', 0.3, function()
    // {
    //     $(this).css('background-image', 'url(' + $img + ')');
    // }).fadeTo('slow', 1);
});


//2nd to 3rd Display
$(function () {
    $('#fruits').click(function () {
        $('#d2').fadeOut(1000);
        $('#d3').fadeIn(1000);
        $('#head3').text("Let's grab some FRUIT Saplings!");
        $('#t1').text("$5");
        p1 = 5;
        $('#it1').text("Apple");
        n1 = "Apple";

        $('#t2').text("$9");
        p2 = 9;
        $('#it2').text("Apricot");
        n2 = "Apricot";

        $('#t3').text("$6");
        p3 = 6;
        $('#it3').text("Grapes");
        n3 = "Grapes";

        $('#t4').text("$5");
        p4 = 5;
        $('#it4').text("Mango");
        n4 = "Mango";

        $('#t5').text("$3");
        p5 = 3;
        $('#it5').text("Pineapple");
        n5 = "Pineapple";

        $('#t6').text("$7");
        p6 = 7;
        $('#it6').text("Pomegranate");
        n6 = "Pomegranate";

        $('.btn1').style.backgroundColor = "rgba(242, 38, 19,.9)";
        $('.reset').style.backgroundColor = "rgba(242, 38, 19,.9)";

    });
});

function bgfruit() {
    document.getElementById("back").style.backgroundImage = "url(background2-1.jpg)";
    document.getElementById("container").style.background = "linear-gradient(to bottom, rgba(238, 238, 0,.6), rgba(245, 229, 27,.6), rgba(245, 229, 27,.6), rgba(245, 229, 27,.6), rgba(238, 238, 0,.6)) center fixed no-repeat";
    document.getElementById("container").style.backgroundSize = "cover";
    document.getElementById("head3").style.color = "rgba(2,137,0,.7)";
    document.getElementById("previousPg").style.color = "rgba(2,137,0,.7)";
    let elements = document.getElementsByClassName('btn1');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgba(2,137,0,.7)";
    }

    elements = document.getElementsByClassName("reset");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgba(2,137,0,.7)";
    }

}

$(function () {
    $('#flowers').click(function () {
        $('#d2').fadeOut(1000);
        $('#d3').fadeIn(1000);
        $('#head3').text("Let's grab some FLOWER Saplings!");
        $('#t1').text("$2");
        p1 = 2;
        $('#it1').text("African Daisy");
        n1 = "African Daisy";

        $('#t2').text("$3");
        p2 = 3;
        $('#it2').text("Desert Rose");
        n2 = "Desert Rose";

        $('#t3').text("$2");
        p3 = 2;
        $('#it3').text("Hibiscus");
        n3 = "Hibiscus";

        $('#t4').text("$4");
        p4 = 4;
        $('#it4').text("Kaffir Lily");
        n4 = "Kaffir Lily";

        $('#t5').text("$3");
        p5 = 3;
        $('#it5').text("Meconopsis");
        n5 = "Meconopsis";

        $('#t6').text("$2");
        p6 = 2;
        $('#it6').text("Tulip");
        n6 = "Tulip";


    })
});

function bgflower() {
    document.getElementById("back").style.backgroundImage = "url(background2-2.jpg)";
    document.getElementById("container").style.background = "linear-gradient(to bottom, rgba(30, 130, 76,.6), rgba(244, 208, 63,.6), rgba(244, 208, 63,.6), rgba(244, 208, 63,.6), rgba(30, 130, 76,.6)) center fixed no-repeat";
    document.getElementById("container").style.backgroundSize = "cover";
    document.getElementById("head3").style.color = "rgba(79,55,45,.9)";
    document.getElementById("previousPg").style.color = "rgba(79,55,45,.9)";
    let elements = document.getElementsByClassName('btn1');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgba(79,55,45,.9)";
    }

    elements = document.getElementsByClassName("reset");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgba(79,55,45,.9)";
    }
}


$(function () {
    $('#herbs').click(function () {
        $('#d2').fadeOut(1000);
        $('#d3').fadeIn(1000);
        $('#head3').text("Let's grab some HERB Saplings!");
        $('#t1').text("$10");
        p1 = 10;
        $('#it1').text("Aloe vera");
        n1 = "Aloe vera";

        $('#t2').text("$2");
        p2 = 2;
        $('#it2').text("Basil");
        n2 = "Basil";

        $('#t3').text("$12");
        p3 = 12;
        $('#it3').text("Chia Seeds");
        n3 = "Chia Seeds";

        $('#t4').text("$8");
        p4 = 8;
        $('#it4').text("Fenugreek");
        n4 = "Fenugreek";

        $('#t5').text("$9");
        p5 = 9;
        $('#it5').text("Goji Berry");
        n5 = "Goji Berry";

        $('#t6').text("$25");
        p6 = 25;
        $('#it6').text("Saffron");
        n6 = "Saffron";
    })
});

function bgherb() {
    document.getElementById("back").style.backgroundImage = "url(background2-3.jpg)";
    document.getElementById("container").style.background = "linear-gradient(to bottom, rgba(161,146,97,.7), rgba(203,189,147,.7), rgba(203,189,147,.7), rgba(203,189,147,.7), rgba(161,146,97,.7)) center fixed no-repeat";
    document.getElementById("container").style.backgroundSize = "cover";
    document.getElementById("head3").style.color = "rgba(77,76,20,.7)";
    document.getElementById("previousPg").style.color = "rgba(77,76,20,.7)";
    let elements = document.getElementsByClassName('btn1');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgba(77,76,20,.7)";
    }

    elements = document.getElementsByClassName("reset");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgba(77,76,20,.7)";
    }
}

//3rd to 2nd


//3rd Display
{
    var t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, total = 0;

    function update1() {
        let temp = document.getElementById('c1').value;
        temp++;
        document.getElementById('c1').value = temp;
        t1 = temp * p1;
        setTimeout(updateTotal(), 1);
    }

    function r1() {
        document.getElementById('c1').value = 0;
        t1 = 0;
        updateTotal();
    }

    function update2() {
        let temp = document.getElementById('c2').value;
        temp++;
        document.getElementById('c2').value = temp;
        t2 = temp * p2;
        setTimeout(updateTotal(), 1);
    }

    function r2() {
        document.getElementById('c2').value = 0;
        t2 = 0;
        updateTotal();
    }

    function update3() {
        let temp = document.getElementById('c3').value;
        temp++;
        document.getElementById('c3').value = temp;
        t3 = temp * p3;
        //Method 1
        setTimeout(updateTotal(), 1);
    }

    function r3() {
        document.getElementById('c3').value = 0;
        t3 = 0;
        updateTotal();
    }

    function update4() {
        let temp = document.getElementById('c4').value;
        temp++;
        document.getElementById('c4').value = temp;
        t4 = temp * p4;
        //Method 2
        updateTotal();
    }

    function r4() {
        document.getElementById('c4').value = 0;
        t4 = 0;
        updateTotal();
    }

    function update5() {
        let temp = document.getElementById('c5').value;
        temp++;
        document.getElementById('c5').value = temp;
        t5 = temp * p5;
        updateTotal();
    }

    function r5() {
        document.getElementById('c5').value = 0;
        t5 = 0;
        updateTotal();
    }

    function update6() {
        let temp = document.getElementById('c6').value;
        temp++;
        document.getElementById('c6').value = temp;
        t6 = temp * p6;
        updateTotal();
    }

    function r6() {
        document.getElementById('c6').value = 0;
        t6 = 0;
        updateTotal();
    }

    function updateTotal() {
        total = t1 + t2 + t3 + t4 + t5 + t6;
        document.getElementById('total').value = total;
    }

    function resetAll() {
        document.getElementById('c1').value = 0;
        document.getElementById('c2').value = 0;
        document.getElementById('c3').value = 0;
        document.getElementById('c4').value = 0;
        document.getElementById('c5').value = 0;
        document.getElementById('c6').value = 0;
        document.getElementById('total').value = 0;
        t1 = 0;
        t2 = 0;
        t3 = 0;
        t4 = 0;
        t5 = 0;
        t6 = 0;
        updateTotal();
    }

}

//3rd to 4th Display
$(function () {
    $('#checkout').click(function () {
        if (total==0){
            alert("Your cart is empty!");
        }
        else {
            $('#d3').fadeOut(1000);
            $('#d4').fadeIn(1000);

            document.getElementById("back").style.backgroundImage = "url(background3.jpg)";
            document.getElementById("container").style.background = "linear-gradient(to bottom, rgba(150, 40, 27,.7), rgba(192, 57, 43,.7), rgba(192, 57, 43,.7), rgba(192, 57, 43,.7), rgba(150, 40, 27,.7)) center fixed no-repeat";
            document.getElementById("container").style.backgroundSize = "cover";
            document.getElementById("head4").style.color = "rgba(250, 216, 89,.9)";

            {

                $(function () {
                    if (t1 != 0) {
                        $('#invI1').show();
                        document.getElementById('ItNm1').innerHTML = n1;
                        document.getElementById('amt1').innerHTML = t1;

                    }
                    if (t2 != 0) {
                        $('#invI2').show();
                        document.getElementById('ItNm2').innerHTML = n2;
                        document.getElementById('amt2').innerHTML = t2;
                    }
                    if (t3 != 0) {
                        $('#invI3').show();
                        document.getElementById('ItNm3').innerHTML = n3;
                        document.getElementById('amt3').innerHTML = t3;
                    }
                    if (t4 != 0) {
                        $('#invI4').show();
                        document.getElementById('ItNm4').innerHTML = n4;
                        document.getElementById('amt4').innerHTML = t4;
                    }
                    if (t5 != 0) {
                        $('#invI5').show();
                        document.getElementById('ItNm5').innerHTML = n5;
                        document.getElementById('amt5').innerHTML = t5;
                    }
                    if (t6 != 0) {
                        $('#invI6').show();
                        document.getElementById('ItNm6').innerHTML = n6;
                        document.getElementById('amt6').innerHTML = t6;
                    }

                    document.getElementById('amount').value = total;
                });

            }
        }
    })
});


//4th to 5th Display
$(function () {
    $('#pay').click(function () {
        $('#d4').fadeOut(1000);
        $('#d5').fadeIn(1000);
    })
});

function done() {
    document.getElementById("back").style.backgroundImage = "url(background4.jpg)";
    document.getElementById("container").style.background = "linear-gradient(to bottom, rgba(147,125,174,.7), rgba(123,103,137,.7), rgba(123,103,137,.7), rgba(123,103,137,.7), rgba(147,125,174,.7)) center fixed no-repeat";
    document.getElementById("container").style.backgroundSize = "cover";
}


