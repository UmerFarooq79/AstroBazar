const router = require("express").Router();

const CryptoJs = require("crypto-js");
const Seller = require('../../models/SellerModel/sellerModel');
const verifySellerJwt = require("./verifyJwt")
const productModel = require("../../models/productModel");
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, Date.now() +' '+ file.originalname )
  }
})

const upload = multer({ storage: storage })

//update seller information

router.put("/:id", verifySellerJwt, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJs.AES.encrypt(
      req.body.password, process.env.PASS_SEC
    ).toString();
  }
  try {
    const updateSeller = await Seller.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })

    res.status(200).json(updateSeller)
  }
  catch (err) {
    res.status(500).json(err)
  }
});

// add new product

router.post("/addProduct/:sellerId", upload.single('myFile') ,async (req, res) => {
  (req.file) ? req.file.filename : null;
  const newProduct = new productModel({
    title: req.body.title,
    desc: req.body.desc,
    img: req.body.img,
    categories: req.body.categories,
    price: req.body.price,
    quantity: req.body.quantity,
    sellerId: req.params.sellerId
  });

  newProduct.save((err, user) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Failed to add Product"
      
      });
    } else {
      res.json({
        success: true,
        msg: "Product added successfully"
      });
    }
  });
});

//Get Product

router.get("/:sellerId", async (req, res) => {
  const query = { sellerId: req.params.sellerId };
  //    const findProductsBySellerId = productModel.find().select("sellerId -_id"); 
  try {
    const products = await productModel.find(query)
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Product

router.put("/addProduct/:productId", async (req, res) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.productId,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});




// Delete Product

router.delete("/:productId", verifySellerJwt, async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.productId);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// try {
//   const savedProduct = await newProduct.save();
//   res.status(200).json(savedProduct);
// } catch (err) {
//   res.status(500).json(err);
// }



module.exports = router; 