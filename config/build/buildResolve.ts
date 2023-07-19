import path from "path";
import webpack from "webpack";

export function buildResolve(): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@assets': path.resolve('./src/assets'),
            '@components': path.resolve('./src/components'),
            '@pages': path.resolve('./src/pages'),
            '@contexts': path.resolve('./src/contexts'),
            '@routes': path.resolve('./src/routes'),
            '@hooks': path.resolve('./src/hooks'),
            '@utils': path.resolve('./src/utils'),
            '@services': path.resolve('./src/services'),
            '@src': path.resolve('./src'),
          },
    }
}