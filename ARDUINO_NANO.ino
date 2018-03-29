String readString;
#include <Servo.h>
int n;
Servo S;
int echoPin = 6; 
int trigPin = 7; 
 

void setup(){
  Serial.begin(9600);
  S.writeMicroseconds(1400);
  pinMode(trigPin, OUTPUT); 
  pinMode(echoPin, INPUT);
  S.attach(11);
//  Serial.println("HI");
}

void loop(){
  while(Serial.available()){
    char c = Serial.read();
    readString += c;
    delay(2);
       
  }
  

  

if (readString.length() >0){
  Serial.println(readString);
  n=readString.toInt();

    if(n >= 600 && n<=2400){
      S.writeMicroseconds(n);
      Serial.print("McrScs: ");
      Serial.println(n);
      }
else
{
  Serial.print("Angle: ");
  Serial.println(n);
}

readString="";
}
}


