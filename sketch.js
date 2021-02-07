var alarm, dataFile
var lock, redAgent, redExitPoint, transactionLink, virus, alarmGroup
var dataFileGroup, redExitPointGroup, lockGroup
var virusGroup, transactionLinkGroup
var alarmImg
var dataFileImg1, dataFileImg2, dataFileImg3, lockImg, redAgentImg
var redExitPointImg, transactionLinkImg, virusImg
var millisecond
var gameState = 0
var health = 100;
var score = 0;

function preload(){
alarmImg = loadImage('images/Alarm.png')
dataFileImg1 = loadImage('images/DataFile1.png')
dataFileImg2 = loadImage('images/DataFile2.png')
dataFileImg3 = loadImage('images/DataFile3.png')
lockImg = loadImage('images/Lock.png')
redAgentImg = loadImage('images/RedAgent.png')
redExitPointImg = loadImage('images/RedExitPoint.png')
transactionLinkImg = loadImage('images/TransactionLink.png')
virusImg = loadImage('images/Virus.png')
}

function setup() {
redAgent = createSprite(100,568,1,1)
redAgent.addImage(redAgentImg)
redAgent.scale = 0.7
redAgent.visible = true;
redAgent.setCollider("rectangle",-10,5,95,135)
redAgent.debug = true
createCanvas(1366,768);
alarmGroup = new Group()
dataFileGroup = new Group()
lockGroup = new Group()
redExitPointGroup = new Group()
transactionLinkGroup = new Group()
virusGroup = new Group()
}

function draw() {
background(202,131,142);
alarms()
dataFiles()
locks()
redExitPoints()
transactionLinks()
viruses()
millisecond = round(millis());
text('Survival time: \n' + millisecond/1000, 241, 40);
text('Health: '+health,798,40)
text('Score: '+score,863,40)
if(keyDown('W')){ 
redAgent.y-=10
}
if(keyDown('A')){
redAgent.x-=10
}
if(keyDown('S')){
redAgent.y += 10;
}
if(keyDown('D')){
redAgent.x += 10;
}
if(alarmGroup.isTouching(redAgent)){
alarmGroup.destroyEach()
health+=100
}
if(dataFileGroup.isTouching(redAgent)){
dataFileGroup.destroyEach()
score+=1;
}
if(lockGroup.isTouching(redAgent)){
lockGroup.destroyEach()
health+=100
}
if(redExitPointGroup.isTouching(redAgent)){
redExitPointGroup.destroyEach()
gameState = 2
}
if(transactionLinkGroup.isTouching(redAgent)){
transactionLinkGroup.destroyEach()
health+=100
}
if(virusGroup.isTouching(redAgent)){
virusGroup.destroyEach()
health-=100
}
if(health == 0 || gameState == 2){
clear();
}
}

function alarms(){
if(frameCount % 140 == 0){
alarm = createSprite(550,0,1,1)
alarm.addImage(alarmImg)
alarm.x = random(100,1300)
alarm.velocityY = 10;
alarm.setLifetime = 70;
alarmGroup.add(alarm)
alarm.setCollider("rectangle",-30,-30,alarm.width/5-15,alarm.height/6+15);
alarm.debug = true
}
}
function dataFiles(){
if(frameCount % 80 == 0){
dataFile = createSprite(550,0,1,1)
var rand = Math.round(random(1,3))
switch(rand){
case 1: dataFile.addImage(dataFileImg1)
break;
case 2: dataFile.addImage(dataFileImg2)
break;
case 3: dataFile.addImage(dataFileImg3)
break;
default: break;
}
dataFile.x = Math.round(random(100,1300))
dataFile.velocityY = 1;
dataFile.setLifetime = 70;
dataFileGroup.add(dataFile)
dataFile.setCollider("rectangle",0,0,100,100)
}
}
function locks(){
if(frameCount % 140 == 0){
lock = createSprite(550,0,1,1)
lock.addImage(lockImg)
lock.scale = 0.7
lock.x = random(100,1300)
lock.velocityY = 1;
lock.setLifetime = 70;
lockGroup.add(lock)
lock.setCollider("rectangle",-30,-25,163,160);
lock.debug = true
}
}
function redExitPoints(){
if(frameCount % 200 == 0){
redExitPoint = createSprite(550,0,1,1)
redExitPoint.addImage(redExitPointImg)
redExitPoint.scale = 0.9
redExitPoint.x = random(100,1300)
redExitPoint.velocityY = 10;
redExitPoint.setLifetime = 70;
redExitPointGroup.add(redExitPoint)
redExitPoint.setCollider("rectangle",-60,0,80,120)
redExitPoint.debug = true
}
}
function transactionLinks(){
if(frameCount % 140 == 0){
transactionLink = createSprite(550,0,1,1)
transactionLink.addImage(transactionLinkImg)
transactionLink.scale = 0.5
transactionLink.x = random(100,1300)
transactionLink.velocityY = 1;
transactionLink.setLifetime = 70;
transactionLinkGroup.add(transactionLink)
transactionLink.setCollider("rectangle",-15,5,110,51)
transactionLink.debug = true;
}
}

function viruses(){
if(frameCount % 200 == 0){
virus = createSprite(550,0,1,1)
virus.addImage(virusImg)
virus.x = random(100,1300)
virus.velocityY = 10;
virus.setLifetime = 70;
virusGroup.add(virus)
virus.setCollider("rectangle",-30,-10,80,100)
virus.debug = true;
}
}