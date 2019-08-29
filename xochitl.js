function calcWave() {

    theta += 0.0009;

    for (let i = 0; i < w / xspacing; i++) {
        yvalues[i] = 0;
    }

    for (let j = 0; j < maxwaves; j++) {
        let x = theta;
        for (let i = 0; i < yvalues.length; i++) {
            if (j % 2 === 0) yvalues[i] += tan(x) * amplitude[j];
            else yvalues[i] += sin(x) * amplitude[j];
            x += dx[j];
        }
    }
}


function nicuicanitl() {

    var ruidoX = -0.0006;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 280;

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * 12;

    for (let x = 0; x < yvalues.length; x++) {
        //stroke(160, 237, 231);   
        stroke(0, 207, 220);
        strokeWeight(1);
        //noStroke();
        line(x * xspacing, posX, x * xspacing, height / 2 + yvalues[x]);
        //ellipse(x * xspacing, height / 2 + yvalues[x], 6, 6);

        var words = RiTa.tokenize("Zan o nicuicanitl hui ya, xochitl in noyollo ya, ' ")

        noStroke();
        textSize(fontsize);
        //fill(random(255), contacolor, 240);
        //fill(200, contacolor, 240);
        fill(random(255), 0, 240);

        for (var i = 0, j = words.length; i < j; i++) {
            //image(xochitl, x * xspacing, x + yvalues[x] + i * posC);
            text(words[i], x * xspacing, x + yvalues[x] + i * posC);
        }
    }
}

// amoxohtoca, compuesta de 'toca', seguir, oh de oh-tli, 'camino' y amox-(tli), 'libro'

function tlaaloc() {

    var ruidoX = -0.00006;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoC = 0.0006;
    var posC = noise(millis() * ruidoC) * 8;

    var ruidoY = 0.00005;
    var posY = noise(millis() * ruidoY) * 14;

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * height * 1.2;


    for (let x = 0; x < 190; x++) {

        stroke(90, random(248), 255, random(220));

        for (var i = 0, j = 2; i < j; i++) {
            line(x * 20, posX + yvalues[x], x * 20, posX + random(7) + yvalues[x] + posC);
            line(x * 18, posC4 + yvalues[x], x * 18, posC4 + yvalues[x] + posC);
            image(tlaloc, x * posY, posY - 200 + yvalues[x]);
        }
    }
}

function tonaltzintli() {

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * 2;

    var ruidoC = 0.0001;
    var posC = noise(millis() * ruidoC) * 124;

    var ruidoD = 0.0008;
    var posD = noise(millis() * ruidoD) * 25;

    var ruidoZ = -0.0001;
    var posZ = noise(millis() * ruidoZ) * 5;


    var fog = millis() / 2009;

    var historyOfNothing = fog % 5;

    var dust = tan(radians(historyOfNothing));

    var ruidoX = 0.00001;
    var posX = noise(millis() * ruidoX) * width;

    var ruidoY = 0.0008;
    var posY = noise(millis() * ruidoX) * height;


    translate(posX, posY);

    for (var inYourFall = 0; inYourFall < 32; inYourFall++) {

        noStroke();
        rotate(radians(fog));
        fill(255, 170, 0, 20);
        rectMode(CENTER);
        scale(posC4);
        //triangle(-20, 25, 8, -30, 36, 25);
        ellipse(0, 0, 20, 20);
        noFill();
        strokeWeight(5);
        stroke(255, 255, 255, 200);
        // line(60, 60, 60, 60);
    }
}

function weft() {

    push();
    tonaltzintli();
    pop();

}

function ohuaya() {

    var ruidoX = -0.0006;
    var posX = noise(millis() * ruidoX) * height;

    var colX = 0.001;
    var colorX = noise(millis() * colX) * 255;

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 120;

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * 12;


    for (let x = 0; x < yvalues.length; x++) {
        //stroke(160, 237, 231);
        stroke(20, 25, 31);
        strokeWeight(0.5);
        //noStroke();
        line(x * xspacing, posX, x * xspacing, height / 2 + yvalues[x]);
        //ellipse(x * xspacing, height / 2 + yvalues[x], 6, 6);

        var words = RiTa.tokenize("nicmana nocuic, a ohuaya, ohuaya.")

        noStroke();
        textSize(fontsize);
        fill(random(255), 0, 240);
        for (var i = 0, j = words.length; i < j; i++) {
            text(words[i], x * xspacing, x + yvalues[x] + i * posC);
        }
    }
}


