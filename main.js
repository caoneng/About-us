$(document).ready(function(){
    $("#i1").hover(function(){        
            $("#img1").stop().animate({opacity:"0"},700);   
            textFly('Bing Cheng Zhu','Industrial Institute',`Hello, everyone. I am Bing Cheng Zhu. I am now master degree in the Industrial Design. My habbit is playing basketball and watching movies. I am a beginner of UI design field. Nice to meet you!`)}

        ,
             
        function(){$("#img1").stop().animate({opacity:"1"},300);
           
            // $("#person1").hide();        
            introReset();}
    );
    $("#i2").hover(
        ()=>{            
            // $("#person2").show();
            $("#img2").stop().animate({opacity:"0"},700);   
            // $("#intro").hide();
            textFly('Yuan Rui Hung','Industrial Design','My name is Jimmy Yuan , a.k.a Neng Bao Cao . I have a lot of hobbies in my life like photography , movies , and cooking . Now I am double majoring in industrial design and electronic engineering. Although I am a designer , I come here to learn how to code .');

        },
        ()=>{        
            // $("#intro").show();
         $("#img2").stop().animate({opacity:"1"},300);
            // $("#person2").hide();     
            introReset();       
        }
    );
    $("#i3").hover(
        ()=>{            
            // $("#person3").show();
            $("#img3").stop().animate({opacity:"0"},700);  
            // $("#intro").hide();     
            textFly('Po Wei Chen','Biotech & Bioindustry','Hello, everyone. I am Po Wei Chen. I am now major in the Biotech & Bioindustry. My habbit is playing baseball and watching movies. I am a beginner of UI design field. Nice to meet you!')      
        },
        ()=>{        
            // $("#intro").show();
            $("#img3").stop().animate({opacity:"1"},300);    
            // $("#person3").hide(); 
            introReset();           
        }
    );
    $("#i4").hover(
        ()=>{            
            // $("#person4").show();
            $("#img4").stop().animate({opacity:"0"},700);  
            // $("#intro").hide();    
            textFly('Li Hao Hoon','Systems & Naval Mechatronic Engineering','Systems & Naval Mechatronic Engineering');

        },
        ()=>{        
            // $("#intro").show();
            $("#img4").stop().animate({opacity:"1"},300);    
            // $("#person4").hide();     
            introReset();       
        }
    );
    $("#i5").hover(
        ()=>{            
            // $("#person5").show();
            $("#img5").stop().animate({opacity:"0"},700);    
            // $("#intro").hide();   
            textFly('Yu Chun Lin','Computer Science & Information Engineering',`Hello, my name is Eugene a student study in NCKU-CSIE. In the team, I am a software engineer developing the website. In the past project, which also develops the website, my role focuses on back-end which is developed by Python. Actually, I am not only programming in Python but also in C++. I love to use code and computer to create something, that's the reason why I study in CSIE and be an engineer.`)        
        },
        ()=>{        
            // $("#intro").show();
            $("#img5").stop().animate({opacity:"1"},300);    
            // $("#person5").hide();       
            introReset();     
        }
    );
});

var textFly = function (title,subTitle, text) {

    var introTitle = document.getElementById('introTitle');
    var intro = document.getElementById('intro');
    $(intro).stop();
    var introText = document.getElementById('introText');
    var subTitleHtml = document.getElementById('introSubTitle');
    intro.style = ''
    $('#intro').css('display','none');
    
    introText.innerText = text;
    introTitle.innerText = title;
    subTitleHtml.innerHTML = subTitle;
    $('#intro').toggle('slide','left',600);
}

var introReset = function(){
    var introTitle = document.getElementById('introTitle');
    var introText = document.getElementById('introText');
    var subTitleHtml = document.getElementById('introSubTitle');
    introTitle.innerText = 'UIDD Team I';
    subTitleHtml.innerText = '';
    introText.innerHTML = `Hello, everyone. We are team I in the UIDD class. Our project is to revise SinoPac e-loan system. If you feel intersted in it, please kindly contact us. Best regards.`;
}