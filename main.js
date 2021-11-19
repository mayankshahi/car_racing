canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

rover2_width = 100;
rover2_height = 90;

rover_image = "download.jpeg";
rover_image2 = "download1.png";


rover_x = 10;
rover_y = 10;
 rover2_x = 30;
 rover2_y = 30;
    nasa_mars_images_array = ["mars 1.webp","mars 2.jpeg","mars 3.jpeg","mars 4.jpeg"];
    random_number = Math.floor(Math.random() * 4);
    console.log(random_number);
    background_image = nasa_mars_images_array[random_number];
    console.log("background_image = " + background_image);


function add()
 {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;

    rover2_imgTag = new Image();
    rover2_imgTag.onload = uploadRover2;
    rover2_imgTag.src = rover_image2;
 }  

 function uploadBackground()
 {
     ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
 } 

 function uploadRover()
 {
     ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height)
 }

 function uploadRover2()
 {
    ctx.drawImage(rover2_imgTag, rover2_x, rover2_y, rover2_width, rover2_height)
 }

window.addEventListener("keydown", my_keydown)

 function my_keydown(e)
 {
keyPressed = e.keyCode;
console.log(keyPressed)
     if(keyPressed == "38")
     {
         up();
         console.log("up")
     }
     if(keyPressed == "40"){
         down();
         console.log("down")    
     }
     if(keyPressed == "37")
     {
        left();
        console.log("left");
     }
     if(keyPressed == "39")
     {
         right();
         console.log("right")
     }
     if(keyPressed == "87")
     {
         up2();
         console.log("up2")
     }
     if(keyPressed == "83"){
        down2();
        console.log("down")    
    }
    if(keyPressed == "65")
    {
       left2();
       console.log("left");
    }
    if(keyPressed == "68")
    {
        right2();
        console.log("right")
    }

 }
 
 function up()
 {
     if(rover_y >= 0) 
        {
            rover_y = rover_y - 5;
            console.log("When up arrow is clicked, x = " + rover_x + " y = " + rover_y);
            uploadBackground();
            uploadRover();
            uploadRover2();
        }
 }

 function down()
 {
     if(rover_y <= 500)
     {
        rover_y = rover_y + 5;
        console.log("When down arrow is clicked, X = " + rover_x + " Y = " + rover_y );
        uploadBackground();
        uploadRover();
        uploadRover2();
     }
 }

 function left()
 {
     if(rover_x >= 0)
     {
         rover_x = rover_x - 5;
         console.log("When left is clicked,     X = " + rover_x + " Y = " + rover_y);
         uploadBackground();
         uploadRover();
         uploadRover2();
     }
    
}

function right()
{
    if(rover_x >= 0)
    {
        rover_x = rover_x + 5;
        console.log("When right is clicked,     X = " + rover_x + " Y = " + rover_y);
        uploadBackground();
        uploadRover();
        uploadRover2();
    }
}
 

     function up2()
     {
         if(rover2_y >= 0) 
            {
                rover2_y = rover2_y - 5;
                console.log("When up arrow is clicked, x = " + rover2_x + " y = " + rover2_y);
                uploadBackground();
                uploadRover2();
                uploadRover();
            }
     }

     function down2()
 {
     if(rover2_y <= 500)
     {
        rover2_y = rover2_y + 5;
        console.log("When down arrow is clicked, X = " + rover2_x + " Y = " + rover2_y );
        uploadBackground();
        uploadRover2();
        uploadRover();
     }
 }


 function left2()
 {
     if(rover2_x >= 0)
     {
         rover2_x = rover2_x - 5;
         console.log("When left is clicked,     X = " + rover2_x + " Y = " + rover2_y);
         uploadBackground();
         uploadRover2();
         uploadRover();
     }
 }

 function right2()
 {
     if(rover2_x <= 700)
     {
         rover2_x = rover2_x + 5;
         console.log("When right arrow is clicked, X = " + rover2_x + "Y =" + rover2_y)
         uploadBackground();
         uploadRover2();
         uploadRover();
     }
 }