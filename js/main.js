window.addEventListener('load', changeOrder);

setInterval(changeOrder, 6000);

function changeOrder() {
  const allSlides = document.querySelectorAll(".singleSlide");
  const previous = "1";
  const current = "2";
  const next = "3";
  const offPage1 = "4";
  const offPage2 = "5";
  const offPage3 = "6";
  const offPage4 = "7";
  const offPage5 = "8";
  const offPage6 = "9";
  const offPage7 = "10";

  for (const slide of allSlides) {
    const order = slide.getAttribute("data-order");

    switch (order) {
        case current:
            slide.setAttribute("data-order", next);
            break;
        case next:
            slide.setAttribute("data-order", offPage1);
            break;
        case previous:
            slide.setAttribute("data-order", current);
            break;
        case offPage1:
            slide.setAttribute("data-order", offPage2)
            break;
        case offPage2:
            slide.setAttribute("data-order", offPage3)
            break;
        case offPage3:
            slide.setAttribute("data-order", offPage4)
            break;
        case offPage4:
            slide.setAttribute("data-order", offPage5)
            break;
        case offPage5:
            slide.setAttribute("data-order", offPage6)
            break;
        case offPage6:
            slide.setAttribute("data-order", offPage7)
            break;
        case offPage7:
            slide.setAttribute("data-order", previous)
            break;
    }
  }
}