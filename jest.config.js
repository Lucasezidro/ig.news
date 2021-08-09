module.exports = {

    // Arquivos que vão ser ignorados pelo teste
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],

    // Configuração dos arquivos que vão ser executados pelo teste
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTestes.ts"
    ],

    // expressão regular que diz: para todos os arquivos com esses finais eu vou transformar em algo
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },

    // indica em que ambiente nossos arquivos esão executando
    testEnvironment: "jsdom",

    moduleNameMapper: {
        "\\.(scss|css|sass)$": "identity-obj-proxy"
    }
}