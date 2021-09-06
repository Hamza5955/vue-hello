/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
Buon lavoro... ci vediamo mercoledì :slightly_smiling_face:*/

Vue.config.devtools = true;

const app = new Vue({
  el: "#root",
  data: {
    message: "hello world !",
    image: "img/wb.png",
  },
});
