// Chapter 21-25
document.write("<h1>Chapter 21-25</h1>");

// Q1
fname = prompt("Enter Your First Name");
lname = prompt("Enter Your Last Name");
fullname = fname +" " +lname;
alert(fullname);

// Q2
mobile = prompt("Enter Your Favorite Mobile Phone Model");
document.write("<br>My Favorite Mobile Phone is : "+mobile);
var lmobile = mobile.length;
document.write("<br>Length of String : "+lmobile);

// Q3
var sletter = "pakistani";
var iletter = sletter.indexOf("n");
document.write("<br><br>String: " +sletter);
document.write("<br>Index of 'n': " +iletter);

// Q4
var str = "Hello World";
var l = str.lastIndexOf("l");
document.write("<br><br>String: " +str);
document.write("<br>Last Index of 'l': " +l);

// Q5
var str ="Pakistani";
var rd = str.charAt(3);
document.write("<br><br>String: " +str);
document.write("<br>Character of Index 3 : " +rd);

// Q6
fname = prompt("Enter Your First Name");
lname = prompt("Enter Your Last Name");
fullname = fname.concat(lname);
document.write("<br><br>"+fullname);

// Q7
var city = "Hyderabad";
var rcity = city.replace("Hyder", "Islam");
document.write("<br><br> City : "+city);
document.write("<br>After Replacment : "+rcity);

// Q8
var massage = "Ali and Sami are best friends. They play cricket and football together.";
var rmassage = massage.replace(/and/g , "&");    
document.write("<br><br>Message : "+massage);
document.write("<br>After Replacment : "+rmassage);

// Q9
var str = "472"
var num = 472;
document.write("<br><br>Value : ",str);
document.write("<br>Type : ",typeof str);
document.write("<br><br>Value : ",num);
document.write("<br>Type : ",typeof num);

// Q10
var input = prompt("Enter Your Paragraph ");
document.write("<br><br>User Input : ",input);
document.write("<br>User Input : ",input.toUpperCase());

// Q11
var str = prompt("Enter Words for TitleCase");
str = str.toLowerCase().split(" ");
for (var i = 0; i < str.length; i++) {
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}

document.write("<br><br>",str.join(" "));

// Q12
var num = 35.36;
num = num.toString().replace(".","");
document.write("<br><br>",num);

// Q13
var user = prompt("Enter Your Username ");
for(i=0; i < user.length; i++){
    if(user[i] === "!" || user[i] === "." || user[i] === "," || user[i] === "@"){
        alert("Please Enter a Valid UserName ")
        break
    }   
}
document.write("<br />"+user);

// Q14
var shop = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var matchfound = 'no';
document.write(' Bakrey Items Available :  ', shop, '<br /><br />');
var ushop = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
ushop =  ushop.toLowerCase();
for (i = 0; i < shop.length; i++) {
    if (ushop === shop[i]) {
        matchfound = 'yes';
        break;
    }
}
if (matchfound === 'no') {
    document.write('We are sorry.'+ushop+' is not available in our bakery');
} else {
    document.write(ushop, ' is available at index '+i+' in our bakery');
};

// Q15
var anyNum = false;
var pass = prompt("Enter Your Password ");
var i = 0;
while(i < pass.length){
    if (pass.length < 6){
    alert("Your Password must be at least 6 characters long");
    pass = prompt("Enter Your Password ");
    
    }else if (pass[i] >=0 && pass[i]<=9){
        alert("The first character of your password must be a letter");
        pass = prompt("Enter Your Password ");    
        
    } else if(pass.search(/[0-9]/) < 0){
        alert("Enter Your Password Must Contain One Digit");
        pass = prompt("Enter Your Password ");    
        
    }else {
        break;
    }
}

// Q16
var university = "University of Karachi";
var uni = university.split('');
for (i=0; i < university.length; i++){
    document.write('<br />',uni[i]);
}

// Q17
var user = prompt('Enter Any Word for searching last character ');
var lch = user[user.length-1];
document.write('<br /><br />User input : ',user);
document.write('<br />Last character of input : ',lch);

// Q18
var str = "The quick brown fox jumps over the lazy dog";
document.write('<br /><br />Text : ',str);
document.write('<br />There ara ',str.split("the").length - 1,' occurrence(s) of word "the"');


// Chapter 26-30
document.write('<h1>Chapter 26-30</h1>');

// Q1
var num = +prompt('Enter Positive Integer ');
document.write('<br /><br />Number : '+num);
document.write('<br />Round of Value : '+Math.round(num));
document.write('<br />Floor Value : '+Math.floor(num));
document.write('<br />Ceil Value : '+Math.ceil(num));

