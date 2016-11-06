var mongoose = require('mongoose'),
  updatedOn = require('./plugins/updatedOn');
// TODO: create second schema for users

var productSchema = new Schema({
  description: String,
  categoryId: Number,
  brandID: Number,
  slug: String,
  price: String,
  isActive: {
    type: Boolean,
    default: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

productSchema.plugin(updatedOn);

module.exports = mongoose.model('Product', productSchema, 'products');

// var products = mongoose.model('Products', productSchema);
//
//     function createDefaultProducts () {
//         products.find({}).exec(function(err, collection) {
//             if(collection.length === 0) {
//
//             }
//         })
//     }
// //
//
// products.create({ProductCode: '211014', ProductName: '.022 SS.1 Pc Rth LR Cus/HK'});
// products.create({ProductCode: '211015', ProductName: '.022 SS.1Pc Roth LR Cus'});
// products.create({ProductCode: '211016', ProductName: '.022 SS. 1 Pc Roth LL Cusp'});
// products.create({ProductCode: '211017', ProductName: '.022 SS. 1 Pc Roth LL Cusp'});
// products.create({ProductCode: '211018', ProductName: '.022 SS. 1pc Rth LR 1st Bi/HK'});
// products.create({ProductCode: '211019', ProductName: '.022 SS.1 Pc Roth LL 1st Bi/HK'});
// products.create({ProductCode: '211021', ProductName: '.022 SS. 1Pc Rth low Un 1st Bi'});
// products.create({ProductCode: '211022', ProductName: '.022 SS.1pc Rth LR2nd Bi Hk'});
// products.create({ProductCode: '211023', ProductName: '.022 SS.1pc Rth 2nd Bi/Hk'});
// products.create({ProductCode: '211025', ProductName: '.022 SS.1pc Rth L Unv 2 Bi'});
// products.create({ProductCode: '211026', ProductName: '.022 SS 1 Pc Rth 5-5 No Hk'});
// products.create({ProductCode: '211103', ProductName: '.022 SS.1pc Rth 5-5 Hks 3'});
// products.create({ProductCode: '211105', ProductName: '.022 SS.1pc Rth 5-5 Hks on 345'});
// products.create({ProductCode: '211106', ProductName: '.018 SS. 1 Pc Rth Pat Case'});
// products.create({ProductCode: '211120', ProductName: '.022 O/P SS Bracket mbt UR Cen'});
// products.create({ProductCode: '211121', ProductName: '.022 O/P SS Bracket MBT UL Cen'});
// products.create({ProductCode: '211122', ProductName: '.022 O/P SS Bracket MBT UR Lat'});
// products.create({ProductCode: '211123', ProductName: '.022 O/P SS Bracket MBT UL Lat'});
// products.create({ProductCode: '211124', ProductName: '.022 O/P SS Bra. MBT UR Cus/HK'});
// products.create({ProductCode: '211125', ProductName: '.022 O/P SS Bra. MBT UL Cus/HK'});
// products.create({ProductCode: '211126', ProductName: '.022 O/P SS Bra. MBT UR Cusp'});
// products.create({ProductCode: '211127', ProductName: '.022 O/P SS Bra. MBT UL Cusp'});
// products.create({ProductCode: '211128', ProductName: '.022 O/P SS Bra. MBT UR Bi/HK'});
// products.create({ProductCode: '211129', ProductName: '.022 O/P SS Bra. MBT UL Bi/HK'});
// products.create({ProductCode: '211130', ProductName: '.022 O/P SS Bra. MBT Up.Un.Bic'});
//
// exports.createDefaultProducts = createDefaultProducts;
