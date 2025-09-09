import { ModuleFederationRuntimePlugin } from '@module-federation/enhanced/runtime';

export default function (): ModuleFederationRuntimePlugin {
    return {
        name: 'custom-plugin-build',
        beforeInit(args) {
            console.log('[build time inject] beforeInit: ', args);
            return args;
        },
        onLoad(args) {
            console.log('[build time inject] onLoad: ', args);
            return args;
        },
        beforePreloadRemote(args) {
            console.log('[build time inject] beforePreloadRemote: ', args);
        }
    };
}