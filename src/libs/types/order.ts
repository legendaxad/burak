import { Types } from "mongoose";
import { OrderStatus } from "../enums/order.enum";
export interface OrderItemInput {
  itemQuantity: number;
  itemPrice: number;
  productId: Types.ObjectId;
  orderId?: Types.ObjectId;
}
export interface Order {
  _id: Types.ObjectId;
  memberId: Types.ObjectId;
  orderToatl: number;
  orderDelivery: number;
  orderStatus: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  _id: Types.ObjectId;
  itemPrice: number;
  itemQuantity: number;
  orderId: Types.ObjectId;
  productId: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
