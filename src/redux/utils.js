export const addToCard = (items, newitem) => {
    return items.find(item => item.id === newitem.id) ?
        items.map(item => item.id === newitem.id ? {...newitem, quantity: ++item.quantity} : item )
          : [...items, { ...newitem, quantity: 1 }];
}
 export const decrement = (items, item) => {
    const searched = items.find(el => el.id === item.id);
    if(searched) {
      return searched.quantity === 1 ? items.filter(el => el.id !== item.id)
        : items.map(el => el.id === item.id ? { ...el, quantity: el.quantity - 1} : el);
    }
    return items;
 }