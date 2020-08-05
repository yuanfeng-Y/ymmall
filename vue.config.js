module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // 'assets': '@/assets',
                // 'common': '@/common',
                // 'components': '@/components',
                // 'network': '@/network',
                // 'views': '@/views',
                'components': '@/components',
                'content': 'components/content',
                'common': 'components/common',
                'assets': '@/assets',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}