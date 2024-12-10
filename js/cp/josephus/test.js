'use strict';

const avj = new require('ajv')({
    schema: {
        request : require('./request.json'),
    }
})
const validationError = require('validation-error').validationError;
const riskData = require('./riskData.js');
const rdmriskdata = require('./rdmriskdata.js');

module.exports = async(req, res , next ) => {
 try {
    if(!avj.validate('request', req.body)) {
        throw validationError(avj.errors);
    }
    const {rdmEnabled} = FRM_SERVER.config.get('features');
    if(rdmEnabled) {
        const response = await rdmriskdata(req.body);
        res.status(200).json(response);
    }else{  
        const response = await riskData(req.body);
        res.status(200).json(response);

    }
 }catch(err) {
     next(err);
 }


 module.exports.loadAsyncSchema = async config => {
     const {riskOutputTypeEnum, contextEnum} = config.get('schema');
     avj.addSchema([riskOutputTypeEnum, contextEnum]);
 }
}