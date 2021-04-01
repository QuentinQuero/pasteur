
#include "HX711.h"
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
const int LOADCELL_DOUT_PIN = 2;
const int LOADCELL_SCK_PIN = 3;

HX711 scale(2,3);

float balance = 0;
float calibr = 0;

LiquidCrystal_I2C lcd(0x3F, 20, 4);

void setup() {
   Serial.begin(9600);
    lcd.init();
   lcd.setCursor(0, 0);
   lcd.print("Ne pas bouger");
   int diff = 200;
   calibr = scale.read();
   Serial.println(calibr);
   Serial.println(scale.read());
   Serial.println(scale.read());
   Serial.println(scale.read());
   Serial.println(scale.read());
   Serial.println(scale.read());
   Serial.println(scale.read());
   Serial.println(scale.read());
   delay(2000);
//   while (diff > 100 && diff < -100) {
//    diff = scale.read() - calibr; 
//    calibr = scale.read();
//   }
     //balance = (scale.read() * -1 + calibr) / 110;
     delay(2000);
     
     lcd.clear();
     lcd.print("OK !");
}

void loop() {

  if (scale.is_ready()) {
    //long reading = scale.read();
    calcul();
  }
   lcd.backlight();
  delay(500);
}

void calcul(){
  delay(1000);
  int newBalance = getCurrentGrammes();
  //Serial.println(newBalance);
  if (newBalance - balance > 10) {
    
    delay(1000);
    newBalance = getCurrentGrammes();
    myPrint(newBalance, newBalance - balance);
    //Serial.println(scale.read());
    //Serial.println(scale.read() + calibr);
    //Serial.println(scale.read() - calibr);
    balance = newBalance;
  } else {
    balance = newBalance;
    myPrintOne(balance);
  }
}

void myPrint(int balance, int diff){
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Poids : ");
  lcd.print(balance);
  lcd.print("g");
  lcd.setCursor(0,1);
  lcd.print("Diff : ");
  lcd.print(diff);
  lcd.print("g");
}

void myPrintOne(int balance){
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Poids : ");
  lcd.print(balance);
  lcd.print("g");
}

int getCurrentGrammes() {
  Serial.println(calibr);
  return (((scale.read() - calibr) / 116) * -1);
  // / 115
}