/*

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - xon ahuiyacan - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

*/

function xon_calcWave() {
    // Increment xon_theta (try different values for 'angular velocity' here
    xon_theta += 0.00007;

    // Set all height values to zero
    for (let i = 0; i < xon_w / xon_xspacing; i++) {
        xon_yvalues[i] = 0;
    }

    // Accumulate wave height values
    for (let j = 0; j < xon_maxwaves; j++) {
        let x = xon_theta;
        for (let i = 0; i < xon_yvalues.length; i++) {
            // Every other wave is cosine instead of sine
            if (j % 2 === 0) xon_yvalues[i] += tan(x) * xon_amplitude[j];
            else xon_yvalues[i] += sin(x) * xon_amplitude[j];
            x += xon_dx[j];
        }
    }
}



function tloquenahuaquee() {

    var ruidoX = -0.0006;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 68;

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * 8;


    for (let x = 0; x < xon_yvalues.length; x++) {
        //stroke(160, 237, 231);

        //stroke(random(255), 0, 240);

        //  ellipse(x * xon_xspacing, height / 2 + xon_yvalues[x], 6, 6);

        var words = RiTa.tokenize("* ^ * . * + _ ^ * _ . + ")

        noStroke();
        textSize(xon_fontsize);
        //fill(random(255), xon_contacolor, 240);
        //fill(200, xon_contacolor, 240);
        fill(random(255));

        for (var i = 0, j = words.length; i < j; i++) {
            //image(tloquenahuaque, x * xon_xspacing, x + xon_yvalues[x] + i * posC);
            text(words[i], x * xon_xspacing, x + xon_yvalues[x] + i * posC);
        }
    }

    var ruidoC = 0.0008;
    var posC = noise(millis() * ruidoC) * 80;

    translate(width / 2, height / 2);
    for (var i = 0; i < 160; i++) {
        push();
        rotate(TWO_PI * i / 128);
        var tx = 100 * noise(0.005 * frameCount);
        translate(tx, 0);
        rotate(radians(xon_giro));
        imageMode(CENTER);
        image(tloquenahuaque, 0, 0);
        pop();
    }
    for (var i = 0; i < 160; i++) {
        push();
        rotate(TWO_PI * i / 28);
        var tx = 300 * noise(0.004 * frameCount);
        translate(tx, 0);
        rotate(radians(-xon_giro));
        imageMode(CENTER);
        image(tloquenahuaque, 0, 0);
        pop();
    }
    for (var i = 0; i < 160; i++) {
        push();
        rotate(TWO_PI * i / 100);
        var tx = 500 * noise(0.003 * frameCount);
        translate(tx, 0);
        rotate(radians(xon_giro));
        imageMode(CENTER);
        image(tloquenahuaque, 0, 0);
        // image(tloquenahuaque, 0, 0, 120 + posC, 120 + posC);
        pop();
    }
}


function meztli() {

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * 2;

    var ruidoC = 0.0001;
    var posC = noise(millis() * ruidoC) * 124;

    var ruidoD = 0.0008;
    var posD = noise(millis() * ruidoD) * 25;

    var ruidoZ = -0.0001;
    var posZ = noise(millis() * ruidoZ) * 5;


    var fog = millis() / 2009;

    var historyOfNothing = fog % 5;

    var dust = tan(radians(historyOfNothing));

    var ruidoX = 0.00001;
    var posX = noise(millis() * ruidoX) * width;

    var ruidoY = 0.0008;
    var posY = noise(millis() * ruidoX) * height;


    translate(posX, posY);

    for (var inYourFall = 0; inYourFall < 32; inYourFall++) {

        noStroke();
        rotate(radians(fog));
        //fill(255, 170, 0, 20);
        //fill(255, 85, 0, 20);
        fill(255, 20);
        rectMode(CENTER);
        scale(posC4);
        //triangle(-20, 25, 8, -30, 36, 25);
        ellipse(0, 0, 20, 20);
        noFill();
        strokeWeight(5);
        stroke(255, 255, 255, 200);
        // line(60, 60, 60, 60);

    }
}

function xon_weft() {

    push();
    meztli();
    pop();

}

