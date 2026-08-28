export interface PrintHTMLConfig {
    title?: string;
    printCallback?: (iframeWindow: Window) => void;
    errorCallback?: (message: string) => void;
    hideIframe?: boolean;
    removeIframe?: boolean;
}

export function printHTML(htmlDoc: string, config?: PrintHTMLConfig): void;
