const Router = require('express');
const router = Router();
const querysProductos  = require('../controllers/productos.controller');

router.get('/', querysProductos.getAllProductos);
router.post('/', querysProductos.postProducto);
router.get('/:id', querysProductos.getOneProducto);
router.put('/:id', querysProductos.putProducto);
router.delete('/:id', querysProductos.deleteProducto);

router.post('/upload',(req,res) => {
    console.log(req.files)
    imgBackend.mv(`./files/${imgBackend.name}`,err => {
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'File upload' })
    })
});

module.exports = router;