function ahuiyacan() {

    var ruidoX = -0.0006;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 68;

    var ruidoC4 = 0.0003;
    var posC4 = noise(millis() * ruidoC4) * 100;


    for (let x = 0; x < xon_yvalues.length; x++) {
        //stroke(160, 237, 231);

        //stroke(random(255), 0, 240);
        strokeWeight(2);
        //noStroke();
        noStroke();
        fill(0);
        //rect(x * xon_xspacing, posX, x * xon_xspacing, height / 2 + xon_yvalues[x]);

        //rect(x* xon_xspacing, height / 5 + xon_yvalues[x], xon_xspacing*1.2, posX);

        ellipse(x * xon_xspacing, height / 2 + xon_yvalues[x], posC4, posC4);

        var words = RiTa.tokenize("Ica xon ahuiyacan ihuinti xochitli, tomac mani. Ma on te ya aquiloro xochicozquitl.")

        noStroke();
        textSize(xon_fontsize);
        fill(random(255));
        for (var i = 0, j = words.length; i < j; i++) {
            text(words[i], x * xon_xspacing, x + xon_yvalues[x] + i * posC);
        }
    }
}

function teotl() {

    var ruidoX = -0.0006;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 68;

    var ruidoC4 = 0.0003;
    var posC4 = noise(millis() * ruidoC4) * 100;


    for (let x = 0; x < xon_yvalues.length; x++) {
        //stroke(160, 237, 231);

        //stroke(random(255), 0, 240);
        strokeWeight(2);
        //noStroke();
        noStroke();
        fill(0);
        //rect(x * xon_xspacing, posX, x * xon_xspacing, height / 2 + xon_yvalues[x]);

        //rect(x* xon_xspacing, height / 5 + xon_yvalues[x], xon_xspacing*1.2, posX);

        ellipse(x * xon_xspacing, height / 2 + xon_yvalues[x], posC4, posC4);

        var words = RiTa.tokenize("Oncan nemi tototl, chachalaca, tlatohua, hual on quimati teotl ichan. Zaniyo in toxochiuh Ica tonahuiyacan.")

        noStroke();
        textSize(xon_fontsize);
        //fill(random(255), xon_contacolor, 240);
        //fill(200, xon_contacolor, 240);
        // - este es el chido!
        //fill(0, random(255), 255);
        fill(random(255));
        for (var i = 0, j = words.length; i < j; i++) {
            //image(tloquenahuaque, x * xon_xspacing, x + xon_yvalues[x] + i * posC);
            text(words[i], x * xon_xspacing, x + xon_yvalues[x] + i * posC);
        }
    }
}


function cuicatl() {

    var ruidoX = -0.0006;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 68;

    var ruidoC4 = 0.0003;
    var posC4 = noise(millis() * ruidoC4) * 100;


    for (let x = 0; x < xon_yvalues.length; x++) {

        strokeWeight(2);
        noStroke();
        fill(0);
        //rect(x * xon_xspacing, posX, x * xon_xspacing, height / 2 + xon_yvalues[x]);

        //rect(x* xon_xspacing, height / 5 + xon_yvalues[x], xon_xspacing*1.2, posX);

        ellipse(x * xon_xspacing, height / 2 + xon_yvalues[x], posC4, posC4);

        var words = RiTa.tokenize("Zaniyo in cuicatl ica on pupulihui in amotlaocol In tepilhuan ica yehua, amelel on quiza. Quiyocoya in Ipalnemohua, Qui ya hual temohuiya moyocoyatzin in ayahuilo xochitli, ica yehua amelel on quiza.")

        noStroke();
        textSize(xon_fontsize);
        fill(random(255));
        for (var i = 0, j = words.length; i < j; i++) {
            text(words[i], x * xon_xspacing, x + xon_yvalues[x] + i * posC);
        }
    }
}


/*

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - zan tontemiquico- - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

*/


function ton_calcWave() {
    // Increment ton_theta (try different values for 'angular velocity' here
    ton_theta += 0.028;

    // Set all height values to zero
    for (let i = 0; i < ton_w / ton_xspacing; i++) {
        ton_yvalues[i] = 0;
    }

    // Accumulate wave height values
    for (let j = 0; j < ton_maxwaves; j++) {
        let x = ton_theta;
        for (let i = 0; i < ton_yvalues.length; i++) {
            // Every other wave is cosine instead of sine
            if (j % 1 === 0) ton_yvalues[i] += sin(x) * ton_amplitude[j];
            else ton_yvalues[i] += tan(x) * ton_amplitude[j];
            x += ton_dx[j];
        }
    }
}

