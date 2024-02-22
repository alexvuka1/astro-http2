import solid from '@astrojs/solid-js';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable Solid to support Solid JSX components.
  output: 'server',
  integrations: [solid()],
  vite: {
    plugins: [basicSsl()],
  },
});
