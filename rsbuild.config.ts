//rsbuild.config.ts
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { pluginVue } from "@rsbuild/plugin-vue";
import { defineConfig } from "@rsbuild/core";
import * as path from "path";
//
// const mf = createInstance({
//     name: 'host',
//     remotes: [
//         {
//             name: 'remote1',
//             entry: 'http://localhost:3001/mf-manifest.json',
//         },
//     ],
// });
//
// mf.loadRemote('remote1');


export default defineConfig({
    output: {
        assetPrefix: 'auto',
        distPath: {
            root: 'dist'
        }
    },
    plugins: [
        pluginVue(
            {
                splitChunks: {
                    router: false,
                    vue: false
                }
            }
        ),
        pluginModuleFederation({
            name: 'host',
            shareStrategy: 'version-first',
            remotes: {
                remote1: 'remote1@http://localhost:3001/mf-manifest.json',
            },
            shared: {
                vue: {
                    eager: true,
                    singleton: true,
                },
                'vue-router': {
                    eager: true,
                    singleton: true,
                },
            },
            runtimePlugins: [path.resolve(__dirname, './runtime.plugin.ts')],
        }),
    ],
});