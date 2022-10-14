import React, {useState, useEffect} from 'react'


export function useItemsStatus(initItems) {
    const [items, setItems] = useState(initItems || []);

    useEffect(() => {
        localStorage.setItem("items", [JSON.stringify(items)]);
     }, [items]);

    // Define whatever you want
  
    return [items, setItems];
}