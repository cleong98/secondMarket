const pool = require('../../database/createConfig')

module.exports = (app) => {
  const express = require('express')
  const router = express.Router()

  app.use('/admin/api', router)
  router.post('/categories', async (req, res) => {
    const data = req.body.name
    const sql = 'INSERT INTO categories(C_Name) values (?)'
    const params = [data]
    await pool.query(sql, params, (err, result) => {
      if (err) {
        return res.send(err)
      } else {
        return res.json({
          data: {
            result
          }
        })
      }
    })

  })
  router.get('/categories', async (req, res) => {
    const sql = 'SELECT C_Name FROM categories '
    await pool.query(sql, (err, result) => {
      if (err) {
        return res.json(err)
      } else {
        return res.json({
          result
        })
      }
    })
  })





  // router.post('/categories', async (req, res) => {
  //   const data = req.body.name

  //   const sql = 'INSERT INTO categories (C_Name) VALUES (?)'
  //   const params = [data]

  //   await pool.query(sql, params, (err, result) => {
  //     if (err) {
  //       return res.send(err)
  //     } else {
  //       return res.send(result)
  //     }
  //   })


  // })
  // router.get('/categories', async (req, res, ) => {

  //   const sql = 'SELECT * FROM categories LIMIT 10'
  //   await pool.query(sql, (err, result) => {
  //     if (err) {
  //       return res.send(err)
  //     } else {
  //       res.send(result)
  //     }
  //   })

  // })

  // router.get('/categories/:id', async (req, res) => {
  //   const data = parseInt(req.params.id)
  //   const sql = 'SELECT * FROM categories WHERE C_ID =?'
  //   const params = [data]
  //   await pool.query(sql, params, (err, result) => {
  //     if (err) {
  //       return res.send(err)

  //     } else {
  //       return res.send(result)
  //     }
  //   })
  // })

  // router.get('/parent-options', async (req, res) => {
  //   const sql = 'SELECT * FROM categories'
  //   await pool.query(sql, (err, result) => {
  //     if (err) {
  //       res.send(err)
  //     } else {
  //       res.send(result)
  //     }
  //   })
  // })

  // router.put('/categories/:id', async (req, res) => {
  //   const id = req.params.id
  //   const data = req.body.name
  //   const sql = "UPDATE categories SET C_Name=? WHERE C_ID= ?"
  //   const params = [data, id]
  //   await pool.query(sql, params, (err, result) => {
  //     if (err) {
  //       return res.status(400).send(err)
  //     } else {
  //       return res.send(result)
  //     }
  //   })

  // })
  // router.delete('/categories/:id', async (req, res) => {
  //   const id = req.params.id
  //   const sql = 'DELETE FROM categories WHERE C_ID=?'
  //   const params = [id]
  //   await pool.query(sql, params, (err, result) => {
  //     if (err) {
  //       res.status(400).send(err)
  //     } else {
  //       res.send({
  //         success: true
  //       })
  //     }
  //   })
  // })
}