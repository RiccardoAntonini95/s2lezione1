/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
 console.log("I principali datatype sono: string, number, boolean, null, e undefined")
 console.log("string si usa per uno o più caratteri e va specificato all'interno di apici, preferibilmente doppi come quelli che sto usando adesso")
 console.log("number si usa per i numeri, sia decimali che interi, da bambino mi dicevano con o senza la virgola anche se oggi le virgole sono diventate punti, i numeri però vanno scritti senza apice")
 console.log("boolean si usa solo per due valori, ovvero true e false, anch'essi senza apice come i numeri")
 console.log("null indica l'assenza di un oggetto, ovvero valore vuoto, ciò non significa che sia zero perchè lo zero è un valore esistente")
 console.log("undefined indica che il valore della variabile non è stato assegnato, quindi esiste ma non sappiamo quale sia")
*/ 

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*
 let name = "riccardo" 
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
  let numero1 = 12
  let numero2 = 20
  console.log(numero1+numero2)
*/ 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*
  let x = 12 
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*
  let name ="riccardo"
  name = "antonini"
  console.log(name)
  const error = 404
  error = 10
  console.log(error)
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
 let y = 4
 console.log(y-x)

 ||

 let y -= x - 8
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

 /*
 let name1 = "john"
 let name2 = "John"
 console.log(name1 !== name2)
 
 Extra:
 console.log(name1 === name2.toLowerCase())
*/
