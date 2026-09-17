const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Test with reduced motion forced ON to see if the override works
  await page.emulateMediaFeatures([
    { name: 'prefers-reduced-motion', value: 'reduce' }
  ]);
  
  await page.setViewport({ width: 1920, height: 1080 });
  
  const pages = ['/', '/products', '/login', '/register', '/quotation'];
  
  for (const path of pages) {
    try {
      await page.goto('https://bezrah-app-frontend.vercel.app' + path, { waitUntil: 'networkidle2', timeout: 15000 });
      await new Promise(r => setTimeout(r, 2000));
      
      const aosOpacity = await page.evaluate(() => {
        const aosElements = document.querySelectorAll('[data-aos]');
        if (!aosElements.length) return 'None found';
        return getComputedStyle(aosElements[0]).opacity;
      });
      
      console.log(`Page: ${path} | First [data-aos] opacity: ${aosOpacity}`);
    } catch (e) {
      console.log(`Error on ${path}: ${e.message}`);
    }
  }
  
  // Test with reduced motion OFF
  console.log('\n--- With reduced motion OFF ---');
  await page.emulateMediaFeatures([
    { name: 'prefers-reduced-motion', value: 'no-preference' }
  ]);
  
  for (const path of pages) {
    try {
      await page.goto('https://bezrah-app-frontend.vercel.app' + path, { waitUntil: 'networkidle2', timeout: 15000 });
      await new Promise(r => setTimeout(r, 2000));
      
      const aosOpacity = await page.evaluate(() => {
        const aosElements = document.querySelectorAll('[data-aos]');
        if (!aosElements.length) return 'None found';
        return getComputedStyle(aosElements[0]).opacity;
      });
      
      console.log(`Page: ${path} | First [data-aos] opacity: ${aosOpacity}`);
    } catch (e) {
      console.log(`Error on ${path}: ${e.message}`);
    }
  }

  await browser.close();
})();
