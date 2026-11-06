// Replace with the store's number in international format, digits only.
export const WA_NUMBER = "62xxxx";

// One handler shared by the slide 3 CTA, the floating button and the product page.
export const openWhatsApp = (
  message = "Hello, I'd like to ask about your products.",
) => {
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};
