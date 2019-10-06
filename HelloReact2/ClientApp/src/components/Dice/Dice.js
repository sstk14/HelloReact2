import React, { Component } from 'react';

export class Dice extends Component {

    isDiceNumPage = false;
    num = 0;

    style = {
        color: "red"
    };

    constructor(props) {
        super(props);
        var pathname = window.location.pathname;

        
        //サイコロのページ？
        var baseUrlIdx = pathname.indexOf("/dice/");
        if (baseUrlIdx >= 0) {
            this.num = pathname.slice(baseUrlIdx + "/dice/".length, pathname.length);
            if (this.num.length > 0) {
                this.isDiceNumPage = true;
            } else {
                //トップページ
                this.isDiceNumPage = false;
            }
        }
    }
    render() {
        
        if (this.isDiceNumPage == true) {
            const diceNum = this.showDicePage(this.num);
            return (<div>
                    <h1 style={this.style}>{diceNum}</h1>
                        <p><a href="/dice/">サイコロページの案内へ戻る</a></p>
                    </div>);
        } else {
            return (<div>
                        <h1>サイコロページの案内</h1>
                        <p><a href="/dice/6">6面体サイコロ</a></p>
                        <p><a href="/dice/12">12面体サイコロ</a></p>
                    </div>
            );
        }
    }

    /**
     * サイコロ用のページにアクセスがあった時のページ
     */
    showDicePage(num) {
        var randomNum = Math.floor(Math.random() * num) + 1;
        return randomNum;
    }
}