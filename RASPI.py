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
  S.attach(10);
  Serial.println("HI");
}

void loop(){
  while(Serial.available()){
    char c = Serial.read();
    readString += c;
    int duration, cm; 
    digitalWrite(trigPin, LOW); 
    delayMicroseconds(2); 
    digitalWrite(trigPin, HIGH); 
    delayMicroseconds(10); 
    digitalWrite(trigPin, LOW); 
    duration = pulseIn(echoPin, HIGH); 
    cm = duration / 58;
    Serial.print(cm); 
    Serial.println(" cm");
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






int echoPin = 6; 
int trigPin = 7; 
 
void setup() { 
  Serial.begin (9600); 
  pinMode(trigPin, OUTPUT); 
  pinMode(echoPin, INPUT); 
} 
 
void loop() { 
  int duration, cm; 
  digitalWrite(trigPin, LOW); 
  delayMicroseconds(2); 
  digitalWrite(trigPin, HIGH); 
  delayMicroseconds(10); 
  digitalWrite(trigPin, LOW); 
  duration = pulseIn(echoPin, HIGH); 
  cm = duration / 58;
  Serial.print(cm); 
  Serial.println(" cm"); 
  delay(100);
}