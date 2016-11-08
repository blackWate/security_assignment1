if(addNum){
        if(Math.floor(Math.random()*2)==1){
        console.log("numNum: "+numNum);
     ran=Math.ceil(Math.random()*(numNum-1));
        console.log("num ran: "+ran);
    gPass+=num[ran];
        console.log("num gPass: "+gPass);
        passLength--;
         console.log("num passLength: "+passLength);
        if(passLength==0)
            break;
    }}
       
    if(addLower){
        if(Math.floor(Math.random()*2)==1){
         console.log("lowerNum: "+lowerNum);
     ran=Math.ceil(Math.random()*(lowerNum-1));
         console.log("lower ran: "+ran);
    gPass+=lower[ran];
        console.log("lower gPass: "+gPass);
        passLength--;
        console.log("lower passLength: "+passLength);
        if(passLength==0)
            break;
    }}
            
    if(addUpper){
        if(Math.floor(Math.random()*2)==1){
        console.log("lowerNum: "+lowerNum);
     ran=Math.ceil(Math.random()*(upperNum-1));
        console.log("lower ran: "+ran);
    gPass+=upper[ran];
        console.log("lower gPass: "+gPass);
        passLength--;
    console.log("lower passLength: "+passLength);
        if(passLength==0)
            break;
    }}
 
    if(addSym){
        if(Math.floor(Math.random()*2)==1){
        console.log("sym Num: "+lowerNum);
     ran=Math.ceil(Math.random()*(symNum-1));
         console.log("sym ran: "+ran);
    gPass+=sym[ran];
         console.log("sym gPass: "+gPass);
        passLength--;
    console.log("sym passLength: "+passLength);
        if(passLength==0)
            break;
    }}
