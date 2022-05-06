const errorHandling = (app) => {

  // 404
  app.use((req, res) => {
    res.status(404).render("not-found.hbs")
  })
  // app.get("*", (req, res) => {
  //   res.render("not-found.hbs")
  // })


  // 500
  app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).render("error.hbs")
  })

}

module.exports = errorHandling