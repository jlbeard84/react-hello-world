import React from "react";

import { Board } from "./";

export class Game extends React.Component {

    render() {
        return (
            <div className="gane">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{ /* status */ }</div>
                    <ol>{ /* todo */ }</ol>
                </div>
            </div>
        );
    }
}