const path = require('path');
const { merge} = require('webpack-merge');

const nodeExternals = require('webpack-node-externals');

const config = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules[/\\](?!react-dnd|dnd-core)/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, 'babel.config.js'),
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.b64$/,
        use: 'raw-loader',
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      }
    ],
  },
  devtool: 'source-map',
  resolve: {
    modules: ['src', 'node_modules'],
  },
};

const clientConfig = merge(config, {
  entry: {
    BlogPostPage: './src/pages/BlogPostPage.js',
    BulkUploadPage: './src/pages/BulkUploadPage.js',
    CubeSamplePackPage: './src/pages/CubeSamplePackPage.js',
    CubeAnalysisPage: './src/pages/CubeAnalysisPage.js',
    CubeBlogPage: './src/pages/CubeBlogPage.js',
    CubeComparePage: './src/pages/CubeComparePage.js',
    CubeDeckPage: './src/pages/CubeDeckPage.js',
    CubeDecksPage: './src/pages/CubeDecksPage.js',
    CubeDeckbuilderPage: './src/pages/CubeDeckbuilderPage.js',
    CubeDraftPage: './src/pages/CubeDraftPage.js',
    CubeListPage: './src/pages/CubeListPage.js',
    CubeHistoryPage: './src/pages/CubeHistoryPage.js',
    CubeOverviewPage: './src/pages/CubeOverviewPage.js',
    CubePlaytestPage: './src/pages/CubePlaytestPage.js',
    DashboardPage: './src/pages/DashboardPage.js',
    GridDraftPage: './src/pages/GridDraftPage.js',
    DevBlog: './src/pages/DevBlog.js',
    ContactPage: './src/pages/ContactPage.js',
    DonatePage: './src/pages/DonatePage.js',
    InfoPage: './src/pages/InfoPage.js',
    FiltersPage: './src/pages/FiltersPage.js',
    DownTimePage: './src/pages/DownTimePage.js',
    ErrorPage: './src/pages/ErrorPage.js',
    CardSearchPage: './src/pages/CardSearchPage.js',
    TopCardsPage: './src/pages/TopCardsPage.js',
    CardPage: './src/pages/CardPage.js',
    CommentPage: './src/pages/CommentPage.js',
    LoginPage: './src/pages/LoginPage.js',
    RegisterPage: './src/pages/RegisterPage.js',
    LostPasswordPage: './src/pages/LostPasswordPage.js',
    NotificationsPage: './src/pages/NotificationsPage.js',
    PasswordResetPage: './src/pages/PasswordResetPage.js',
    UserAccountPage: './src/pages/UserAccountPage.js',
    UserBlogPage: './src/pages/UserBlogPage.js',
    UserDecksPage: './src/pages/UserDecksPage.js',
    UserSocialPage: './src/pages/UserSocialPage.js',
    UserCubePage: './src/pages/UserCubePage.js',
    ExplorePage: './src/pages/ExplorePage.js',
    SearchPage: './src/pages/SearchPage.js',
    RecentDraftsPage: './src/pages/RecentDraftsPage.js',
    VersionPage: './src/pages/VersionPage.js',
    LandingPage: './src/pages/LandingPage.js',
    AdminDashboardPage: './src/pages/AdminDashboardPage.js',
    NoticePage: './src/pages/NoticePage.js',
    ApplicationPage: './src/pages/ApplicationPage.js',
    CreatorsPage: './src/pages/CreatorsPage.js',
    MarkdownPage: './src/pages/MarkdownPage.js',
    EditArticlePage: './src/pages/EditArticlePage.js',
    ArticlePage: './src/pages/ArticlePage.js',
    ReviewContentPage: './src/pages/ReviewContentPage.js',
    ArticlesPage: './src/pages/ArticlesPage.js',
    EditVideoPage: './src/pages/EditVideoPage.js',
    VideoPage: './src/pages/VideoPage.js',
    VideosPage: './src/pages/VideosPage.js',
    EditPodcastPage: './src/pages/EditPodcastPage.js',
    PodcastPage: './src/pages/PodcastPage.js',
    PodcastsPage: './src/pages/PodcastsPage.js',
    PodcastEpisodePage: './src/pages/PodcastEpisodePage.js',
    BrowseContentPage: './src/pages/BrowseContentPage.js',
    LeaveWarningPage: './src/pages/LeaveWarningPage.js',
    BrowsePackagesPage: './src/pages/BrowsePackagesPage.js',
    PackagePage: './src/pages/PackagePage.js',
    FeaturedCubesQueuePage: './src/pages/FeaturedCubesQueuePage.js',
  },
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].js.map',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});

const serverConfig = merge(config, {
  target: 'node',
  entry: {
    'pages/DashboardPage': './src/pages/DashboardPage.js',
    'pages/DevBlog': './src/pages/DevBlog.js',
    'pages/Loading': './src/pages/Loading.js',
    'pages/BlogPostPage': './src/pages/BlogPostPage.js',
    'pages/BulkUploadPage': './src/pages/BulkUploadPage.js',
    'pages/CubeAnalysisPage': './src/pages/CubeAnalysisPage.js',
    'pages/CubeBlogPage': './src/pages/CubeBlogPage.js',
    'pages/CubeComparePage': './src/pages/CubeComparePage.js',
    'pages/CubeDeckPage': './src/pages/CubeDeckPage.js',
    'pages/CubeDeckbuilderPage': './src/pages/CubeDeckbuilderPage.js',
    'pages/CubeDecksPage': './src/pages/CubeDecksPage.js',
    'pages/CubeDraftPage': './src/pages/CubeDraftPage.js',
    'pages/CubeListPage': './src/pages/CubeListPage.js',
    'pages/CubeHistoryPage': './src/pages/CubeHistoryPage.js',
    'pages/CubeOverviewPage': './src/pages/CubeOverviewPage.js',
    'pages/CubePlaytestPage': './src/pages/CubePlaytestPage.js',
    'pages/CubeSamplePackPage': './src/pages/CubeSamplePackPage.js',
    'pages/GridDraftPage': './src/pages/GridDraftPage.js',
    'pages/ContactPage': './src/pages/ContactPage.js',
    'pages/InfoPage': './src/pages/InfoPage.js',
    'pages/DonatePage': './src/pages/DonatePage.js',
    'pages/DownTimePage': './src/pages/DownTimePage.js',
    'pages/FiltersPage': './src/pages/FiltersPage.js',
    'pages/ErrorPage': './src/pages/ErrorPage.js',
    'pages/CardSearchPage': './src/pages/CardSearchPage.js',
    'pages/TopCardsPage': './src/pages/TopCardsPage.js',
    'pages/CardPage': './src/pages/CardPage.js',
    'pages/CommentPage': './src/pages/CommentPage.js',
    'pages/LoginPage': './src/pages/LoginPage.js',
    'pages/RegisterPage': './src/pages/RegisterPage.js',
    'pages/LostPasswordPage': './src/pages/LostPasswordPage.js',
    'pages/NotificationsPage': './src/pages/NotificationsPage.js',
    'pages/PasswordResetPage': './src/pages/PasswordResetPage.js',
    'pages/UserAccountPage': './src/pages/UserAccountPage.js',
    'pages/UserBlogPage': './src/pages/UserBlogPage.js',
    'pages/UserDecksPage': './src/pages/UserDecksPage.js',
    'pages/UserSocialPage': './src/pages/UserSocialPage.js',
    'pages/UserCubePage': './src/pages/UserCubePage.js',
    'pages/ExplorePage': './src/pages/ExplorePage.js',
    'pages/SearchPage': './src/pages/SearchPage.js',
    'pages/RecentDraftsPage': './src/pages/RecentDraftsPage.js',
    'pages/VersionPage': './src/pages/VersionPage.js',
    'pages/LandingPage': './src/pages/LandingPage.js',
    'pages/AdminDashboardPage': './src/pages/AdminDashboardPage.js',
    'pages/NoticePage': './src/pages/NoticePage.js',
    'pages/ApplicationPage': './src/pages/ApplicationPage.js',
    'pages/CreatorsPage': './src/pages/CreatorsPage.js',
    'pages/MarkdownPage': './src/pages/MarkdownPage.js',
    'pages/ArticlePage': './src/pages/ArticlePage.js',
    'pages/EditArticlePage': './src/pages/EditArticlePage.js',
    'pages/ReviewContentPage': './src/pages/ReviewContentPage.js',
    'pages/ArticlesPage': './src/pages/ArticlesPage.js',
    'pages/VideoPage': './src/pages/VideoPage.js',
    'pages/EditVideoPage': './src/pages/EditVideoPage.js',
    'pages/VideosPage': './src/pages/VideosPage.js',
    'pages/PodcastPage': './src/pages/PodcastPage.js',
    'pages/EditPodcastPage': './src/pages/EditPodcastPage.js',
    'pages/PodcastsPage': './src/pages/PodcastsPage.js',
    'pages/PodcastEpisodePage': './src/pages/PodcastEpisodePage.js',
    'pages/BrowseContentPage': './src/pages/BrowseContentPage.js',
    'pages/LeaveWarningPage': './src/pages/LeaveWarningPage.js',
    'pages/BrowsePackagesPage': './src/pages/BrowsePackagesPage.js',
    'pages/PackagePage': './src/pages/PackagePage.js',
    'pages/FeaturedCubesQueuePage': './src/pages/FeaturedCubesQueuePage.js',
    'utils/Card': './src/utils/Card.js',
    'drafting/createdraft': './src/drafting/createdraft.js',
    'drafting/draftutil': './src/drafting/draftutil.js',
    'drafting/deckutil': './src/drafting/deckutil.js',
    'filtering/FilterCards': './src/filtering/FilterCards.js',
    'utils/Sort': './src/utils/Sort.js',
    'utils/Util': './src/utils/Util.js',
    'markdown/parser': './src/markdown/parser.js',
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  externals: [
    nodeExternals({
      allowlist: ['react-tag-input', 'react-dnd', 'dnd-core', 'react-dnd-html5-backend', 'react-dnd-touch-backend'],
    }),
  ],
});

module.exports = { clientConfig, serverConfig };
