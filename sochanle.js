function check() {
    let so1 = document.getElementById("number").value;
    if(so1 % 2==0) {
        document.getElementById("result").innerHTML= so1 + " la so chan";

    }else {
        document.getElementById("result").innerHTML= so1 + " la so le";

    }
}