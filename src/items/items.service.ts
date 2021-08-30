/**
 * Data Model Interfaces
 */
 import { BaseItem, Item } from "./item.interface";
 import { Items } from "./items.interface";


/**
 * In-Memory Store
 */

 let items: Items = {
  1: {
    id: 1,
    name: "Shirt",
    price: 99,
    description: "shirt-basic",
    image: "https://dpksfxjw11i2.cloudfront.net/Custom/Content/Products/46/08/46082_camiseta-quiksilver-g-land-80334_z1_637632479828532291.jpg"
  },
  2: {
    id: 2,
    name: "sneakers",
    price: 299,
    description: "Rust-sneakers",
    image: "https://dpksfxjw11i2.cloudfront.net/Custom/Content/Products/45/92/45924_tenis-rusty-old-vibe-80403_s9_637628964698652615.jpg"
  },
  3: {
    id: 3,
    name: "pants",
    price: 199,
    description: "Pants-black",
    image: "https://dpksfxjw11i2.cloudfront.net/Custom/Content/Products/37/41/37417_calca-dc-shoes-everyday-80087_z1_637622382543388376.jpg"
  }
};

/**
 * Service Methods
 */
 export const findAll = async (): Promise<Item[]> => Object.values(items);

 export const find = async (id: number): Promise<Item> => items[id];

 export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};

