import fs from 'fs';
const sourcePath = './dist/index.html'; // Path to the source file within the 'dist' folder
const destnationPath = './dist/404.html'; // Path to the des􏰅na􏰅on file within the 'dist' folder
fs.copyFile(sourcePath, destnationPath, (err) => { if (err) {
console.error('Error copying file:', err);

} else {
console.log('File copied successfully!');
}
});