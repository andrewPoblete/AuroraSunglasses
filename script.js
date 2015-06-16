// JavaScript Document

/*
Apply onclick="popup()" to the button that should cause the pop up effect.  Make sure that the button is of type="button" and not type="Submit"

Add this after all divs before the </body> and edit your message accordingly.

<div id="results" style="display:none;" onclick="popup()">  </div>

    <div id="resultWindow" style="display:none;" > 
            <h1>Your message has been submitted</h1>
            <p>We will return your comment or inquiry within 24 hours.</p>
    		<div class="popbutton">
            <form method="link" action="enter_URL_here">
            	<!-- buttons that just close the window go here -->
            	<input type="button" value="OK" onclick="popup()" class="formbuttongreen"/>
                <!-- submit should be applied to the button that will redirect to the action listed above -->
                <input type="submit" value="OK2" class="formbuttongreen"/>
            </form> 
            </div>
    </div>      
	
*/

function popup() {
   var resWin = document.getElementById("results").style.display;
   var resWinInner = document.getElementById("resultWindow").style.display;
   
   if (resWin == "none" && resWinInner == "none"){
   		document.getElementById("results").style.display = "block";
		document.getElementById("resultWindow").style.display = "block";
		document.body.style.overflow = "hidden";
   } else {
		document.getElementById("results").style.display="none";
		document.getElementById("resultWindow").style.display="none";	   
		document.body.style.overflow = "auto";
   }
}