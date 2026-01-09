export const CHECKOUT_CONFIG = {
  hotmart: {
    productUrl: "https://pay.hotmart.com/X87137833V?checkoutMode=2",
    widgetScript: "https://static.hotmart.com/checkout/widget.min.js",
    widgetStyles: "https://static.hotmart.com/css/hotmart-fb.min.css",
  },
};

let isHotmartLoaded = false;

export function loadHotmartWidget() {
  if (isHotmartLoaded) return;

  const script = document.createElement("script");
  script.src = CHECKOUT_CONFIG.hotmart.widgetScript;
  document.head.appendChild(script);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = CHECKOUT_CONFIG.hotmart.widgetStyles;
  document.head.appendChild(link);

  isHotmartLoaded = true;
}

export function openHotmartCheckout(e: React.MouseEvent) {
  e.preventDefault();
  loadHotmartWidget();
  
  const link = document.createElement("a");
  link.href = CHECKOUT_CONFIG.hotmart.productUrl;
  link.className = "hotmart-fb hotmart__button-checkout";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