function ton_ocelotl() {



    push();

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 12;

    translate(0, -433);

    //    ton_xspacing = 4; // How far apart should each horizontal position be spaced

    ton_xspacing = 3;
    var ruidoC4 = 0.00008;
    var posC4 = noise(millis() * ruidoC4) * 1000;
    var ruidoC4 = 0.00001;

    var posC5 = noise(millis() * ruidoC4) * 300;


    for (let x = 0; x < ton_yvalues.length; x++) {
        //image(ocelotl, x * ton_xspacing, x + ton_yvalues[x] + i * posC4);

        for (var i = 0, j = 8; i < j; i++) {
            imageMode(CENTER);
            // rotate(radians(ton_giro));
            //rotate(TWO_PI * i / 10);
            // image(ocelotl, x * ton_xspacing - posC5, x + ton_yvalues[x] + i * 200);

            image(ocelotl_rev, x * ton_xspacing - posC4, x + ton_yvalues[x] + i * 140, 180, 180);

            image(ocelotl, 1300 + x * -ton_xspacing + posC4, x + ton_yvalues[x] + i * 160, 180, 180);
        }
    }
    pop();
}


function ton_xolotl() {



    push();

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 12;

    translate(0, -433);

    //    ton_xspacing = 4; // How far apart should each horizontal position be spaced

    ton_xspacing = 3;
    var ruidoC4 = 0.00008;
    var posC4 = noise(millis() * ruidoC4) * 1000;
    var ruidoC4 = 0.00001;

    var posC5 = noise(millis() * ruidoC4) * 300;


    for (let x = 0; x < ton_yvalues.length; x++) {
        //image(ocelotl, x * ton_xspacing, x + ton_yvalues[x] + i * posC4);

        for (var i = 0, j = 8; i < j; i++) {
            imageMode(CENTER);
            // rotate(radians(ton_giro));
            //rotate(TWO_PI * i / 10);
            // image(ocelotl, x * ton_xspacing - posC5, x + ton_yvalues[x] + i * 200);

            image(xolotl_rev, x * ton_xspacing - posC4, x + ton_yvalues[x] + i * 140);

            image(xolotl, 1300 + x * -ton_xspacing + posC4, x + ton_yvalues[x] + i * 160);
        }
    }
    pop();
}

function ton_meztli() {

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * 2;

    var ruidoC = 0.0001;
    var posC = noise(millis() * ruidoC) * 124;

    var ruidoD = 0.0008;
    var posD = noise(millis() * ruidoD) * 25;

    var ruidoZ = -0.0001;
    var posZ = noise(millis() * ruidoZ) * 5;


    var fog = millis() / 2009;

    var historyOfNothing = fog % 5;

    var dust = tan(radians(historyOfNothing));

    var ruidoX = 0.00001;
    var posX = noise(millis() * ruidoX) * width;

    var ruidoY = 0.0008;
    var posY = noise(millis() * ruidoX) * height;


    translate(posX, posY);

    for (var inYourFall = 0; inYourFall < 32; inYourFall++) {

        noStroke();
        rotate(radians(fog));
        //fill(255, 170, 0, 20);
        //fill(255, 85, 0, 20);
        //fill(255, 95, 42, 20);
        fill(245, 143, 31, 20);
        rectMode(CENTER);
        scale(posC4);
        //triangle(-20, 25, 8, -30, 36, 25);
        ellipse(0, 0, 20, 20);
        noFill();
        strokeWeight(5);
        stroke(255, 255, 255, 200);
        // line(60, 60, 60, 60);

    }
}

