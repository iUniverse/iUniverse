
export class IuniCatStyle {
    private _timePeriod!: string;
    private _leftEyeWhite!: string;
    private _leftEye!: string;
    private _rightEyeWhite!: string;
    private _rightEye!: string;
    private _nose!: string;
    private _body!: string;
    private _background!: string;

    /* 왼쪽눈 흰자 */
    drawLeftEyeWhite(color: string): string {
        if(this._timePeriod !== 'dawn'){
            return `<path data-name="iuni-cat-left-eye-white" 
                    d="M16.119 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" 
                    style="fill:${color}"></path>`;
        }
        return `<path></path>`;
    }

    /* 오른쪽눈 흰자 */
    drawRightEyeWhite(color: string): string {
        if(this._timePeriod !== 'dawn'){
            return `<path data-name="iuni-cat-right-eye-white" d="M31.882 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" style="fill:${color}"></path>`;
        }
                
        return `<path></path>`;
    }

    /* 왼쪽 동공 */
    drawLeftEye(color: string): string {
        if (this._timePeriod === 'morning') {
            return `<path data-name="패스 10980" d="M74.288 33.475c-.655 0-1.187-2.531-1.187-3.187s.532-3.186 1.187-3.186 1.186 2.531 1.186 3.186-.531 3.187-1.186 3.187" transform="translate(-58.17)" style="fill:#020918"></path>
                    <g data-name="그룹 14148" style="clip-path:url(#6trxzx9fjb)" transform="translate(11 25)">
                        <path data-name="패스 10969" d="M0 5.3a5.3 5.3 0 0 1 10.6 0" style="fill:#7079ff"></path>
                    </g>`;
        }
        else if (this._timePeriod === 'afternoon') {
            return `<path data-name="패스 10980" d="M74.288 33.475c-.655 0-1.187-2.531-1.187-3.187s.532-3.186 1.187-3.186 1.186 2.531 1.186 3.186-.531 3.187-1.186 3.187" transform="translate(-58.17)" style="fill:#020918"></path>`;
        }
        else if (this._timePeriod === 'night') {
            return `<path data-name="패스 10966" d="M16.119 33.153a2.865 2.865 0 1 1 2.864-2.865 2.865 2.865 0 0 1-2.864 2.865" style="fill:#020918"></path>
                <g data-name="그룹 14148" style="clip-path:url(#6trxzx9fjb)" transform="translate(11 25)">
                    <path data-name="패스 10969" d="M0 5.3a5.3 5.3 0 0 1 10.6 0" style="fill:#7079ff"></path>
                </g>`;
        }
        else if (this._timePeriod === 'dawn') {
            return `<path data-name="사각형 5955" transform="translate(10.817 29.898)" style="fill:#fff" d="M0 0h10.604v1.051H0z"></path>`
        }

        /* dinner */
        return `<path data-name="iuni-cat-left-eye" d="M16.119 33.153a2.865 2.865 0 1 1 2.864-2.865 2.865 2.865 0 0 1-2.864 2.865" style="fill:${color}"></path>`;
    }

    /* 오른쪽 동공 */
    drawRightEye(color: string): string {
        if (this._timePeriod === 'morning') {
            return `<path data-name="패스 10983" d="M90.051 33.475c-.655 0-1.187-2.531-1.187-3.187S89.4 27.1 90.051 27.1s1.186 2.531 1.186 3.186-.531 3.187-1.186 3.187" transform="translate(-58.17)" style="fill:#020918"></path>
                <g data-name="그룹 14149">
                    <g data-name="그룹 14148" style="clip-path:url(#6trxzx9fjb)" transform="translate(26.58 24.773)">
                        <path data-name="패스 10969" d="M0 5.3a5.3 5.3 0 0 1 10.6 0" style="fill:#7079ff"></path>
                    </g>
                </g>`;
        }
        else if (this._timePeriod === 'afternoon') {
            return `<path data-name="패스 10983" d="M90.051 33.475c-.655 0-1.187-2.531-1.187-3.187S89.4 27.1 90.051 27.1s1.186 2.531 1.186 3.186-.531 3.187-1.186 3.187" transform="translate(-58.17)" style="fill:#020918"></path>`;
        }
        else if (this._timePeriod === 'night') {
            return `<path data-name="패스 10968" d="M31.882 33.153a2.865 2.865 0 1 1 2.864-2.865 2.865 2.865 0 0 1-2.864 2.865" style="fill:#020918"></path>
            <g data-name="그룹 14149">
                <g data-name="그룹 14148" style="clip-path:url(#6trxzx9fjb)" transform="translate(26.58 24.773)">
                    <path data-name="패스 10969" d="M0 5.3a5.3 5.3 0 0 1 10.6 0" style="fill:#7079ff"></path>
                </g>
            </g>`;
        }
        else if (this._timePeriod === 'dawn') {
            return `<path data-name="사각형 5956" transform="translate(26.579 29.898)" style="fill:#fff" d="M0 0h10.604v1.051H0z"></path>`;
        }

        /* dinner */
        return `<path data-name="iuni-cat-right-eye" d="M31.882 33.153a2.865 2.865 0 1 1 2.864-2.865 2.865 2.865 0 0 1-2.864 2.865" style="fill:${color}"></path>`;
    }

    /* 코 */
    drawNose(color: string): string {
        return `<path data-name="iuni-cat-nose" d="m24 37.624-1.39-1.54h2.78z" style="fill:${color}"/>`;
    }

    /* 몸통 */
    drawBody(color: string): string {
        return `<path data-name="iuni-cat-body" d="M33.945 10.305h-2.42l-3.337 6.936h-8.375l-3.337-6.936h-2.421S5.275 22.35 1.391 32.058a24 24 0 0 0 45.219 0c-3.885-9.708-12.665-21.753-12.665-21.753" style="fill:${color}"/>`;
    }

    /* 백그라운드 */
    drawBackground(color: string): string {
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
                resolve(`<svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48">
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

        //path?.addEventListener('click', () => this.testEvent());
    }

    //여기서부터 계속 작업 시작하면 됨

    /* 
    6am ~ 9am : morning
    9am ~ 2pm : afternoon
    2pm ~ 6pm : dinner
    6pm ~ 10pm : night
    10pm ~ 6am : dawn
    */
    get timePeriod(): string {
        return this._timePeriod;
    }

    set timePeriod(timePeriod: string) {
        this._timePeriod = timePeriod;
    }

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