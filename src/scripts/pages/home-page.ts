import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
import {
  showCreateForm,
  createFile,
} from '../components/_form';
import { showUpdateForm, updateFile, deleteFile } from '../components/_form';
import { showUploadForm, uploadFile } from '../components/_form';

import { FileAndFolderList } from '../model/FileAndFolderList';

ready(() => {
  renderGrid();
  
  const z = new FileAndFolderList();
  z.showListForTable();
  showCreateForm();
  createFile(z);
  showUpdateForm();
  updateFile(z);
  deleteFile(z);
  showUploadForm();
  uploadFile(z);
});

// interface File {
//   id: number;
//   name: string;
//   fileType: string;
//   createdAt: Date;
//   createdBy: string;
//   modifiedAt: Date;
//   modifiedBy: string;
// }

// interface Folder {
//   id: number;
//   name: string;
//   files: File[];
//   subFolders: Folder[];
//   createdAt: Date;
//   createdBy: string;
//   modifiedAt: Date;
//   modifiedBy: string;
// }

// class FileSystem {
//   files: File[] = [];

//   folders: Folder[] = [];

//   addFile(file: File) {
//     this.files.push(file);
//   }

//   addFolder(folder: Folder) {
//     this.folders.push(folder);
//   }

//   showNewForm(option: string) {
//     if (option === 'file') {
//       // Code to show file form
//       console.log('Showing file form');
//     } else if (option === 'folder') {
//       // Code to show folder form
//       console.log('Showing folder form');
//     }
//   }
// }

// const fileSystem = new FileSystem();

// // Event listener for new button click
// // document
// //   .getElementById('new-button')
// //   .addEventListener('click', () => {
// //     const option = window.prompt(
// //       'Please choose an option (file/folder)',
// //     );
// //     fileSystem.showNewForm(option);
// //   });

// const file1: File = {
//   id: 1,
//   name: 'file1',
//   fileType: 'txt',
//   createdAt: new Date(),
//   createdBy: 'user1',
//   modifiedAt: new Date(),
//   modifiedBy: 'user1',
// };

// const file2: File = {
//   id: 2,
//   name: 'file2',
//   fileType: 'pdf',
//   createdAt: new Date(),
//   createdBy: 'user2',
//   modifiedAt: new Date(),
//   modifiedBy: 'user2',
// };

// const folder1: Folder = {
//   id: 1,
//   name: 'folder1',
//   files: [file1, file2],
//   subFolders: [],
//   createdAt: new Date(),
//   createdBy: 'user1',
//   modifiedAt: new Date(),
//   modifiedBy: 'user1',
// };

// console.log(folder1);
