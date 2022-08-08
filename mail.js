function main() {
    name1 = document.getElementById("name").value;
    text1 = document.getElementById("message").value;
    open( "mailto:example.com?subject="+name1+"&body="+text1,"_blank") ;
}