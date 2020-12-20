const sortByCategory = (data: any[]) => {
  data.sort((a, b): any => {
    if (a.userCategories[0].id > b.userCategories[0].id) {
      return 1;
    }
    if (a.userCategories[0].id === b.userCategories[0].id) {
      return 0;
    }
    return -1;
  });
};
const sortBy = (attr: string) => (data: any[]) => {
  data.sort((a, b): any => {
    if (a[attr] > b[attr]) {
      return 1;
    }
    if (a[attr] === b[attr]) {
      return 0;
    }
    return -1;
  });
};
export const sortCategories: {
  id: number;
  name: string;
  sort: (data: any[]) => void;
}[] = [
  { id: 1, name: "カテゴリ", sort: sortByCategory },
  { id: 2, name: "learnCount", sort: sortBy("leanCount") },
];

export const sortCardList = (data: any[], sortId: number) => {
  const newData = [...data];
  const category = sortCategories.find((item) => {
    return item.id == sortId;
  });
  if (!category) {
    return newData;
  }
  category.sort(newData);
  return newData;
};
