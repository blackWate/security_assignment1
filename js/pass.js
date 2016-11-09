
$(document).ready(function() {
var bar = new ProgressBar.Circle(container, {
   strokeWidth: 3,
  easing: 'easeInOut',
  duration: 800,
  color: '#FFEA82',
  trailColor: '#00FFFFFF',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#5353fd'},
  to: {color: '#9d58f0'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});


var rsnblStr=true,strngStr=false,vstrngStr=false;    
var addNum=true,addSym=true,addUpper=true,addLower=true;
var  lowerNum,upperNum,numNum,symNum,totalSet,passLength,setNum,passess=new Array();
var lNumText=0,uNumText=0,nNumText=0,sNumText=0;
var upper,lower,num,sym,rate=0 ;
    $.getJSON( "parameters.json", function( charSet ) {
          upper=charSet.parameters.UpperCase;
           lower=charSet.parameters.LowerCase;
           num=charSet.parameters.Numbers;
           sym=charSet.parameters.Specials;
           lowerNum=lower.length;
            upperNum=upper.length;
            numNum=num.length;
            symNum=sym.length;
        });
    
$("#start").hover(function(){
    
    $("#Aa").css("display", "block").animate({
        top:"132px" ,
        left: "265px"    
  },"fast","swing");
    
 $("#A").css("display", "block").animate({
         top:"150px" ,
         left: "285px",
         zIndex:"-1"          
  },"fast","swing"); 
    
     $("#a").css("display", "block").animate({
         top:"150px" ,
         left: "285px",
         zIndex:"-1"        
  },"fast","swing");
    
   $("#sym").css("display", "block").animate({
       top:"455px" ,
       left: "368px"       
  },"fast","swing");
    
    $("#a1234").css("display", "block").animate({
top:"317px" ,
    left: "247px"       
  },"fast","swing");
    
     $("#pattern").css("display", "block").animate({
         top:"123px" ,
         left: "670px"       
  },"fast","swing");
    
     $("#length").css("display", "block").animate({
         top:"317px" ,
         left: "696px"       
    },"fast","swing");
    
     $("#hMany").css("display", "block").animate({
         top:"453px" ,
         left: "570px"       
    },"fast","swing");
     $("#strngV").css("display", "block").animate({
         top:"33px" ,
         left: "465px"       
    },"fast","swing");
    
    $("#rsnbl").css("display", "block").animate({
         top:"52px" ,
         left: "486px",
         zIndex:"-1"          
  },"fast","swing"); 
    
     $("#strng").css("display", "block").animate({
         top:"52px" ,
         left: "486px",
         zIndex:"-1"          
  },"fast","swing"); 
    
     $("#vstrng").css("display", "block").animate({
         top:"52px" ,
         left: "486px",
         zIndex:"-1"          
  },"fast","swing"); 
});
//separ
    $("#strngV").hover(function(){  
$("#rsnbl").css("display", "block").animate({
        top:"2px" ,
        left: "394px"       
  },"fast","swing"); 
    
    $("#strng").css("display", "block").animate({
        top:"-55px" ,
        left: "487px"       
  },"fast","swing");
        $("#vstrng").css("display", "block").animate({
        top:"2px" ,
        left: "580px"       
  },"fast","swing");
});
    
//separ    
$("#Aa").hover(function(){  
$("#A").css("display", "block").animate({
        top:"50px" ,
        left: "276px"       
  },"fast","swing"); 
    
    $("#a").css("display", "block").animate({
        top:"170px" ,
        left: "173px"       
  },"fast","swing");
});

$("#pattern").hover(function(){  
    $("#patInput").css("display", "block").animate({
        width:"255px",
        left:"30px"
    },"fast","swing");
},function(){
     if($("#patInput").val().trim()==""){
    $("#patInput").css("display", "block").animate({
        width:"0px",
        left:"0px"
    },"fast","swing");  
}
} );

$("#length").hover(function(){  
    $("#lenInput").css("display", "block").animate({
        width:"90px"      
    },"fast","swing"); 
    
});

$("#patInput").focusout(function(){

    if($("#patInput").val().trim()==""){
    $("#patInput").css("display", "block").animate({
        width:"0px"
    },"fast","swing");
        $("#powerScale").animate({
        width:"200px",height:"200px",top:"20px",left:"20px"
    },"slow","swing");
    $("#container").css("display","none");
        $("#percent").css("display","none");
         $("#chLength").css("display","none");
}
});

$("#hMany").hover(function(){  
    $("#hManyInput").css("display", "block").animate({
        width:"90px"      
    },"fast","swing"); 
    
});    
    
    
    
$("#patInput").keyup(function(){
 lNumText=0,uNumText=0,nNumText=0,sNumText=0,totalSet=0,passLength=0;
    $("#patInput").val( $("#patInput").val().trim());
    $("#powerScale").animate({
        width:"280px",height:"280px",top:"-17px",left:"-20px"
    },"slow","swing");
    $("#container").css("display","block");
    var arr = ( $("#patInput").val()).split('');
    passLength=arr.length;
   $.each( arr, function( i, val ) {
       
       if(upper.indexOf(val)!=-1)
           uNumText++;
       else if(lower.indexOf(val)!=-1)
           lNumText++;
       else if(num.indexOf(val)!=-1)
           nNumText++;
       else if(sym.indexOf(val)!=-1)
           sNumText++;
       
      });//array foreach  
    if(uNumText>0)
        totalSet+=upperNum;
     if(lNumText>0)
        totalSet+=lowerNum;
    if(nNumText>0)
        totalSet+=numNum;
      if(sNumText>0)
        totalSet+=symNum; 
  
    
passPower("upper:"+uNumText+" - lower:"+lNumText+"- numbers "+nNumText+"- symbols"+sNumText+"- total set"+totalSet,totalSet,passLength);
$("#chLength").text(passLength);
//    lNumText=0,uNumText=0,nNumText=0,sNumText=0;
});//keyup function
//console.log("upper:"+uNumText+" - lower:"+lNumText+"- numbers "+nNumText+"- symbols"+sNumText);


 
  //clickoptions 
$("#start").click(function(){
  $("#lock").attr("src","images/clickLock.svg");
  $("#passwords").empty();
     var passGr=genPass(Math.ceil(Math.round($("#lenInput").val())),parseInt($("#hManyInput").val()));
    console.log(passess);
    var passTable='<table class="tg">'+
//'  <tr>'+
//'    <th id="password" colspan="2">Password Length</th>'+
//'    <th id="passLen" colspan="4"></th>'+
//'  </tr>'+
//'  <tr>'+
//'    <th id="power" colspan="2">Power</th>'+
//'    <th id="powerV" colspan="4"></th>'+
//'  </tr>'+
'<thead> <tr>'+
'    <th id="num">#</th>'+
'    <th id="passV">Password</th>'+
'    <th id="uc">UpperCase</th>'+
'    <th id="lc">LowerCase</th>'+
'    <th id="number">Number</th>'+
'    <th id="symbol">Symbols</th>'+
'  </tr></thead><tbody>';
    console.log("passess length"+passGr.length);
            for(var i=0;i<passGr.length;i++){
        var rNum=i+1;
        
    passTable+='<tr><td class="tg-yw4l">'+rNum+'</td>'+
   '    <td class="tg-yw4l">'+passGr[i][0]+'</td>'+
   '    <td class="tg-yw4l">'+passGr[i][1]+'</td>'+ 
   '    <td class="tg-yw4l">'+passGr[i][2]+'</td>'+                      
   '    <td class="tg-yw4l">'+passGr[i][3]+'</td>'+                     
   '    <td class="tg-yw4l">'+passGr[i][4]+'</td></tr>';
        console.log("inside passTable"+passTable);
            }
    passTable+='</tbody></table>';    
    console.log(passTable);
    
    $("#passwords").append(passTable);

  
                       
                       
                                         

    });       
    
    
    
$("#Aa").click(function(){
  
  if($("#AaCh").css("display")=="block"){
      $("#AaCh").css("display","none");
      addLower=false;
      addUpper=false;
       calcLength(getTotalSet());
  }else{
      $("#AaCh").css("display","block");
       $("#ACh").css("display","none");
       $("#aCh").css("display","none");
      addLower=true;
      addUpper=true;
       calcLength(getTotalSet());
  }
    
    });    
    
   $("#A").click(function(){
  
  if($("#ACh").css("display")=="block"){
      $("#ACh").css("display","none");
      addUpper=false;
      calcLength(getTotalSet());
  }else{
      $("#AaCh").css("display","none");
       $("#ACh").css("display","block");
       $("#aCh").css("display","none");
      addUpper=true;
      addLower=false;
     calcLength(getTotalSet());
  }
      
    });     
     $("#a").click(function(){
  
  if($("#aCh").css("display")=="block"){
      $("#aCh").css("display","none");
      addLower=false;
      calcLength(getTotalSet());
  }else{
      $("#AaCh").css("display","none");
       $("#ACh").css("display","none");
       $("#aCh").css("display","block");
      addLower=true;
      addUpper=false;
      calcLength(getTotalSet());
  }
          
    });  
// separ
 $("#a1234").click(function(){
   
  if($("#a1234Ch").css("display")=="block"){
      $("#a1234Ch").css("display","none");
      addNum=false;
      calcLength(getTotalSet());
  }else{
      $("#a1234Ch").css("display","block");
     addNum=true;
      calcLength(getTotalSet());
  }
    });      
  // separ
 $("#sym").click(function(){
 
  if($("#symCh").css("display")=="block"){
      $("#symCh").css("display","none");
      addSym=false;
     calcLength(getTotalSet());
      
  }else{
      $("#symCh").css("display","block");
     addSym=true;
      calcLength(getTotalSet()); 
  } 
    });       
    
    // separ
 $("#rsnbl").click(function(){
  if($("#rsnblCh").css("display")=="none"){
      $("#rsnblCh").css("display","block");
      $("#strngCh").css("display","none");
      $("#vstrngCh").css("display","none");
      rsnblStr=true;
      strngStr=false;
      vstrngStr=false;}
 calcLength(getTotalSet());
    });     
     // separ
 $("#strng").click(function(){
  if($("#strngCh").css("display")=="none"){
      $("#rsnblCh").css("display","none");
      $("#strngCh").css("display","block");
      $("#vstrngCh").css("display","none");
      rsnblStr=false;
      strngStr=true;
      vstrngStr=false;}
    calcLength(getTotalSet());
    });  
    
    // separ
 $("#vstrng").click(function(){
  if($("#vstrngCh").css("display")=="none"){
       $("#rsnblCh").css("display","none");
      $("#strngCh").css("display","none");
      $("#vstrngCh").css("display","block");
      rsnblStr=false;
      strngStr=false;
      vstrngStr=true;}
    calcLength(getTotalSet());
    });



 //functions   
  function passPower(m,totalSet,passLength){ 
    console.log("pass power: "+passLength);
      console.log("totalSet: "+totalSet)
    var power=passLength*(Math.log(totalSet)/Math.log(2))
   rate=power/128;
      if(rate>1)
          rate=1;
    bar.animate(rate);  // Number from 0.0 to 1.0
    if(Math.round(rate*100)<31)
        $("#percent").css("color","#fd0017");
      else if(Math.round(rate*100)>30&&Math.round(rate*100)<51)
          $("#percent").css("color","#ffdd48");
      else
           $("#percent").css("color","#015e2e");
      console.log(rate);


      if(totalSet==0)
         $("#percent").text("");
      else
    $("#percent").text(Math.round(rate*100)+"%");
//    $("h1").text(m+"-power"+power);
}      

  function calcLength(totalSet){
      var lenPass=10;
      if(rsnblStr){
       lenPass=Math.log(2)*60/Math.log(totalSet);
          }
      if(strngStr){
      lenPass=Math.log(2)*94/Math.log(totalSet);
          }
       if(vstrngStr){
      lenPass=Math.log(2)*160/Math.log(totalSet);
          }
      console.log(Math.ceil(Math.round(lenPass)));
      $("#lenInput").val(Math.ceil(Math.round(lenPass)));
//      passes=genPass(Math.ceil(Math.round(lenPass)),parseInt($("#hManyInput").val()));
  }  
    
function getTotalSet(){
//    console.log(t)
   var totalSet=0;
    setNum=0;
    if(addNum){
    totalSet+=numNum;
    setNum++;}
    if(addLower){
    totalSet+=lowerNum;
    setNum++;}
    if(addUpper){
    totalSet+=upperNum;
    setNum++;}    
    if(addSym){
    totalSet+=symNum;
    setNum++;}
    
    console.log("addNum:"+addNum);
    console.log("addLower:"+addLower);
    console.log("addUpper:"+addUpper);
    console.log("addSym:"+addSym);
    console.log("TotalSet:"+totalSet);
    console.log("Set Number:"+setNum);
    return totalSet;
}
    
    function genPass(passL,hMany){
        
        var passwords=new Array();
        var passLength;
        
        
        
     for(i=0;i<hMany;i++){
        passLength=passL; 
        var gPass="";
        var numP=0,lowP=0,uppP=0,symP=0;
        var passSet=new Array();
       do{
            var ran=0;  
    if(addNum){
        if(numP==0||Math.floor(Math.random()*2)==1){
            numP++; 
      console.log("numNum: "+numNum);
     ran=Math.round(Math.random()*(numNum-1));
        console.log("num ran: "+ran);
    gPass+=num[ran];
        console.log("num gPass: "+gPass);
        passLength--;
         console.log("num passLength: "+passLength);
        if(passLength==0)
            break;
    }
    }
       
    if(addLower){
        if(lowP==0||Math.floor(Math.random()*2)==1){
            lowP++;
         console.log("lowerNum: "+lowerNum);
     ran=Math.round(Math.random()*(lowerNum-1));
         console.log("lower ran: "+ran);
    gPass+=lower[ran];
        console.log("lower gPass: "+gPass);
        passLength--;
        console.log("lower passLength: "+passLength);
        if(passLength==0)
            break;
    }
       }
            
    if(addUpper){
        if(uppP==0||Math.floor(Math.random()*2)==1){
            uppP++;
        console.log("lowerNum: "+lowerNum);
     ran=Math.round(Math.random()*(upperNum-1));
        console.log("lower ran: "+ran);
    gPass+=upper[ran];
        console.log("lower gPass: "+gPass);
        passLength--;
    console.log("lower passLength: "+passLength);
        if(passLength==0)
            break;
    }
       }
 
    if(addSym){
        
        if(symP==0||Math.floor(Math.random()*2)==1){
            symP++;
        console.log("sym Num: "+lowerNum);
     ran=Math.round(Math.random()*(symNum-1));
         console.log("sym ran: "+ran);
    gPass+=sym[ran];
         console.log("sym gPass: "+gPass);
        passLength--;
    console.log("sym passLength: "+passLength);
        if(passLength==0)
            break;
    }
       }
            
        }while(passLength>0);//end while
    console.log(genPass);
         passSet.push(gPass);
         passSet.push(uppP);
         passSet.push(lowP);
         passSet.push(numP);
         passSet.push(symP);
    passwords.push(passSet);
        console.log("final passlength: "+passLength);
        
}//end of for loop
                  
       return passwords;           
    }//end of method
    
    
   
    
    
    
});//dom
