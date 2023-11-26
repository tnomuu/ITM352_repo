const fs=require('fs');

let filename = __dirname + '/user_data.json';


if (fs.existsSync(filename)) {
    let data = fs.readFileSync(filename, 'utf-8');
    let users_reg_data = JSON.parse(data);

    console.log(users_reg_data);
} else {
    console.log(`The file name ${filename} does not exist`);
}