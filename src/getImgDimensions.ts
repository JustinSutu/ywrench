const isFile = (url: string): boolean => /\.(jpg|jpeg|png|gif)$/i.test(url);

const getBase64Type = (base64: string) => base64.match(/^data:(image\/[a-z]+);base64,/)?.[1];

const getFileType = (url: string) => 'image/' + url.split('.').pop()?.toLowerCase();

type Dimensions = {
    width?: number;
    height?: number;
    url?: string;
    type?: string;
    size?: number;
};

const getBase64Dimensions = (base64: string): Promise<Dimensions> =>
    new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = function() {
        resolve({
            width: img.width,
            height: img.height,
            url: base64,
            type: getBase64Type(base64),
        });
    };

    img.onerror = function() {
        reject();
    };

    img.src = base64;
})

const getFileDimensions = (url: string): Promise<Dimensions> =>
new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = function () {
        resolve({
            width: img.width,
            height: img.height,
            url: img.src,
            type: getFileType(url),
        });
    };

    img.onerror = function () {
        reject();
    };

    img.src = url;
})

const getImgDimensions = (url: string) => isFile(url) ? getFileDimensions(url) : getBase64Dimensions(url);