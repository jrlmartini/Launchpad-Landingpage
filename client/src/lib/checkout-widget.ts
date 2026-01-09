export const CHECKOUT_CONFIG = {
  hotmart: {
    productUrl: "https://pay.hotmart.com/X87137833V?checkoutMode=2",
    widgetScript: "https://static.hotmart.com/checkout/widget.min.js",
    widgetStyles: "https://static.hotmart.com/css/hotmart-fb.min.css",
  },
};

let isHotmartLoaded = false;
let hotmartReady = false;

export function loadHotmartWidget(): Promise<void> {
  return new Promise((resolve) => {
    if (hotmartReady) {
      resolve();
      return;
    }

    if (isHotmartLoaded) {
      const checkReady = setInterval(() => {
        if ((window as any).hotmartFB) {
          hotmartReady = true;
          clearInterval(checkReady);
          resolve();
        }
      }, 100);
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = CHECKOUT_CONFIG.hotmart.widgetStyles;
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = CHECKOUT_CONFIG.hotmart.widgetScript;
    script.onload = () => {
      const checkReady = setInterval(() => {
        if ((window as any).hotmartFB) {
          hotmartReady = true;
          clearInterval(checkReady);
          resolve();
        }
      }, 100);
    };
    document.head.appendChild(script);

    isHotmartLoaded = true;
  });
}

export async function openHotmartCheckout(e: React.MouseEvent) {
  e.preventDefault();
  await loadHotmartWidget();
  
  const hotmartFB = (window as any).hotmartFB;
  if (hotmartFB && hotmartFB.open) {
    hotmartFB.open(CHECKOUT_CONFIG.hotmart.productUrl);
  } else {
    window.open(CHECKOUT_CONFIG.hotmart.productUrl, "_blank");
  }
}
