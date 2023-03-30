export {};

declare global {
  interface Window {
    dataLayer: any; // 👈️ turn off type checking
  }
}
