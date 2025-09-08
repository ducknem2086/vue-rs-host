import { ModuleFederationRuntimePlugin } from '@module-federation/enhanced/runtime';

export default function (): ModuleFederationRuntimePlugin {
    return {
        name: 'custom-plugin-build',
        beforeInit(args) {
            console.log('[build time inject] beforeInit: ', args);
            return args;
        },

        beforeLoadShare(args) {
            console.log('[build time inject] beforeoadShare: ', args);
            return args;
        },
        beforeBridgeRender(){

        }
    };
}