module.exports = {
    devServer: (devServerConfig) => {
        devServerConfig.compress = true;
        devServerConfig.disableHostCheck = true;
        return devServerConfig;
    },
};
