import random

print("Spökhuset")
score = 0

while True:
    ghost_door = random.randint(1, 3)
    print("Tre dörrar framför dig...")
    print("Vilken dörr väljer du?")
    door = int(input("1, 2 eller 3? "))

    if door == ghost_door:
        print("ETT SPÖKE!")
        break
    else:
        print("Inget spöke!")
        print("Du går in i nästa rum")
        score += 1

print("Sprint!")
print(f"Spelet över! Din poäng: {score}")