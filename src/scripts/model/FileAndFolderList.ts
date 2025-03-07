import { showUpdateForm } from "../components/_form";
import { FileFormat } from "../interfaces/FileFormat";
// const axios = require('axios');


export class FileAndFolderList {
    data!: Array<FileFormat>;
    constructor() {
        this.data = this.setData()
    }
    private setData(): Array<FileFormat> {
        let dataInStorage = localStorage.getItem('fileListData')
        // axios.get('https://localhost:44331/api/Files')
        //     .then(function (response: any) {
        //         // handle success
        //         console.log(response);
        //     })
        //     .catch(function (error: any) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .then(function () {
        //         // always executed
        //     });
        if (dataInStorage) {
            return JSON.parse(dataInStorage)
        }
        return []
    }

    public showListForTable() {
        let tbody: any = document.getElementById('tbodyDataFileList');
        let _tr = ''
        let index = 0;
        this.data.forEach(element => {
            _tr += `
            <tr id="${element.FileId}">
                <td data-label="File Type"><i class="fa-solid"></i></td>
                <td data-label="Name" class="row-data"><span class="new-item"><i
                class="fa-brands fa-yelp"></i></span> ${element.name} </td>
                <td data-label="Modified At" class="row-data td-second">${element.modifiedAt}</td>
                <td data-label="Modified By" class="row-data td-second"> ${element.modifiedBy}</td>
                <td data-label="Created At" class="row-data td-second">${element.createAt}</td>
                <td data-label="Created By" class="row-data td-second"> ${element.createBy}</td>
                <td data-label="Add column" class="row-data td-second"><button id="editFileBtn-${index}" style="color: gray;">Update/Delete</button></td>
                <td class="hidden-style"></td>
            </tr>
                `
            index++;
        });
        tbody.innerHTML = _tr;
        setTimeout(showUpdateForm, 1)
    }

    public upload(file: FileFormat): void {
        this.data.push(file);
        console.log(file);

        localStorage.setItem("fileListData", JSON.stringify(this.data))
        // axios.post('https://localhost:44331/api/Files', file)
        //     .then(function (response: any) {
        //         console.log(response);
        //     })
        //     .catch(function (error: any) {
        //         console.log(error);
        //     });

        this.showListForTable();
    }

    public delete(id: string): void {
        let index = this.data.findIndex(function (obj) {
            return obj.FileId == id;
        })

        this.data.splice(index, 1)
        let JSONdata = JSON.stringify(this.data);
        localStorage.setItem('fileListData', JSONdata)
        this.showListForTable();
    }

    public edit(id: string, name: string): void {
        let index = this.data.findIndex(function (obj) {
            return obj.FileId == id;
        })
        if (this.data[index].extension) {
            this.data[index].name = name + '.' + this.data[index].extension;
        } else
            this.data[index].name = name;

        this.data[index].modifiedBy = 'NhatNM'
        this.data[index].modifiedAt = new Date();

        let JSONdata = JSON.stringify(this.data);
        localStorage.setItem('fileListData', JSONdata)
        this.showListForTable();
    }
} 