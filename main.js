a=document.querySelector("#box1");
b=document.querySelector("#box2");
c=document.querySelector("#box3");
d=document.querySelector("#box4");
e=document.querySelector("#box5");
f=document.querySelector("#box6");
g=document.querySelector("#box7");
h=document.querySelector("#box8");
i=document.querySelector("#box9");

let chance=1,f1=0,f2=0,f3=0,f4=0,f5=0,f6=0,f7=0,f8=0,f9=0,game=1,p1=0,p2=0;
p=document.querySelector(".teller");
q=document.querySelector(".teller2");

a.onclick=()=>{
    if(f1==0){
        if(kushal()){

        
        if(chance%2!=0){
            f1=1;
            changer(a);
            
        }
        else{
            f1=2;
            changer(a);
            
        }}
        else{
            if(chance%2==0){
                f1=1;
                changer(a);
                
            }
            else{
                f1=2;
                changer(a);
                
            }
        }
    }
}

b.onclick=()=>{
    if(f2==0){
        if(kushal()){
        if(chance%2!=0){
            f2=1;
            changer(b);
            
        }
        else{
            f2=2;
            changer(b);
            
        }
    }
    else{
        if(chance%2==0){
            f2=1;
            changer(b);
            
        }
        else{
            f2=2;
            changer(b);
            
        }
    }
}
}

c.onclick=()=>{
    if(f3==0){
        if(kushal()){
        if(chance%2!=0){
            f3=1;
            changer(c);
            
        }
        else{
            f3=2;
            changer(c);
            
        }
    }
    else{
            if(chance%2==0){
                f3=1;
                changer(c);
                
            }
            else{
                f3=2;
                changer(c);
                
            }
        }
}}

d.onclick=()=>{

    if(f4==0){
        if(kushal()){
        if(chance%2!=0){
            f4=1;
            changer(d);
            
        }
        else{
            f4=2;
            changer(d);
            
        }
    }
    else{
        if(chance%2==0){
            f4=1;
            changer(d);
            
        }
        else{
            f4=2;
            changer(d);
            
        }
    }
    }
}

e.onclick=()=>{
    if(f5==0){
        if(kushal()){
        if(chance%2!=0){
            f5=1;
            changer(e);
            
        }
        else{
            f5=2;
            changer(e);
            
        }
    }
    else{
        if(kushal()){
            if(chance%2==0){
                f5=1;
                changer(e);
                
            }
            else{
                f5=2;
                changer(e);
                
            }
        }
    }
}
}


f.onclick=()=>{
    if(f6==0){
        if(kushal()){
        if(chance%2!=0){
            f6=1;
            changer(f);
            
        }
        else{
            f6=2;
            changer(f);
            
        }
    }
    else{
        if(chance%2==0){
            f6=1;
            changer(f);
            
        }
        else{
            f6=2;
            changer(f);
            
        }
    }
    }
}

g.onclick=()=>{
    if(f7==0){
        if(kushal()){
        if(chance%2!=0){
            f7=1;
            changer(g);
           
        }
        else{
            f7=2;
            changer(g);
            
        }
    }
    else{
        if(chance%2==0){
            f7=1;
            changer(g);
           
        }
        else{
            f7=2;
            changer(g);
            
        }
    }
    }}

h.onclick=()=>{
    if(f8==0){
        if(kushal()){
        if(chance%2!=0){
            f8=1;
            changer(h);
        }
        else{
            f8=2;
            changer(h);
        }}
        else{
            if(chance%2==0){
                f8=1;
                changer(h);
            }
            else{
                f8=2;
                changer(h);
            }
        }
    }
}

i.onclick=()=>{
    if(f9==0){
        if(kushal()){
        if(chance%2!=0){
            f9=1;
            changer(i);
        }
        else{
            f9=2;
            changer(i);
            
        }}

        else{
            if(chance%2==0){
                f9=1;
                changer(i);
            }
            else{
                f9=2;
                changer(i);
                
            }

        }
    }
}

function changer(ayush){
    if(game%2!=0){
    if(chance%2==0){
        ayush.innerText="O";
        chance++;
        ayush.style.color="blue";
        document.body.style.backgroundColor="rgb(155, 15, 15)";
        check();
    }
    else{
        ayush.innerText="X";
        ayush.style.color="red";
        document.body.style.backgroundColor="rgb(15, 15, 155)";
        chance++;
        check();
    }
  }

  else{
    if(chance%2!=0){
        ayush.innerText="O";
        chance++;
        ayush.style.color="blue";
        document.body.style.backgroundColor="rgb(155, 15, 15)";
        check();
    }
    else{
        ayush.innerText="X";
        ayush.style.color="red";
        document.body.style.backgroundColor="rgb(15, 15, 155)";
        chance++;
        check();
    }
  }
}

function check(){
    if((f1==1&&f2==1&&f3==1)||(f4==1&&f5==1&&f6==1)||(f7==1&&f8==1&&f9==1)||(f1==1&&f4==1&&f7==1)||(f2==1&&f5==1&&f8==1)||(f3==1&&f6==1&&f9==1)||(f1==1&&f5==1&&f9==1)||(f3==1&&f5==1&&f7==1)){
        p1++;
        p.innerText="PLAYER1:   "+p1.toString();
        chance=10;
        document.body.style.backgroundColor="rgb(155, 15, 15)";
        game=0;
    }
    else if((f1==2&&f2==2&&f3==2)||(f4==2&&f5==2&&f6==2)||(f7==2&&f8==2&&f9==2)||(f1==2&&f4==2&&f7==2)||(f2==2&&f5==2&&f8==2)||(f3==2&&f6==2&&f9==2)||(f1==2&&f5==2&&f9==2)||(f3==2&&f5==2&&f7==2)){
        p2++;
        q.innerText="PLAYER 2:  "+p2.toString();
        chance=10;
        document.body.style.backgroundColor="rgb(15, 15, 155)";
        game=1;
    }
    if(p1>p2){
        p.style.fontSize="30px";
        p.style.color="gold";
        q.style.fontSize="20px";
        q.style.color="white";
        
    }
    else if(p2>p1){
        q.style.fontSize="30px";
        q.style.color="gold";
        p.style.fontSize="20px";
        p.style.color="white";
    }
    
    if(chance%10==0){
        f1=0,f2=0,f3=0,f4=0,f5=0,f6=0,f7=0,f8=0,f9=0;
        a.innerText="";
        b.innerText="";
        c.innerText="";
        d.innerText="";
        e.innerText="";
        f.innerText="";
        g.innerText="";
        h.innerText="";
        i.innerText="";
        chance=1;   
        game++;    
    }
}

function kushal(){
    if(game%2!=0){
        return true;
    }
    else{
        return false;
    }
}