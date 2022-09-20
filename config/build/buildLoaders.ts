import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export default function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const fileLoader = {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
          {
              loader: 'file-loader',
          },
      ],
  }

  const SVGLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      }

  const ccsLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path].[name]__[local]--[hash:base64:3]' : '[hash:base64:8]'
          },
          
        }
      },
      "sass-loader",
    ],
  }

    const tsLoader = 
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }

        
    

    return [tsLoader, ccsLoader, SVGLoader, fileLoader,];
}