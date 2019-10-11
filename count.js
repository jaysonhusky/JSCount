var _req2Count = 0;

function addCount(e) {
	if(_req2Count>0){
		/*Click Obtained, No Further Action*/ 
	}
	else {
		var id=e.getAttribute('data-lc'); // Leave this as it is. The script knows to look for this attribute to count the clicks!
		var post='id='+id; 
		var req=new XMLHttpRequest(); // Assembles the data and begins to pass it along to the initCount.php script.
		req.open('POST','/initCount.php',true);
		req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		req.onreadystatechange=function(){
			// Checking for an OK from the server before returning data, if it fails, no data is returned.
				if(req.readyState !== 4 || req.status !== 200) return;
				document.getElementById("clicks").innerHTML=req.responseText;
		};
		// Send data to the script.
		req.send(post);
		_req2Count = _req2Count + 1;
	}
};

function countCheck(){
	var file = "js/click_data.txt"; // Locate file
    var rf=new XMLHttpRequest();
    rf.open("GET", file, false); // Open the file and read contents.
    rf.onreadystatechange=function(){
        if(rf.readyState===4){
			if(rf.status===200||rf.status==0){
				// If the server responds ok, then read the contents out into the page.
                var at=rf.responseText;
                
				// Update text of "clicks"
				document.getElementById("clicks").innerText=at;
            }
        }
    }
	// We're sending no data back, so NULL is set!
    rf.send(null);
}

// Force a check on the page load.
window.onload = countCheck;