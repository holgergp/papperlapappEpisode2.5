
- Naming
  - Generator Function/Generator
  - Generator Object
- Missing next
  - Wichtig "nur" für den Use Case "Generators as Observers"
  - Als Datenproduzent oder "Iterator" ist das nicht relevant
  - Erstes next startet den Generator
  - yield-Statements sind die Punkte an denen ich werte injizieren kann.
  - next springt immer nur zum nächsten yield. Nicht darüberhinaus.
  - D.h. erstes next, bzw. der Wert des ersten next(wert) ist "verloren"
  - Es gab Diskussionen dies nachzureichen. Aber dies wurde bisher nicht weiterverfolgt

Quellen:

- https://exploringjs.com/es6/ch_generators.html#sec_generators-as-observers
- https://esdiscuss.org/topic/that-first-next-argument
  