function ton_meztli2() {

    var ruidoC4 = 0.00001;
    var posC4 = noise(millis() * ruidoC4) * 2;

    var ruidoC = 0.0001;
    var posC = noise(millis() * ruidoC) * 124;

    var ruidoD = 0.0008;
    var posD = noise(millis() * ruidoD) * 25;

    var ruidoZ = -0.0001;
    var posZ = noise(millis() * ruidoZ) * 5;


    var fog = millis() / 2009;

    var historyOfNothing = fog % 5;

    var dust = tan(radians(historyOfNothing));

    var ruidoX = 0.00001;
    var posX = noise(millis() * ruidoX) * 500;

    var ruidoY = 0.00008;
    var posY = noise(millis() * ruidoX) * height;


    translate(posX, posY);

    for (var inYourFall = 0; inYourFall < 32; inYourFall++) {

        noStroke();
        rotate(radians(fog));
        //fill(255, 170, 0, 20);
        //fill(255, 85, 0, 20);
        //fill(255, 95, 42, 20);
        fill(118, 245, 229, 20);
        rectMode(CENTER);
        scale(posC4);
        //triangle(-20, 25, 8, -30, 36, 25);
        ellipse(0, 0, 20, 20);
        noFill();
        strokeWeight(5);
        stroke(255, 255, 255, 200);
        // line(60, 60, 60, 60);

    }
}

function ton_weft1() {

    push();
    ton_meztli2();
    pop();

}

function ton_weft() {

    push();
    ton_meztli();
    pop();

}


function tontemiquico() {


    var ruidoX = -0.00006;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 148;

    var ruidoT = 0.0008;
    var posT = noise(millis() * ruidoT) * 2;

    var ruidoA = 0.008;
    var posA = noise(millis() * ruidoA) * 222;

    var ruidoC4 = 0.0003;
    var posC4 = noise(millis() * ruidoC4) * 500;

    ton_xspacing = 10 + posC; // How far apart should each horizontal position be spaced

    translate(0, 100);

    for (let x = 0; x < ton_yvalues.length; x++) {
        //stroke(160, 237, 231);

        //stroke(random(255), 0, 240);
        strokeWeight(2);
        noStroke();
        //stroke(0);
        fill(255, 170, 0, 60);
        fill(255, 30);

        //rect(x * ton_xspacing, posX, x * ton_xspacing, height / 2 + ton_yvalues[x]);

        //rect(x* ton_xspacing, height / 5 + ton_yvalues[x], ton_xspacing*1.2, posX);

        ellipse(x * ton_xspacing + 50, 200 + ton_yvalues[x], posC4, posC4);

        var words = RiTa.tokenize("In ic conitotehuac in Tochihuitzin; In ic conitotehuac in Coyolehiuhqui; Zan tocochitlehuaco, zan tontemiquico, ah nelli, ah nelli tinemico in tlalticpac. Xoxopan xihuitl ipan tochihuaca.")

        noStroke();
        textSize(ton_fontsize + posT);
        fill(100, 0, ton_contacolor);
        fill(0, 0, posA);
        for (var i = 0, j = words.length; i < j; i++) {
            text(words[i], x * ton_xspacing, x + ton_yvalues[x] + i * 20);
        }
    }
}

function toyollo() {


    var ruidoX = -0.00006;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 148;

    var ruidoT = 0.0008;
    var posT = noise(millis() * ruidoT) * 2;

    var ruidoA = 0.008;
    var posA = noise(millis() * ruidoA) * 222;

    var ruidoC4 = 0.0003;
    var posC4 = noise(millis() * ruidoC4) * 500;

    ton_xspacing = 10 + posC; // How far apart should each horizontal position be spaced

    translate(0, 180);

    for (let x = 0; x < ton_yvalues.length; x++) {
        //stroke(160, 237, 231);

        //stroke(random(255), 0, 240);
        strokeWeight(2);
        noStroke();
        //stroke(0);
        fill(255, 170, 0, 60);
        //fill(255, 30);

        //rect(x * ton_xspacing, posX, x * ton_xspacing, height / 2 + ton_yvalues[x]);

        //rect(x* ton_xspacing, height / 5 + ton_yvalues[x], ton_xspacing*1.2, posX);

        ellipse(x * ton_xspacing + 50, 200 + ton_yvalues[x], posC4, posC4);

        var words = RiTa.tokenize("Hual cecelia, hual itzmolini in toyollo xochitl in tonacayo. Cequi cueponi, on cuetlahuia. In conitotehuac in Tochihuitzin.")

        noStroke();
        textSize(ton_fontsize + posT);
        fill(0, 100, posA);
        for (var i = 0, j = words.length; i < j; i++) {
            text(words[i], x * ton_xspacing, x + ton_yvalues[x] + i * 20);
        }
    }
}

/*

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - Zan moch ompa ye huitz - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

*/

