//create form
import { File } from '../model/file';
import { FileAndFolderList } from '../model/FileAndFolderList'
import { Folder } from '../model/folder';
const { v4: uuidv4 } = require('uuid');
let idRow: string;

export function showCreateForm() {
    const createBtn = document.getElementById("createFormBtn");
    if (createBtn) {
        createBtn.addEventListener("click", function (e) {
            e.preventDefault()
            document.getElementById('formCreateFile')!.style.display = 'block';
        }, true)
    }
}

export function createFile(a: FileAndFolderList) {
    const createBtn = document.getElementById("createFormButton");
    let dateTime = new Date()
    if (createBtn) {
        createBtn.addEventListener("click", function (e) {
            e.preventDefault()
            let uploadFileName = (document.getElementById('createFormInput') as HTMLInputElement);
            if (uploadFileName) {
                console.log(uploadFileName);
                const newFile = new Folder(uuidv4() as string, uploadFileName.value, '', dateTime, "Admin", dateTime, "Admin")
                a.upload(newFile)
                document.getElementById('formCreateFile')!.style.display = 'none';
            }
        }, true)
    }
}

//upload form
export function showUploadForm() {
    const uploadBtn = document.getElementById("uploadFormBtn");
    if (uploadBtn) {
        uploadBtn.addEventListener("click", function (e) {
            e.preventDefault()
            document.getElementById('formUploadFile')!.style.display = 'block';
        }, true)
    }
}

function getFileExtension(fileName: string) {
    const [file, extesion] = fileName.split(".");
    return extesion;
}
export function uploadFile(a: FileAndFolderList) {
    const uploadBtn = document.getElementById("uploadFormButton");
    let dateTime = new Date()
     if (uploadBtn) {
        uploadBtn.addEventListener("click", function (e) {
            e.preventDefault()
            let uploadFileName = (document.getElementById('uploadFormInput') as HTMLInputElement).files;
            if (uploadFileName) {
                console.log(uploadFileName);
                for (let index = 0; index < uploadFileName.length; index++) {
                    const element = uploadFileName[index];
                    const newFile = new File(uuidv4() as string, element.name, getFileExtension(element.name), dateTime, "Admin", dateTime, "Admin")
                    a.upload(newFile)
                    document.getElementById('formUploadFile')!.style.display = 'none';
                }
            }
        }, true)
    }
}

//update form
export function showUpdateForm() {
    const documents = new FileAndFolderList();
    documents.data.forEach((item, index) => {
        let updateBtn = document.getElementById(`editFileBtn-${index}`);
        updateBtn!.addEventListener("click", () => {
            idRow = item.FileId
            document.getElementById('formUpdateFile')!.style.display = 'block';
            let tmp = item.name.split(".");
            (document.getElementById('updateFormInput') as HTMLInputElement).value = tmp[0]
        });
    });
}

export function updateFile(a: FileAndFolderList) {
    let updateBtn = document.getElementById("updateFormButton");
    const input = document.querySelector("#updateFormInput");
    let dateTime = new Date()
    if (updateBtn) {
        updateBtn.addEventListener("click", function (e) {
            e.preventDefault();
            if (input && idRow)
                a.edit(idRow, (input as HTMLInputElement).value)
            window.location.reload();
            document.getElementById('formUpdateFile')!.style.display = 'none';
        }, true)
    }
}

export function deleteFile(a: FileAndFolderList) {
    let deleteBtn = document.getElementById("deleteFormButton");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", function (e) {
            e.preventDefault();
            if (idRow)
                a.delete(idRow)
            window.location.reload();
            document.getElementById('formUpdateFile')!.style.display = 'none';
        }, true)
    }
}