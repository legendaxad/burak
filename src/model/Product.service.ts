import ProductModel from "../schema/Product.schema";
class ProductService {
  private readonly productModel;
  constructor() {
    this.productModel = ProductModel;
  }
}
export default ProductService;
