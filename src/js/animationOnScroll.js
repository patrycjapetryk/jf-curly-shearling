export function animationOnScroll(
  scrollAnimationItems,
  animationStartClassName,
  animationStartDistance,
) {
  scrollAnimationItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const itemBottom = item.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (
      itemTop - windowHeight < 0 - animationStartDistance &&
      itemBottom > animationStartDistance
    ) {
      item.classList.remove(animationStartClassName);
    } else {
      item.classList.add(animationStartClassName);
    }
  });
}
