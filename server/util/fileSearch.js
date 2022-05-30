const fs = require('fs');

/**
 * This class represents basic filesystem and swagger files search functionality
 */

class FileSearch {
    /**
     * This function recursively checks for '.swagger.js' files in the services directory
     */

    static getSwaggerFiles (dir) {
        var results = [];
        var list = fs.readdirSync(dir);
        list.forEach( (file) => {
            file = `${dir}/${file}`;
            var stat = fs.statSync(file);
            if (stat && stat.isDirectory()) {
                results = results.concat(FileSearch.getSwaggerFiles(file));
            } else if (file.indexOf('.swagger.js') !== -1) {
                results.push(file);
            } else {
                return;
            }
        });
        return results;
    }
}

module.exports = FileSearch;
