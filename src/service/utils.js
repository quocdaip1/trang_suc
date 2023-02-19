export const CONFIG = {
  API_URL: "https://63573b7d2712d01e140435a9.mockapi.io/",
};

export const componentDidMount = () => {
  document.body.style.overflow = "hidden";
};

export const componentUnmount = () => {
  document.body.style.overflow = "unset";
};

export const checkExist = (element, arr, setArr) => {
  const newArr = [...arr];
  if (newArr.includes(element)) {
    setArr(newArr.filter((item) => item !== element));
    return;
  }
  newArr.push(element);
  setArr(newArr);
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
