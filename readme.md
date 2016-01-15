A command line tool that takes a public google spreadsheet URL and outputs a nice little JSON file.

This probably exists somewhere on NPM but I wanted to learn how to write a CLI tool with Node.

##Installation
From the root project directory simply return
`npm link`
This will put the tool in your PATH, allowing you to call it anywhere.

I haven't (yet) published this on NPM. If I do, then you won't even have to clone this repo. You'll simply run:
`npm install -g dl-docs`

##Usage
First make your google spreadsheet public on the web. Do that by "publishing" the spreadsheet on the web (file > publish to the web) *and* sharing the sheet with the public.

You

In the terminal, simply run:

    dldoc --key <spreadsheet URL> --output <filename>`
An example:

    dldoc --key https://docs.google.com/spreadsheets/u/1/d/1jqcH2h3ka0Mzrcp75xHvlt4d2onds0GMqJzsRvgwcyI/edit#gid=0 --output myFile

This will create a file called `myFile.json` in your current directory.

Easy as that!

##Options
- You can use short flags like `-k` in place of `--key` or `-o` in place of `--output`
- You can specify the keys in any order
- You can specify the full google spreadsheet URL, or the proper "key" which will look something like

        1jqcH2h3ka0Mzrcp75xHvlt4d2onds0GMqJzsRvgwcyI
    Both are fine.

- You do not have to specify a filename (the key is always necessary)
