<?php
//Set path to the text file that stores counts
$file = 'click_data.txt';
//Open the file in read write mode
$fh = fopen($file, 'r+');
//Assign the page reference posted from page to a variable
$id = $_REQUEST['id'];
//Initialize lines variable
$lines = '';
//Repeat until end of file
while(!feof($fh)){
    //Split the line using comma delimiter
    $row = explode(',', fgets($fh));
	// We're not updating "$row[0]" as this is the name of the variable.
	$pageref = trim($row[0]); 
	// Identify number and check to increment it
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
// Update file and close
file_put_contents($file, $lines);
fclose($fh);
?>
