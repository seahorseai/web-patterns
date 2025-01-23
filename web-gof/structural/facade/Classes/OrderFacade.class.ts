import { Inventory } from "./Inventory.class";
import { OrderProcessor } from "./OrderProcessor.class";
import { Shipping } from "./Shipping.class";


export class OrderFacade {
    private inventory: Inventory;
    private shipping: Shipping;
    private orderProcessor: OrderProcessor;

    constructor() {
        this.inventory = new Inventory();
        this.shipping = new Shipping();
        this.orderProcessor = new OrderProcessor();
    }

    placeOrder(productId: number, quantity: number): void {
        const productAvailable = this.inventory.checkInventory(productId, quantity);
        if (!productAvailable) {
            console.log(`Product ${productId} is out of stock.`);
            return;
        }

        const shippingCost = this.shipping.calculateShippingCosts(productId, quantity);
        console.log(`Shipping costs: $${shippingCost}`);

        this.orderProcessor.placeOrder(productId, quantity);
    }
}