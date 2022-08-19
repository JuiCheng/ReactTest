const initState = {
  menuItemData: [
    "Like的發問",
    "Like的回答",
    "Like的文章",
    "Like的留言"
  ],
};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const menuItemCopy = state.menuItemData.slice();
      return { menuItemData: [action.payload.itemNew].concat(menuItemCopy) };
    }
    case 'CLEAN_ITEM': {
      return { menuItemData: [] };
    }
    default:
      return state;
  }
};

export { itemReducer };
