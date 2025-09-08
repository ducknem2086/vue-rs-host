
    export type RemoteKeys = 'remote/export-app';
    type PackageType<T> = T extends 'remote/export-app' ? typeof import('remote/export-app') :any;