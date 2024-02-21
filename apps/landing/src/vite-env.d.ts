/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly LIQPAY_PUBLIC_KEY: string
    readonly LIQPAY_PRIVATE_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
