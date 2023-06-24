import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: "/src",
            components: "/src/components",
            context: "/src/context",
            data: "/src/data",
            hooks: "/src/hooks",
            pages: "/src/pages",
        },
    },
});
