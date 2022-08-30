import BaseModel from '../../../src/data/Model.mjs';

/**
 * @class Neo.examples.table.covid.Model
 * @extends Neo.data.Model
 */
class Model extends BaseModel {
    static getConfig() {return {
        className: 'Neo.examples.table.covid.Model',

        fields: [{
            name: 'active',
            type: 'Integer'
        }, {
            name: 'cases',
            type: 'Integer'
        }, {
            name: 'casesPerOneMillion',
            type: 'Integer'
        }, {
            name: 'country',
            type: 'String'
        }, {
            name: 'countryInfo',
            type: 'Object' // _id, flag, iso2, iso3, lat, long
        }, {
            name: 'critical',
            type: 'Integer'
        }, {
            name: 'deaths',
            type: 'Integer'
        }, {
            name: 'index',
            type: 'Integer'
        }, {
            name: 'infected', // renderer parses to % of population
            type: 'Integer'
        }, {
            name: 'recovered',
            type: 'Integer'
        }, {
            name: 'tests',
            type: 'Integer'
        }, {
            name: 'testsPerOneMillion',
            type: 'Integer'
        }, {
            name: 'todayCases',
            type: 'Integer'
        }, {
            name: 'todayDeaths',
            type: 'Integer'
        }]
    }}
}

Neo.applyClassConfig(Model);

export default Model;
