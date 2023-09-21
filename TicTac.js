
var i = 2; //for x or o condition
// for player 1 (x)
var j = 0; //for coulmn  1 (1,2,3)
var k = 0; //for coulmn  2 (4,5,6)
var l = 0; //for coulmn  3 (7,8,9)
var m = 0; //for row     1 (1,4,7)
var n = 0; //for row     2 (2,5,8)
var o = 0; //for row     3 (3,6,9)
var p = 0; //for diagnol 1 (1,5,9)
var q = 0; //for diagnol 2 (3,5,7)

// for player 2 (o)
var r = 0; //for coulmn  1 (1,2,3)
var s = 0; //for coulmn  2 (4,5,6)
var t = 0; //for coulmn  3 (7,8,9)
var u = 0; //for row     1 (1,4,7)
var v = 0; //for row     2 (2,5,8)
var w = 0; //for row     3 (3,6,9)
var x = 0; //for diagnol 1 (1,5,9)
var y = 0; //for diagnol 2 (3,5,7)
var z = 0; //for tie condition


function show1() {
    if (i % 2 == 0) {
        document.getElementById('img11')
            .style.display = "block";
        document.getElementById('btnId1')
            .style.display = "none";
        i++;
        j++;
        m++;
        p++;
        z++;
        if (j == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (m == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (p == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    }
    else {
        document.getElementById('img12')
            .style.display = "block";
        document.getElementById('btnId1')
            .style.display = "none";
        i++;
        r++;
        u++;
        x++;
        z++;
        //z++;
        if (r == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (u == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (x == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    }


}

function show2() {
    if (i % 2 == 0) {
        document.getElementById('img21')
            .style.display = "block";
        document.getElementById('btnId2')
            .style.display = "none";
        i++;
        j++;
        n++;
        z++;
        if (j == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (n == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();

    } else {
        document.getElementById('img22')
            .style.display = "block";
        document.getElementById('btnId2')
            .style.display = "none";
        i++;
        r++;
        v++;
        z++;
        //z++;
        if (r == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (v == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();

    }


}
function show3() {
    if (i % 2 == 0) {
        document.getElementById('img31')
            .style.display = "block";
        document.getElementById('btnId3')
            .style.display = "none";
        i++;
        j++;
        o++;
        q++;
        z++;
        if (j == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (o == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (q == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    } else {
        document.getElementById('img32')
            .style.display = "block";
        document.getElementById('btnId3')
            .style.display = "none";
        i++;
        r++;
        w++;
        y++;
        z++;
        if (r == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (w == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (y == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    }
}
function show4() {

    if (i % 2 == 0) {
        document.getElementById('img41')
            .style.display = "block";
        document.getElementById('btnId4')
            .style.display = "none";
        i++;
        k++;
        m++;
        z++;
        if (k == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (m == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    } else {
        document.getElementById('img42')
            .style.display = "block";
        document.getElementById('btnId4')
            .style.display = "none";
        i++;
        s++;
        u++;
        z++;
        if (s == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (u == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    }

}
function show5() {

    if (i % 2 == 0) {
        document.getElementById('img51')
            .style.display = "block";
        document.getElementById('btnId5')
            .style.display = "none";
        i++;
        k++;
        n++;
        p++;
        q++;
        z++;
        if (k == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (n == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (p == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (q == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    } else {
        document.getElementById('img52')
            .style.display = "block";
        document.getElementById('btnId5')
            .style.display = "none";
        i++;
        s++;
        v++;
        x++;
        y++;
        z++;
        if (s == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (v == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (x == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (y == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    }

}
function show6() {

    if (i % 2 == 0) {
        document.getElementById('img61')
            .style.display = "block";
        document.getElementById('btnId6')
            .style.display = "none";
        i++;
        k++;
        o++;
        z++;
        if (k == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (o == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    } else {
        document.getElementById('img62')
            .style.display = "block";
        document.getElementById('btnId6')
            .style.display = "none";
        i++;
        s++;
        w++;
        z++;
        if (s == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (w == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    }

}
function show7() {

    if (i % 2 == 0) {
        document.getElementById('img71')
            .style.display = "block";
        document.getElementById('btnId7')
            .style.display = "none";
        i++;
        l++;
        m++;
        q++;
        z++;
        if (l == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (m == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (q == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        } //function tie();
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
    } else {
        document.getElementById('img72')
            .style.display = "block";
        document.getElementById('btnId7')
            .style.display = "none";
        i++;
        t++;
        u++;
        y++;
        z++;
        if (t == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (u == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (y == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }

    }

}
function show8() {

    if (i % 2 == 0) {
        document.getElementById('img81')
            .style.display = "block";
        document.getElementById('btnId8')
            .style.display = "none";
        i++;
        l++;
        n++;
        z++;
        if (l == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (n == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    } else {
        document.getElementById('img82')
            .style.display = "block";
        document.getElementById('btnId8')
            .style.display = "none";
        i++;
        t++;
        v++;
        z++;
        if (t == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (v == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    }

}
function show9() {

    if (i % 2 == 0) {
        document.getElementById('img91')
            .style.display = "block";
        document.getElementById('btnId9')
            .style.display = "none";
        i++;
        l++;
        o++;
        p++;
        z++;
        if (l == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (o == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (p == 3) {
            document.getElementById('winner1')
                .style.display = "block"
            disableBtn();
        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();

    } else {
        document.getElementById('img92')
            .style.display = "block";
        document.getElementById('btnId9')
            .style.display = "none";
        i++;
        t++;
        w++;
        x++;
        z++;
        if (t == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (w == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();
        }
        else if (x == 3) {
            document.getElementById('winner2')
                .style.display = "block"
            disableBtn();

        }
        else if (z == 9 && j != 3 && k != 3 && l != 3 && m != 3 && n != 3 && o != 3 && p != 3 && q != 3 && r != 3 && s != 3 && t != 3 && u != 3 && v != 3 && w != 3 && x != 3 && y != 3) {
            tie();
        }
        //function tie();
    }
}

function disableBtn() {
    document.getElementById("btnId1").disabled = true;
    document.getElementById("btnId2").disabled = true;
    document.getElementById("btnId3").disabled = true;
    document.getElementById("btnId4").disabled = true;
    document.getElementById("btnId5").disabled = true;
    document.getElementById("btnId6").disabled = true;
    document.getElementById("btnId7").disabled = true;
    document.getElementById("btnId8").disabled = true;
    document.getElementById("btnId9").disabled = true;
}


function tie() {
    document.getElementById('winner3')
        .style.display = "block"
}