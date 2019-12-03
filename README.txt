##Hi! This project is in development. View it at: https://ih05s.csb.app/

##Todo:
x clear input field after submitting message
  - scrub input
x make contacts sidebar
  -*toggle conversations
  -*sort convos in chronological order
- typing animation
- integrate emoji button 
  - (probably will involve making fake "textfield" with an invisble real one embedded)
- make pure emoji texts BIG
- maybe use JSON to store and load convos?
-*integrate AI(s) (Dialogflow?) into app
- convert classes to functional components?

##Commentary
OK! So it turns out keeping arrays and especially nested arrays in React is a Bad Idea, which only hastens my idea to put all history in JSON and only access as necessary. Glad I found that StackOverflow...