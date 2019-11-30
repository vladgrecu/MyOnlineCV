export const helperFunctions = () => {
  displayGoToTop();
};

const displayGoToTop = () => {
  const backToTop = document.getElementById("backToTop");
  const scrollFunction = () => {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? backToTop.classList.remove("d-none")
      : backToTop.classList.add("d-none");
  };
  window.addEventListener("scroll", scrollFunction);
};
