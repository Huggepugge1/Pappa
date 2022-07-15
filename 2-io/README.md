# IO

### Input
I python: `namn = input()`

Om man vill ha en int: `nummer = int(input())`

Om man vill ha en float: `nummer = float(input())`

Man kan också dela upp inputen och spara den i en lista: lista = input().split(). Normalt sätt delar den inputen vid mellanslag men om man skriver in någonting annat inom () efter split kan man ändra var den delar. Till exempel `input().split(",")`. Notera att `""` behövs.

### Output

`print()`

Om man vill skriva till exempel "Du vann! Du fick x antal poäng." kan man använda sig utav f-strings. f-strings är strängar som går att formatera. Formaterade strängar är strängar som använder sig utav variabler när de skapas. Till exempel: `f"Du vann! Du fick {poäng} antal poäng"`. Notera att f-et behövs för att kunna använda sig utav `{}` på det sättet. Om man vill skriva ut `{` eller `}` använder man dubbla måsvingar, `{{` eller `}}`.