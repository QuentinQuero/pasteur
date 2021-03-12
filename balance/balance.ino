#include "HX711.h"
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
const int LOADCELL_DOUT_PIN = 2;
const int LOADCELL_SCK_PIN = 3;

HX711 scale(2,3);

int balance = 0;
int calibr = 0;

LiquidCrystal_I2C lcd(0x3F, 20, 4);

void setup() {
   Serial.begin(9600);
    lcd.init();
   lcd.setCursor(0, 0);
   lcd.print("Ne pas bouger la balance");
   calibr = scale.read();
   
     //delay(2000);
     //lcd.setCursor(0, 0);
     //lcd.print("Ne pas bouger");
     calibr = (scale.read());
     Serial.println((scale.read() - calibr) / 110);
     //balance = (scale.read() * -1 + calibr) / 110;
     //delay(2000);
     
     //lcd.clear();
     //lcd.print("OK !");
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
  int newBalance = ((scale.read() - calibr) / 110) * -1;
  //Serial.println(newBalance);
  if (newBalance - balance > 10) {
  delay(2000);
   newBalance = ((scale.read() - calibr) / 110) * -1;
  lcd.clear();
    Serial.print("Nouveau poids : ");
    Serial.print(newBalance);
    Serial.println("g");
    
    Serial.print("Diff : ");
    Serial.print(newBalance - balance);
    Serial.println("g");

   lcd.setCursor(0, 0);
   lcd.print("Poids : ");
   lcd.print(newBalance);
   lcd.print("g");
   lcd.setCursor(0,1);
   lcd.print("Diff : ");
   lcd.print(newBalance - balance);
   lcd.print("g");
    
    balance = newBalance;
  }else if (balance - newBalance > 10) { 
    delay(2000);
    newBalance = ((scale.read() - calibr) / 110) * -1;
    lcd.clear();
    Serial.print("Nouveau poids : ");
    Serial.print(newBalance);
    Serial.println("g");
    
    Serial.print("Diff : ");
    Serial.print(balance - newBalance);
    Serial.println("g");
    
   lcd.setCursor(0, 0);
   lcd.print("Poids : ");
   lcd.print(newBalance);
   lcd.print("g");
   lcd.setCursor(0,1);
   lcd.print("Diff : ");
   lcd.print(balance - newBalance);
   lcd.print("g");
   
    balance = newBalance;
  } else {
    balance = newBalance;
  }
  
}
