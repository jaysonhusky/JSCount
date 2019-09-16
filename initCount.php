<?php
//Set path to the text file that stores counts
$file = 'click_data.txt';
//Open the file in read write mode
$fh = fopen($file, 'r+');
//Assign the page referene posted from page to a variable
$id = $_REQUEST['id'];
//Initialize lines variable
$lines = '';
//Repeat until end of file
while(!feof($fh)){
    //Split the line using comma delimiter
    $row = explode(',', fgets($fh));
    $pageref = trim($row[0]);
    $count = trim($row[1]);
    if(!empty($pageref)){
    	if($pageref == $id){
    	 //Increment count
    	  $count++;
    	  echo $count;
    	}    
       //Append new line to text file
    	$lines .= "$pageref,$count\r\n";
    }
}
file_put_contents($file, $lines);
fclose($fh);
?>
