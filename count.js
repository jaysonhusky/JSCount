function addCount(e) {
	var id=e.getAttribute('data-lc');
	var post='id='+id;
	var req=new XMLHttpRequest();
	req.open('POST','/initCount.php',true);
	req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	req.onreadystatechange=function(){
            if(req.readyState !== 4 || req.status !== 200) return;
            document.getElementById("clicks").innerHTML=req.responseText;
	 };
	req.send(post);
	//e.preventDefault();
};

function countCheck(){
	var file = "js/click_data.txt";
    var rf=new XMLHttpRequest();
    rf.open("GET", file, false);
    rf.onreadystatechange=function(){
        if(rf.readyState===4){
			if(rf.status===200||rf.status==0){
                var at=rf.responseText;
                
				document.getElementById("clicks").innerText=at;
            }
        }
    }
    rf.send(null);
}
window.onload = countCheck;