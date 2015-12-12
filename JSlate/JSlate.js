/**
 * Created by Geoffroy on 10/4/2015.
 */
var jsf = require('json-schema-faker');
var dir = require('node-dir');
var fs = require('fs');
var jsrender = require('node-jsrender');
var path = require('path');
var titlize = require('to-title-case');

var domain = "https://imuze.io"
var languages = ['shell', 'json', 'python', 'ruby'];
var package_name = "imusdk";
var indexDotMd = '';
jsrender.helpers({displayJSON: function(json){ return JSON.stringify(json, null, 4);}});

languages.forEach(function(language){
    jsrender.loadFileSync('#lang'+language, './templates/languages/'+language+'.jsr');
});
jsrender.loadFileSync('#section', './templates/section.jsr');
jsrender.loadFileSync('#moduleIntro', './templates/module-intro.jsr');
jsrender.loadFileSync('#mainIntro', './templates/main-intro.jsr');

function jslate() {
    indexDotMd += jsrender.render['#mainIntro']({
        languages: languages,
    });

    indexDotMd += generate_modules();

    fs.writeFile(__dirname + "/source/index.md", indexDotMd, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("index.md file has been saved !!");
    });

}

function dirList(dir) {
  return fs.readdirSync(dir).reduce(function(list, file) {
    var name = path.join(dir, file);
    var isDir = fs.statSync(name).isDirectory();
    return list.concat(isDir ? name : []);
  }, []);
}

function generate_modules() {
    var self = this;
    self.result = "";

    self.generate = function (dir) {
        self.result += generate_module(dir);
    };
    dirList(__dirname + "/schemas").forEach(generate);



    console.log(self.result);
    return self.result;
}

function generate_module(module_dir) {
    var self = this;
    var module_name = path.basename(module_dir);
    self.result = "";
    self.result += generate_module_intro(module_dir);

    self.readFileCallback = function (input_schema_path) {
        console.log("ss");

        console.log(input_schema_path);
        if (input_schema_path.match("\.input\.json$")) {
            console.log(input_schema_path);
            var input_schema_path = input_schema_path;
            var output_schema_path = output_path(input_schema_path);

            var input_example_path = example_path(input_schema_path);
            var output_example_path = example_path(output_schema_path);

            var input_schema = file2json(input_schema_path);
            var output_schema = file2json(output_schema_path);

            var input_example = generate_example(input_example_path, input_schema);
            var output_example = generate_example(output_example_path, output_schema);

            var markdown = generate_markdown(module_name, input_schema, input_example, output_example);
            self.result += markdown;
        }

    };

    fs.readdirSync(module_dir).map(function (dvar) {
        return path.join(module_dir, dvar)
    }).forEach(readFileCallback);
    return self.result;
}

function generate_module_intro(module_dir) {
    var res = jsrender.render['#moduleIntro']({
        module_name: titlize(path.basename(module_dir)),
    });

    return res;
}

function generate_markdown(module_name, input_schema, input_example, output_example) {
    //    console.log(jsrender);

    languages_info = languages.map(function(value){
        return {
            name: value,
            input_example: input_example,
            output_example: output_example,
            package_name: package_name,
            ressource: module_name,
            api_key: "API_KEY_EXAMPLE",
            domain: domain,
            route: input_schema.route,
            method: input_schema.method || "GET"
        }
    })

    var res = jsrender.render['#section']({
        section_name: input_schema.title,
        json_example: JSON.stringify(output_example, null, 4),
        domain: domain || "",
        schema: input_schema,
        languages: languages_info
    });
    //    console.log(res);
    return res;
}

function generate_example(exampleFileName, schema) {
    var res = new jsf(schema);
    console.log("creating"+exampleFileName);
    fs.writeFile(exampleFileName, JSON.stringify(res, null, 4), 'utf-8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    return res;
}

function example_path(schema_path) {
    return schema_path.replace("schemas", "examples");
}

function output_path(input_schema_path) {
    return input_schema_path.replace(".input.json", ".output.json");
}

function file2json(file_name){
    return JSON.parse(fs.readFileSync(file_name).toString());
}

jslate();
