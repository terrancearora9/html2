<?php

$subject = "Contact Email";
	
	$message = "Name: ".$_POST['name']."<br />";
	$message.= "Phone: ".$_POST['phone']."<br />";
	$message.= "Email: ".$_POST['email']."<br />";
	$message.= "City: ".$_POST['city']."<br />";
	$message.= "Time of Call: ".$_POST['Time']."<br />";
	$message.= "Message: ".$_POST['comment']."<br />";
	$message.= "Interested in: ".$_POST['interested'];

	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	
	// More headers
	$headers .= 'From: <'.$_POST['email'].'>' . "\r\n";
	
	mail("info@freecodeint.no",$subject,$message,$headers);
	?>
	<script>
alert('Mail Sent Successfully');
window.location = 'index.html';
</script>
