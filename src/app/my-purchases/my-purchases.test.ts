import { describe, it, expect } from 'vitest';
import MyPurchases from './my-purchases.js';

describe('MyPurchases', () => {
  it('<app-my-purchases> is an instance of MyPurchases', async () => {
    const element = document.createElement('app-my-purchases');
    expect(element).to.be.instanceOf(MyPurchases);
  });
});