function cuecue_calcWave() {
    // Increment cuecue_theta (try different values for 'angular velocity' here
    cuecue_theta += 0.028;

    // Set all height values to zero
    for (let i = 0; i < cuecue_w / cuecue_xspacing; i++) {
        cuecue_yvalues[i] = 0;
    }

    // Accumulate wave height values
    for (let j = 0; j < cuecue_maxwaves; j++) {
        let x = cuecue_theta;
        for (let i = 0; i < cuecue_yvalues.length; i++) {
            // Every other wave is cosine instead of sine
            if (j % 1 === 0) cuecue_yvalues[i] += sin(x) * cuecue_amplitude[j];
            else cuecue_yvalues[i] += tan(x) * cuecue_amplitude[j];
            x += cuecue_dx[j];
        }
    }
}



function cuecue_xochitl() {

    push();

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 12;

    translate(width / 2, height / 2);

    //    cuecue_xspacing = 4; // How far apart should each horizontal position be spaced

    cuecue_xspacing = 1;
    var ruidoC4 = 0.00008;
    var posC4 = noise(millis() * ruidoC4) * 20;
    var ruidoC4 = 0.00001;

    var posC5 = noise(millis() * ruidoC4) * 1.2;


    for (let x = 0; x < cuecue_yvalues.length; x++) {
        //image(ocelotl, x * cuecue_xspacing, x + cuecue_yvalues[x] + i * posC4);

        for (var i = 0, j = 5; i < j; i++) {
            rotate(radians(cuecue_giro / 290));
            //rotate(TWO_PI * i);
            // image(ocelotl, x * cuecue_xspacing - posC5, x + cuecue_yvalues[x] + i * 200);
            imageMode(CENTER);

            image(xochitl, x * cuecue_xspacing - posC4, x + cuecue_yvalues[x] + i * 200);

            //image(xochitl, 1300 + x * -cuecue_xspacing + 200, x + cuecue_yvalues[x] + i * 50, 180, 180);
        }
    }
    pop();
}

function tecuecuepalxochitl() {


    var ruidoX = 0.0006;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 148;

    var ruidoT = 0.0008;
    var posT = noise(millis() * ruidoT) * 2;

    var ruidoA = 0.008;
    var posA = noise(millis() * ruidoA) * 222;

    var ruidoC4 = 0.0003;
    var posC4 = noise(millis() * ruidoC4) * 500;

    cuecue_xspacing = 10 + posC; // How far apart should each horizontal position be spaced

    translate(0, 100);

    for (let x = 0; x < cuecue_yvalues.length; x++) {
        //stroke(160, 237, 231);

        //stroke(random(255), 0, 240);
        strokeWeight(2);
        noStroke();
        //stroke(0);
        fill(255, 170, 0, 60);
        fill(140, 223, 71, random(200));

        //rect(x * cuecue_xspacing, posX, x * cuecue_xspacing, height / 2 + cuecue_yvalues[x]);

        rect(x * cuecue_xspacing, height / 8 + cuecue_yvalues[x], cuecue_xspacing / 4, posX);

        //ellipse(x * cuecue_xspacing + 50, 200 + cuecue_yvalues[x], posC4, posC4);

        var words = RiTa.tokenize("Zan moch ompa ye huitz xochitl ycaca. Tecuecuepalxochitl, in teyollomamalachoa ytzo. Conmoyauhtihuitze, contzetzelotihuitz, in xochitl malin, xochipoyon.")

        noStroke();
        textSize(cuecue_fontsize + posT);
        fill(100, 0, cuecue_contacolor);
        fill(53, 0, posA);
        for (var i = 0, j = words.length; i < j; i++) {

            text(words[i], x * cuecue_xspacing, x + cuecue_yvalues[x] + i * 30);
        }
    }
}

