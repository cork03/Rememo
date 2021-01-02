import { toast } from "react-toastify";

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

// カウント変数

export const counts = [2, 3, 4, 5];

// トースト
export const successToast = (message: any) => {
  toast(message, {
    className: "toast-success",
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeButton: false,
  });
};
export const errorToast = (message: any) => {
  toast(message, {
    className: "toast-error",
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeButton: false,
  });
};
export const checkingToast = (message: any) => {
  toast(message, {
    className: "toast-check",
    position: "top-center",
    hideProgressBar: true,
    closeButton: false,
  });
};
