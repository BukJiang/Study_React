import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    // 插件
    plugins: [
        react(),
        tsconfigPaths(),
    ],

    // css模块化
    css: {
        modules: {
            scopeBehaviour: "local",
            generateScopedName: "[folder]__[local]___[hash:base64:5]",
        },
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                additionalData: `@import "${__dirname}/src/styles/All.module.less";`
            },
        },
        // 在开发过程中是否启用 css 的 sourcemap
        devSourcemap: true,
    },

    // 服务器配置
    server: {
        // 指定开发服务器端口；如果端口被占用，vite 会自动尝试下一个可用端口；
        port: 20000, // 默认：5173； 类型： number

        // 当端口被占用时，是否直接退出；
        strictPort: false, // 默认：false； 类型： boolean;
    },
})
