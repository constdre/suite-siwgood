const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const devMode = process.env.NODE_ENV !== "production"
// -----------------------------------------------------
// Set environment flag defaults
// -----------------------------------------------------
const webpackConfigDefaults = { mode: 'production' }

// -----------------------------------------------------
// Helper function for switching between dev and prod
// -----------------------------------------------------
function modeConfig(env) {
    const configModes = {
        development: {
            devServer: {
                compress: true,
                hot: true,
                static: [
                    // Skip transpiling static files and access them directly.
                    {
                        directory: path.join(__dirname, './src/assets'),
                        publicPath: '/assets'
                    }
                ],
            },
            devtool: 'source-map',
            plugins: [
                new HtmlWebpackPlugin({
                    title: 'React Development',
                    template: './src/index.html'
                })
            ]
        },
        production: {
            devtool: 'source-map',
            optimization: {
                minimize: true,
                minimizer: [new TerserPlugin()]
            },
            plugins: [
                // Extract css into output folder
                new MiniCssExtractPlugin(),
                // Generate index.html in output and include css from MiniCssExtractPlugin
                new HtmlWebpackPlugin({
                    filename: './dist/index.html',
                    title: 'Siwgood Suite',
                    template: './src/index.html'
                })
            ]
        }
    };
    return configModes[env.mode];
}
// -----------------------------------------------------
// Helper function for all other configuration defaults
// -----------------------------------------------------
function defaultConfig(env) {
    return {
        mode: env.mode,
        entry: {
            app: './src/index.tsx'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|mjs)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader'
                    }
                },
                // css-loader: returns css file as a string
                // style-loader: injects the css inside <head> in <style> blocks
                {
                    test: /\.css$/,
                    // use: ['style-loader', 'css-loader']
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.png/,
                    //https://webpack.js.org/guides/asset-modules/
                    type: 'asset/resource'
                }
            ]
        },
        resolve: {
            alias: {
                'suite-siwg': path.resolve(__dirname, 'src/siwgood-components')
            },
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
            // Needed to ignore when using moment.js
            new webpack.IgnorePlugin({
                resourceRegExp: new RegExp(/^\.\/locale$/),
                contextRegExp: /moment$/
            }),
        ],
        performance: {
            hints: false
        }
    };
}

// ---------------------------------------------------
// Export the final merged configurations to webpack
// ---------------------------------------------------
module.exports = (env = webpackConfigDefaults) => {
    return merge(defaultConfig(env), modeConfig(env));
};

