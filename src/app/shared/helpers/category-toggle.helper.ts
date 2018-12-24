
export function categoryToggle(categoryCollection: any[], entities, selectedCategoryId) {
  const updatedCategories = [];
  if (categoryCollection.length > 0) {
    categoryCollection.forEach((categoryId: any) => {
      if (categoryId === selectedCategoryId) {
        entities[categoryId].isSelected = true;
      } else {
        entities[categoryId].isSelected = false;
      }
      updatedCategories.push(entities[categoryId]);
    });
  }
  return updatedCategories;
}
