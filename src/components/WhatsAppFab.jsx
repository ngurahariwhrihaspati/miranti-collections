import { useState, useEffect } from "react";
import { openWhatsApp } from "../utils/whatsapp";

const SHOW_AFTER = 300; // same threshold as showTopBtn; set to 0 to show it always

const WhatsAppFab = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      type="button"
      className="wa-fab"
      aria-label="Chat on WhatsApp"
      onClick={() => openWhatsApp()}
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
    </button>
  );
};

export default WhatsAppFab;
