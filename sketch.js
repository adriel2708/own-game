var path1,path2,path3,path4,path5,path6,path7,path8,path9,path10,path11
var path12,path13,path14,path15,path16,path17,path18,path19
 var path20,man,pathGroup,dog,dogImg,manImg
function preload() {
  dogImg = loadImage("assets/dog.jpg")
  manImg = loadImage("assets/man.png")
}
function setup(){
  createCanvas(700,700);
   path1=createSprite(50,300,10,500)
   path2=createSprite(590,300,10,500)
   path3=createSprite(320,50,550,10)
   path4=createSprite(50,620,1200,10)
   path6=createSprite(105,300,120,10)
   path8=createSprite(100,422,10,253)
   path9=createSprite(550,220,10,350)
   path10=createSprite(250,430,10,380)
   path11=createSprite(155,427,10,250)
   path12=createSprite(200,200,300,10)
   path13=createSprite(300,390,10,380)
   path14=createSprite(350,385,10,380)
   path7=createSprite(390,385,10,380)
   path15=createSprite(320,100,450,10)
   path16=createSprite(350,150,400,10)
   path17=createSprite(440,200,90,10)
   path18=createSprite(445,570,100,10)
   path19=createSprite(490,570,10,1)
   path20=createSprite(480,350,10,300)

  dog=createSprite(630,580,20,20)
   pathGroup=new Group()
   man=createSprite(15,592,20,20)

   dogGroup = createGroup()
   manGroup = createGroup()
   pathGroup = createGroup()
   
   dog.addImage("dog",dogImg)
   man.addImage("man",manImg)

   man.scale = 0.025
   dog.scale = 0.11;

   pathGroup.add(path1)
   pathGroup.add(path2)
   pathGroup.add(path3)
   pathGroup.add(path4)
   pathGroup.add(path5)
   pathGroup.add(path6)
   pathGroup.add(path7)
   pathGroup.add(path8)
   pathGroup.add(path9)
   pathGroup.add(path10)
   pathGroup.add(path12)
   pathGroup.add(path13)
   pathGroup.add(path14)
   pathGroup.add(path15)
   pathGroup.add(path16)
   pathGroup.add(path17)
   pathGroup.add(path18)
   pathGroup.add(path19)
   pathGroup.add(path20)



}
function draw(){
  background("white")
  if(keyDown("RIGHT_ARROW")){
   man.x = man.x+10
  }

  if(keyDown("LEFT_ARROW")){
    man.x = man.x-10
  }

  if(keyDown("DOWN_ARROW")){
    man.y = man.y+10
  }
  if(keyDown("UP_ARROW")){
    man.y = man.y-10
  }
 
 man.bounceOff(pathGroup)
 mpathGroup.bounceOff(man)
drawSprites()

}
