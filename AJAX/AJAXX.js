function loadData(){
    var xhr=new XMLHttpRequest();
    //ajax stands for asynchronous js and xml
    // $ajax
    // $.get
    // $.post
    // $("elem.")load
    xhr.open("get","sample.txt",true);
    xhr.onreadystatechange=showData;//this is the function we define below
    xhr.send(null)//for "GET" argument is always null
}

function showData() {
    // this refers to xhr object
    if (this.readyState == 4 && this.status == 200) {
    // this.response or responseText or responseXML
    document.querySelector('#container').innerHTML =
    this.responseText;
    }
    }