const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (e) => {
        const currentActiveAccordion = document.querySelector(
            ".accordion-item-header.active"
        );

        if (
            currentActiveAccordion &&
            currentActiveAccordion !== accordionItemHeader
        ) {
            currentActiveAccordion.classList.toggle("active");
            currentActiveAccordion.nextElementSibling.classList.remove("active");
        }

        accordionItemHeader.classList.toggle("active");
    });
});