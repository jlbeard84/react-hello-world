import React from "react";

import { Square } from "./";

export class Board extends React.Component {
    
    renderSquare(i, isWinningNum) {
        return (
            <Square 
                key={i}
                isWinningSquare={isWinningNum}
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {

        const rows = [0, 1, 2];
        const cols = [0, 1, 2];
        const winningSquares = this.props.winningSquares;
        
        return (
            <div>
            {rows.map((rowNum, index) => {
                return (
                    <div className="board-row" key={rowNum}>
                        {cols.map((colNum, index) => {
                            const boardNum = (3 * rowNum) + colNum;
                            let isWinningNum = false;

                            if (winningSquares) {
                                for (let i = 0; i < winningSquares.length; i++) {
                                    if (boardNum === winningSquares[i]) {
                                        isWinningNum = true;
                                    }
                                }
                            }

                            return (
                                this.renderSquare(boardNum, isWinningNum)
                            );
                        })}       
                    </div>
                );
            })}
            </div>
        );
    }
}