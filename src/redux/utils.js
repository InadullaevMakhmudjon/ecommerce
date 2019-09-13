export const addToCard = (items, newitem) => {
    return items.find(item => item.id === newitem.id) ?
        items.map(item => item.id === newitem.id ? {...newitem, quantity: ++item.quantity} : item )
          : [...items, { ...newitem, quantity: 1 }];
}