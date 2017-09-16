
import __ from 'iterate-js';

export class Welcome {

    columns = [
        { field: 'name', header: 'Name' },
        { field: 'value', header: 'Value' },
    ];
    rows = __.map(100, x => ({ name: 'fred', value: x }));

}