// Q2
var num = +prompt('Enter Negative Floating Point Number ');
document.write('<br /><br />Number : '+num);
document.write('<br />Round of Value : '+Math.round(num));
document.write('<br />Floor Value : '+Math.floor(num));
document.write('<br />Ceil Value : '+Math.ceil(num));

// Q3
var num = +prompt('Enter a Number for Absolute Value ');
document.write('<br /><br />The Absolute Value of '+num+' is '+Math.abs(num));

// Q4
var dice = Math.floor( Math.random() * 6 ) +1;
document.write('<br /><br />Random Dice Value : '+dice);
var dice = Math.floor( Math.random() * 6 ) +1;
document.write('<br />Random Dice Value : '+dice);

// Q5
var coin = Math.floor( Math.random() * 2 ) +1;
document.write('<br /><br />Random Dice Value : '+coin);
if(coin === 2){
    document.write('<br />Random Coin Value : Heads')
} else{
    document.write('<br />Random Coin Value : Tails')
}

// Q6
var rand = Math.floor(Math.random() * 100) +1;
document.write('<br /><br />Random Number between 1 and 100 : '+rand);

// Q7
var weight = prompt('Enter Your Weight in Kilograms ');
document.write('<br /><br />The weight of user is : '+weight.replace("kgs","").replace("kg","").replace("kilograms","")+' Kilograms');

// Q8
var rsceret = Math.floor(Math.random() * 10) +1;
var guess = +prompt('Enter a Number Between 1 to 10 ');
if(rsceret === guess){
    alert('You Win!');
} else{
    alert('Try Again!');
}


// Chapter 31-34
document.write('<h1>Chapter 31-34</h1>');

// Q1
var d = new Date();
document.write('<br /><br />'+ d);

// Q2
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.write('<br /><br /> Current Month : '+ month[d.getMonth()]);

// Q3
var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.write('<br /><br />Today is '+ week[d.getDay()].substr(0,3));

// Q4
var dt = week[d.getDay()];
if(dt === "Saturday" || dt === "Sunday"){
    alert("It's Fun Day");
} else {
    alert("It's Working Day");
}

// Q5
if(d.getDay()>=1 || d.getDay() <=15){
    document.write('<br /><br />First Fifteen Days of the Month')
}else {
    document.write('<br /><br />Last Days of the Month')
}

// Q6
var dt = new Date();
var milli = dt.getTime();
document.write('<br /><br />Current Date : ',dt);
document.write('<br />Elapsed milliseconds since January 1, 1970 : ',milli);
document.write('<br />Elapsed minutes since January 1, 1970 : ',milli / (1000 * 60 * 60));

// Q7
var tdt = new Date();
if(tdt.getHours() === 00 || tdt.getHours() < 12){
    alert("It's AM");
}else{
    alert("It's PM");
}

// Q8
var laterdate = new Date('Dec 31,2020');
document.write('<br /><br />LaterDate : ', laterdate);


// Q9
var rmd = new Date("06/18/2015");
var cdate = new Date();
var diff_t = cdate.getTime() - rmd.getTime();
var diff_d = diff_t / (1000*60*60*24);
alert(Math.round(diff_d)+' Days have passed since 1st Ramdan, 2015');
document.write('<br /><br />',Math.round(diff_d),' Days have passed since 1st Ramdan, 2015');

// Q10
var dt = new Date("01/01/2020");
var ddt = new Date();
var milli = ddt.getTime() - dt.getTime();
document.write('<br /><br />On reference date ',dt);
document.write('<br>',milli);
document.write('<br />'+Math.round(milli / (1000*60))+' Seconds had passed since begining of 2020')

// Q11
var dt = new Date();
document.write('<br /><br />Current date ',dt);
dt.setHours(dt.getHours() - 1);
document.write('<br />1 hour ago, it was ',dt);

// Q12
var dt = new Date();
document.write('<br /><br />Current date ',dt);
dt.setFullYear(dt.getFullYear() - 100);
document.write('<br />100 Years Back, it was ',dt);

// Q13
var user = +prompt('Enter Your Age ');
var dt = new Date();
document.write('<br /><br />Your Age is ',user);
dt.setFullYear(dt.getFullYear() - user);
document.write('<br />Your Birth Year is ',dt.getFullYear());

// Q14
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dt =new Date();
var cname = "ABC Customer";
var cmonth = month[dt.getMonth()];
var units = 410;
var cost_unit = 16;
var net = units * cost_unit;
var late = (net * 5) / 100;
var gross = net + late;
var br = "<br />";
document.write('<h1>K-Electric Bill</h1>');
document.write(br,'Customer Name : ',cname);
document.write(br,'Month : ',cmonth);
document.write(br,'Number of Units : ',units);
document.write(br,'Charges Per Unit : ',cost_unit);
document.write(br,br,'Net Amount Paybale (within Due Date) : ',net);
document.write(br,'Late Payment Surcharge : ',late);
document.write(br,'Gross Amount Paybale (after Due Date) : ',gross);

