import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default {
    define: {
        "global": {},
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                404: resolve(__dirname, '404.html'),
            }
        }
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
            reloadOnPartialChange: true
        }),
        ViteMinifyPlugin({}),
        ViteImageOptimizer({
            jpg: {
                quality: 80,
            },
            webp: {
                quality: 80,
            },
        }),
    ],
};