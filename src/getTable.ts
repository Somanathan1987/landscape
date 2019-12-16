import { Application } from './Application';
import { Axes } from './Axes';
import { Cell } from './Cell';

/**
 * Prepares application data for rendering according to a selected set of axes. 
 * @param applications The application data to prepare.
 * @param axes The axes to use.
 */
export function getTable(applications: Array<Application>, axes: Axes): Array<Array<Cell>> {
    // denormalise the underlying application data
    const flattened: Array<{ name: string, x: string, y: string, status: string }> = [];

    for (const app of applications) {
        for (const use of app.usage) {
            flattened.push({ name: app.name, x: use[axes.xDimension], y: use[axes.yDimension], status: use.status });
        }
    }

    // build the resultant table, a 3D array af rows (y), columns (x), and 0..n apps, including the x and y axis as row 0 and column 0 respectively
    const xAxis = [[new Cell("", "xAxis")], ...axes.xValues.map(x => [new Cell(x, "xAxis")])];
    const interim = [xAxis, ...axes.yValues.map(y => [[new Cell(y, "yAxis")], ...axes.xValues.map(x => flattened.filter(a => a.x === x && a.y === y).map(a => new Cell(a.name, a.status)))])];

    // create blank apps and split rows as necessary
    for (let iY = interim.length; iY--;) {
        // where there are no apps in a cells insert an empty cell object
        for (let iX = interim[iY].length; iX--;) {
            if (interim[iY][iX].length === 0) {
                interim[iY][iX].push(new Cell("", "empty"));
            }
        }

        // where there are multiple apps in a cell, expand the rows
        const counts = interim[iY].map(cell => cell.length || 1);
        const split = counts.reduce((a, b) => leastCommonMultiple(a, b), 1);

        if (split > 1) {
            interim.splice(iY, 1, ...range(split).map(y => counts.map((c, x) => interim[iY][x].length === 0 ? [] : [interim[iY][x][Math.floor(y / split * c)].clone(split)])));
        }
    }

    // create the final result structure
    const result = interim.map(row => row.map(col => col[0]));

    // merge adjacent cells
    for (let iY = result.length; iY--;) {
        for (let iX = result[iY].length; iX--;) {
            const app = result[iY][iX];
            let merged = false;

            // try merge with cell above first
            if (!merged && iY) {
                const above = result[iY - 1][iX];

                if (above.name === app.name && above.style === app.style && above.colspan === app.colspan) {
                    above.rowspan += app.rowspan;
                    above.height += app.height;
                    result[iY].splice(iX, 1);
                    merged = true;
                }
            }

            // otherwise try cell to left
            if (!merged && iX) {
                const left = result[iY][iX - 1];

                if (left.name === app.name && left.style === app.style && left.rowspan === app.rowspan) {
                    left.colspan += app.colspan;
                    result[iY].splice(iX, 1);
                }
            }
        }
    }

    return result;
}

function range(n: number): Array<number> {
    const result: Array<number> = [];

    for (let i = 0; i < n; ++i) {
        result.push(i);
    }

    return result;
}

function leastCommonMultiple(a: number, b: number): number {
    return (a * b) / greatestCommonFactor(a, b);
}

function greatestCommonFactor(a: number, b: number): number {
    return b ? greatestCommonFactor(b, a % b) : a;
}