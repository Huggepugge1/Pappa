# If, For, While


### If

If är ett så kallat conditional statement. Conditionsal statements bestämmer vad i koden som körs.
#### Exempel:
```py
if x < y:
    # Do stuff if true
```

```py
if x == y: # Dubbla `==` för att kolla om x är lika med y
    # Do stuff if true
```

### Else
Else körs om if misslyckas (blir false)

#### Exempel
```py
if x == y:
    # Do stuff if true
else:
    # Do stuff if false
```

### Elif
`elif` står för else if och körs om det förra if-statementet var false. Om det körs fungerar det som en if.

#### Exempel
```py
if x == y:
    # Do stuff if x == y
elif x < y:
    # Do stuff if x < y
else:
    # Do stuff if x > y
```

### For
For är en så kallad loop. For loopar igenom en iterable (något med mer än ett värde. Till exempel en lista eller en sträng).

##### Break
Loopar kan också avslutas genom `break`.

##### Continue
`continue` är ett nyckelord som kör nästa iteration (körning) av en loop.

##### Range
`range(x, y)` gör en lista med heltal som startar på x och slutar på y - 1.

#### Exempel
```py
for i in range(5):
    print(i)

# Expected output
# 0
# 1
# 2
# 3
# 4
```

### While
While är en annan loop som körs medans något är sant.

#### Exempel
```py
i = 0
while x < 5:
    print(i)
    i += 1

# Expected output
# 0
# 1
# 2
# 3
# 4
```
