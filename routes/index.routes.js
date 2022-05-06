const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  res.render("home.hbs")
})

router.get('/about', (req, res) => {
  res.render("about.hbs")
})

router.get('/my-hobbies', (req, res, next) => {
  
  // en muchos casos esta info vendra de una API de una una DB
  // en algunos casos esta connection dará error
  // next() // si lo usamos asi pasa a la siguiente rutar

  let someVar = "Hola"
  let otraVar = someVar + "como estas"
  next("cualquier cosa") // va directo al error handler 500

  // ! abajo es solo un ejemplo de como usaremos next() para errores de 500
  // dog.findRandomDog()
  // .then((response) => {
  //     res.render("my-hobbies.hbs")
  //     console.log(response.algo)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //     next(err) // va directo al error handler 500
  // })
})

module.exports = router;