function cacahuaxochitl() {


    var ruidoX = -0.00006;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoC = 0.00008;
    var posC = noise(millis() * ruidoC) * 148;

    var ruidoT = 0.0008;
    var posT = noise(millis() * ruidoT) * 2;

    var ruidoA = 0.008;
    var posA = noise(millis() * ruidoA) * 222;

    var ruidoC4 = 0.0003;
    var posC4 = noise(millis() * ruidoC4) * 5;

    cuecue_xspacing = 10 + posC; // How far apart should each horizontal position be spaced

    translate(0, 70);


    for (let x = 0; x < cuecue_yvalues.length; x++) {
        //stroke(160, 237, 231);

        //stroke(random(255), 0, 240);
        strokeWeight(2);
        noStroke();
        //stroke(0);
        fill(128, posA, 230, 90);
        //fill(255, 30);

        //rect(x * cuecue_xspacing, posX, x * cuecue_xspacing, height / 2 + cuecue_yvalues[x]);

        //rect(x* cuecue_xspacing, height / 5 + cuecue_yvalues[x], cuecue_xspacing*1.2, posX);
        push();
        translate(x * cuecue_xspacing - 200, 200 + cuecue_yvalues[x]);
        scale(posC4);

        triangle(30, 75, 58, 20, 86, 75);
        pop();
        //ellipse(x * cuecue_xspacing + 50, 200 + cuecue_yvalues[x], posC4, posC4);

        var words = RiTa.tokenize("¿Xochipetatl on ac? Cenca ye mochan, ye amoxcalitic, cuica yehua on tlatoa Xayacámach, quihuintia ye iolcacahuaxochitl. Yn huel yectli on cuicatl ycahuaca, yehua conehua ye icuic Tlapalteuccitzin, Huel ahuia yxochiuh, tzeltzelihui xochitl, cacahuaxochitl.")

        noStroke();
        textSize(cuecue_fontsize + posT);
        fill(0, 100, posA);
        fill(53, 0, posA);

        for (var i = 0, j = words.length; i < j; i++) {
            text(words[i], x * cuecue_xspacing, x + cuecue_yvalues[x] + i * 15);
        }
    }
}

function cuecue_meztli() {

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * 2;

    var ruidoC = 0.0001;
    var posC = noise(millis() * ruidoC) * 124;

    var ruidoD = 0.0008;
    var posD = noise(millis() * ruidoD) * 25;

    var ruidoZ = -0.0001;
    var posZ = noise(millis() * ruidoZ) * 5;


    var fog = millis() / 2009;

    var historyOfNothing = fog % 5;

    var dust = tan(radians(historyOfNothing));

    var ruidoX = 0.00001;
    var posX = noise(millis() * ruidoX) * width;

    var ruidoY = 0.0008;
    var posY = noise(millis() * ruidoX) * height;


    translate(posX, posY);

    for (var inYourFall = 0; inYourFall < 32; inYourFall++) {

        noStroke();
        rotate(radians(fog));
        //fill(255, 170, 0, 20);
        //fill(255, 85, 0, 20);
        //fill(255, 95, 42, 20);
        fill(245, 143, 31, 20);
                fill(255, 204, 0, 20);

        rectMode(CENTER);
        scale(posC4);
        //triangle(-20, 25, 8, -30, 36, 25);
        ellipse(0, 0, 20, 20);
        noFill();
        strokeWeight(5);
        stroke(255, 255, 255, 200);
        // line(60, 60, 60, 60);

    }
}

function cuecue_meztli2() {

    var ruidoC4 = 0.00001;
    var posC4 = noise(millis() * ruidoC4) * 2;

    var ruidoC = 0.0001;
    var posC = noise(millis() * ruidoC) * 124;

    var ruidoD = 0.0008;
    var posD = noise(millis() * ruidoD) * 25;

    var ruidoZ = -0.0001;
    var posZ = noise(millis() * ruidoZ) * 5;


    var fog = millis() / 2009;

    var historyOfNothing = fog % 5;

    var dust = tan(radians(historyOfNothing));

    var ruidoX = 0.00001;
    var posX = noise(millis() * ruidoX) * 500;

    var ruidoY = 0.00008;
    var posY = noise(millis() * ruidoX) * height;


    translate(posX, posY);

    for (var inYourFall = 0; inYourFall < 32; inYourFall++) {

        noStroke();
        rotate(radians(fog));
        //fill(255, 170, 0, 20);
        //fill(255, 85, 0, 20);
        //fill(255, 95, 42, 20);
        fill(118, 245, 229, 20);

        rectMode(CENTER);
        scale(posC4);
        //triangle(-20, 25, 8, -30, 36, 25);
        ellipse(0, 0, 20, 20);
        noFill();
        strokeWeight(5);
        stroke(255, 255, 255, 200);
        // line(60, 60, 60, 60);

    }
}

function cuecue_weft1() {

    push();
    cuecue_meztli2();
    pop();

}

function cuecue_weft() {

    push();
    cuecue_meztli();
    pop();

}