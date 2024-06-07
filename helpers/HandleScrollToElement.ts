export const handleScrollToElement = (id: string) => {
  const violation = document.getElementById(id); 
  if (violation) {
    window.scrollTo({
      top: violation?.offsetTop + 1,
    });
  }
}