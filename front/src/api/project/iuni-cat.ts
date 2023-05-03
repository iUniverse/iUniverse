
export class IuniCatStyle {
    
    private _leftEyeWhite!: string;
    private _leftEye!: string;
    private _rightEyeWhite!: string;
    private _rightEye!: string;
    private _nose!: string;
    private _body!: string;
    private _background!: string;

    testEvent() {
        alert("엄?");
    }
    /* 왼쪽눈 흰자 */
    drawLeftEyeWhite(color: string): string {
        return `<path data-name="iuni-cat-left-eye-white" 
                    d="M16.119 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" 
                    style="fill:${color}" ref=${this.testRef}></path>`;
    }

    /* 오른쪽눈 흰자 */
    drawRightEyeWhite(color: string): string {
        return `<path data-name="iuni-cat-right-eye-white" d="M31.882 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" style="fill:${color}"></path>`;
    }

    /* 왼쪽 동공 */
    drawLeftEye(color: string): string {
        return `<path data-name="iuni-cat-left-eye" d="M16.119 33.153a2.865 2.865 0 1 1 2.864-2.865 2.865 2.865 0 0 1-2.864 2.865" style="fill:${color}"></path>`;
    }

    /* 오른쪽 동공 */
    drawRightEye(color: string): string {
        return `<path data-name="iuni-cat-right-eye" d="M31.882 33.153a2.865 2.865 0 1 1 2.864-2.865 2.865 2.865 0 0 1-2.864 2.865" style="fill:${color}"></path>`;
    }

    /* 코 */
    drawNose(color: string, hour: number | undefined): string {
        return `<path data-name="iuni-cat-nose" d="m24 37.624-1.39-1.54h2.78z" style="fill:${color}"/>`;
    }

    /* 몸통 */
    drawBody(color: string, hour: number | undefined): string {
        return `<path data-name="iuni-cat-body" d="M33.945 10.305h-2.42l-3.337 6.936h-8.375l-3.337-6.936h-2.421S5.275 22.35 1.391 32.058a24 24 0 0 0 45.219 0c-3.885-9.708-12.665-21.753-12.665-21.753" style="fill:${color}"/>`;
    }

    /* 백그라운드 */
    drawBackground(color: string, hour: number | undefined): string {
        return `<path data-name="iuni-cat-background" d="M24 0A24 24 0 1 1 0 24 24 24 0 0 1 24 0" style="fill:${color}"/>`;
    }

    defaultDraw() {
        return new Promise<string>((resolve, reject) => {
            try {
                resolve(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 48 48">
                    ${this.background}
                    ${this.body}
                    ${this.nose}
                    ${this.leftEyeWhite}
                    ${this.leftEye}
                    ${this.rightEyeWhite}
                    ${this.rightEye}
                </svg>`);
            }
            catch (e) {
                reject('Draw Cat Error');
            }
        })
    }

    draw() {
        return new Promise<string>((resolve, reject) => {
            try {
                resolve(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                    ${this.background}
                    ${this.body}
                    ${this.nose}
                    ${this.leftEyeWhite}
                    ${this.leftEye}
                    ${this.rightEyeWhite}
                    ${this.rightEye}
                </svg>`);
            }
            catch (e) {
                reject('Draw Cat Error');
            }
        })
    }

    injectEvent() {
        //const path = document.querySelector(`path[data-name='iuni-cat-left-eye-white']`);
        //console.log(path);
        
        //path?.addEventListener('click', () => this.testEvent());
    }

    //여기서부터 계속 작업 시작하면 됨
    get leftEyeWhite(): string {
        return this._leftEyeWhite;
    }

    set leftEyeWhite(color: string) {
        this._leftEyeWhite = this.drawLeftEyeWhite(color);
    }

    get leftEye(): string {
        return this._leftEye;
    }

    set leftEye(color: string) {
        this._leftEye = this.drawLeftEye(color);
    }

    get rightEyeWhite(): string {
        return this._rightEyeWhite;
    }

    set rightEyeWhite(color: string) {
        this._rightEyeWhite = this.drawRightEyeWhite(color);
    }

    get rightEye(): string {
        return this._rightEye;
    }

    set rightEye(color: string) {
        this._rightEye = this.drawRightEye(color);
    }

    get nose(): string {
        return this._nose;
    }

    set nose(color: string) {
        this._nose = this.drawNose(color, 0);
    }

    get body(): string {
        return this._body;
    }

    set body(color: string) {
        this._body = this.drawBody(color, 0);
    }

    get background(): string {
        return this._background;
    }

    set background(color: string) {
        this._background = this.drawBackground(color, 0);
    }
}