"use strict";

const util = require("util");
const Ajv = require('ajv');

const ajv = new Ajv({
    meta: true,
    unknownFormats: 'ignore',
    allErrors: true
});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
ajv.addSchema(require('./models/info.json'));

module.exports = {

    validationJsonSchema: (jsonSchemaReceivedFromServer, validJsonSchema) => {

        const validate = ajv.compile(validJsonSchema);
        const valid = validate(jsonSchemaReceivedFromServer)

        if (!valid) {
            throw new Error("Error in validate JSON-Schema: " + JSON.stringify(validate.errors));
        }

    }

}