// CHapter 35-38
document.write('<h1>Chapter 35-38</h1>');

// Q1
function currentdate(){
    var d = new Date();
    var br = "<br />";
    document.write(br,br,d);
}
currentdate();

// Q2
function greet(){
    var fname = prompt('Enter Your First Name');
    var lname = prompt('Enter Your Last Name');
    var fullname = fname + " " + lname;
    alert(fullname);
}
greet();

// Q3
function plus(){
    var num1 = +prompt('Enter First Number For Sum');
    var num2 = +prompt('Enter Second Number For Sum');
    var result = num1 + num2;
    return result;
}
var add = plus();
document.write('<br /><br />Sum of Num1 and Num2 is : ',add);

// Q4
function calculator (){
    var num1 = +prompt('Enter First Number of Calculation ');
    var num2 = +prompt('Enter Second Number of Calculation ');
    var operator = prompt('Enter Operator for Calculation ');
    var result;
    if(operator === '+'){
        result = num1 + num2;
    }else if (operator === '-'){
        result = num1 - num2;
    }else if (operator === '*'){
        result = num1 * num2;
    }else if (operator === '/'){
        result = num1 / num2;
    }
    return result;
}
var abc = calculator();
document.write('<br><br>Calculation Result : ',abc);

// Q5
function ssquares(num) {
    for (i=0; i<=num; i++){
        var sum=0;
        var j = i*i;
        sum = j;
        document.write('<br>Squares Number : '+sum);
    }
    document.write("<br><br>The sum of squares for numbers up to and including " +num+ " is " +sum ) ;
}
var num = +prompt("Enter a number for Squares :");
ssquares(num);

// Q6
function factorial(x) { 
    if (x === 0) {
    return 1;
    }
    return x * factorial(x-1);
}
var fac = +prompt('Enter a Factorial Number ')
document.write('<br><br>',factorial(fac),'<br><br>');

// Q7
function counting (startnum,endnum){
    for (i=startnum; i <= endnum; i++){
        document.write('<br>',i);
    }
}
var startnum = +prompt('Enter a number for Start Counting ');
var endnum = +prompt('Enter a number for End Counting ');
document.write('<h2>Counting</h2>');
document.write('Start Counting Number is : '+startnum+' End Counting Number is : '+endnum);
counting(startnum,endnum);

// Q8
function hypotenuse(a, b) {        
    function square(num) {         
       return num * num; 
    }
    return Math.sqrt(square(a) + square(b));
}
var a = +prompt('Enter Perpendicular of right angle triangle ');
var b = +prompt('Enter Base of right angle triangle');
document.write('<br><br>Hypotenuse is : ',hypotenuse(a,b));

// Q9
function area (width,height){
    var a = width * height;
    return a
}
var wdth = 6;
var hght = 8;
document.write('<br><br>Area of Rectangle is : ',area(4,6));
document.write('<br>Area of Rectangle is : ',area(wdth,hght));

// Q10
function palindrome(str) {
    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return "Its Not A Palindrome Word";
        }
    }

    return "Its A Palindrome Word";
}
var str = prompt('Enter any word for checking palindrome or not');
document.write('<br><br>Word : '+str+" "+palindrome(str));


// Q11
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');

    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    
    return splitStr.join(' '); 
 }
var struser = prompt('Enter Paragraph or Words for TitleCase ');
document.write('<br><br>TitleCase Word : '+ titleCase(struser));

// Q12
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
var struser = prompt('Enter Paragraph to find the Longrst Word ');
document.write('<br><br>Example String : '+ struser);
document.write('<br>Expected Output : '+ longestWord(struser));

// Q13
function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
        letter_Count += 1;
        }
    }
  return letter_Count;
}
var str = "JSResourceS.com";
var letter = "o";
document.write('<br /><br />Sample Arguments : ',str);
document.write('<br />There ara ',char_count(str,letter),' occurrence(s) of word ', letter);

// Q14
function CalculateCircumference(radius) {
    if (radius > 0){
        radius = radius * 2 * Math.PI;
    } else {
        return false;
    }
    return radius
}
var struser = +prompt('Enter Paragraph to find the Longrst Word ');
document.write('<br><br>The Circumference Circle is : '+ CalculateCircumference(struser).toFixed(2));

function CalculateArea(radius) {
    if (radius > 0){
        var area = Math.PI * (radius * radius);
    } else{
        return false;
    }
    return area;
}
var astruser = +prompt('Enter Paragraph to find the Longrst Word ');
document.write('<br><br>The Area of Circle is : '+ CalculateArea(astruser).toFixed(2));
