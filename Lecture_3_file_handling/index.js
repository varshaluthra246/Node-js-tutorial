import { readFile, writeFile, appendFile, mkdir } from 'fs/promises';

//read file content
const read_file = async (fileName) => {
    const data = await readFile(fileName, "utf-8");
    console.log(data);
}
// read_file("sample.txt");

//create file
const create_file = async (fileName, content) =>{
    await writeFile(fileName, content)
    console.log("File Created Successfully");
}

// create_file('ai.py', "This is a testing file");

//add content to file
const append_file = async (fileName, content) => {
    await appendFile(fileName, content);
    console.log("extra content added successfully");
}
// append_file ('ai.py', "This is the appended content to my file");

//create folder - directory
const create_dir = async (dir) => {
    await mkdir(dir, {recursive : true})
}
//--> src/components/java --> recursive call
// create_dir('components')
// create_dir('src/components/java');
create_dir('src/py');

